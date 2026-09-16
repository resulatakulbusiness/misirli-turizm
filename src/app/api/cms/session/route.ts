import { clearCmsSession, cmsConfiguration, createCmsSession, isCmsAuthenticated, isSameOrigin, verifyCmsPassword } from "@/lib/cms-auth";

export async function GET() {
  return Response.json({ authenticated: await isCmsAuthenticated(), configuration: cmsConfiguration() });
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: "Geçersiz istek kaynağı." }, { status: 403 });

  const configuration = cmsConfiguration();
  if (!configuration.authReady) {
    return Response.json({ error: "Yönetim paneli güvenlik değişkenleri henüz tanımlanmadı." }, { status: 503 });
  }

  const body = await request.json().catch(() => ({})) as { password?: string };
  if (!body.password || !verifyCmsPassword(body.password)) {
    return Response.json({ error: "Parola hatalı." }, { status: 401 });
  }

  await createCmsSession();
  return Response.json({ success: true });
}

export async function DELETE(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: "Geçersiz istek kaynağı." }, { status: 403 });
  await clearCmsSession();
  return Response.json({ success: true });
}
