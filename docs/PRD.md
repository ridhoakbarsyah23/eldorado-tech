# PRD — Eldorado Tech Website & CRM Demo

| | |
|---|---|
| **Produk** | Situs marketing Eldorado Tech + dashboard CRM demo |
| **Versi dokumen** | 1.0 |
| **Tanggal** | 25 Oktober 2026 |
| **Status** | Aktif |
| **Owner** | Ridho Akbar Syah |

> PRD ini disusun berdasarkan kondisi aktual kode di repo, bukan rencana yang belum diimplementasikan. Status setiap fitur: ✅ rilis · 🚧 parsial · 🔜 backlog.

---

## 1. Ringkasan Produk

### 1.1 Visi
Eldorado Tech adalah **software house berbasis di Purwokerto**. Situs ini adalah etalase digital utama untuk menghasilkan **proyek inbound**: calon klien menemukan layanan, meyakini kualitas, lalu menghubungi tim melalui formulir kontak atau WhatsApp.

### 1.2 Masalah yang Diselesaikan
1. Calon klien lokal sulit menilai kredibilitas software house tanpa etalase portofolio yang meyakinkan.
2. Prospek masuk tersebar melalui kanal informal (DM, telepon, WA pribadi) sehingga sulit dilacak.
3. Konten (blog) dan referensi layanan butuh kanal tunggal yang mudah dikelola.

### 1.3 Solusi
Situs publik dwibahasa (ID/EN) bernuansa konversi + dashboard CRM internal (saat ini **demo**) sebagai fondasi pipeline penjualan.

---

## 2. Tujuan & Metrik Keberhasilan

| Tujuan | Metrik | Target awal |
|---|---|---|
| Menghasilkan prospek inbound | Kiriman formulir kontak yang valid / bulan | ≥ 10 |
| Kanal kontak alternatif | Klik CTA WhatsApp / bulan | ≥ 20 |
| Kredibilitas & brand | Peringkat kata kunci lokal (contoh: "software house Purwokerto") | Top 10 |
| Kualitas situs | Skor Lighthouse (Perf, SEO, A11y, Best Practices) | ≥ 90 |
| Konten edukasi | Artikel blog tayang / bulan | ≥ 2 |

---

## 3. Target Pengguna

| Persona | Deskripsi | Need utama |
|---|---|---|
| **Pemilik UMKM / bisnis lokal** | Ingin website/aplikasi, minim istilah teknis | Jawaban cepat "berapa & berapa lama" lewat kontak |
| **Manajer/direktur menengah** (Jawa Tengah–Barat) | Mencari vendor serius, bandingkan beberapa | Portofolio, bukti proses, profil perusahaan |
| **Pembaca blog** | Riset sebelum memutuskan | Artikel edukatif yang mengarahkan ke CTA |
| **Tim internal Eldorado** | Mengelola prospek & klien | CRM ringkas tanpa perlu SaaS berbayar (demokan dulu) |

---

## 4. Ruang Lingkup Fitur

### 4.1 Situs Publik (Marketing)

| Fitur | Status | Catatan |
|---|---|---|
| Hero dengan mockup produk & CTA ganda | ✅ | Mockup "screenshot" dashboard CRM Aplikasi |
| Tentang, Layanan (3 kartu), Portofolio (3 kartu) | ✅ | Foto portofolio masih Unsplash — 🔜 ganti foto proyek asli |
| FAQ accordion | ✅ | 4 pertanyaan |
| CTA mengambang WhatsApp | ✅ | Hanya muncul jika `NEXT_PUBLIC_WHATSAPP_NUMBER` diset |
| Animasi scroll (GSAP) | ✅ | Menghormati `prefers-reduced-motion` |
| Responsif penuh desktop ↔ mobile | ✅ | Selesai pada 25 Okt 2026 |
| Testimoni pelanggan | 🔜 | Belum ada, prioritas tinggi untuk kredibilitas |

### 4.2 Blog

