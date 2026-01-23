
import { ViolationType, Report, Publication, WorkArea, Figure, Partner, AgendaItem } from './types';

export const WORK_AREAS: WorkArea[] = [
  {
    id: 'advokasi',
    title: 'Advokasi',
    icon: 'Shield',
    description: 'Pendampingan hukum dan pembelaan hak-hak masyarakat adat Papua yang terpinggirkan.',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1000',
    content: 'Advokasi kami berfokus pada litigasi dan non-litigasi bagi korban pelanggaran HAM, sengketa lahan, dan diskriminasi rasial. Kami percaya bahwa setiap manusia memiliki martabat yang tidak dapat diganggu gugat.',
    challenges: [
      'Akses hukum yang terbatas di wilayah pedalaman',
      'Kriminalisasi aktivis kemanusiaan',
      'Kurangnya transparansi data publik'
    ],
    keySuccesses: [
      'Pendampingan 50+ kasus tanah adat',
      'Pembebasan tahanan politik melalui jalur hukum',
      'Publikasi tahunan laporan HAM internasional'
    ]
  },
  {
    id: 'animasi',
    title: 'Animasi',
    icon: 'Users',
    description: 'Penyadaran dan pelatihan komunitas tentang nilai-nilai JPIC dan HAM.',
    image: 'https://images.unsplash.com/photo-1529070532901-ba8c182ae172?q=80&w=1000',
    content: 'Melalui animasi, kami menghidupkan semangat perlawanan damai dan kesadaran kritis di tingkat basis jemaat dan masyarakat. Kami melatih fasilitator lokal untuk menjadi agen perubahan.',
    challenges: [
      'Hambatan bahasa dan budaya lokal',
      'Stigma terhadap pendidikan kritis',
      'Keterbatasan infrastruktur di desa-desa'
    ],
    keySuccesses: [
      'Terbentuknya 12 komunitas basis JPIC',
      'Pelatihan 200+ pemuda gereja tentang HAM',
      'Modul animasi khusus budaya Papua'
    ]
  },
  {
    id: 'sitasi-social',
    title: 'Sitasi Sosial',
    icon: 'Search',
    description: 'Riset, pendataan, dan analisis situasi sosial-politik di Tanah Papua sebagai senjata damai berbasis fakta.',
    image: 'https://images.unsplash.com/photo-1454165833767-027eeea15c3e?q=80&w=1000',
    content: 'Sitasi Sosial adalah upaya ilmiah kami untuk mendokumentasikan fakta lapangan sebagai basis kebijakan dan tekanan publik. Di tengah simpang siur informasi, data yang terverifikasi adalah jangkar bagi keadilan. Kami bekerja di zona-zona tersulit untuk memastikan setiap pelanggaran memiliki catatan permanen.',
    challenges: [
      'Validasi informasi di zona konflik aktif dengan risiko tinggi',
      'Akses geografis yang ekstrem menuju komunitas terpencil',
      'Keterbatasan teknologi komunikasi di wilayah pedalaman'
    ],
    keySuccesses: [
      'Database digital 20 tahun pelanggaran HAM di Papua',
      'Penyusunan 40+ laporan mendalam (Memoria Passionis)',
      'Basis data primer untuk laporan PBB (Franciscan International)'
    ]
  },
  {
    id: 'ekopastoral',
    title: 'Ekopastoral',
    icon: 'Leaf',
    description: 'Pelayanan pastoral yang berfokus pada pelestarian alam sebagai rumah bersama.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000',
    content: 'Terinspirasi Laudato Si, kami bekerja sama dengan masyarakat adat untuk melindungi hutan Papua dari deforestasi. Alam adalah saudara kita, bukan komoditas.',
    challenges: [
      'Eskalasi izin perkebunan sawit skala besar',
      'Kerusakan ekosistem sungai akibat limbah',
      'Perubahan pola pikir konsumtif masyarakat'
    ],
    keySuccesses: [
      'Penyelamatan 5.000 hektar hutan adat',
      'Program penanaman kembali di lahan kritis',
      'Edukasi pertanian ramah lingkungan'
    ]
  }
];

