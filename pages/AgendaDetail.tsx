
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_AGENDA } from '../constants';
import { Calendar, MapPin, Clock, ArrowLeft, Share2, MessageCircle, Info, Bell, Plus } from 'lucide-react';

const AgendaDetail: React.FC = () => {
  const { id } = useParams();
  const activity = MOCK_AGENDA.find(a => a.id === id);

  if (!activity) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold">Agenda tidak ditemukan.</h2>
        <Link to="/agenda" className="text-emerald-800 mt-4 block underline">Kembali ke Daftar Agenda</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-emerald-950 pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/agenda" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-widest mb-10 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Kembali ke Agenda
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-emerald-800 text-emerald-300 text-[10px] font-black px-4 py-2 rounded-lg border border-emerald-700 uppercase tracking-widest">
                  Kegiatan Publik
                </span>
                <span className="text-emerald-400 text-xs font-bold flex items-center gap-2">
                   <Bell size={14} /> Terbuka untuk Umum
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                {activity.title}
              </h1>
              <div className="flex flex-wrap gap-6 md:gap-10">
                <div className="flex items-center gap-3 text-emerald-100">
                  <Calendar className="text-emerald-400" size={24} />
                  <div>
                    <p className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Tanggal</p>
                    <p className="font-bold">{activity.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-emerald-100">
                  <MapPin className="text-emerald-400" size={24} />
                  <div>
                    <p className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Lokasi</p>
                    <p className="font-bold">{activity.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-emerald-100">
                  <Clock className="text-emerald-400" size={24} />
                  <div>
                    <p className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Waktu</p>
                    <p className="font-bold">09:00 WIT - Selesai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex gap-4">
              <button className="flex-1 bg-white text-emerald-950 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all shadow-xl active:scale-95">
                <Plus size={18} /> Tambah Kalender
              </button>
              <button className="p-4 bg-emerald-800 text-white rounded-2xl hover:bg-emerald-700 transition-all">
                <Share2 size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
          <Calendar size={500} className="text-white" />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
            <div className="prose prose-stone prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-emerald-950 mb-6">Tentang Kegiatan</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {activity.description}
              </p>
              <p className="text-stone-600 leading-relaxed text-lg">
                Kegiatan ini bertujuan untuk memperkuat koordinasi antara tim JPIC di tingkat basis dengan mitra strategis kami. Kami akan membahas strategi dokumentasi baru dan peningkatan prosedur keamanan bagi para saksi di wilayah konflik.
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-emerald-900">
                <Info size={20} /> Ketentuan Kehadiran
              </h3>
              <ul className="space-y-4">
                {[
                  'Wajib melakukan konfirmasi kehadiran maksimal H-2',
                  'Peserta diharapkan membawa identitas diri yang valid',
                  'Dilarang melakukan dokumentasi tanpa izin panitia demi alasan keamanan',
                  'Makan siang dan snack disediakan oleh panitia'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-stone-600 text-sm font-medium">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-10">
            {/* Map Placeholder */}
            <div className="bg-stone-100 h-80 rounded-[2.5rem] relative overflow-hidden group border border-stone-200">
               <div className="absolute inset-0 flex items-center justify-center bg-stone-900/10 group-hover:bg-transparent transition-all z-10">
                 <div className="bg-white/90 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                    <MapPin className="text-emerald-700" />
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-950">Lihat di Google Maps</span>
                 </div>
               </div>
               <img src={`https://picsum.photos/seed/${activity.location}/600/400?grayscale`} className="w-full h-full object-cover opacity-40" alt="Location Map" />
            </div>

            {/* RSVP Card */}
            <div className="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">Ingin Bergabung?</h3>
              <p className="text-stone-500 text-sm mb-8">Hubungi admin kami untuk pendaftaran dan informasi akomodasi kegiatan.</p>
              <a 
                href="https://wa.me/6281234567890" 
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
              >
                <MessageCircle size={20} /> CHAT WHATSAPP
              </a>
              <p className="mt-6 text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">Respon dalam 24 Jam</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AgendaDetail;
