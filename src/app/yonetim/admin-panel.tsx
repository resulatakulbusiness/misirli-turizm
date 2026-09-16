"use client";

import Image from "next/image";
import { type ChangeEvent, type FormEvent, type ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import type { CmsFaq, CmsMedia, CmsPage, CmsSection } from "@/lib/cms-types";
import { createEmptyCmsPage, normalizeCmsPath } from "@/lib/cms-types";
import styles from "./management.module.css";

type View = "dashboard" | "pages" | "editor" | "media" | "settings";
type Configuration = { authReady: boolean; publishingReady: boolean; repository: string };

function Icon({ name }: { name: "grid" | "file" | "plus" | "image" | "settings" | "logout" | "external" | "check" | "menu" }) {
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></>,
    file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
    plus: <path d="M12 5v14M5 12h14"/>,
    image: <><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="m4 17 5-4 4 3 3-3 5 4"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2-.7-.6-1.4.9-1.9-2.1-2.1-1.9.9-1.4-.6-.7-2h-3l-.7 2-1.4.6-1.9-.9-2.1 2.1.9 1.9-.6 1.4-2 .7v3l2 .7.6 1.4-.9 1.9 2.1 2.1 1.9-.9 1.4.6.7 2h3l.7-2 1.4-.6 1.9.9 2.1-2.1-.9-1.9.6-1.4z"/></>,
    logout: <><path d="M10 5H5v14h5M14 8l4 4-4 4M8 12h10"/></>,
    external: <><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6H5V6h6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function Login({ configuration }: { configuration: Configuration }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const response = await fetch("/api/cms/session", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
    const data = await response.json();
    if (response.ok) window.location.reload();
    else setMessage(data.error ?? "Giriş yapılamadı.");
    setBusy(false);
  }

  return (
    <main className={styles.loginPage}>
      <section className={styles.loginBrand}>
        <div className={styles.logoLockup}><span>M</span><div><strong>MISIRLI</strong><small>TURİZM · YÖNETİM</small></div></div>
        <div><span className={styles.eyebrow}>İçerik operasyon merkezi</span><h1>Kurumsal web sitenizi tek merkezden yönetin.</h1><p>SEO sayfaları, hizmet bölgeleri, SSS yapıları ve ortam dosyaları GitHub üzerinden güvenle yayınlansın.</p></div>
        <div className={styles.loginSignals}><span><Icon name="check"/> Git tabanlı sürüm geçmişi</span><span><Icon name="check"/> Vercel otomatik yayın</span><span><Icon name="check"/> Projeye özel izole yapı</span></div>
      </section>
      <section className={styles.loginCard}>
        <div><span className={styles.eyebrow}>Güvenli giriş</span><h2>Yönetim Paneli</h2><p>Devam etmek için yalnız bu projeye ait yönetim parolasını girin.</p></div>
        {!configuration.authReady ? (
          <div className={styles.setupNotice}><strong>Güvenlik kurulumu bekliyor</strong><p>Vercel’de `CMS_ADMIN_PASSWORD_HASH` ve `CMS_SESSION_SECRET` tanımlandığında giriş açılacak.</p></div>
        ) : (
          <form onSubmit={submit}>
            <label>Yönetim parolası<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required /></label>
            {message && <p className={styles.formError}>{message}</p>}
            <button disabled={busy}>{busy ? "Kontrol ediliyor…" : "Panele giriş yap"}<span>→</span></button>
          </form>
        )}
        <small>Oturum 12 saat sonra otomatik kapanır. Parola ve GitHub anahtarı tarayıcı koduna gönderilmez.</small>
      </section>
    </main>
  );
}

function StatusBadge({ status }: { status: CmsPage["status"] }) {
  return <span className={`${styles.status} ${status === "published" ? styles.published : styles.draft}`}>{status === "published" ? "Yayında" : "Taslak"}</span>;
}

export function AdminPanel({ authenticated, configuration }: { authenticated: boolean; configuration: Configuration }) {
  const [view, setView] = useState<View>("dashboard");
  const [pages, setPages] = useState<CmsPage[]>([]);
  const [media, setMedia] = useState<CmsMedia[]>([]);
  const [editingPage, setEditingPage] = useState<CmsPage>(() => createEmptyCmsPage());
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [mobileNav, setMobileNav] = useState(false);

  const loadData = useCallback(async () => {
    if (!authenticated) return;
    const [pagesResponse, mediaResponse] = await Promise.all([fetch("/api/cms/pages"), fetch("/api/cms/media")]);
    const [pagesData, mediaData] = await Promise.all([pagesResponse.json(), mediaResponse.json()]);
    if (pagesResponse.ok) setPages(pagesData.pages ?? []); else setError(pagesData.error ?? "İçerikler alınamadı.");
    if (mediaResponse.ok) setMedia(mediaData.media ?? []); else setError(mediaData.error ?? "Ortam dosyaları alınamadı.");
  }, [authenticated]);

  useEffect(() => {
    const timeout = window.setTimeout(() => { void loadData(); }, 0);
    return () => window.clearTimeout(timeout);
  }, [loadData]);

  const stats = useMemo(() => ({
    total: pages.length,
    published: pages.filter((page) => page.status === "published").length,
    drafts: pages.filter((page) => page.status === "draft").length,
    media: media.length,
  }), [media.length, pages]);

  if (!authenticated) return <Login configuration={configuration} />;

  function navigate(next: View) {
    setView(next);
    setMobileNav(false);
    setNotice("");
    setError("");
  }

  function newPage() {
    setEditingPage(createEmptyCmsPage());
    navigate("editor");
  }

  function editPage(page: CmsPage) {
    setEditingPage(structuredClone(page));
    navigate("editor");
  }

  function updatePage<K extends keyof CmsPage>(key: K, value: CmsPage[K]) {
    setEditingPage((current) => ({ ...current, [key]: value }));
  }

  function addSection() {
    const section: CmsSection = { id: crypto.randomUUID(), eyebrow: "", title: "Yeni içerik bölümü", body: "", bullets: [], image: "", imageAlt: "" };
    updatePage("sections", [...editingPage.sections, section]);
  }

  function updateSection(id: string, patch: Partial<CmsSection>) {
    updatePage("sections", editingPage.sections.map((section) => section.id === id ? { ...section, ...patch } : section));
  }

  function addFaq() {
    const faq: CmsFaq = { id: crypto.randomUUID(), question: "", answer: "" };
    updatePage("faqs", [...editingPage.faqs, faq]);
  }

  function updateFaq(id: string, patch: Partial<CmsFaq>) {
    updatePage("faqs", editingPage.faqs.map((faq) => faq.id === id ? { ...faq, ...patch } : faq));
  }

  async function savePage(status: CmsPage["status"]) {
    setBusy(true);
    setError("");
    setNotice("");
    const response = await fetch("/api/cms/pages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...editingPage, status, path: normalizeCmsPath(editingPage.path), canonicalPath: normalizeCmsPath(editingPage.path) }),
    });
    const data = await response.json();
    if (response.ok) {
      setEditingPage(data.page);
      setNotice(status === "published" ? "İçerik GitHub’a gönderildi. Vercel yayını otomatik başlayacak." : "Taslak GitHub’a kaydedildi.");
      await loadData();
    } else setError(data.error ?? "İçerik kaydedilemedi.");
    setBusy(false);
  }

  async function uploadMedia(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError("");
    const form = new FormData();
    form.append("file", file);
    const response = await fetch("/api/cms/media", { method: "POST", body: form });
    const data = await response.json();
    if (response.ok) {
      setMedia((current) => [data.media, ...current]);
      setNotice("Görsel GitHub’a yüklendi. Yeni deployment sonrasında sitede kullanılabilir.");
    } else setError(data.error ?? "Görsel yüklenemedi.");
    event.target.value = "";
    setBusy(false);
  }

  async function logout() {
    await fetch("/api/cms/session", { method: "DELETE" });
    window.location.reload();
  }

  const navItems: Array<{ view: View; label: string; icon: Parameters<typeof Icon>[0]["name"] }> = [
    { view: "dashboard", label: "Genel Bakış", icon: "grid" },
    { view: "pages", label: "İçerikler", icon: "file" },
    { view: "editor", label: "Yeni İçerik", icon: "plus" },
    { view: "media", label: "Ortam Dosyaları", icon: "image" },
    { view: "settings", label: "Ayarlar", icon: "settings" },
  ];

  return (
    <main className={styles.admin}>
      <aside className={`${styles.sidebar} ${mobileNav ? styles.sidebarOpen : ""}`}>
        <div className={styles.adminLogo}><span>M</span><div><strong>MISIRLI</strong><small>TURİZM</small></div></div>
        <nav>{navItems.map((item) => <button key={item.view} className={view === item.view ? styles.activeNav : ""} onClick={() => item.view === "editor" ? newPage() : navigate(item.view)}><Icon name={item.icon}/>{item.label}</button>)}</nav>
        <div className={styles.sidebarBottom}><a href="/" target="_blank" rel="noopener noreferrer"><Icon name="external"/>Siteyi görüntüle</a><button onClick={logout}><Icon name="logout"/>Oturumu kapat</button></div>
      </aside>

      <div className={styles.workspace}>
        <header className={styles.topbar}>
          <button className={styles.mobileMenuButton} onClick={() => setMobileNav((current) => !current)} aria-label="Yönetim menüsünü aç"><Icon name="menu"/></button>
          <div><span>Mısırlı Turizm</span><strong>{view === "dashboard" ? "Genel Bakış" : view === "pages" ? "İçerik Yönetimi" : view === "editor" ? "İçerik Editörü" : view === "media" ? "Ortam Kütüphanesi" : "Sistem Ayarları"}</strong></div>
          <div className={styles.topStatus}><i className={configuration.publishingReady ? styles.online : styles.offline}/>{configuration.publishingReady ? "GitHub bağlı" : "Kurulum bekliyor"}</div>
        </header>

        <div className={styles.mainContent}>
          {(notice || error) && <div className={`${styles.alert} ${error ? styles.alertError : ""}`}>{error || notice}<button onClick={() => { setNotice(""); setError(""); }}>×</button></div>}

          {view === "dashboard" && (
            <>
              <section className={styles.welcome}><div><span className={styles.eyebrow}>İçerik operasyon merkezi</span><h1>Günaydın, Resul.</h1><p>Yeni SEO sayfaları oluşturun, medya dosyalarını yönetin ve yayın durumunu tek ekrandan takip edin.</p></div><button onClick={newPage}><Icon name="plus"/>Yeni içerik oluştur</button></section>
              <section className={styles.stats}>
                <article><span>Toplam içerik</span><strong>{stats.total}</strong><small>CMS ile oluşturulan sayfalar</small></article>
                <article><span>Yayındaki içerik</span><strong>{stats.published}</strong><small>Arama motorlarına açık</small></article>
                <article><span>Taslak</span><strong>{stats.drafts}</strong><small>Yayın öncesi çalışmalar</small></article>
                <article><span>Ortam dosyası</span><strong>{stats.media}</strong><small>GitHub medya kütüphanesi</small></article>
              </section>
              <section className={styles.dashboardGrid}>
                <div className={styles.panel}><div className={styles.panelTitle}><div><span>Son çalışmalar</span><h2>Güncel içerikler</h2></div><button onClick={() => navigate("pages")}>Tümünü gör →</button></div>{pages.length ? <div className={styles.recentList}>{pages.slice(0, 5).map((page) => <button key={page.id} onClick={() => editPage(page)}><div><strong>{page.title}</strong><small>/{page.path} · {new Date(page.updatedAt).toLocaleDateString("tr-TR")}</small></div><StatusBadge status={page.status}/></button>)}</div> : <EmptyState text="Henüz CMS içeriği oluşturulmadı." onClick={newPage}/>}</div>
                <div className={styles.panel}><div className={styles.panelTitle}><div><span>Yayın sistemi</span><h2>Bağlantı durumu</h2></div></div><div className={styles.healthList}><div><i className={configuration.authReady ? styles.healthOk : styles.healthWarn}/><span><strong>Güvenli oturum</strong><small>{configuration.authReady ? "Yapılandırıldı" : "Değişkenler eksik"}</small></span></div><div><i className={configuration.publishingReady ? styles.healthOk : styles.healthWarn}/><span><strong>GitHub yayın akışı</strong><small>{configuration.publishingReady ? configuration.repository : "CMS_GITHUB_TOKEN bekleniyor"}</small></span></div><div><i className={styles.healthOk}/><span><strong>Vercel deployment</strong><small>GitHub main dalını izliyor</small></span></div></div></div>
              </section>
            </>
          )}

          {view === "pages" && (
            <section className={styles.panel}>
              <div className={styles.listHeader}><div><span className={styles.eyebrow}>Sayfa ve içerikler</span><h1>İçerik Yönetimi</h1><p>Taslakları düzenleyin veya yeni SEO sayfası yayınlayın.</p></div><button onClick={newPage}><Icon name="plus"/>Yeni içerik</button></div>
              {pages.length ? <div className={styles.contentTable}><div className={styles.tableHead}><span>İçerik</span><span>Tür</span><span>Durum</span><span>Güncelleme</span><span/></div>{pages.map((page) => <button key={page.id} onClick={() => editPage(page)}><span><strong>{page.title}</strong><small>/{page.path}</small></span><span>{page.contentType}</span><StatusBadge status={page.status}/><span>{new Date(page.updatedAt).toLocaleDateString("tr-TR")}</span><b>→</b></button>)}</div> : <EmptyState text="İlk içeriğinizi oluşturarak başlayın." onClick={newPage}/>}</section>
          )}

          {view === "editor" && (
            <section className={styles.editorPage}>
              <div className={styles.editorHeader}><div><span className={styles.eyebrow}>{editingPage.id ? "Bölüm tabanlı içerik editörü" : "Yeni içerik"}</span><h1>{editingPage.title || "İsimsiz içerik"}</h1><p>Alanları doldurun; anahtar kelimeleri doğal metin içinde **kalın** işaretleyebilirsiniz.</p></div><div><button className={styles.secondaryAction} disabled={busy} onClick={() => savePage("draft")}>Taslak kaydet</button><button className={styles.primaryAction} disabled={busy} onClick={() => savePage("published")}>{busy ? "Kaydediliyor…" : "Yayınla"}</button></div></div>
              <div className={styles.editorLayout}>
                <div className={styles.editorMain}>
                  <EditorCard title="Sayfa Bilgileri" note="Başlık, URL ve giriş metni">
                    <div className={styles.formGrid}><label className={styles.wide}>İçerik başlığı<input value={editingPage.title} onChange={(event) => updatePage("title", event.target.value)} placeholder="İstanbul Kurumsal Servis Planlama Rehberi"/></label><label>İçerik türü<select value={editingPage.contentType} onChange={(event) => updatePage("contentType", event.target.value as CmsPage["contentType"])}><option value="service">Hizmet</option><option value="region">Hizmet bölgesi</option><option value="guide">Rehber</option><option value="corporate">Kurumsal</option></select></label><label>URL yolu<input value={editingPage.path} onChange={(event) => updatePage("path", normalizeCmsPath(event.target.value))} placeholder="istanbul-personel-servisi"/><small>/{editingPage.path || "sayfa-adresi"}</small></label><label className={styles.wide}>H1 başlığı<input value={editingPage.h1} onChange={(event) => updatePage("h1", event.target.value)} placeholder="Ana sayfa başlığı"/></label><label className={styles.wide}>Kısa giriş metni<textarea rows={4} value={editingPage.excerpt} onChange={(event) => updatePage("excerpt", event.target.value)} placeholder="Kullanıcının arama niyetini ilk paragrafta karşılayın."/></label></div>
                  </EditorCard>

                  <EditorCard title="İçerik Bölümleri" note={`${editingPage.sections.length} bölüm`} action={<button onClick={addSection}><Icon name="plus"/>Bölüm ekle</button>}>
                    <div className={styles.sectionEditors}>{editingPage.sections.map((section, index) => <div className={styles.sectionEditor} key={section.id}><div className={styles.sectionEditorHead}><span>{String(index + 1).padStart(2, "0")}</span><strong>{section.title || "İsimsiz bölüm"}</strong><button onClick={() => updatePage("sections", editingPage.sections.filter((item) => item.id !== section.id))}>Kaldır</button></div><div className={styles.formGrid}><label>Üst etiket<input value={section.eyebrow} onChange={(event) => updateSection(section.id, { eyebrow: event.target.value })} placeholder="Planlama yaklaşımı"/></label><label className={styles.wide}>H2 başlığı<input value={section.title} onChange={(event) => updateSection(section.id, { title: event.target.value })}/></label><label className={styles.wide}>İçerik<textarea rows={8} value={section.body} onChange={(event) => updateSection(section.id, { body: event.target.value })} placeholder="Paragrafları boş satırla ayırın. **Kalın anahtar kelime** kullanabilirsiniz."/></label><label className={styles.wide}>Madde listesi<textarea rows={4} value={section.bullets.join("\n")} onChange={(event) => updateSection(section.id, { bullets: event.target.value.split("\n") })} placeholder="Her satıra bir madde"/></label><label>Görsel yolu<input value={section.image} onChange={(event) => updateSection(section.id, { image: event.target.value })} placeholder="/uploads/gorsel.webp"/></label><label>Görsel alt metni<input value={section.imageAlt} onChange={(event) => updateSection(section.id, { imageAlt: event.target.value })}/></label></div></div>)}</div>
                    {!editingPage.sections.length && <EmptyState text="İçeriğe ilk H2 bölümünü ekleyin." onClick={addSection}/>} 
                  </EditorCard>

                  <EditorCard title="SSS / GEO Alanı" note={`${editingPage.faqs.length} soru`} action={<button onClick={addFaq}><Icon name="plus"/>Soru ekle</button>}>
                    <div className={styles.faqEditors}>{editingPage.faqs.map((faq, index) => <div key={faq.id}><span>{index + 1}</span><label>Soru<input value={faq.question} onChange={(event) => updateFaq(faq.id, { question: event.target.value })}/></label><label>Yanıt<textarea rows={3} value={faq.answer} onChange={(event) => updateFaq(faq.id, { answer: event.target.value })}/></label><button onClick={() => updatePage("faqs", editingPage.faqs.filter((item) => item.id !== faq.id))}>×</button></div>)}</div>
                    {!editingPage.faqs.length && <p className={styles.muted}>FAQ schema üretmek için soru ve yanıt ekleyin.</p>}
                  </EditorCard>
                </div>

                <aside className={styles.editorSide}>
                  <EditorCard title="SEO Ayarları" note="SERP önizlemesi">
                    <label>Odak anahtar kelime<input value={editingPage.focusKeyword} onChange={(event) => updatePage("focusKeyword", event.target.value)}/></label>
                    <label>İkincil anahtar kelimeler<textarea rows={4} value={editingPage.secondaryKeywords.join(", ")} onChange={(event) => updatePage("secondaryKeywords", event.target.value.split(",").map((item) => item.trim()))}/></label>
                    <label>Meta title <small className={editingPage.metaTitle.length > 60 ? styles.counterWarn : ""}>{editingPage.metaTitle.length}/60</small><input value={editingPage.metaTitle} onChange={(event) => updatePage("metaTitle", event.target.value)}/></label>
                    <label>Meta description <small className={editingPage.metaDescription.length > 155 ? styles.counterWarn : ""}>{editingPage.metaDescription.length}/155</small><textarea rows={5} value={editingPage.metaDescription} onChange={(event) => updatePage("metaDescription", event.target.value)}/></label>
                    <div className={styles.serpPreview}><small>misirli-turizm.vercel.app › {editingPage.path || "sayfa"}</small><strong>{editingPage.metaTitle || editingPage.title || "SEO başlığı"}</strong><p>{editingPage.metaDescription || editingPage.excerpt || "Meta açıklaması burada görüntülenir."}</p></div>
                  </EditorCard>
                  <EditorCard title="Öne Çıkan Görsel" note="1920 × 1080 önerilir">
                    {editingPage.heroImage ? <div className={styles.selectedImage}><Image src={editingPage.heroImage} alt={editingPage.heroImageAlt || "Seçili görsel"} fill sizes="320px"/></div> : <div className={styles.imagePlaceholder}><Icon name="image"/><span>Görsel seçilmedi</span></div>}
                    <label>Görsel yolu<input value={editingPage.heroImage} onChange={(event) => updatePage("heroImage", event.target.value)}/></label><label>Alt metin<input value={editingPage.heroImageAlt} onChange={(event) => updatePage("heroImageAlt", event.target.value)}/></label><button className={styles.fullButton} onClick={() => navigate("media")}>Ortam kütüphanesini aç</button>
                  </EditorCard>
                  <EditorCard title="Yayın Kontrolü" note="Otomatik kalite sinyalleri">
                    <div className={styles.checklist}><span className={editingPage.h1 ? styles.done : ""}><i/><b>Tek H1 tanımlandı</b></span><span className={editingPage.metaTitle.length >= 45 && editingPage.metaTitle.length <= 65 ? styles.done : ""}><i/><b>Meta title uzunluğu</b></span><span className={editingPage.metaDescription.length >= 120 && editingPage.metaDescription.length <= 160 ? styles.done : ""}><i/><b>Meta description uzunluğu</b></span><span className={editingPage.sections.length >= 3 ? styles.done : ""}><i/><b>En az 3 içerik bölümü</b></span><span className={editingPage.faqs.length >= 5 ? styles.done : ""}><i/><b>En az 5 SSS</b></span><span className={editingPage.heroImage && editingPage.heroImageAlt ? styles.done : ""}><i/><b>Görsel ve alt metin</b></span></div>
                  </EditorCard>
                </aside>
              </div>
            </section>
          )}

          {view === "media" && (
            <section className={styles.panel}>
              <div className={styles.listHeader}><div><span className={styles.eyebrow}>Görsel arşivi</span><h1>Ortam Dosyaları</h1><p>SEO uyumlu görselleri yükleyin ve içeriklerde kullanın. En fazla 5 MB.</p></div><label className={styles.uploadButton}><Icon name="plus"/>{busy ? "Yükleniyor…" : "Görsel yükle"}<input type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={uploadMedia} disabled={busy}/></label></div>
              {media.length ? <div className={styles.mediaGrid}>{media.map((item) => <article key={item.sha}><div><Image src={item.url} alt={item.name} fill sizes="(max-width: 700px) 50vw, 220px"/></div><strong>{item.name}</strong><small>{(item.size / 1024).toFixed(0)} KB</small><button onClick={() => { updatePage("heroImage", item.url); setNotice("Görsel öne çıkan görsel olarak seçildi."); navigate("editor"); }}>İçerikte kullan</button></article>)}</div> : <EmptyState text="Henüz ortam dosyası yüklenmedi."/>}
            </section>
          )}

          {view === "settings" && (
            <section className={styles.settingsGrid}>
              <div className={styles.panel}><span className={styles.eyebrow}>Yayın bağlantısı</span><h1>Proje Ayarları</h1><div className={styles.settingRows}><div><span>GitHub deposu</span><strong>{configuration.repository}</strong></div><div><span>Yayın dalı</span><strong>main</strong></div><div><span>İçerik dizini</span><strong>content/pages</strong></div><div><span>Ortam dizini</span><strong>public/uploads</strong></div></div></div>
              <div className={styles.panel}><span className={styles.eyebrow}>Güvenlik</span><h2>Koruma durumu</h2><div className={styles.healthList}><div><i className={configuration.authReady ? styles.healthOk : styles.healthWarn}/><span><strong>Parola hash’i</strong><small>{configuration.authReady ? "Yapılandırıldı" : "Kurulum gerekiyor"}</small></span></div><div><i className={configuration.publishingReady ? styles.healthOk : styles.healthWarn}/><span><strong>GitHub anahtarı</strong><small>{configuration.publishingReady ? "Sunucu tarafında gizli" : "Kurulum gerekiyor"}</small></span></div><div><i className={styles.healthOk}/><span><strong>Oturum güvenliği</strong><small>HTTP-only · SameSite strict · 12 saat</small></span></div></div></div>
              <div className={`${styles.panel} ${styles.settingsHelp}`}><span className={styles.eyebrow}>Yayın akışı</span><h2>Nasıl çalışır?</h2><ol><li>İçeriği taslak olarak kaydedin.</li><li>SEO ve yayın kontrol listesini tamamlayın.</li><li>Yayınla düğmesi GitHub commit’i oluşturur.</li><li>Vercel yeni sayfayı otomatik olarak canlıya alır.</li></ol></div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

function EditorCard({ title, note, action, children }: { title: string; note: string; action?: ReactNode; children: ReactNode }) {
  return <section className={styles.editorCard}><header><div><h2>{title}</h2><span>{note}</span></div>{action}</header><div className={styles.editorCardBody}>{children}</div></section>;
}

function EmptyState({ text, onClick }: { text: string; onClick?: () => void }) {
  return <div className={styles.empty}><Icon name="file"/><strong>{text}</strong>{onClick && <button onClick={onClick}>İçerik oluştur →</button>}</div>;
}
