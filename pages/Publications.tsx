
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Image as ImageIcon, Search, Download, Share2 } from 'lucide-react';
import { MOCK_PUBLICATIONS } from '../constants';
import { Publication } from '../types';

const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'article' | 'infographic'>('all');
  const [search, setSearch] = useState('');

  const filtered = MOCK_PUBLICATIONS.filter(p => {
    const matchesTab = activeTab === 'all' || p.type === activeTab;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleShare = async (pub: Publication, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const shareData = {
      title: pub.title,
      text: pub.summary,
      url: `${window.location.origin}/#/publikasi/${pub.id}`,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          console.error('Error sharing:', error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert('Tautan telah disalin ke papan klip.');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Pusat Informasi & Pengetahuan</h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Menyebarkan narasi kebenaran, hasil riset lapangan, dan infografis edukatif untuk memperkuat kesadaran kolektif tentang HAM di Papua.
          </p>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          <div className="flex bg-stone-100 p-1.5 rounded-2xl border border-stone-200 w-full md:w-auto">
            <button 
              onClick={() => setActiveTab('all')}
              className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'all' ? 'bg-white text-emerald-800 shadow-sm' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Semua
            </button>
            <button 
              onClick={() => setActiveTab('article')}
              className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'article' ? 'bg-white text-emerald-800 shadow-sm' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Artikel & Opini
            </button>
            <button 
              onClick={() => setActiveTab('infographic')}
              className={`flex-1 md:flex-none px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'infographic' ? 'bg-white text-emerald-800 shadow-sm' : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              Infografis
            </button>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input 
              type="text"
              placeholder="Cari judul artikel..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-stone-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((pub) => (
            <Link 
              key={pub.id} 
              to={`/publikasi/${pub.id}`}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={pub.image} 
                  alt={pub.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-800 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest shadow-lg">
                    {pub.type === 'article' ? <BookOpen size={12} className="inline mr-1" /> : <ImageIcon size={12} className="inline mr-1" />}
                    {pub.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-xs text-stone-400 font-bold mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-stone-300"></span> {pub.date}
                </p>
                <h3 className="text-xl font-bold text-stone-900 mb-4 leading-tight group-hover:text-emerald-800 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-8 flex-grow">
                  {pub.summary}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                  <span className="text-emerald-800 font-bold text-sm hover:underline">
                    {pub.type === 'article' ? 'Baca Artikel' : 'Lihat Galeri'}
                  </span>
                  <div className="flex gap-2">
                    <button 
                      title="Download" 
                      className="w-9 h-9 rounded-full bg-stone-50 flex items-center justify-center text-stone-500 hover:bg-emerald-50 hover:text-emerald-800 transition-all"
                      onClick={(e) => { e.preventDefault(); /* logic */ }}
                    >
                      <Download size={16} />
                    </button>
                    <button 
                      onClick={(e) => handleShare(pub, e)}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 text-stone-600 hover:bg-emerald-50 hover:text-emerald-800 transition-all text-xs font-bold"
                    >
                      <Share2 size={16} />
                      Bagikan
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-stone-400 text-xl font-light italic">Belum ada konten yang tersedia untuk kategori ini.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;
