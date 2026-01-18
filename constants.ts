
import { ViolationType, Report, Publication } from './types';

export const MOCK_REPORTS: Report[] = [
  { 
    id: '1', 
    year: 2024, 
    date: '15 Januari 2024',
    region: 'Jayapura', 
    type: ViolationType.CIVIL_POLITICAL, 
    description: 'Pembubaran paksa diskusi damai mahasiswa.', 
    detailedDescription: 'Sekelompok aparat membubarkan diskusi akademik mahasiswa yang membahas isu-isu damai di asrama tanpa surat perintah resmi. Beberapa peserta mengalami intimidasi verbal.',
    status: 'Terdokumentasi',
    statusExplanation: 'Laporan telah divalidasi oleh tim investigasi lapangan dan masuk dalam arsip tahunan.'
  },
  { 
    id: '2', 
    year: 2024, 
    date: '02 Februari 2024',
    region: 'Intan Jaya', 
    type: ViolationType.CIVIL_POLITICAL, 
    description: 'Dugaan intimidasi terhadap warga sipil.', 
    detailedDescription: 'Warga melaporkan adanya peningkatan kehadiran aparat bersenjata di sekitar perkebunan warga yang menimbulkan ketakutan saat beraktivitas sehari-hari.',
    status: 'Dalam Penyelidikan',
    statusExplanation: 'Tim hukum kami sedang mengumpulkan kesaksian tambahan untuk memperkuat bukti laporan.'
  },
  { 
    id: '3', 
    year: 2023, 
    date: '10 November 2023',
    region: 'Timika', 
    type: ViolationType.ENVIRONMENTAL, 
    description: 'Pencemaran sungai akibat limbah industri.', 
    detailedDescription: 'Limbah dari fasilitas pengolahan mineral diduga meluap ke aliran sungai yang digunakan warga untuk kebutuhan air bersih dan konsumsi harian.',
    status: 'Selesai',
    statusExplanation: 'Perusahaan telah melakukan pembersihan dan memberikan kompensasi air bersih kepada warga terdampak.'
  },
  { 
    id: '4', 
    year: 2023, 
    date: '25 Agustus 2023',
    region: 'Merauke', 
    type: ViolationType.ECONOMIC_SOCIAL, 
    description: 'Konflik lahan adat untuk proyek food estate.', 
    detailedDescription: 'Perusahaan perkebunan mulai mematok lahan yang diklaim sebagai wilayah adat tanpa proses musyawarah yang transparan dengan para tetua adat setempat.',
    status: 'Terdokumentasi',
    statusExplanation: 'Dokumen kepemilikan adat telah dikumpulkan untuk proses advokasi lebih lanjut.'
  },
  { 
    id: '5', 
    year: 2024, 
    date: '05 Maret 2024',
    region: 'Sorong', 
    type: ViolationType.ENVIRONMENTAL, 
    description: 'Izin pembukaan hutan tanpa persetujuan masyarakat adat.', 
    detailedDescription: 'Penerbitan izin HGU di atas lahan hutan primer yang merupakan sumber penghidupan masyarakat adat tanpa sosialisasi yang memadai.',
    status: 'Terdokumentasi',
    statusExplanation: 'Kasus ini sedang dipersiapkan untuk dibawa ke tingkat nasional dalam kampanye penyelamatan hutan.'
  },
];

