
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Leaf, ArrowRight, HeartHandshake, ChevronRight, Eye } from 'lucide-react';
import { MOCK_PUBLICATIONS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Refined Font Sizes */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Tanah Papua Landscape"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-20">
          <div className="max-w-4xl">
            <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <span className="inline-block px-5 py-2 bg-[#022c22]/80 backdrop-blur-sm text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/10 font-sans-ui">
                TANAH PAPUA, TANAH DAMAI
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] font-serif-heading drop-shadow-2xl">
                Keadilan, Perdamaian <br className="hidden md:block"/> & Keutuhan Ciptaan
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl font-medium drop-shadow-md">
                Melayani dengan kerendahan hati untuk membela hak-hak mereka yang terpinggirkan dan merawat bumi sebagai rumah kita bersama di Tanah Papua.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center font-sans-ui">
                <Link
                  to="/lapor-aman"
                  className="bg-[#00966d] hover:bg-[#007a58] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl active:scale-95 group w-full sm:w-auto"
                >
                  <Shield size={18} />
                  LAPORKAN PELANGGARAN
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/profil"
                  className="bg-stone-800/40 hover:bg-stone-800/60 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all text-center border border-white/20 w-full sm:w-auto"
                >
                  PELAJARI MISI KAMI
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden md:block">
          <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Empat Pilar Pelayanan - Matching Reference Image */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-emerald-950 mb-6 font-serif-heading">Empat Pilar Pelayanan</h2>
            <p className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Terinspirasi oleh St. Fransiskus dari Asisi, kami berkomitmen pada nilai-nilai kemanusiaan yang universal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: Shield, 
                title: 'Hak Asasi Manusia', 
                desc: 'Advokasi dan pendampingan korban pelanggaran HAM di seluruh wilayah Papua.', 
                link: '/karya/advokasi' 
              },
              { 
                icon: Users, 
                title: 'Keadilan Sosial', 
                desc: 'Memperjuangkan kesetaraan akses terhadap pendidikan, kesehatan, dan ekonomi.', 
                link: '/karya/sitasi-social' 
              },
              { 
                icon: HeartHandshake, 
                title: 'Perdamaian', 
                desc: 'Mendorong dialog non-kekerasan untuk penyelesaian konflik yang bermartabat.', 
                link: '/karya/animasi' 
              },
              { 
                icon: Leaf, 
                title: 'Keutuhan Ciptaan', 
                desc: 'Melindungi hutan dan lingkungan hidup Papua dari eksploitasi yang merusak.', 
                link: '/karya/ekopastoral' 
              },
            ].map((item, i) => (
              <Link 
                key={i} 
                to={item.link}
                className="p-10 bg-[#f9fafb] rounded-[3rem] border border-transparent hover:border-stone-100 hover:bg-white hover:shadow-xl transition-all duration-500 group flex flex-col h-full items-start"
              >
                <div className="w-16 h-16 bg-white rounded-2xl border border-stone-100 flex items-center justify-center shadow-sm mb-10 text-emerald-800 transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 mb-6 leading-tight">{item.title}</h3>
                <p className="text-stone-600 text-base leading-relaxed mb-6 font-medium">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Shield size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { val: '25+', label: 'Tahun Melayani' },
              { val: '1500+', label: 'Kasus Didampingi' },
              { val: '12', label: 'Wilayah Adat' },
              { val: '40+', label: 'Publikasi HAM' },
            ].map((stat, idx) => (
              <div key={idx} className="animate-in fade-in duration-1000">
                <p className="text-5xl md:text-6xl font-bold mb-4 font-serif-heading text-emerald-400">{stat.val}</p>
                <p className="text-emerald-100/60 text-xs uppercase tracking-[0.3em] font-black font-sans-ui">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
            <div className="text-center md:text-left max-w-2xl">
              <h2 className="text-4xl font-bold text-emerald-950 font-serif-heading mb-4">Warta Terbaru</h2>
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                Menyuarakan kebenaran dari garis depan. Temukan kabar terkini mengenai upaya advokasi, laporan lapangan, dan inisiatif kemanusiaan kami di seluruh pelosok Tanah Papua.
              </p>
              <div className="w-20 h-1.5 bg-emerald-600 mx-auto md:mx-0"></div>
            </div>
            <Link to="/publikasi" className="text-emerald-800 font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all bg-emerald-50 px-6 py-3 rounded-full font-sans-ui">
              Lihat Semua Publikasi <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {MOCK_PUBLICATIONS.slice(0, 3).map((pub) => (
              <article key={pub.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={pub.image} 
                    alt={pub.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 font-sans-ui">
                    <span className="bg-white/90 backdrop-blur-sm text-emerald-900 text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
                      {pub.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4 text-stone-400 font-sans-ui">
                    <span className="text-[10px] font-bold uppercase tracking-widest">{pub.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-950 mb-4 line-clamp-2 leading-snug group-hover:text-emerald-700 transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-stone-600 text-base mb-8 line-clamp-3 leading-relaxed">
                    {pub.summary}
                  </p>
                  <Link to={`/publikasi/${pub.id}`} className="mt-auto text-emerald-800 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 font-sans-ui">
                    BACA SELENGKAPNYA <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - Keindahan Tanah Papua */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-6 font-serif-heading">Keindahan Tanah Papua</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-stone-600 text-lg leading-relaxed">
              Tanah yang diberkati dengan keanekaragaman hayati dan lanskap alam yang memukau. Warisan yang harus kita jaga bersama demi masa depan yang berkelanjutan dan damai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { url: 'https://images.unsplash.com/photo-1570191913384-60037a89547d?q=80&w=800', title: 'Kepulauan Raja Ampat' },
              { url: 'https://images.unsplash.com/photo-1518241443019-33161049906d?q=80&w=800', title: 'Pegunungan Lorentz' },
              { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800', title: 'Hutan Hujan Papua' },
              { url: 'https://images.unsplash.com/photo-1563290351-da96e0046e7a?q=80&w=800', title: 'Danau Sentani' },
              { url: 'https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?q=80&w=800', title: 'Lembah Baliem' },
              { url: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=800', title: 'Pesisir Pantai Papua' },
            ].map((img, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg group bg-stone-200">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-bold text-xl font-serif-heading translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Matching Reference Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#022c22] rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-2xl">
            {/* Background Shield Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <Shield size={600} />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              {/* Eye Icon Circle */}
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8 font-sans-ui">
                <div className="w-8 h-8 rounded-full bg-[#064e3b] flex items-center justify-center">
                  <Eye size={16} className="text-emerald-400" />
                </div>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif-heading tracking-tight">
                Suara Anda Adalah Bagian Dari Perubahan
              </h2>
              
              <p className="text-lg md:text-xl text-stone-300 mb-12 italic leading-relaxed font-light">
                "Sebab di mana ada kasih dan kebijaksanaan, di situ tidak ada ketakutan atau kejahilan."
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-sans-ui">
                <Link 
                  to="/lapor-aman" 
                  className="bg-[#00a37b] hover:bg-[#008f6c] text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl w-full sm:w-auto"
                >
                  Laporkan Kejadian dengan Aman
                </Link>
                <Link 
                  to="/kontak" 
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all w-full sm:w-auto"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
