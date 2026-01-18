
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Leaf, Eye, ArrowRight, HeartHandshake } from 'lucide-react';
import { MOCK_PUBLICATIONS } from '../constants';

const Home: React.FC = () => {
  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1590518603241-0978ce247550?q=80&w=1000&auto=format&fit=crop', title: 'Raja Ampat' },
    { url: 'https://images.unsplash.com/photo-1518241443019-33161049906d?q=80&w=1000&auto=format&fit=crop', title: 'Lembah Baliem' },
    { url: 'https://images.unsplash.com/photo-1626084226176-6644f8373ee1?q=80&w=1000&auto=format&fit=crop', title: 'Puncak Jaya' },
    { url: 'https://images.unsplash.com/photo-1596328213601-572714578b7b?q=80&w=1000&auto=format&fit=crop', title: 'Danau Sentani' },
    { url: 'https://images.unsplash.com/photo-1570533515039-3882776c5f87?q=80&w=1000&auto=format&fit=crop', title: 'Hutan Hujan Papua' },
    { url: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1000&auto=format&fit=crop', title: 'Pantai Papua' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/papua_landscape/1920/1080"
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Papua Landscape"
          />
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-24">
          <div className="text-white max-w-7xl animate-in fade-in slide-in-from-left-8 duration-700">
            <span className="inline-block px-4 py-1.5 bg-emerald-800/80 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 border border-emerald-600">
              Tanah Papua, Tanah Damai
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] max-w-5xl">
              Keadilan, Perdamaian & Keutuhan Ciptaan
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-stone-300 mb-10 leading-relaxed font-light max-w-3xl">
              Melayani dengan kerendahan hati untuk membela hak-hak mereka yang terpinggirkan dan merawat bumi sebagai rumah kita bersama di Tanah Papua.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/lapor-aman"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base text-center transition-all flex items-center justify-center gap-2 group shadow-lg"
              >
                <Shield size={20} />
                LAPORKAN PELANGGARAN
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/profil"
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-center transition-all"
              >
                PELAJARI MISI KAMI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">Empat Pilar Pelayanan</h2>
            <p className="text-stone-600 text-lg">Terinspirasi oleh St. Fransiskus dari Asisi, kami berkomitmen pada nilai-nilai kemanusiaan yang universal.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              { icon: Shield, title: 'Hak Asasi Manusia', desc: 'Advokasi dan pendampingan korban pelanggaran HAM di seluruh wilayah Papua.' },
              { icon: Users, title: 'Keadilan Sosial', desc: 'Memperjuangkan kesetaraan akses terhadap pendidikan, kesehatan, dan ekonomi.' },
              { icon: HeartHandshake, title: 'Perdamaian', desc: 'Mendorong dialog non-kekerasan untuk penyelesaian konflik yang bermartabat.' },
              { icon: Leaf, title: 'Keutuhan Ciptaan', desc: 'Melindungi hutan dan lingkungan hidup Papua dari eksploitasi yang merusak.' },
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-10 rounded-[2.5rem] bg-stone-50 border border-stone-200/50 hover:shadow-2xl hover:bg-white hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                  <item.icon className="text-emerald-700" size={32} />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10 pointer-events-none hidden md:block">
           <svg width="400" height="400" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none"/></svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { val: '25+', label: 'Tahun Melayani' },
              { val: '1500+', label: 'Laporan Publik' },
              { val: '12', label: 'Wilayah Kerja' },
              { val: '40+', label: 'Publikasi HAM' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">{stat.val}</p>
                <p className="text-emerald-300 text-[10px] md:text-xs uppercase tracking-[0.2em] font-black">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-4">Warta Kemanusiaan</h2>
              <p className="text-stone-600 text-lg">Menyuarakan kebenaran dari lapangan melalui dokumentasi dan analisis mendalam.</p>
            </div>
            <Link to="/publikasi" className="text-emerald-700 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
              Lihat Arsip Lengkap <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {MOCK_PUBLICATIONS.slice(0, 3).map((pub) => (
              <article key={pub.id} className="bg-white rounded-[2rem] overflow-hidden border border-stone-200 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                <div className="h-64 overflow-hidden relative">
                  <img src={pub.image} alt={pub.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-black bg-white/90 backdrop-blur-sm text-emerald-900 px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-sm">
                      {pub.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-4">{pub.date}</span>
                  <Link to={`/publikasi/${pub.id}`} className="block">
                    <h3 className="text-xl font-bold text-stone-900 mb-4 line-clamp-2 hover:text-emerald-700 transition-colors leading-tight">
                      {pub.title}
                    </h3>
                  </Link>
                  <p className="text-stone-600 text-sm mb-8 line-clamp-3 leading-relaxed">{pub.summary}</p>
                  <div className="mt-auto">
                    <Link to={`/publikasi/${pub.id}`} className="text-emerald-700 text-sm font-black flex items-center gap-2 group/btn">
                      BACA SELENGKAPNYA 
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-stone-100/50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">Keutuhan Ciptaan</h2>
            <p className="text-stone-600 text-lg leading-relaxed">Merawat alam Papua adalah bagian integral dari menjaga martabat manusia dan masa depan generasi mendatang.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryImages.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8 md:p-10">
                  <span className="text-white font-bold text-2xl serif italic tracking-tight">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-emerald-950 py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl border border-emerald-800">
            <Eye className="text-emerald-400" size={32} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">Suara Anda Adalah Bagian Dari Perubahan</h2>
          <p className="text-lg md:text-2xl text-emerald-100/80 mb-12 leading-relaxed italic font-light serif">
            "Sebab di mana ada kasih dan kebijaksanaan, di situ tidak ada ketakutan atau kejahilan."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link
                to="/lapor-aman"
                className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                Laporkan Kejadian dengan Aman
              </Link>
              <Link
                to="/kontak"
                className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all text-center"
              >
                Hubungi Kami
              </Link>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
          <Shield size={600} className="text-white mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default Home;
