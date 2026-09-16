export const siteUrl = "https://misirli-turizm.vercel.app";

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
