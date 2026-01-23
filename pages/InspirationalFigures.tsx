
import React, { useState, useMemo } from 'react';
import { MOCK_FIGURES } from '../constants';
import { X, ChevronRight, Filter, Sparkles, Lightbulb } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Figure, FigureCategory } from '../types';

const InspirationalFigures: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FigureCategory | 'All'>('All');
  const navigate = useNavigate();

  const categories: (FigureCategory | 'All')[] = ['All', 'HAM', 'Lingkungan', 'Perdamaian', 'Spiritual'];

  const filteredFigures = useMemo(() => {
    if (activeCategory === 'All') return MOCK_FIGURES;
    return MOCK_FIGURES.filter(f => f.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-[#fdfcf9] min-h-screen">
      {/* Creative Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-emerald-950 py-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] mb-10 font-sans-ui animate-in fade-in slide-in-from-top-4 duration-700">
            <Lightbulb size={14} className="animate-pulse" /> Jejak Cahaya di Tanah Papua
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-10 tracking-tighter font-serif-heading leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Tokoh <span className="italic font-light text-emerald-400">Inspiratif</span>
          </h1>
          <p className="text-lg md:text-2xl text-emerald-100/60 max-w-2xl mx-auto leading-relaxed font-light serif italic">
            "Menghormati mereka yang keberaniannya menjadi obor keadilan bagi sesama dan pelindung bagi alam semesta."
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Integrated Filter Bar */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-[10px] font-black text-stone-400 uppercase tracking-[0.4em] mb-8 font-sans-ui">Filter Berdasarkan Perjuangan</h2>
          <div className="bg-white p-2 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-stone-100 flex flex-wrap justify-center gap-1 font-sans-ui">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold text-[10px] uppercase tracking-[0.15em] transition-all duration-500 ${
                  activeCategory === cat 
                    ? 'bg-emerald-900 text-white shadow-lg shadow-emerald-900/20' 
                    : 'text-stone-500 hover:text-emerald-900 hover:bg-emerald-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Figures Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {filteredFigures.map((figure, idx) => (
            <div 
              key={figure.id} 
              className="group relative flex flex-col animate-in fade-in slide-in-from-bottom-12 duration-700 cursor-pointer"
              style={{ animationDelay: `${idx * 150}ms` }}
              onClick={() => navigate(`/tokoh/${figure.id}`)}
            >
              {/* Image Container with Glow Effect */}
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 transform group-hover:-translate-y-4 transition-all duration-700">
                <img 
                  src={figure.image} 
                  alt={figure.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                {/* Floating Category Tag */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-emerald-900 text-[9px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-xl">
                    {figure.category}
                  </span>
                </div>
              </div>

              {/* Textual Content Below Image */}
              <div className="px-2">
                <p className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em] mb-3 font-sans-ui">{figure.role}</p>
                <h3 className="text-3xl font-bold text-stone-900 mb-4 font-serif-heading leading-tight group-hover:text-emerald-800 transition-colors">{figure.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed italic serif line-clamp-2 mb-6">
                  "{figure.quote}"
                </p>
                <button className="flex items-center gap-2 text-stone-900 font-black text-[10px] uppercase tracking-widest font-sans-ui group-hover:gap-4 transition-all">
                  Eksplorasi Kisah <ChevronRight size={14} className="text-emerald-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="mt-32 relative group">
          <div className="absolute inset-0 bg-emerald-900 rounded-[4rem] transform -rotate-1 group-hover:rotate-0 transition-transform duration-1000"></div>
          <div className="relative z-10 p-12 md:p-24 bg-emerald-950 rounded-[4rem] text-white text-center shadow-2xl overflow-hidden">
            <div className="max-w-3xl mx-auto">
              <Sparkles className="text-emerald-400 mx-auto mb-10 animate-bounce" size={48} />
              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif-heading">Jadilah Bagian Dari Dokumentasi Kami</h2>
              <p className="text-lg md:text-xl text-emerald-100/60 mb-12 leading-relaxed font-light">
                Apakah ada sosok di wilayah Anda yang gigih memperjuangkan keadilan? Kami percaya setiap suara berhak didengar dan setiap perjuangan layak diabadikan.
              </p>
              <Link 
                to="/tokoh/rekomendasi"
                className="inline-flex items-center gap-4 bg-white text-emerald-950 px-12 py-5 rounded-full font-bold transition-all hover:bg-emerald-50 active:scale-95 shadow-xl font-sans-ui text-xs uppercase tracking-widest"
              >
                Kirim Rekomendasi Tokoh <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationalFigures;