| Fitur | Status | Catatan |
|---|---|---|
| Daftar artikel + featured post | ✅ | Konten Markdown di `src/content/blog` |
| Halaman artikel + metadata SEO | ✅ | `marked` + `sanitize-html` (whitelist tag) |
| Panel CMS (Decap CMS) | 🚧 | Konfigurasi ada di `public/admin/`; backend `git-gateway` belum aktif — 🔜 aktifkan lewat provider deploy yang menyediakan autentikasi |
| Kategori/tag & pencarian | 🔜 | Belum ada |

### 4.3 Formulir Kontakt & Anti-Abuse

| Fitur | Status | Catatan |
|---|---|---|
| Formulir kontak (nama, email, layanan, pesan) | ✅ | Server Action + validasi sisi server |
| Relay ke layanan form (Formspree) | ✅ | `CONTACT_FORM_ENDPOINT` (JSON POST) |
| Anti-abuse lengkap | ✅ | Honeypot, rate limit **5 pengiriman / 15 menit** per-IP (hash SHA-256), pesan khusus "coba lagi" |
| Halaman thank-you dwibahasa | ✅ | `/{locale}/thank-you` |
| Failover | ✅ | Jika endpoint tidak dikonfigurasi → tampil pesan konfigurasi + fallback mailto |
| Penyimpanan log pengiriman | 🔜 | Pengiriman hanya relay; tidak menyimpan salinan |

### 4.4 CRM Demo (internal, `/crm`)

| Fitur | Status | Catatan |
|---|---|---|
| Ringkasan statistik + lead terbaru + fokus hari ini | ✅ | Data masih **hardcode demo** |
| Daftar Leads & Klien dengan pencarian | ✅ | Responsif: kartu pada mobile, tabel pada desktop |
| Filter/status tabs di Leads | 🔜 | Ada search tapi belum menyaring berdasarkan status |
| Autentikasi & database (Leads/Klien nyata) | 🔜 | **Prasyarat sebelum dipakai untuk data nyata** — saat ini `robots.ts` menonaktifkan indeks `/{locale}/crm/`, tapi URL tetap dapat diakses langsung |
| Aksi create/edit lead & tindak lanjut | 🔜 | |

### 4.5 i18n & SEO

| Fitur | Status | Catatan |
|---|---|---|
| Dwibahasa ID/EN via `next-intl` | ✅ | Locale switcher di Navbar, hash-preserve |
| Metadata per halaman, Open Graph, og:image dinamis | ✅ | `opengraph-image.tsx` |
| `sitemap.xml` & `robots.txt` | ✅ | `disallow`: `/api/`, `/admin/`, `/{locale}/crm/` |
| Penanda schema.org (LocalBusiness) | 🔜 | |

### 4.6 Infrastruktur & Env

| Fitur | Status | Catatan |
|---|---|---|
| `.env.example` | ✅ | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `CONTACT_FORM_ENDPOINT`, rate-limit |
| CI/CD & hosting | 🚧 | Versi belum dibakukan di pipeline; repo deploy ke branch `dev` → perlu alur merge ke `main` |

---

## 5. Non-Goals (dalam lingkup rilis saat ini)

- **Mesin pencari situs** lebih dari header pencarian sederhana di blog.
- **Portal klien** (login klien untuk pantau proyek).
- **Moderator konten** pihak ketiga di blog (CMS bare-bones cukup dahulu).
- **CRM multi-tenant/SaaS** — selalu single instance internal.

---

## 6. Cerita Pengguna Utama

1. Sebagai **calon klien**, Saya melihat layanan dari halaman depan, klik "Mulai Proyek", mengisi formulir, dan menerima halaman thank-you — tanpa harus bingung istilah teknis.
2. Sebagai **calon klien di HP**, Saya membuka situs di ponsel dan seluruh bagian terlihat nyaman tanpa harus di-zoom.
3. Sebagai **penulis blog**, Saya menulis artikel markdown didedikasi ke `src/content/blog` dan mempublikasikan tanpa menyesuaikan kode.
4. Sebagai **admin**, Saya membuka `/crm/leads`, mencari perusahaan, dan melihat status + nilai estimasi pada layar manapun (desktop atau ponsel).
5. Sebagai **penyerang**, percobaan spam formulir Saya ditolak (honeypot), dibatasi (rate limit), atau gagal secara diam (log konfigurasi tidak dicek dalam kebocoran).

---

