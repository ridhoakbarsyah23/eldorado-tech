# PRD — Eldorado Tech Website & CRM Demo

| | |
|---|---|
| **Produk** | Situs marketing Eldorado Tech + dashboard CRM demo |
| **Versi dokumen** | 1.1 |
| **Tanggal** | 25 Oktober 2026 |
| **Status** | Aktif |
| **Owner** | Eldorado Tech |

> Dokumen ini merangkum kondisi aktual kode di repo. Untuk developer: mulai dari **§2 Peta Kode** untuk tahu file mana yang dikerjakan. Status fitur: ✅ selesai · 🚧 parsial · 🔜 backlog.

---

## 1. Ringkasan Produk

Eldorado Tech adalah software house di Purwokerto. Situs ini berfungsi untuk menarik calon klien (inbound): mereka melihat layanan dan portofolio, lalu menghubungi tim lewat formulir kontak atau WhatsApp. Ada juga `/crm` — dashboard internal untuk mengelola leads dan klien, saat ini masih **demo dengan data dummy**.

---

## 2. Peta Kode (fitur → file)

Developer baru mulai dari sini:

| Modul | File kunci |
|---|---|
| Layout publik + i18n | `src/app/[locale]/layout.tsx`, `src/i18n/routing.ts`, `src/i18n/request.ts` |
| Teks UI (ID/EN) | `messages/id.json`, `messages/en.json` (diakses via `useTranslations`) |
| Section halaman depan (Hero, About, Services, dst.) | `src/app/[locale]/page.tsx` + `src/components/sections/*` |
| Navbar & Footer | `src/components/layout/{Navbar,Footer}.tsx` |
| Animasi scroll | `src/components/ui/MarketingMotion.tsx` (elemen ditandai `data-motion-*`) |
| Blog | `src/lib/blog.ts` (parser Markdown) + `src/content/blog/*.md` + `src/app/[locale]/blog/**` |
| Form kontak | `src/app/actions/contact.ts` (Server Action + validasi), `src/lib/rate-limit.ts`, UI di `sections/ContactSection.tsx` |
| CRM | `src/app/[locale]/crm/**`, komponen di `src/components/crm/{Sidebar,Topbar}.tsx` |
| CMS (Decap) | `public/admin/{config.yml,index.html}` — backend belum aktif |
| SEO | `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/[locale]/opengraph-image.tsx` |
| Style global & utilitas | `src/app/globals.css` (`.site-shell`, `.responsive-copy`) |

Daftar env variables:

| Variabel | Fungsi | Wajib? |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domain kanonikal untuk metadata, sitemap, robots | Ya (default `eldoradotech.com`) |
| `CONTACT_FORM_ENDPOINT` | URL Formspree untuk relay leads | Ya di produksi — tanpa ini form menampilkan error konfigurasi |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor WA untuk CTA melayang | Opsional (kosong = tombol disembunyikan) |

Perintah yang biasa dipakai:

```bash
npm install        # install dependensi
npm run dev        # jalankan dev server
npm run build      # build produksi (sudah termasuk type-check)
npx eslint .       # lint
```

---

## 3. Tujuan & Metrik

| Tujuan | Metrik | Target awal |
|---|---|---|
| Menarik prospek inbound | Kiriman formulir valid / bulan | ≥ 10 |
| Kanal kontak berbasis WA | Klik CTA WhatsApp / bulan | ≥ 20 |
| Terindeks di mesin pencari | Peringkat kata kunci lokal, misal "software house Purwokerto" | Top 10 |
| Kualitas situs | Skor Lighthouse (Perf, SEO, A11y, Best Practices) | ≥ 90 |
| Konten edukasi | Artikel blog baru / bulan | ≥ 2 |

---

## 4. Target Pengguna

| Persona | Kebutuhan utamanya |
|---|---|
| Pemilik UMKM / bisnis lokal | Cepat tahu "berapa dan berapa lama" → kontak |
| Calon klien menengah (pembanding vendor) | Portofolio dan bukti proses kerja |
| Pembaca blog | Konten edukatif yang mengarah ke CTA |
| Tim internal Eldorado | CRM ringkas untuk memantau leads/klien |

---

## 5. Fitur & Status

### 5.1 Situs publik

| Fitur | Status | Lokasi / catatan |
|---|---|---|
| Hero dengan mockup dashboard + 2 CTA | ✅ | `sections/HeroSection.tsx` — mockup dibangun dengan JSX, bukan gambar |
| About, Services (3 kartu), Portfolio (3 kartu), FAQ, Newsletter, Footer | ✅ | `src/components/sections/*` |
| Portfolio memakai foto Unsplash | 🔜 | Ganti dengan foto/screenshot proyek asli (Fase 1) |
| Testimoni pelanggan | 🔜 | Belum ada — bagian paling berdampak untuk kredibilitas |
| CTA WhatsApp melayang | ✅ | `ui/WhatsAppCta.tsx`, hanya muncul jika env WA terisi |
| Animasi scroll (GSAP) | ✅ | `ui/MarketingMotion.tsx`; otomatis mati untuk `prefers-reduced-motion` |
| Responsif desktop ↔ mobile | ✅ | Selesai 25 Okt 2026; pola di §9 |

