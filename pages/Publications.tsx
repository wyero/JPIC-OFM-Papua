
import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, Search, Download, Share2, FileText, Newspaper } from 'lucide-react';
import { MOCK_PUBLICATIONS } from '../constants';
import { Publication, PublicationCategory } from '../types';

const Publications: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') as PublicationCategory | 'all';
  
  const [activeTab, setActiveTab] = useState<PublicationCategory | 'all'>(initialCat || 'all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const cat = searchParams.get('cat') as PublicationCategory | 'all';
    if (cat) setActiveTab(cat);
  }, [searchParams]);

  const categories: (PublicationCategory | 'all')[] = [
    'all',
    'Publikasi Media',
    'Siaran Pers',
    'Memoria Passionis',
    'Memoria Resurectionis',
    'Laporan Berkala'
  ];

  const filtered = MOCK_PUBLICATIONS.filter(p => {
    const matchesTab = activeTab === 'all' || p.category === activeTab;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-950 mb-6 tracking-tight">Pusat Dokumentasi & Literasi</h1>
          <p className="text-stone-600 text-lg leading-relaxed font-light serif italic">
            "Menuliskan penderitaan untuk merawat harapan." Arsip digital jurnal Memoria Passionis, Siaran Pers, dan laporan berkala JPIC OFM Papua.
          </p>
        </header>

        {/* Filters Grid */}
        <div className="space-y-8 mb-16">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                  activeTab === cat 
                    ? 'bg-emerald-800 text-white shadow-xl scale-105' 
                    : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                }`}
              >
                {cat === 'all' ? 'Semua Dokumen' : cat}
              </button>
            ))}
          </div>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
            <input 
              type="text"
              placeholder="Cari berdasarkan judul atau tahun..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all font-bold text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((pub) => (
            <Link 
              key={pub.id} 
              to={`/publikasi/${pub.id}`}
              className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-stone-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pub.image} 
                  alt={pub.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-emerald-900 text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
                    {pub.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-4">
                  {pub.type === 'journal' ? <BookOpen size={14} className="text-emerald-700" /> : <Newspaper size={14} className="text-emerald-700" />}
                  <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">{pub.date}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 leading-tight group-hover:text-emerald-800 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-8">
                  {pub.summary}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-50">
                  <span className="text-emerald-700 font-black text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                    Baca Selengkapnya
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2.5 rounded-xl bg-stone-50 text-stone-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all">
                      <Download size={16} />
                    </button>
                    <button className="p-2.5 rounded-xl bg-stone-50 text-stone-400 hover:bg-emerald-50 hover:text-emerald-700 transition-all">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-40 text-center">
            <FileText size={64} className="mx-auto text-stone-200 mb-6" />
            <p className="text-stone-400 text-xl font-light italic">Dokumen belum tersedia untuk kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;
