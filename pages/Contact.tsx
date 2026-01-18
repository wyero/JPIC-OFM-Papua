
import React from 'react';
// Added Shield to the imports from lucide-react to fix the error on line 44
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, MessageCircle, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-8">Hubungi Kami</h1>
            <p className="text-stone-600 text-lg mb-12 leading-relaxed">
              Kami terbuka untuk kolaborasi, aduan, maupun bantuan pendampingan. Jangan ragu untuk menghubungi kami melalui saluran resmi di bawah ini.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800 shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Kantor Pusat</h3>
                  <p className="text-stone-600 leading-relaxed">Jl. Taruna Bakti No. XX, Waena, Distrik Heram, Jayapura, Papua - 99358</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800 shrink-0">
                  <MessageCircle size={28} />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-stone-900 mb-3">WhatsApp & Darurat</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href="https://wa.me/6281200000000"
                      className="flex items-center gap-3 bg-[#25D366]/10 text-[#075E54] px-5 py-3 rounded-xl border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all font-bold text-sm"
                    >
                      <MessageCircle size={18} /> Chat Admin
                    </a>
                    <a 
                      href="https://wa.me/6281100000000"
                      className="flex items-center gap-3 bg-red-50 text-red-800 px-5 py-3 rounded-xl border border-red-200 hover:bg-red-600 hover:text-white transition-all font-bold text-sm"
                    >
                      <Shield size={18} /> Darurat HAM
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800 shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Email Resmi</h3>
                  <p className="text-stone-600">sekretariat@jpicofmpapua.org</p>
                  <p className="text-stone-600">lapor@jpicofmpapua.org (Khusus Pengaduan)</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800 shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Jam Operasional</h3>
                  <p className="text-stone-600">Senin - Jumat: 08.00 - 17.00 WIT</p>
                  <p className="text-stone-600">Sabtu & Minggu: Khusus Janji Temu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-stone-200">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-emerald-700" />
              <h2 className="text-2xl font-bold text-stone-900">Kirim Pesan Langsung</h2>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-stone-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Masukkan nama..." />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email</label>
                  <input type="email" className="w-full p-4 rounded-xl border border-stone-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="alamat@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Subjek</label>
                <input type="text" className="w-full p-4 rounded-xl border border-stone-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Tujuan pesan..." />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Pesan Anda</label>
                <textarea rows={5} className="w-full p-4 rounded-xl border border-stone-300 bg-white focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Tuliskan pesan Anda secara detail..."></textarea>
              </div>
              <button className="w-full bg-emerald-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-lg active:scale-95">
                KIRIM PESAN <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Embedded Map Simulation */}
      <div className="mt-24 w-full h-96 bg-stone-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-bold flex-col gap-4 z-10 bg-stone-900/10">
           <MapPin size={48} className="text-emerald-700" />
           <p className="text-stone-800 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">Jayapura - Kantor JPIC OFM Papua</p>
           <p className="text-[10px] uppercase tracking-[0.3em] font-black text-emerald-900">Jl. Taruna Bakti, Waena</p>
        </div>
        <img src="https://picsum.photos/seed/map/1920/400?grayscale" alt="Map Placeholder" className="w-full h-full object-cover opacity-40" />
      </div>
    </div>
  );
};

export default Contact;
