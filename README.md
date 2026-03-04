# MBG Flow Journey — React + Vite

Interactive clickable infographic for the **End to End Flow Journey MBG** (Makan Bergizi Gratis).

## Struktur Project

```
mbg-flow/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              ← Entry point React
    ├── App.jsx               ← Root component (state management)
    ├── styles/
    │   └── global.css        ← Global reset & font
    ├── assets/
    │   └── mbg-flow.jpeg     ← Gambar infografis utama
    ├── data/
    │   └── flows.js          ← Data 11 flow (posisi hotspot + konten modal)
    └── components/
        ├── TopBar.jsx        ← Header sticky atas
        ├── TopBar.module.css
        ├── ImageMap.jsx      ← Gambar + semua hotspot overlay
        ├── ImageMap.module.css
        ├── Hotspot.jsx       ← Satu area klikabel pada gambar
        ├── Hotspot.module.css
        ├── Modal.jsx         ← Overlay dialog shell + logic (ESC, scroll lock)
        ├── Modal.module.css
        ├── ModalContent.jsx  ← Konten dalam modal (overview, steps, output, detail)
        └── ModalContent.module.css
```

## Cara Menjalankan

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build untuk production
npm run build
```

## Cara Menggunakan

- Hover di atas area gambar → border putih dan label flow muncul
- Klik area tersebut → modal popup berisi detail lengkap flow
- Tekan `ESC` atau klik area gelap di luar modal untuk menutup

## Menambah / Mengubah Flow

Edit file **`src/data/flows.js`**. Setiap entry memiliki:

| Field       | Keterangan                                           |
|-------------|------------------------------------------------------|
| `hotspot`   | Posisi & ukuran area klik dalam `%` relatif ke gambar|
| `color`     | Tema warna untuk modal (bg, accent, badge)           |
| `overview`  | Paragraf ringkasan                                   |
| `steps`     | Array langkah-langkah detail                         |
| `outputs`   | Array output/hasil dari flow ini                     |
| `extras`    | Array detail teknis (key-value) di grid bawah        |

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server  
- **CSS Modules** — Scoped styling per component
- **Google Fonts** — Plus Jakarta Sans + Syne