export const MOCK_PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Martabat Manusia di Atas Segalanya: Perspektif Fransiskan',
    date: '12 Jan 2024',
    category: 'Gereja',
    summary: 'Sebuah refleksi teologis tentang bagaimana nilai-masing individu harus dihormati di tengah konflik.',
    content: `
      <p>Dalam tradisi Fransiskan, martabat manusia bukanlah sesuatu yang diberikan oleh pemerintah atau institusi, melainkan karunia ilahi yang melekat pada setiap pribadi sebagai citra Allah. Di Tanah Papua, di mana konflik sering kali mengaburkan nilai kemanusiaan, prinsip ini menjadi semakin relevan.</p>
      <p>St. Fransiskus dari Asisi mengajarkan kita untuk melihat setiap orang sebagai saudara dan saudari. Ini bukan sekadar sentimen moral, melainkan panggilan untuk aksi nyata dalam membela hak-hak mereka yang suaranya dibungkam.</p>
      <h3>Keadilan dan Kerendahan Hati</h3>
      <p>Pelayanan JPIC (Justice, Peace, and the Integrity of Creation) di Papua berakar pada kerendahan hati. Kita tidak datang sebagai pemberi solusi yang superior, melainkan sebagai pendamping yang berjalan bersama masyarakat adat dalam perjuangan mereka mempertahankan tanah dan martabat mereka.</p>
      <p>Melalui tulisan ini, kami ingin mengajak seluruh komponen gereja dan masyarakat untuk menempatkan kemanusiaan di atas kepentingan politik atau ekonomi. Papua yang damai hanya bisa terwujud jika setiap nyawa dihargai dan setiap hak dihormati tanpa kecuali.</p>
    `,
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2000&auto=format&fit=crop',
    type: 'article'
  },
  {
    id: 'p2',
    title: 'Data Pelanggaran HAM Papua 2023',
    date: '05 Feb 2024',
    category: 'Infografis',
    summary: 'Visualisasi data tahunan tentang sebaran kasus di berbagai kabupaten.',
    content: `
      <p>Laporan tahunan 2023 menunjukkan tren yang mengkhawatirkan dalam beberapa aspek hak sipil dan politik. Melalui pengumpulan data dari 12 wilayah pendampingan, JPIC OFM Papua mencatat peningkatan insiden yang melibatkan intimidasi terhadap pembela HAM dan aktivis lingkungan.</p>
      <div class="bg-stone-50 p-6 rounded-2xl border border-stone-200 my-8">
        <h4 class="font-bold text-emerald-900 mb-4">Statistik Utama 2023:</h4>
        <ul class="space-y-2">
          <li>• 45 Kasus sengketa lahan adat</li>
          <li>• 12 Insiden pembatasan kebebasan berpendapat</li>
          <li>• 8 Laporan kerusakan lingkungan akibat limbah tambang</li>
        </ul>
      </div>
      <p>Data ini dikumpulkan melalui proses verifikasi yang ketat oleh tim lapangan kami. Kami mendorong transparansi dari semua pihak untuk memastikan keadilan bagi para korban.</p>
    `,
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2000&auto=format&fit=crop',
    type: 'infographic'
  },
  {
    id: 'p3',
    title: 'Dampak Perubahan Iklim terhadap Hutan Adat Papua',
    date: '20 Mar 2024',
    category: 'HAM',
    summary: 'Mengapa menjaga hutan adalah menjaga hak asasi manusia bagi masyarakat asli Papua.',
    content: `
      <p>Papua adalah paru-paru dunia yang tersisa di wilayah Timur Indonesia. Namun, hutan ini bukan sekadar kumpulan pohon; bagi masyarakat adat, hutan adalah ibu, apotek, dan identitas budaya mereka. Perubahan iklim yang dipicu oleh deforestasi massal mengancam keberlangsungan hidup komunitas-komunitas ini.</p>
      <h3>Hutan Sebagai Hak Dasar</h3>
      <p>Kehilangan akses terhadap hutan adat berarti kehilangan hak atas pangan, air bersih, dan obat-obatan tradisional. Ini adalah pelanggaran HAM yang sistemik. Perubahan pola cuaca yang ekstrem mulai mempengaruhi siklus tanam masyarakat pegunungan tengah, menyebabkan kerawanan pangan di beberapa distrik terpencil.</p>
      <p>JPIC OFM Papua terus menyerukan perlindungan hutan primer Papua. Kami mendesak pemerintah untuk memperkuat pengakuan hukum terhadap wilayah adat sebagai benteng terakhir melawan krisis iklim global.</p>
    `,
    image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?q=80&w=2000&auto=format&fit=crop',
    type: 'article'
  }
];

export const REGIONS = ['Jayapura', 'Timika', 'Sorong', 'Merauke', 'Biak', 'Wamena', 'Intan Jaya', 'Deiyai', 'Paniai', 'Nabire'];
