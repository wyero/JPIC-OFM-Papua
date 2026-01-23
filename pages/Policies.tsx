
import React from 'react';
import { ShieldCheck, FileText, Lock, EyeOff, BookOpen, Download } from 'lucide-react';

const Policies: React.FC = () => {
  const policies = [
    { title: 'Kode Etik Pelayanan', icon: ShieldCheck, desc: 'Panduan moral dan profesionalisme bagi seluruh staf dan sukarelawan JPIC OFM Papua dalam mendampingi korban.' },
    { title: 'Kebijakan Privasi Data', icon: Lock, desc: 'Komitmen kami dalam mengamankan data pribadi pelapor dan saksi pelanggaran HAM.' },
    { title: 'Prosedur Laporan Aman', icon: EyeOff, desc: 'Standar operasional dalam menangani aduan masyarakat secara rahasia dan aman.' },
    { title: 'Kebijakan Perlindungan Anak', icon: BookOpen, desc: 'Aturan khusus mengenai pendampingan bagi korban usia di bawah umur.' }
  ];

  return (
    <div className="py-20 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-950 mb-6">Kebijakan & Etika</h1>
          <p className="text-stone-600 text-lg leading-relaxed">
            Integritas dan kepercayaan publik adalah fondasi dari setiap karya pelayanan kami. Berikut adalah dokumen standar operasional dan kode etik resmi yang kami junjung tinggi.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((p, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex items-start gap-8 group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 shrink-0 group-hover:bg-emerald-800 group-hover:text-white transition-colors duration-500 shadow-inner">
                <p.icon size={32} />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{p.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-8">
                  {p.desc}
                </p>
                <button className="flex items-center gap-2 bg-stone-50 border border-stone-100 px-6 py-3 rounded-xl text-stone-600 font-bold text-xs uppercase tracking-widest hover:bg-emerald-50 hover:text-emerald-800 transition-all">
                  Unduh Dokumen <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-emerald-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
           <div className="md:w-1/3 relative z-10">
             <div className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mx-auto">
               <ShieldCheck size={64} className="text-emerald-400" />
             </div>
           </div>
           <div className="md:w-2/3 relative z-10 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Pax et Bonum - Damai dan Kebaikan</h2>
              <p className="text-emerald-100/80 mb-0 leading-relaxed italic font-light serif">
                "Segala pelayanan kami tunduk pada hukum kemanusiaan yang universal dan hukum cinta kasih Fransiskan. Kami tidak akan pernah mengkhianati kepercayaan yang diberikan oleh para korban dan masyarakat adat Papua."
              </p>
              <p className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300">Sekretariat JPIC OFM Papua</p>
           </div>
           <FileText size={400} className="absolute bottom-[-100px] left-[-100px] text-white/5 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Policies;
