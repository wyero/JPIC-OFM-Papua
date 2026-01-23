
import React from 'react';
import { 
  MapPin, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  MessageCircle, 
  Shield,
  Instagram,
  Facebook,
  Youtube,
  Music2,
  Globe
} from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 mb-8 font-serif-heading">Hubungi Kami</h1>
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
                  <p className="text-stone-600 leading-relaxed font-sans-ui">Jl. Taruna Bakti No. XX, Waena, Distrik Heram, Jayapura, Papua - 99358</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800 shrink-0">
                  <MessageCircle size={28} />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-stone-900 mb-3">WhatsApp & Darurat</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans-ui">
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
                  <Globe size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-3">Media Sosial</h3>
                  <div className="flex flex-wrap gap-4 font-sans-ui">
                    <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-xl hover:bg-emerald-50 transition-all font-bold text-xs uppercase tracking-widest">
                      <Facebook size={16} /> Facebook
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-xl hover:bg-emerald-50 transition-all font-bold text-xs uppercase tracking-widest">
                      <Instagram size={16} /> Instagram
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-xl hover:bg-emerald-50 transition-all font-bold text-xs uppercase tracking-widest">
                      <Music2 size={16} /> TikTok
                    </a>
                    <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-xl hover:bg-emerald-50 transition-all font-bold text-xs uppercase tracking-widest">
                      <Youtube size={16} /> YouTube
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
                  <p className="text-stone-600 font-sans-ui">sekretariat@jpicofmpapua.org</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800 shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 mb-1">Jam Operasional</h3>
                  <p className="text-stone-600 font-sans-ui">Senin - Jumat: 08.00 - 17.00 WIT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-stone-200 h-fit">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-emerald-700" />
              <h2 className="text-2xl font-bold text-stone-900 font-serif-heading">Kirim Pesan Langsung</h2>
            </div>
            <form className="space-y-6 font-sans-ui" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Masukkan nama..." />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email</label>
                  <input type="email" className="w-full p-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="alamat@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Subjek</label>
                <input type="text" className="w-full p-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Tujuan pesan..." />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Pesan Anda</label>
                <textarea rows={5} className="w-full p-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Tuliskan pesan Anda secara detail..."></textarea>
              </div>
              <button className="w-full bg-emerald-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-900 transition-all shadow-lg active:scale-95 text-xs uppercase tracking-widest">
                KIRIM PESAN <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Location Visual Card - Based on user reference image */}
        <div className="mt-20 relative w-full h-80 rounded-[2.5rem] overflow-hidden group shadow-2xl border border-stone-200">
          {/* Background: Open Book Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1544640808-32ca72ac7f67?q=80&w=2000" 
              alt="Background Book" 
              className="w-full h-full object-cover grayscale brightness-90 opacity-40 group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Overlay to match the light-greyish/beige look in the image */}
            <div className="absolute inset-0 bg-[#e5e7eb]/20 backdrop-blur-[2px]"></div>
          </div>

          {/* Centered Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            {/* Location Icon */}
            <div className="mb-6 animate-bounce duration-[2000ms]">
              <MapPin size={48} className="text-emerald-800 fill-emerald-800/10" />
            </div>

            {/* Pill Label */}
            <div className="bg-white px-8 py-3 rounded-full shadow-lg border border-stone-100 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
              <span className="text-stone-800 font-bold text-base md:text-lg font-sans-ui whitespace-nowrap">
                Jayapura – Kantor JPIC OFM Papua
              </span>
            </div>

            {/* Address Text */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <p className="text-emerald-900 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans-ui">
                JL. TARUNA BAKTI, WAENA
              </p>
            </div>
          </div>

          {/* Optional: Pattern overlay matching the app style */}
          <div className="absolute inset-0 pointer-events-none bg-papua-pattern opacity-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