## 7. Persyaratan Non-Fungsional

| Area | Persyaratan |
|---|---|
| Responsif | Tidak ada scroll horizontal pada semua lebar ≥ 320px; target 360 / 768 / 1024 / 1440 |
| Aksesibilitas | Kontras AA, target sentuh ≥ 44px, navigasi keyboard penuh, `aria-*` di semua komponen interaktif |
| Performa | Tanpa layout shift; gambar via `next/image` + `sizes`; font via `next/font` |
| Keamanan | Validasi + sanitasi di server; tanpa `dangerouslySetInnerHTML` kecuali artikel yang tersanitasi; rate limit kontak |
| Privasi CRM demo | URL `/crm/**` `noindex`; sebelum data nyata dipakai, **wajib** ditambah autentikasi |
| Kualitas kode | `tsc --noEmit` 0 error, `eslint` 0 warning, `next build` sukses sebelum merge |

---

## 8. Roadmap

### Fase 0 — Diluncurkan (sekarang) ✅
Situs dwibahasa penuh, blog, kontak anti-abuse, CRM demo responsif, SEO dasar, animasi GSAP.

### Fase 1 — Kredibilitas & Konversi (short-term, P1)
1. **Testimoni pelanggan** di halaman publik.
2. Ganti foto Unsplash menjadi foto proyek screenshot asli + case study 1 halaman.
3. **Filter status tabs** di halaman Leads (pelengkap pencarian).
4. Aktifkan backend CMS (Decap) di hosting produksi.
5. Schema.org LocalBusiness.

### Fase 2 — CRM Nyata (mid-term, P1.5)
1. Autentikasi admin (auth) + proteksi route `/crm/**`.
2. Database (misal Prisma + SQLite/Postgres) untuk Leads/Klien.
3. Aksi create/edit lead & riwayat tindak lanjut.
4. Pengiriman formulir kontak lebih lanjut ke CRM (bukan hanya webhook eksternal).

### Fase 3 — Skala (long-term, P2)
1. Analisis (Plausible/GA) + tracking konversi per CTA.
2. Newsletter sungguhan (saat ini tombol hanya ke blog).
3. Halaman layanan per-kategori (bukan hanya kartu).

---

## 9. Teknologi & Keterbatasan yang Diketahui

**Stack:** Next.js 16 (App Router, Server Actions) · React 19 · TypeScript · Tailwind CSS 4 · `next-intl` · GSAP · Markdown (`gray-matter` + `marked` + `sanitize-html`) · Decap CMS (terekonfigurasi, backend belum aktif).

**Keterbatasan dipertimbangkan saat pengambilan keputusan:**
1. **Rate limit kontak berbasis memori** (`src/lib/rate-limit.ts`, 5/15 menit, hardcode) — counter ikut hilang saat serverless cold start dan tidak di-share antar instance. Untuk sekarang cukup; saat trafik naik, alihkan ke penyimpanan persisten (Upstash/KV).
2. **CRM demo menampilkan data fiktif** — jangan pernah nampilin data pelanggan nyata sebelum Phase 2 (auth + DB).
3. **Endpoint kontak eksternal** — endpoint konfigurasi berasal dari ENV, jadi baru dipandang aman setelah `CONTACT_FORM_ENDPOINT` diset di produksi.
4. **Decap CMS** butuh backend auth (Git Gateway/Netlify Identity atau solusi equivalen) — sedang beroperasi hanya via `local_backend` untuk saat ini.

---

## 10. Keputusan Terbuka

| # | Pertanyaan | Pemilik |
|---|---|---|
| 1 | Deploy apa yang aktif saat ini (Vercel? Netlify?) — menentukan strategi CMS & rate limit | Ridho |
| 2 | Apakah data kontak juga perlu disimpan sendiri, atau cukup di webhook (Make/Zapier/Sheets)? | Ridho |
| 3 | Kapan CRM demo diubah jadi nyata (auth + DB)? | Tim |
| 4 | Siapa pengguna pertama CRM internal? | Tim |

---

*PRD ini sebaiknya diperbarui setiap ada rilis besar. Dokumen ini bukan spesifikasi teknis rinci — detail implementasi mengikuti konvensi di repo.*
