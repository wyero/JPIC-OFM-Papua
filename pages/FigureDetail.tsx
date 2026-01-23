
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_FIGURES } from '../constants';
import { Quote, ArrowLeft, Heart, Share2, BookOpen, Shield, Award, Sparkles, ChevronRight } from 'lucide-react';

const FigureDetail: React.FC = () => {
  const { id } = useParams();
  const figure = MOCK_FIGURES.find(f => f.id === id);

  if (!figure) {
    return (
      <div className="py-32 text-center px-4 bg-stone-50 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-stone-900 mb-4 font-serif-heading">Sosok tidak ditemukan</h2>
        <p className="text-stone-600 mb-8 max-w-md mx-auto">Maaf, data tokoh yang Anda cari tidak tersedia dalam arsip kami saat ini.</p>
        <Link to="/tokoh" className="bg-emerald-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-emerald-900 transition-all">
          <ArrowLeft size={18} /> Kembali ke Galeri Tokoh
        </Link>
      </div>
    );
  }

  const relatedFigures = MOCK_FIGURES.filter(f => f.id !== id).slice(0, 2);

  return (
    <div className="bg-[#fdfcf9] min-h-screen pb-24">
      {/* Immersive Hero Header */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-emerald-950">
        <img 
          src={figure.image} 
          alt={figure.name} 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45] scale-105"
        />
        {/* Abstract Light Mesh Over Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <Link to="/tokoh" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-12 hover:text-white transition-all hover:-translate-x-1 font-sans-ui">
              <ArrowLeft size={16} /> Kembali ke Galeri Tokoh
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="bg-emerald-600/30 backdrop-blur-md border border-emerald-400/30 text-emerald-100 text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-xl font-sans-ui">
                {figure.category}
              </span>
              <span className="text-emerald-400/80 text-[10px] font-black uppercase tracking-widest font-sans-ui">
                {figure.role}
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9] font-serif-heading drop-shadow-2xl">
              {figure.name}
            </h1>
            
            <div className="relative pl-12 border-l-4 border-emerald-500/50">
              <Quote className="absolute -left-6 top-0 text-emerald-400/30" size={64} />
              <p className="text-xl md:text-3xl text-emerald-50/90 font-light italic serif leading-relaxed">
                "{figure.quote}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* Main Narrative */}
          <article className="lg:col-span-8">
            <div className="prose prose-stone prose-lg md:prose-xl max-w-none space-y-12">
              <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-emerald-950/5 border border-stone-100 relative overflow-hidden group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                  <BookOpen size={160} className="text-emerald-900" />
                </div>
                
                <h2 className="text-3xl font-bold text-emerald-950 mb-8 font-serif-heading flex items-center gap-4">
                  <div className="w-10 h-1 h-px bg-emerald-600"></div> Ikhtisar Perjuangan
                </h2>
                
                <p className="text-xl md:text-2xl text-stone-800 leading-relaxed font-medium italic serif mb-10">
                  {figure.summary}
                </p>
                
                <div className="text-stone-600 leading-relaxed text-lg space-y-6">
                  {figure.biography?.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  )) || (
                    <p className="italic text-stone-400">Arsip riwayat hidup lengkap sedang dalam proses digitalisasi oleh tim pustaka JPIC OFM Papua.</p>
                  )}
                </div>
              </div>

              {/* Impact / Legacy Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100 flex flex-col items-start shadow-inner">
                  <Award className="text-emerald-700 mb-6" size={32} />
                  <h3 className="text-xl font-bold text-emerald-900 mb-4 font-serif-heading uppercase tracking-wide text-xs">Capaian & Penghargaan</h3>
                  <ul className="space-y-4 text-emerald-800/80 text-sm font-medium">
                    <li className="flex gap-3"><Sparkles size={16} className="shrink-0 mt-1 text-emerald-600" /> Menjadi inspirasi bagi gerakan akar rumput di wilayah adat.</li>
                    <li className="flex gap-3"><Sparkles size={16} className="shrink-0 mt-1 text-emerald-600" /> Konsistensi dalam menyuarakan keadilan selama puluhan tahun.</li>
                    <li className="flex gap-3"><Sparkles size={16} className="shrink-0 mt-1 text-emerald-600" /> Penerimaan oleh komunitas sebagai penjaga kearifan lokal.</li>
                  </ul>
                </div>

                <div className="p-10 bg-stone-900 text-white rounded-[3rem] shadow-2xl flex flex-col items-start relative overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay"></div>
                  <Shield className="text-emerald-400 mb-6 relative z-10" size={32} />
                  <h3 className="text-xl font-bold mb-4 font-serif-heading uppercase tracking-wide text-xs relative z-10">Warisan Semangat</h3>
                  <p className="text-emerald-100/70 text-sm leading-relaxed relative z-10">
                    Semangat beliau tetap hidup melalui kader-kader muda JPIC yang terus mengawal perjuangan hak masyarakat adat dan pelestarian alam di Tanah Papua.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="mt-20 pt-12 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-8 font-sans-ui">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-emerald-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-900 transition-all shadow-xl active:scale-95 text-xs uppercase tracking-widest">
                  <Heart size={16} /> Beri Penghormatan
                </button>
                <button className="flex items-center gap-2 border border-stone-200 px-8 py-4 rounded-2xl font-bold text-stone-600 hover:bg-stone-50 transition-all active:scale-95 text-xs uppercase tracking-widest">
                  <Share2 size={16} /> Bagikan Kisah
                </button>
              </div>
              <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.3em]">Arsip Digital JPIC OFM Papua</p>
            </div>
          </article>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Figure Metadata Card */}
            <div className="p-10 bg-white rounded-[3rem] border border-stone-200 shadow-xl font-sans-ui">
              <h3 className="font-black text-stone-400 text-[10px] uppercase tracking-[0.4em] mb-10">Metadata Arsip</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-[9px] font-black text-emerald-700 uppercase tracking-widest mb-2">Bidang Perjuangan</p>
                  <p className="text-xl font-bold text-stone-900">{figure.category}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-emerald-700 uppercase tracking-widest mb-2">Status Pelayanan</p>
                  <p className="text-xl font-bold text-stone-900">{figure.role}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-emerald-700 uppercase tracking-widest mb-2">Lokasi Fokus</p>
                  <p className="text-xl font-bold text-stone-900">Seluruh Tanah Papua</p>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-stone-100">
                <p className="text-[10px] text-stone-400 italic leading-relaxed">
                  Data ini diverifikasi oleh Departemen Dokumentasi dan Informasi JPIC OFM Papua sebagai bagian dari Literasi Kemanusiaan.
                </p>
              </div>
            </div>

            {/* Related Figures */}
            <div className="space-y-8">
              <h3 className="font-black text-stone-400 text-[10px] uppercase tracking-[0.4em] mb-4">Tokoh Lainnya</h3>
              <div className="space-y-6">
                {relatedFigures.map(other => (
                  <Link 
                    key={other.id} 
                    to={`/tokoh/${other.id}`}
                    className="group flex gap-5 items-center p-4 bg-white rounded-3xl border border-transparent hover:border-emerald-200 transition-all shadow-sm hover:shadow-xl"
                  >
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                      <img src={other.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" alt={other.name} />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-1">{other.name}</h4>
                      <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">{other.category}</p>
                    </div>
                    <ChevronRight className="ml-auto text-stone-300 group-hover:text-emerald-600 transition-all" size={16} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Suggestion CTA */}
            <div className="bg-emerald-950 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 text-center">
                <Sparkles className="text-emerald-400 mx-auto mb-6" size={32} />
                <h3 className="text-2xl font-bold mb-4 font-serif-heading">Ada Sosok Inspiratif Lain?</h3>
                <p className="text-emerald-100/60 text-sm mb-10 leading-relaxed font-light font-sans-ui">
                  Jika Anda mengenal sosok di komunitas Anda yang berjasa bagi kemanusiaan, mari abadikan kisah mereka dalam arsip kami.
                </p>
                <Link to="/tokoh/rekomendasi" className="block w-full bg-white text-emerald-950 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-50 transition-all active:scale-95 shadow-lg font-sans-ui">
                  Kirim Rekomendasi
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default FigureDetail;
