import { cmsConfiguration, isCmsAuthenticated, isSameOrigin } from "@/lib/cms-auth";
import { listCmsMediaFromGitHub, saveCmsMediaToGitHub } from "@/lib/cms-github";
import { normalizeCmsPath } from "@/lib/cms-types";

const allowedTypes = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/avif", "avif"],
]);

export async function GET() {
  if (!await isCmsAuthenticated()) return Response.json({ error: "Oturum gerekli." }, { status: 401 });
  if (!cmsConfiguration().publishingReady) return Response.json({ media: [], warning: "GitHub yayın anahtarı tanımlı değil." });

  try {
    return Response.json({ media: await listCmsMediaFromGitHub() });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Ortam dosyaları alınamadı." }, { status: 502 });
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: "Geçersiz istek kaynağı." }, { status: 403 });
  if (!await isCmsAuthenticated()) return Response.json({ error: "Oturum gerekli." }, { status: 401 });
  if (!cmsConfiguration().publishingReady) return Response.json({ error: "GitHub yayın anahtarı tanımlı değil." }, { status: 503 });

  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) throw new Error("Bir görsel seçin.");
    const extension = allowedTypes.get(file.type);
    if (!extension) throw new Error("Yalnız JPG, PNG, WebP veya AVIF yüklenebilir.");
    if (file.size > 5 * 1024 * 1024) throw new Error("Dosya boyutu 5 MB sınırını aşıyor.");

    const baseName = normalizeCmsPath(file.name.replace(/\.[^.]+$/, "")) || "misirli-turizm-gorsel";
    const fileName = `${Date.now()}-${baseName}.${extension}`;
    const base64 = Buffer.from(await file.arrayBuffer()).toString("base64");
    const result = await saveCmsMediaToGitHub(fileName, base64);

    return Response.json({
      media: {
        name: fileName,
        path: result.content.path,
        url: `/uploads/${fileName}`,
        size: file.size,
        sha: result.content.sha,
      },
      commit: result.commit,
    });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : "Dosya yüklenemedi." }, { status: 400 });
  }
}