export const MOCK_FIGURES: Figure[] = [
  {
    id: '1',
    name: 'St. Fransiskus Asisi',
    role: 'Pelindung JPIC & Lingkungan',
    category: 'Spiritual',
    quote: 'Jadikanlah aku pembawa damai-Mu.',
    summary: 'Inspirasi utama kami dalam mencintai kemanusiaan dan merawat alam ciptaan dengan kerendahan hati.',
    biography: 'Lahir di Italia pada abad ke-12, Fransiskus meninggalkan kekayaannya untuk hidup di antara kaum miskin. Ia dikenal sebagai santo pelindung ekologi karena hubungannya yang mendalam dengan alam, menyebut matahari sebagai saudara dan bulan sebagai saudari.',
    image: 'https://images.unsplash.com/photo-1544415840-79883597d341?q=80&w=1000'
  },
  {
    id: '2',
    name: 'Pater Yohanes Jonga',
    role: 'Aktivis HAM & Pastor',
    category: 'HAM',
    quote: 'Membela HAM adalah bagian dari ibadah.',
    summary: 'Penerima Yap Thiam Hien Award yang mendedikasikan hidupnya untuk mendampingi masyarakat di perbatasan Papua.',
    biography: 'Pater John Jonga adalah sosok pastor yang tak gentar menghadapi ancaman dalam menyuarakan pelanggaran HAM di wilayah-wilayah konflik di Papua. Dedikasinya terhadap keadilan telah menginspirasi banyak aktivis muda di Tanah Papua.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000'
  },
  {
    id: '3',
    name: 'Mama Yosepha Alomang',
    role: 'Pejuang Lingkungan Adat',
    category: 'Lingkungan',
    quote: 'Hutan adalah ibu kami, tanpanya kami tidak ada.',
    summary: 'Tokoh perempuan Amungme yang memimpin perlawanan terhadap perusakan alam di pegunungan tengah.',
    biography: 'Dikenal karena keberaniannya dalam memprotes perusahaan pertambangan skala besar, Mama Yosepha adalah penerima Goldman Environmental Prize. Ia membuktikan bahwa kearifan lokal adalah benteng terkuat melawan keserakahan.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=1000'
  },
  {
    id: '4',
    name: 'Mgr. Aloysius Murwito, OFM',
    role: 'Uskup & Pembawa Perdamaian',
    category: 'Perdamaian',
    quote: 'Dialog adalah jembatan menuju keselamatan bersama.',
    summary: 'Seorang gembala yang konsisten menyerukan dialog non-kekerasan untuk menyelesaikan konflik di Papua.',
    biography: 'Sebagai Uskup di wilayah Selatan Papua, beliau seringkali menjadi mediator dalam berbagai konflik agraria dan sosial, mengutamakan pendekatan kemanusiaan di atas segalanya.',
    image: 'https://images.unsplash.com/photo-1543132220-4bf3de6e10ae?q=80&w=1000'
  }
];

export const MOCK_PARTNERS: Partner[] = [
  { id: '1', name: 'KontraS', category: 'Nasional', description: 'Mitra dalam advokasi kasus penghilangan paksa dan kekerasan negara.' },
  { id: '2', name: 'Franciscan International', category: 'Internasional', description: 'Perwakilan kami di PBB untuk menyuarakan isu HAM Papua.' },
  { id: '3', name: 'Walhi Papua', category: 'Lokal', description: 'Kolaborasi dalam perlindungan hutan dan lingkungan hidup.' },
  { id: '4', name: 'Komnas HAM', category: 'Nasional', description: 'Institusi negara mitra dalam pemantauan situasi HAM.' }
];

export const MOCK_AGENDA: AgendaItem[] = [
  { id: '1', title: 'Workshop Animasi HAM', date: '25 April 2024', location: 'Jayapura', description: 'Pelatihan untuk fasilitator muda JPIC dari seluruh Keuskupan di Papua.' },
  { id: '2', title: 'Peluncuran Memoria Passionis', date: '10 Mei 2024', location: 'Sorong', description: 'Diskusi publik dan bedah buku laporan tahunan HAM Papua.' }
];

export const MOCK_PUBLICATIONS: Publication[] = [
  {
    id: 'mp-2023',
    title: 'Memoria Passionis 2023: Ratapan Tanah yang Terluka',
    date: '10 Jan 2024',
    category: 'Memoria Passionis',
    summary: 'Laporan tahunan mendalam mengenai penderitaan dan pelanggaran HAM di Papua sepanjang 2023.',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000',
    type: 'journal'
  },
  {
    id: 'mr-2024',
    title: 'Memoria Resurectionis: Benih Harapan di Balik Konflik',
    date: '15 Feb 2024',
    category: 'Memoria Resurectionis',
    summary: 'Kumpulan kisah inspiratif tentang perdamaian dan rekonsiliasi dari berbagai komunitas di Papua.',
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000',
    type: 'journal'
  }
];

export const MOCK_REPORTS: Report[] = [
  {
    id: 'REP-2023-001',
    year: 2023,
    date: '12 Nov 2023',
    region: 'Intan Jaya',
    type: ViolationType.CIVIL_POLITICAL,
    description: 'Dugaan penangkapan sewenang-wenang terhadap 3 warga sipil di distrik Sugapa.',
    detailedDescription: 'Pada tanggal 12 November 2023, dilaporkan adanya penjemputan paksa terhadap tiga orang pemuda yang sedang berada di pasar. Hingga laporan ini dibuat, keberadaan mereka masih dalam penelusuran tim hukum.',
    status: 'Dalam Penyelidikan'
  },
  {
    id: 'REP-2023-002',
    year: 2023,
    date: '05 Des 2023',
    region: 'Merauke',
    type: ViolationType.ENVIRONMENTAL,
    description: 'Pencemaran sumber air warga akibat limbah industri kelapa sawit.',
    detailedDescription: 'Masyarakat adat melaporkan perubahan warna dan bau pada sungai yang menjadi sumber air utama. Tim Ekopastoral telah mengambil sampel air untuk uji laboratorium.',
    status: 'Terdokumentasi'
  },
  {
    id: 'REP-2024-001',
    year: 2024,
    date: '20 Jan 2024',
    region: 'Jayapura',
    type: ViolationType.ECONOMIC_SOCIAL,
    description: 'Diskriminasi akses kesehatan bagi pengungsi internal di kamp sementara.',
    detailedDescription: 'Ditemukan hambatan administratif yang menghalangi pengungsi mendapatkan layanan kesehatan dasar. Advokasi telah dilakukan ke dinas kesehatan setempat.',
    status: 'Selesai'
  }
];

export const REGIONS = ['Jayapura', 'Timika', 'Sorong', 'Merauke', 'Biak', 'Wamena', 'Intan Jaya', 'Deiyai', 'Paniai', 'Nabire'];
