
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { WORK_AREAS } from '../constants';
import { Shield, Users, Search, Leaf, ArrowRight, BookOpen, AlertCircle, Trophy, CheckCircle2, Database, Map, Microscope, FileCheck, Globe } from 'lucide-react';

const WorkDetail: React.FC = () => {
  const { category } = useParams();
  const work = WORK_AREAS.find(w => w.id === category);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield size={48} />;
      case 'Users': return <Users size={48} />;
      case 'Search': return <Search size={48} />;
      case 'Leaf': return <Leaf size={48} />;
      default: return <BookOpen size={48} />;
    }
  };

  if (!work) return (
    <div className="py-32 text-center">
      <h2 className="text-3xl font-bold">Karya tidak ditemukan.</h2>
      <Link to="/" className="text-emerald-800 mt-4 block underline">Kembali ke Beranda</Link>
    </div>
  );

  const isSitasiSocial = work.id === 'sitasi-social';

  return (
    <div className="bg-white pb-20">
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <img src={work.image} alt={work.title} className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-900/40 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8 animate-in slide-in-from-left duration-700">
            <div className="p-5 bg-emerald-600/80 backdrop-blur-md rounded-[2rem] w-fit shadow-2xl border border-emerald-400/30">
              {getIcon(work.icon)}
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400 mb-2 block font-sans-ui">Karya Pelayanan Kami</span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter font-serif-heading">{work.title}</h1>
            </div>
          </div>
          <p className="text-xl md:text-3xl text-stone-200 max-w-3xl font-light italic leading-relaxed">
            "{work.description}"
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-20">
            {/* Mission Section */}
            <div className="prose prose-stone prose-xl max-w-none">
              <h2 className="text-4xl font-bold text-emerald-950 mb-8 border-b border-stone-100 pb-4 font-serif-heading">Misi Pelayanan</h2>
              <p className="text-lg leading-relaxed text-stone-600">
                {work.content}
              </p>
            </div>

            {/* Special Interactive Section for Sitasi Sosial */}
            {isSitasiSocial && (
              <div className="space-y-16 animate-in fade-in duration-1000">
                {/* Methodology Flow */}
                <div className="bg-stone-50 p-8 md:p-12 rounded-[3rem] border border-stone-200 shadow-inner">
                  <h3 className="text-2xl font-bold text-emerald-950 mb-10 font-serif-heading flex items-center gap-3">
                    <Microscope className="text-emerald-700" /> Metodologi Riset Kemanusiaan
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Flow Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-emerald-200 -translate-y-8 z-0"></div>
                    
                    {[
                      { icon: Map, title: 'Pemetaan', desc: 'Identifikasi titik konflik dan wilayah terdampak.' },
                      { icon: Users, title: 'Investigasi', desc: 'Wawancara mendalam dengan korban dan saksi.' },
                      { icon: FileCheck, title: 'Verifikasi', desc: 'Validasi data dengan bukti fisik dan laporan medis.' },
                      { icon: Globe, title: 'Diseminasi', desc: 'Pelaporan ke tingkat nasional dan internasional.' }
                    ].map((step, idx) => (
                      <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-stone-100 mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-all duration-500">
                          <step.icon size={28} />
                        </div>
                        <h4 className="font-bold text-emerald-950 mb-2">{step.title}</h4>
                        <p className="text-xs text-stone-500 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data Insights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Data Terverifikasi', val: '5.400+', icon: Database },
                    { label: 'Wilayah Adat', val: '7 Wilayah', icon: Map },
                    { label: 'Laporan Publik', val: '40+', icon: BookOpen },
                  ].map((stat, idx) => (
                    <div key={idx} className="p-8 bg-emerald-900 text-white rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-transform duration-500 group">
                      <stat.icon className="text-emerald-400 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
                      <p className="text-3xl font-bold font-serif-heading mb-1">{stat.val}</p>
                      <p className="text-[10px] uppercase tracking-widest font-black text-emerald-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Grid of Success vs Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100 shadow-inner">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-700 shadow-sm">
                    <Trophy size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900 uppercase tracking-wide text-xs font-sans-ui">Capaian Utama</h3>
                </div>
                <ul className="space-y-6">
                  {work.keySuccesses.map(item => (
                    <li key={item} className="flex gap-4 text-emerald-800 font-bold items-start group">
                      <CheckCircle2 size={20} className="shrink-0 mt-1 text-emerald-600 group-hover:scale-125 transition-transform" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 p-10 rounded-[3rem] border border-stone-200 shadow-inner">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-700 shadow-sm">
                    <AlertCircle size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 uppercase tracking-wide text-xs font-sans-ui">Tantangan Saat Ini</h3>
                </div>
                <ul className="space-y-6">
                  {work.challenges.map(item => (
                    <li key={item} className="flex gap-4 text-stone-600 font-medium items-start group">
                      <div className="w-2 h-2 bg-amber-400 rounded-full shrink-0 mt-2 group-hover:bg-amber-600 transition-colors" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content for Sitasi Social - Request Data */}
            {isSitasiSocial && (
              <div className="p-12 bg-[#022c22] rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold font-serif-heading mb-4">Akses Data & Kolaborasi Riset</h3>
                  <p className="text-emerald-100/70 mb-8 leading-relaxed max-w-xl">
                    Kami menyediakan data terverifikasi bagi akademisi, peneliti, dan lembaga kemanusiaan untuk memperkuat narasi keadilan di Papua.
                  </p>
                  <Link to="/kontak" className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl active:scale-95 group font-sans-ui text-sm uppercase tracking-widest">
                    Ajukan Permohonan Data
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <Search size={300} className="absolute -right-20 -bottom-20 text-white/5 pointer-events-none" />
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-stone-200 shadow-xl">
              <h3 className="font-black text-stone-400 text-[10px] uppercase tracking-[0.2em] mb-8 font-sans-ui">Eksplorasi Karya Lain</h3>
              <div className="space-y-5">
                {WORK_AREAS.filter(w => w.id !== category).map(other => (
                  <Link key={other.id} to={`/karya/${other.id}`} className="group flex items-center justify-between p-5 bg-stone-50 rounded-2xl border border-transparent hover:border-emerald-300 hover:bg-emerald-50 transition-all">
                    <span className="font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">{other.title}</span>
                    <ArrowRight size={18} className="text-stone-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-emerald-950 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 font-serif-heading">Butuh Pendampingan?</h3>
                <p className="text-emerald-100/70 text-sm mb-10 leading-relaxed font-light">
                  Jika wilayah atau komunitas Anda membutuhkan pendampingan khusus di bidang {work.title}, jangan ragu untuk berdiskusi dengan tim kami secara aman.
                </p>
                <Link to="/kontak" className="block w-full text-center bg-white text-emerald-950 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-50 transition-all active:scale-95 shadow-lg font-sans-ui">
                  Konsultasi Sekarang
                </Link>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
                 {getIcon(work.icon)}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
