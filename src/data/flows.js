/**
 * flows.js
 * Central data source for all 11 MBG flow steps.
 * Each entry contains:
 *  - hotspot   : position + size on the image (in % of image dimensions)
 *  - color     : theme palette for the modal
 *  - content   : step metadata rendered inside the modal
 */

export const flows = [
  {
    id: 0,
    step: 'Tahap 0',
    icon: '🏛️',
    title: 'Tahap Strategis',
    subtitle: 'Yayasan / Pusat',
    hotspot: { left: '5.5%', top: '9%', width: '24%', height: '23%' },
    color: {
      bg: '#e8f5ee',
      accent: '#2d7a4f',
      badge: '#d1fae5',
      badgeText: '#065f46',
    },
    overview:
      'Yayasan sebagai otoritas pusat menetapkan semua parameter strategis program MBG sebelum implementasi lapangan dimulai.',
    steps: [
      {
        num: '0.1',
        text: 'Penetapan Program: Yayasan menentukan sekolah penerima, kuota siswa per sekolah, budget per porsi, SLA distribusi, serta standar kualitas & food safety.',
      },
      {
        num: '0.2',
        text: 'Kontrak & Penunjukan SPPG: MoU ditandatangani antara Yayasan dan SPPG, disertai proses Reporting/Audit rutin.',
      },
      {
        num: '0.3',
        text: 'SPPG ditetapkan sebagai production kitchen untuk beberapa sekolah (misal: A, B, C) dalam satu wilayah cakupan.',
      },
    ],
    outputs: [
      { icon: '📋', text: 'Daftar sekolah penerima & kuota siswa resmi' },
      { icon: '💰', text: 'Budget per porsi yang telah disetujui' },
      { icon: '📄', text: 'MoU & SK Penunjukan SPPG ditandatangani' },
      { icon: '✅', text: 'Standar kualitas & food safety wajib dipatuhi' },
    ],
    extras: [
      { label: 'Review', value: 'Mingguan via Reporting/Audit' },
      { label: 'PIC', value: 'Manajemen Yayasan/Pusat' },
      { label: 'Dokumen Kunci', value: 'MoU, SLA, Standar Food Safety' },
      { label: 'Output Utama', value: 'SK Penunjukan SPPG' },
    ],
  },
  {
    id: 1,
    step: 'Tahap 1',
    icon: '📅',
    title: 'Planning Phase — SPPG',
    subtitle: 'Dapur Pusat',
    hotspot: { left: '5.5%', top: '33%', width: '22%', height: '22%' },
    color: {
      bg: '#dbeafe',
      accent: '#2563eb',
      badge: '#bfdbfe',
      badgeText: '#1e40af',
    },
    overview:
      'SPPG melakukan 2 sub-proses perencanaan: siklus menu 10 hari berbasis AKG oleh Ahli Gizi, dan perencanaan produksi harian berdasarkan data kehadiran siswa H-1.',
    steps: [
      {
        num: '1.1',
        text: 'Menu Cycle Planning (Ahli Gizi): Menu 10 hari/bulan disusun sesuai AKG. HPP per porsi dihitung dan mendapat Approval Yayasan.',
      },
      {
        num: '1.2',
        text: 'Daily Production Planning: H-1, SPPG menerima data siswa hadir dari sekolah. Lembar Kerja Produksi dan Estimasi Bahan Baku dibuat.',
      },
      {
        num: '1.3',
        text: 'Total produksi = jumlah siswa hadir + buffer 5–10% untuk menghindari kekurangan porsi.',
      },
    ],
    outputs: [
      { icon: '🥗', text: 'Menu 10 hari/bulan berbasis AKG sudah di-approve' },
      { icon: '📊', text: 'Lembar Kerja Produksi + estimasi bahan baku harian' },
      { icon: '📱', text: 'Konfirmasi jumlah ompreng yang diproduksi besok' },
    ],
    extras: [
      { label: 'Siklus Menu', value: '10 hari / 1 bulan' },
      { label: 'Buffer', value: '5–10% dari data siswa' },
      { label: 'Data Trigger', value: 'Kehadiran siswa H-1' },
      { label: 'Standar', value: 'AKG (Angka Kecukupan Gizi)' },
    ],
  },
  {
    id: 2,
    step: 'Tahap 2',
    icon: '🚛',
    title: 'Procurement & Receiving',
    subtitle: 'Pengadaan & Penerimaan Bahan Baku',
    hotspot: { left: '48%', top: '9%', width: '24%', height: '22%' },
    color: {
      bg: '#ffedd5',
      accent: '#ea580c',
      badge: '#fed7aa',
      badgeText: '#9a3412',
    },
    overview:
      'Bahan baku dipesan dari supplier terverifikasi, diterima di SPPG, diperiksa kualitasnya secara ketat, lalu disimpan dengan sistem FIFO.',
    steps: [
      {
        num: '2.1',
        text: 'Purchase Order diterbitkan berdasarkan Lembar Kerja Produksi dari Tahap 1.',
      },
      {
        num: '2.2',
        text: 'Receiving: Truck supplier tiba. Tim memeriksa kualitas, kuantitas, dan kondisi kemasan setiap bahan baku.',
      },
      {
        num: '2.3',
        text: 'QC Bahan Baku: Cek suhu (protein hewani), kesegaran (sayur/buah), dan tanggal kadaluarsa.',
      },
      {
        num: '2.4',
        text: 'Penyimpanan FIFO (First In, First Out) di area sesuai: chiller, freezer, atau dry storage.',
      },
    ],
    outputs: [
      { icon: '📦', text: 'Bahan baku siap pakai yang telah lolos QC' },
      { icon: '🌡️', text: 'Log suhu penyimpanan tercatat' },
      { icon: '📝', text: 'Form QC penerimaan terisi & ditandatangani' },
    ],
    extras: [
      { label: 'Sistem Stok', value: 'FIFO (First In First Out)' },
      { label: 'QC Check', value: 'Suhu, Kesegaran, Kadaluarsa' },
      { label: 'Supplier', value: 'Terverifikasi & Terkontrak' },
      { label: 'Frekuensi', value: 'Harian sesuai kebutuhan produksi' },
    ],
  },
  {
    id: 3,
    step: 'Tahap 3',
    icon: '👨‍🍳',
    title: 'Pre-Process & Cooking',
    subtitle: 'Area Persiapan & Memasak',
    hotspot: { left: '73%', top: '9%', width: '22%', height: '32%' },
    color: {
      bg: '#fef3c7',
      accent: '#d97706',
      badge: '#fde68a',
      badgeText: '#92400e',
    },
    overview:
      'Memasak dilakukan di area terpisah (thowing area, prep area/basak-koter) dengan kontrol ketat pada CCP sesuai HACCP, menggunakan metode staggered cooking.',
    steps: [
      {
        num: '3.1',
        text: 'Thowing Area: Pencairan bahan beku (protein) di area khusus ber-Oozen food untuk mencegah kontaminasi silang.',
      },
      {
        num: '3.2',
        text: 'Prep Area (Basak/Koter): Pemotongan, pengupasan, dan persiapan bahan sebelum masuk area memasak.',
      },
      {
        num: '3.3',
        text: 'Staggered Cooking: Memasak bertahap per batch agar suhu dan kualitas terjaga hingga distribusi.',
      },
      {
        num: '3.4',
        text: 'CCP Monitoring: Suhu masak dicatat. Testing panel dengan sample cup untuk quality assurance organoleptik.',
      },
    ],
    outputs: [
      { icon: '🍲', text: 'Masakan matang lulus CCP check suhu internal' },
      { icon: '📋', text: 'Log CCP dan form testing panel terisi' },
      { icon: '⏰', text: 'Jadwal staggered cooking sinkron dengan distribusi' },
    ],
    extras: [
      { label: 'Standar', value: 'HACCP — CCP Monitoring' },
      { label: 'Metode Masak', value: 'Staggered Cooking (per batch)' },
      { label: 'QC Organoleptik', value: 'Testing panel sample cup' },
      { label: 'Area', value: 'Thowing Zone, Prep Zone, Cook Zone' },
    ],
  },
  {
    id: 4,
    step: 'Tahap 4',
    icon: '🧹',
    title: 'Integrated Ompreng Preparation',
    subtitle: 'Persiapan Wadah — Single Instance',
    hotspot: { left: '5.5%', top: '56%', width: '38%', height: '19%' },
    color: {
      bg: '#ede9fe',
      accent: '#7c3aed',
      badge: '#ddd6fe',
      badgeText: '#5b21b6',
    },
    overview:
      'Ompreng (wadah makan) dipersiapkan secara terintegrasi: pembersihan, sterilisasi via hot steam, dan setup assembly line sebelum pengisian makanan.',
    steps: [
      {
        num: '4.1',
        text: 'Persiapan Ompreng Bersih: Ditempatkan di Rak Steril/Clean Zone. QC visual memastikan tidak ada kotoran atau kerusakan fisik.',
      },
      {
        num: '4.2',
        text: 'Sterilisasi Ringan: Random swap test dilakukan sesuai SOP hygiene. Ompreng melewati hot steam tunnel untuk sanitasi termal.',
      },
      {
        num: '4.3',
        text: 'Setup Assembly Line: Jalur pengisian disiapkan agar ompreng bergerak satu arah, mencegah kontaminasi balik.',
      },
    ],
    outputs: [
      { icon: '🫙', text: 'Ompreng bersih, steril, siap terima makanan' },
      { icon: '📊', text: 'Hasil random swap test tercatat di log hygiene' },
      { icon: '🏭', text: 'Assembly line aktif dan siap beroperasi' },
    ],
    extras: [
      { label: 'Zona', value: 'Rak Steril / Clean Zone' },
      { label: 'Sterilisasi', value: 'Hot Steam Tunnel' },
      { label: 'QC', value: 'Visual + Random Swap Test' },
      { label: 'Alur', value: 'Satu arah (no backflow)' },
    ],
  },
  {
    id: 5,
    step: 'Tahap 5',
    icon: '📦',
    title: 'Integrated Packing & Portioning',
    subtitle: 'Flow Card 5 — Pengemasan Terintegrasi',
    hotspot: { left: '48%', top: '32%', width: '24%', height: '36%' },
    color: {
      bg: '#ccfbf1',
      accent: '#0d9488',
      badge: '#99f6e4',
      badgeText: '#115e59',
    },
    overview:
      'Makanan matang melewati 4 sub-proses berurutan: hot holding >60°C, portioning standar (nasi + laok + sayur + buah), sealing & labeling, hingga penutupan ompreng yang rapat.',
    steps: [
      {
        num: '5.1',
        text: 'Hot Holding >60°C: Makanan matang disimpan panas >60°C sampai packing untuk menjaga keamanan pangan.',
      },
      {
        num: '5.2',
        text: 'Food Portioning (Standarisasi): Nasi, laok protein, sayur, dan buah diisi sesuai gramasi standar menggunakan timbangan.',
      },
      {
        num: '5.3',
        text: 'Sealing & Labeling: Ompreng diseal konsisten. Label berisi nama sekolah, tanggal, dan jam produksi ditempelkan.',
      },
      {
        num: '5.4',
        text: 'Penutupan Ompreng: Ditutup rapat di meja produksi. Cek akhir memastikan tidak retak atau bocor.',
      },
    ],
    outputs: [
      { icon: '🍱', text: 'Ompreng terseal berisi nasi, laok, sayur, buah sesuai standar' },
      { icon: '🏷️', text: 'Label sekolah + tanggal + jam produksi terpasang' },
      { icon: '⚖️', text: 'Log gramasi portioning tercatat' },
    ],
    extras: [
      { label: 'Suhu Hot Holding', value: '>60°C (food safety)' },
      { label: 'Isi Ompreng', value: 'Nasi + Laok + Sayur + Buah' },
      { label: 'Standarisasi', value: 'Gramasi per komponen terukur' },
      { label: 'Sanitizer', value: 'Digunakan di permukaan produksi' },
    ],
  },
  {
    id: 6,
    step: 'Tahap 6',
    icon: '🚐',
    title: 'Distribution',
    subtitle: 'Pengiriman ke Sekolah',
    hotspot: { left: '73%', top: '42%', width: '22%', height: '24%' },
    color: {
      bg: '#ffe4e6',
      accent: '#e11d48',
      badge: '#fecdd3',
      badgeText: '#9f1239',
    },
    overview:
      'Ompreng dimuat ke thermal box, diangkut armada distribusi, lalu diserahkan ke pihak sekolah dengan berita acara TTO (Tanda Terima Ompreng) resmi.',
    steps: [
      {
        num: '6.1',
        text: 'Masuk Thermal Box: Ompreng disusun ke dalam thermal box yang menjaga suhu selama perjalanan distribusi.',
      },
      {
        num: '6.2',
        text: 'Loading Armada: Thermal box dimuat ke kendaraan distribusi sesuai rute dan jadwal pengiriman tiap sekolah.',
      },
      {
        num: '6.3',
        text: 'Handover di Sekolah: Ompreng diserahkan ke perwakilan sekolah. Checklist jumlah dan TTO Barka Acora ditandatangani.',
      },
    ],
    outputs: [
      { icon: '📬', text: 'Ompreng terkirim tepat waktu & jumlah sesuai' },
      { icon: '📄', text: 'TTO Barka Acora ditandatangani kedua pihak' },
      { icon: '🌡️', text: 'Log suhu distribusi tercatat' },
    ],
    extras: [
      { label: 'Media', value: 'Thermal Box (insulated)' },
      { label: 'Armada', value: 'Kendaraan distribusi terjadwal' },
      { label: 'Dokumen', value: 'TTO Barka Acora (Berita Acara)' },
      { label: 'Verifikasi', value: 'Checklist jumlah ompreng' },
    ],
  },
  {
    id: 7,
    step: 'Tahap 7',
    icon: '🏫',
    title: 'Di Sekolah',
    subtitle: 'Pembagian & Monitoring Konsumsi Siswa',
    hotspot: { left: '23%', top: '76%', width: '14%', height: '22%' },
    color: {
      bg: '#e0f2fe',
      accent: '#0369a1',
      badge: '#bae6fd',
      badgeText: '#075985',
    },
    overview:
      'Ompreng yang diterima langsung dibagikan ke siswa hadir. Guru/petugas sekolah memonitor konsumsi dan mencatat sisa makanan serta feedback awal.',
    steps: [
      {
        num: '7.1',
        text: 'Penerimaan: Sekolah menerima thermal box dari armada, menandatangani TTO, membawa ompreng ke area makan.',
      },
      {
        num: '7.2',
        text: 'Distribusi ke Siswa: Ompreng dibagikan sesuai daftar presensi. Jumlah sesuai data yang dikirim ke SPPG H-1.',
      },
      {
        num: '7.3',
        text: 'Monitoring Konsumsi: Guru/petugas memantau proses makan. Sisa makanan dan feedback siswa dicatat untuk dilaporkan.',
      },
    ],
    outputs: [
      { icon: '🍱', text: 'Siswa mengonsumsi makanan bergizi sesuai program' },
      { icon: '📊', text: 'Data sisa makanan & feedback siswa tercatat' },
      { icon: '📦', text: 'Ompreng kosong siap dikumpulkan untuk retur' },
    ],
    extras: [
      { label: 'Penerima', value: 'Seluruh siswa yang hadir' },
      { label: 'Monitor', value: 'Guru / petugas sekolah' },
      { label: 'Data', value: 'Sisa makanan, preferensi siswa' },
      { label: 'Output', value: 'Data konsumsi → Feedback Loop' },
    ],
  },
  {
    id: 8,
    step: 'Tahap 8',
    icon: '🔄',
    title: 'Flow Pengembalian Ompreng',
    subtitle: 'Integrated Return — Dapur → Sekolah → Dapur',
    hotspot: { left: '37%', top: '76%', width: '27%', height: '22%' },
    color: {
      bg: '#ecfccb',
      accent: '#4d7c0f',
      badge: '#d9f99d',
      badgeText: '#3f6212',
    },
    overview:
      'Setelah siswa selesai makan, ompreng kosong dikumpulkan, di-pre-rinse, dikemas dalam special crate, dan dijemput armada balik menuju SPPG untuk dicuci penuh.',
    steps: [
      {
        num: '8.1',
        text: 'Pengumpulan Ompreng Kosong: Sisa makanan dibuang terpisah (waste analysis). Ompreng dikumpulkan di satu titik sekolah.',
      },
      {
        num: '8.2',
        text: 'Pre-Rinse di Sekolah (Optional): Bila tersedia binary sink, ompreng dibilas awal untuk mengurangi kotoran.',
      },
      {
        num: '8.3',
        text: 'Packing Ompreng Kotor: Dikemas dalam special crate, terpisah dari fresh food box, agar tidak terjadi kontaminasi.',
      },
      {
        num: '8.4',
        text: 'Armada Balik ke Dapur: Segera setelah distribusi selesai, armada kembali membawa ompreng kotor ke SPPG.',
      },
    ],
    outputs: [
      { icon: '📦', text: 'Ompreng kotor terpacking di special crate' },
      { icon: '🚛', text: 'Armada balik membawa ompreng ke SPPG' },
      { icon: '🗑️', text: 'Data waste sisa makanan tercatat' },
    ],
    extras: [
      { label: 'Waste', value: 'Dibuang & dicatat terpisah' },
      { label: 'Pre-rinse', value: 'Opsional (bila binary sink ada)' },
      { label: 'Packing', value: 'Special crate (bukan food box)' },
      { label: 'Jadwal', value: 'Segera setelah distribusi selesai' },
    ],
  },
  {
    id: 9,
    step: 'Tahap 9',
    icon: '🧼',
    title: 'Washing & Sanitation Loop',
    subtitle: 'Area Sanitasi di SPPG',
    hotspot: { left: '64%', top: '66%', width: '22%', height: '32%' },
    color: {
      bg: '#fae8ff',
      accent: '#86198f',
      badge: '#f0abfc',
      badgeText: '#701a75',
    },
    overview:
      'Ompreng yang kembali dari sekolah melewati proses 4-tahap washing & sanitation yang terstandar di SPPG sebelum siap masuk siklus produksi berikutnya.',
    steps: [
      {
        num: '9.1',
        text: 'Area Ketor (Dirty Zone): Ompreng diterima dan di-sorting. Rusak/retak dipisahkan dan dicatat. Area ini terpisah dari zona produksi.',
      },
      {
        num: '9.2.1',
        text: 'Pre-Wash (Blong Silos): Kotoran kasar dibersihkan dengan air mengalir/semprotan awal.',
      },
      {
        num: '9.2.2',
        text: 'Wash (Cuthal Food Grade): Pencucian utama dengan deterjen food grade. Seluruh permukaan dalam & luar dibersihkan.',
      },
      {
        num: '9.2.3',
        text: 'Rinse: Pembilasan bersih menghilangkan sisa deterjen agar tidak ada residu kimia.',
      },
      {
        num: '9.2.4',
        text: 'Sanitizing >82°C: Sanitasi suhu tinggi >82°C atau chemical sanitizer food grade untuk membunuh patogen residu.',
      },
    ],
    outputs: [
      { icon: '✨', text: 'Ompreng bersih, tersanitasi, siap siklus produksi berikutnya' },
      { icon: '🗑️', text: 'Ompreng rusak dipisah & dilaporkan ke Yayasan' },
      { icon: '📋', text: 'Log washing & sanitasi tercatat' },
    ],
    extras: [
      { label: 'Dirty Zone', value: 'Terpisah dari area produksi' },
      { label: '4 Tahap', value: 'Pre-Wash → Wash → Rinse → Sanitizing' },
      { label: 'Suhu', value: '>82°C atau chemical food grade' },
      { label: 'Ompreng Rusak', value: 'Dipisah, dicatat, dilaporkan' },
    ],
  },
  {
    id: 10,
    step: 'Tahap 10',
    icon: '📈',
    title: 'Feedback Loop',
    subtitle: 'Continuous Improvement Cycle',
    hotspot: { left: '5.5%', top: '76%', width: '17%', height: '22%' },
    color: {
      bg: '#fff7ed',
      accent: '#c2410c',
      badge: '#fed7aa',
      badgeText: '#7c2d12',
    },
    overview:
      'Data dari seluruh proses (waste, konsumsi, kualitas, distribusi) dikompilasi, dianalisis, dan digunakan untuk menyempurnakan program MBG secara berkelanjutan.',
    steps: [
      {
        num: '10.1',
        text: 'Waste Analysis Sekolah: Data sisa makanan per sekolah dianalisis. Menu yang banyak disisakan menjadi indikator evaluasi.',
      },
      {
        num: '10.2',
        text: 'Input ke Sistem MBG: Semua data (kehadiran, konsumsi, sisa, feedback) diinput ke sistem digital untuk tracking agregat.',
      },
      {
        num: '10.3',
        text: 'Evaluasi Mingguan: Tim SPPG dan Yayasan review KPI distribusi, kualitas, dan efisiensi setiap minggu.',
      },
      {
        num: '10.4',
        text: 'Update Menu Cycle: Ahli Gizi memperbarui menu cycle untuk periode berikutnya berdasarkan hasil evaluasi dan feedback siswa.',
      },
    ],
    outputs: [
      { icon: '📊', text: 'Laporan mingguan waste analysis per sekolah' },
      { icon: '🔄', text: 'Menu cycle diperbarui untuk 10 hari berikutnya' },
      { icon: '📱', text: 'Data tersinkron di sistem MBG terpusat' },
      { icon: '📋', text: 'Rekomendasi perbaikan proses untuk semua pihak' },
    ],
    extras: [
      { label: 'Evaluasi', value: 'Mingguan' },
      { label: 'Data', value: 'Waste, konsumsi, kehadiran, kualitas' },
      { label: 'Output', value: 'Updated Menu Cycle + Laporan KPI' },
      { label: 'Siklus', value: 'Kembali ke Tahap 0 → Continuous' },
    ],
  },
]
