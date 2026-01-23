
import React, { useState } from 'react';
import { MOCK_PARTNERS } from '../constants';
import { Globe, Users, Handshake, ExternalLink } from 'lucide-react';

const Partners: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Lokal' | 'Nasional' | 'Internasional'>('all');

  const categories = ['all', 'Lokal', 'Nasional', 'Internasional'];
  const filtered = filter === 'all' ? MOCK_PARTNERS : MOCK_PARTNERS.filter(p => p.category === filter);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-950 mb-6">Jaringan & Mitra</h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Perjuangan untuk keadilan di Tanah Papua tidak bisa dilakukan sendirian. Kami bangga bekerja sama dengan berbagai organisasi di tingkat lokal hingga internasional.
          </p>
        </header>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-emerald-800 text-white shadow-xl' 
                  : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
              }`}
            >
              {cat === 'all' ? 'Semua Mitra' : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((partner) => (
            <div key={partner.id} className="p-8 rounded-[2.5rem] border border-stone-200 bg-stone-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-emerald-700 group-hover:scale-110 transition-transform">
                {partner.category === 'Internasional' ? <Globe size={32} /> : partner.category === 'Nasional' ? <Users size={32} /> : <Handshake size={32} />}
              </div>
              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-[0.2em] mb-4 block">
                Partner {partner.category}
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{partner.name}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-8">
                {partner.description}
              </p>
              <div className="mt-auto flex justify-between items-center">
                <button className="text-emerald-800 font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-widest">
                  Lihat Profil <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-stone-900 rounded-[3rem] text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Membangun Kolaborasi Baru</h2>
          <p className="text-stone-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Apakah organisasi Anda memiliki visi yang selaras dengan kami? Kami mengundang Anda untuk menjalin kemitraan strategis demi kemanusiaan.
          </p>
          <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold hover:bg-emerald-500 transition-all shadow-lg active:scale-95">
            Ajukan Proposal Kerjasama
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