### 5.2 Blog

| Fitur | Status | Lokasi / catatan |
|---|---|---|
| Daftar artikel + featured | ✅ | `src/app/[locale]/blog/page.tsx`, konten dari `src/content/blog/*.md` |
| Halaman artikel | ✅ | Render Markdown: `marked` → `sanitize-html` (whitelist tag agar hasilnya aman) |
| Decap CMS panel | 🚧 | Config di `public/admin/config.yml` (`git-gateway`). Belum aktif karena butuh backend autentikasi di hosting. Lokal saja bisa pakai `local_backend: true` |
| Kategori/tag & pencarian | 🔜 | Belum ada |

### 5.3 Formulir kontak & anti-abuse

Alur: submit → Server Action `submitContact` → validasi → rate limit → POST JSON ke `CONTACT_FORM_ENDPOINT` (Formspree) → redirect ke `/thank-you`.

| Fitur | Status | Catatan |
|---|---|---|
| Server Action + validasi sisi server | ✅ | `src/app/actions/contact.ts`; opsi layanan divalidasi pakai whitelist `supportedServices` |
| Anti-abuse | ✅ | Honeypot (`website`), batas **5 kirim / 15 menit** per IP (hash SHA-256), respons dengan `retryAfterSeconds` |
| Redirect aman | ✅ | Honeypot terisi → redirect ke `/{locale}/thank-you` tanpa memproses |
| Error dibedakan | ✅ | `validation` / `rate-limit` / `configuration` / `submission` masing-masing punya pesan |
| Fallback mailto | ✅ | Tampil saat status `configuration` atau `submission` |
| Menyimpan salinan leads | 🔜 | Saat ini form tidak menyimpan apa pun, hanya relay (Fase 2 ke DB CRM) |

### 5.4 CRM (internal, `/crm`)

