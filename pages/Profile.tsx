
import React from 'react';
import { History, Target, Compass, Heart, Shield, Droplets } from 'lucide-react';

const Profile: React.FC = () => {
  const timeline = [
    { year: '1998', title: 'SKP Keuskupan Jayapura', desc: 'Lahir sebagai bagian dari Sekretariat Keadilan dan Perdamaian Keuskupan Jayapura.' },
    { year: '2008', title: 'Pemisahan Organisasi', desc: 'JPIC OFM Papua mulai beroperasi secara independen dari struktur Keuskupan untuk fokus pada misi Ordo.' },
    { year: '2010', title: 'SKPKC FP OFM Papua', desc: 'Pengukuhan sebagai lembaga resmi Fransiskan Papua untuk Keadilan dan Perdamaian.' },
    { year: '2023', title: 'Komunitas SKPKC', desc: 'Memperkuat jaringan komunitas pendamping di seluruh pelosok Tanah Papua.' },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-emerald-950 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Compass className="mx-auto mb-8 text-emerald-400" size={50} />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Membawa Damai, Mewujudkan Keadilan</h1>
          <p className="text-xl text-emerald-100 font-light italic">"Tuhan, jadikanlah aku pembawa damai-Mu"</p>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-stone-900 mb-4 flex items-center justify-center gap-3">
            <History className="text-emerald-700" /> Jejak Langkah Kami
          </h2>
          <div className="w-20 h-1 bg-emerald-700 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-stone-200"></div>
          
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 md:text-right w-full">
                  <div className={`p-8 bg-stone-50 rounded-3xl border border-stone-100 hover:shadow-lg transition-all ${i % 2 === 1 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-emerald-700 text-2xl font-bold mb-2 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-emerald-800 rounded-full border-4 border-white shadow-md z-10 flex-shrink-0"></div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-24 bg-stone-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-stone-200">
              <Target className="text-emerald-800 mb-8" size={40} />
              <h2 className="text-3xl font-bold text-stone-900 mb-6 uppercase tracking-widest text-sm text-emerald-800">Visi Kami</h2>
              <blockquote className="text-2xl font-light text-stone-800 leading-relaxed">
                "Terwujudnya Tanah Papua sebagai wilayah yang damai, di mana hak asasi manusia dihormati, keadilan ditegakkan, dan lingkungan hidup dilindungi sebagai warisan bagi generasi mendatang."
              </blockquote>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-stone-900 mb-8 uppercase tracking-widest text-sm text-emerald-800">Misi Kami</h2>
              {[
                { title: 'Pendampingan Hukum', desc: 'Memberikan bantuan hukum dan moral bagi korban pelanggaran hak asasi manusia.' },
                { title: 'Edukasi Kemanusiaan', desc: 'Melatih komunitas lokal tentang hak-hak mereka dan strategi advokasi damai.' },
                { title: 'Pelestarian Lingkungan', desc: 'Mengampanyekan perlindungan hutan Papua dari eksploitasi besar-besaran.' },
                { title: 'Dialog Damai', desc: 'Membangun jembatan komunikasi antar kelompok masyarakat untuk meredam konflik.' }
              ].map((m, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm hover:translate-x-2 transition-transform">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 shrink-0 font-bold">
                    {i+1}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{m.title}</h4>
                    <p className="text-sm text-stone-600">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Franciscan Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-emerald-950 mb-4">Nilai-Nilai Fransiskan</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">Prinsip dasar yang menjiwai setiap gerak langkah pelayanan kami di Papua.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 text-center rounded-3xl bg-emerald-50 border border-emerald-100">
               <Heart className="mx-auto mb-6 text-emerald-800" size={40} />
               <h3 className="text-xl font-bold mb-4">Kesederhanaan</h3>
               <p className="text-stone-600 text-sm">Melayani dengan rendah hati, tanpa kemegahan, menyatu dengan penderitaan rakyat kecil.</p>
             </div>
             <div className="p-8 text-center rounded-3xl bg-amber-50 border border-amber-100">
               <Shield className="mx-auto mb-6 text-amber-800" size={40} />
               <h3 className="text-xl font-bold mb-4">Prophetisme</h3>
               <p className="text-stone-600 text-sm">Menjadi suara kenabian yang berani menyuarakan kebenaran di tengah kegelapan ketidakadilan.</p>
             </div>
             <div className="p-8 text-center rounded-3xl bg-blue-50 border border-blue-100">
               <Droplets className="mx-auto mb-6 text-blue-800" size={40} />
               <h3 className="text-xl font-bold mb-4">Persaudaraan</h3>
               <p className="text-stone-600 text-sm">Melihat setiap orang, apa pun latar belakangnya, sebagai saudara dan saudari dalam kemanusiaan.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
