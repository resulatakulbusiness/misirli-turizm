import type { Metadata } from "next";
import { cmsConfiguration, isCmsAuthenticated } from "@/lib/cms-auth";
import { AdminPanel } from "./admin-panel";

export const metadata: Metadata = {
  title: "Yönetim Paneli | Mısırlı Turizm",
  description: "Mısırlı Turizm içerik ve ortam yönetimi.",
  robots: { index: false, follow: false, nocache: true },
};

export default async function ManagementPage() {
  return <AdminPanel authenticated={await isCmsAuthenticated()} configuration={cmsConfiguration()} />;
}
