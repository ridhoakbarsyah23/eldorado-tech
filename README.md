# Eldorado Tech

Website profil Eldorado Tech, software house berbasis di Purwokerto. Situs mencakup landing page, blog berbasis Markdown, formulir kontak, dukungan Bahasa Indonesia dan Inggris, serta antarmuka demo CRM.

## Teknologi

- Next.js 16 App Router dan React 19
- TypeScript
- Tailwind CSS 4
- `next-intl` untuk routing dan konten multibahasa
- Markdown, `gray-matter`, dan `marked` untuk artikel

## Menjalankan secara lokal

1. Instal dependensi:

   ```powershell
   npm install
   ```

2. Salin konfigurasi contoh:

   ```powershell
   Copy-Item .env.example .env.local
   ```

3. Jalankan development server:

   ```powershell
   npm run dev
   ```

4. Buka `http://localhost:3000`. Route root akan diarahkan ke `/id`; versi Inggris tersedia di `/en`.

## Konfigurasi produksi

| Variabel | Kegunaan |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Domain publik untuk metadata, robots, dan sitemap. Jangan sertakan garis miring di akhir. |
| `CONTACT_FORM_ENDPOINT` | Endpoint HTTPS Formspree yang menerima formulir kontak. Nilai ini hanya dibaca di server. |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Nomor WhatsApp bisnis dalam format internasional tanpa tanda `+`, spasi, atau tanda hubung. CTA disembunyikan jika kosong. |

Nilai domain dan Formspree pada `.env.example` mengikuti konfigurasi yang saat ini digunakan aplikasi. Verifikasi kepemilikan keduanya sebelum deployment produksi. Isi nomor WhatsApp yang benar agar CTA WhatsApp tampil.

## Pemeriksaan kualitas

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

## Struktur konten

- Artikel: `src/content/blog/*.md`
- Terjemahan: `messages/id.json` dan `messages/en.json`
- Design system: `design-system/eldorado-tech/MASTER.md`

CRM pada route `/id/crm` dan `/en/crm` masih menggunakan data demonstrasi dan tidak boleh dianggap sebagai data operasional.
