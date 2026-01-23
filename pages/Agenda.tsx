
import React from 'react';
import { MOCK_AGENDA } from '../constants';
import { Calendar, MapPin, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Agenda: React.FC = () => {
  return (
    <div className="py-20 bg-stone-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-950 mb-6">Agenda Kegiatan</h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Pantau rencana kegiatan pelayanan kami. Kami mengundang partisipasi publik dalam kegiatan edukasi dan dialog kemanusiaan.
          </p>
        </header>

        <div className="space-y-8">
          {MOCK_AGENDA.map((item) => (
            <div key={item.id} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-10 items-start md:items-center group">
              <div className="bg-emerald-800 text-white p-6 rounded-3xl text-center min-w-[140px] shadow-lg group-hover:scale-105 transition-transform">
                <Calendar size={24} className="mx-auto mb-2" />
                <span className="block text-2xl font-bold">{item.date.split(' ')[0]}</span>
                <span className="block text-[10px] font-black uppercase tracking-widest">{item.date.split(' ').slice(1).join(' ')}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 text-emerald-700 mb-4">
                  <MapPin size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.location}</span>
                </div>
                <h3 className="text-3xl font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link 
                  to={`/agenda/${item.id}`}
                  className="inline-flex items-center gap-2 text-emerald-800 font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all"
                >
                  Detail Kegiatan <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-white border border-stone-200 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-inner">
           <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400">
             <Info size={32} />
           </div>
           <p className="text-stone-500 text-sm leading-relaxed text-center md:text-left italic">
             *Beberapa agenda bersifat internal untuk menjaga keamanan tim lapangan dan saksi. Silakan hubungi sekretariat untuk konfirmasi kehadiran kegiatan publik.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