| Fitur | Status | Catatan |
|---|---|---|
| Overview (statistik, recent leads, today's focus) | ✅ | Data **hardcode dummy** di `crm/page.tsx` |
| Halaman **Leads** dan **Clients** dengan pencarian | ✅ | `crm/{leads,clients}/page.tsx`, pencarian client-side (`setState`) |
| Layout responsif: kartu di mobile, tabel di desktop | ✅ | Pola `md:hidden` / `hidden md:block` — lihat §9 |
| Filter berdasarkan status | 🔜 | Pelengkap tab filter di Leads |
| CRUD create/edit lead + follow-up | 🔜 | |
| Autentikasi admin + database | 🔜 | **Risiko keamanan** — saat ini `/crm/**` bebas diakses. `robots.ts` sudah membuat halaman `noindex`, tapi itu bukan proteksi. Wajib dilindungi sebelum dipakai untuk data nyata |

### 5.5 i18n & SEO

| Fitur | Status | Catatan |
|---|---|---|
| Routing + teks dwibahasa ID/EN | ✅ | `next-intl`: routing di `src/i18n/routing.ts`, teks di `messages/*.json` |
| Locale switcher | ✅ | `ui/LanguageSwitcher.tsx` (menyimpan URL hash) |
| Metadata per halaman + OG image dinamis | ✅ | `opengraph-image.tsx` |
| sitemap & robots | ✅ | `robots.ts` disallow: `/api/`, `/admin/`, `/{locale}/crm/` |
| Schema.org `LocalBusiness` | 🔜 | Untuk membantu indeks lokal |

Catatan i18n untuk developer: teks UI di marketing & form pakai `messages/*.json`. Teks di **CRM dan mockup Hero** masih hardcoded bahasa Inggris — konsisten, tidak membutuhkan terjemahan.

---

## 6. Yang Tidak Dikerjakan (Non-Goals)

- Mesin pencari situs yang kompleks; **full-text search blog** sederhana sampai dibutuhkan.
- Portal klien (login untuk memantau proyek).
- Kustomisasi CMS berat (Decap bare-bones cukup).
- CRM multi-tenant / SaaS — hanya instance internal tunggal.

---

## 7. Cerita Pengguna Utama

1. Sebagai calon klien: klik "Mulai Proyek" di hero, isi formulir, dapat halaman thank-you.
2. Sebagai calon klien di ponsel: semua section nyaman dibaca tanpa zoom.
3. Sebagai penulis blog: tambah file Markdown baru di `src/content/blog/`, artikel muncul — tanpa menyentuh kode.
4. Sebagai admin: buka `/crm/leads`, cari perusahaan, lihat status dan nilai estimasi di desktop maupun ponsel.
5. Sebagai penyerang: spam diblokir oleh honeypot / rate limit, dan error internal tidak membocorkan detail.

---

## 8. Persyaratan Non-Fungsional

| Area | Aturan |
|---|---|
| Responsif | Tidak ada scroll horizontal mulai lebar **320px**; uji di 360 / 768 / 1024 / 1440 |
| Aksesibilitas | Kontras AA, target sentuh ≥ 44px (`min-h-11`), navigasi keyboard penuh, `aria-*` di elemen interaktif |
| Performa | Gambar lewat `next/image` dengan `sizes`, font lewat `next/font`, hindari layout shift |
| Keamanan | Validasi/sanitasi di server; `dangerouslySetInnerHTML` hanya untuk HTML blog yang sudah lewat `sanitize-html`; rate limit kontak aktif |
| CRM | `/crm/**` jangan diindeks; **jangan isi data nyata sampai ada auth + DB** |
| Kualitas sebelum merge | `npm run build` sukses (termasuk tsc) + `npx eslint .` tanpa error |

---

## 9. Konvensi Gaya & Pola Responsif

Info berguna biar konsisten saat menambah UI:

- Warna brand utama: **blue `#1d4ed8` (primary)** dan **orange `#ea580c` (accent)**, latar terang `#f8fafc`. Terpusat di `:root` `globals.css`.
- Semua section pakai lebar container `.site-shell` (max 76rem, terpusat).
- Email / teks panjang yang harus bisa patah di titik mana saja (mis. URL) → bungkus dengan `.responsive-copy` supaya tidak meluber.
- Pola tabel responsif di CRM: **kartu (mobile)** `md:hidden` + **tabel (desktop)** `hidden md:block`.
- Ikon: inline SVG `stroke="currentColor"` — tidak memakai library ikon.
- Animasi: tandai elemen `data-motion-item` (atau `data-motion-hero-item` untuk hero) di dalam section `data-motion-section`, lalu GSAP di `MarketingMotion.tsx` yang memproses.
- Font: Inter (sans), Calistoga (display, class `font-display`), Geist Mono (`font-mono`).

---

## 10. Roadmap

### Fase 0 — Rilis awal ✅ (sekarang)
Situs dwibahasa, blog, kontak anti-abuse, CRM demo responsif, SEO dasar, animasi.

### Fase 1 — Kredibilitas & konversi (P1)
1. Testimoni pelanggan di halaman publik.
2. Ganti foto Unsplash dengan foto proyek asli.
3. Filter status tabs di halaman Leads.
4. Aktivasi backend Decap CMS di hosting produksi.
5. Schema.org `LocalBusiness`.

### Fase 2 — CRM nyata (P1.5)
1. Autentikasi admin + proteksi route `/crm/**`.
2. Database (misal Prisma + SQLite/Postgres) untuk Leads & Klien.
3. Create/edit lead + riwayat follow-up.
4. Kirim data formulir kontak ke DB CRM (bukan hanya Formspree).

### Fase 3 — Skala (P2)
1. Analytics (Plausible/GA) + tracking konversi per CTA.
2. Newsletter beneran (sekarang tombolnya hanya ke blog).
3. Halaman layanan perkategori (bukan hanya kartu).

---

## 11. Keterbatasan Teknologi yang Harus Dipahami

1. **Rate limit berbasis memori** (`src/lib/rate-limit.ts`, 5/15 menit). Counternya hidup di RAM proses: hilang saat server restart/cold start dan tidak di-share antar instance serverless. Cukup untuk sekarang; kalau trafik naik, pindahkan ke storage persisten (Upstash/KV).
2. **CRM masih demo** — semua data di-hardcode di file halaman. Jangan pernah beri data pelanggan nyata sebelum Fase 2 (auth + DB).
3. **Rate limit & contact form** bergantung env — baru jalan sempurna di produksi setelah `CONTACT_FORM_ENDPOINT` diisi.
4. **Decap CMS** butuh autentikasi (Git Gateway/Netlify Identity atau setara) — config repo siap, backend belum terpasang.

---

## 12. Keputusan Terbuka

| # | Pertanyaan | PIC |
|---|---|---|
| 1 | Hosting mana yang dipakai saat ini (Vercel? Netlify?) — menentukan strategi CMS & rate limit | Tim Eldorado Tech |
| 2 | Data kontak cukup lewat Formspree, atau perlu disimpan sendiri ke DB CRM? | Tim Eldorado Tech |
| 3 | Kapan CRM demo diubah jadi nyata (auth + DB)? | Tim Eldorado Tech |
| 4 | Siapa pengguna CRM internal setelah jadi nyata? | Tim Eldorado Tech |

---

*Perbarui PRD ini setiap rilis besar. Spesifikasi detail mengikuti konvensi di §9 dan struktur folder di §2 — kalau PRD dan kode berbeda, kode yang dianggap sumber kebenaran.*
