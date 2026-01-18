
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, Download, BookOpen, ImageIcon, ChevronRight, Shield } from 'lucide-react';
import { MOCK_PUBLICATIONS } from '../constants';

const PublicationDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const publication = MOCK_PUBLICATIONS.find(p => p.id === id);

  if (!publication) {
    return (
      <div className="py-32 text-center px-4">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Konten tidak ditemukan</h2>
        <p className="text-stone-600 mb-8">Maaf, artikel yang Anda cari tidak tersedia atau telah dipindahkan.</p>
        <Link to="/publikasi" className="text-emerald-800 font-bold flex items-center justify-center gap-2">
          <ArrowLeft size={18} /> Kembali ke Publikasi
        </Link>
      </div>
    );
  }

  const relatedContent = MOCK_PUBLICATIONS.filter(p => p.id !== id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header / Hero - Responsive Height Layout */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-end overflow-hidden">
        <img 
          src={publication.image} 
          alt={publication.title} 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Link to="/publikasi" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-[10px] uppercase tracking-[0.25em] mb-6 md:mb-10 hover:text-white transition-all hover:-translate-x-1">
              <ArrowLeft size={16} /> Kembali ke Publikasi
            </Link>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8 md:mb-10">
              <span className="bg-emerald-600 text-white text-[9px] md:text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-[0.2em] shadow-xl">
                {publication.category}
              </span>
              <span className="text-white/80 text-xs md:text-sm font-semibold flex items-center gap-2">
                <Calendar size={16} className="text-emerald-400" /> {publication.date}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 drop-shadow-2xl">
              {publication.title}
            </h1>
            <p className="text-emerald-50/80 text-base sm:text-xl lg:text-2xl font-light italic serif max-w-4xl leading-relaxed">
              {publication.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div 
              className="prose prose-stone prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none text-stone-700 leading-relaxed space-y-8"
              dangerouslySetInnerHTML={{ __html: publication.content || publication.summary }}
            />
            
            {/* Footer Actions */}
            <div className="mt-16 md:mt-20 pt-12 border-t border-stone-100 flex flex-col sm:flex-row gap-6 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="flex items-center justify-center gap-2 bg-emerald-800 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-900 transition-all shadow-xl hover:shadow-emerald-900/20 active:scale-95 whitespace-nowrap">
                  <Download size={20} /> Unduh Berkas
                </button>
                <button className="flex items-center justify-center gap-2 border border-stone-200 px-8 py-4 rounded-2xl font-bold text-stone-600 hover:bg-stone-50 transition-all active:scale-95 whitespace-nowrap">
                  <Share2 size={20} /> Bagikan
                </button>
              </div>
              <div className="text-center sm:text-right w-full sm:w-auto">
                <p className="text-[10px] text-stone-400 font-black uppercase tracking-[0.2em] mb-2">Penerbit</p>
                <p className="text-sm md:text-base text-stone-900 font-black">Sekretariat JPIC OFM Papua</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10 md:space-y-12">
            {/* About Section */}
            <div className="p-8 md:p-10 bg-stone-50 rounded-[2.5rem] border border-stone-200/60 shadow-inner">
              <h3 className="font-black text-emerald-900 mb-6 uppercase tracking-[0.2em] text-[10px]">Pusat Dokumentasi</h3>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-8">
                Kami mendokumentasikan setiap peristiwa dengan teliti untuk memastikan suara mereka yang terpinggirkan tetap terdengar. Tulisan ini merupakan bagian dari upaya advokasi berkelanjutan kami.
              </p>
              <Link to="/profil" className="inline-flex items-center gap-2 text-emerald-800 font-bold text-sm hover:gap-3 transition-all">
                Pelajari Visi & Misi Kami <ChevronRight size={18} />
              </Link>
            </div>

            {/* Related Content */}
            <div className="space-y-8">
              <h3 className="font-black text-stone-400 mb-4 uppercase tracking-[0.2em] text-[10px]">Artikel Terkait</h3>
              <div className="space-y-6 md:space-y-8">
                {relatedContent.map(item => (
                  <Link 
                    key={item.id} 
                    to={`/publikasi/${item.id}`}
                    className="group block"
                  >
                    <div className="flex gap-4 md:gap-5 items-start">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:shadow-emerald-900/10 transition-shadow">
                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      </div>
                      <div className="space-y-2">
                        <span className="text-[9px] md:text-[10px] font-black text-emerald-700 uppercase tracking-tighter bg-emerald-50 px-2.5 py-1 rounded-md">{item.category}</span>
                        <h4 className="text-base md:text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors leading-tight line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-[10px] md:text-xs text-stone-400 font-medium">{item.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Urgent Report CTA */}
            <div className="bg-emerald-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <Shield size={40} className="text-emerald-400 mb-6" />
                <h3 className="text-xl md:text-2xl font-bold mb-4">Laporkan Kejadian</h3>
                <p className="text-emerald-100/70 text-xs md:text-sm mb-10 leading-relaxed">Keamanan data Anda adalah jaminan kami. Bantu kami mendokumentasikan kebenaran secara anonim melalui platform enkripsi kami.</p>
                <Link to="/lapor-aman" className="block w-full text-center bg-white text-emerald-900 py-4 md:py-5 rounded-2xl font-bold hover:bg-emerald-50 transition-all shadow-xl active:scale-95 text-sm">
                  Buka Pojok Lapor Aman
                </Link>
              </div>
              <BookOpen className="absolute -bottom-12 -right-12 text-white/5 pointer-events-none" size={240} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PublicationDetail;
