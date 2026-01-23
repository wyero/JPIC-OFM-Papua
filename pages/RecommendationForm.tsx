
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, ArrowLeft, Send, ShieldCheck, Heart, Info, Upload, CheckCircle2 } from 'lucide-react';

const RecommendationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center bg-white p-12 rounded-[3rem] shadow-2xl border border-emerald-100 animate-in zoom-in-95 duration-500">
          <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <Heart size={48} className="fill-current" />
          </div>
          <h2 className="text-3xl font-bold text-emerald-950 mb-4">Terima Kasih</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Rekomendasi Anda sangat berharga bagi dokumentasi sejarah kemanusiaan di Papua. Tim kami akan meninjau profil ini untuk verifikasi lebih lanjut.
          </p>
          <Link 
            to="/tokoh"
            className="block w-full bg-emerald-800 text-white py-4 rounded-2xl font-bold hover:bg-emerald-900 transition-all shadow-lg active:scale-95"
          >
            Kembali ke Tokoh Inspiratif
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/tokoh" className="inline-flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-widest mb-10 hover:gap-3 transition-all">
          <ArrowLeft size={16} /> Kembali
        </Link>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-stone-200">
          <div className="bg-emerald-900 p-10 md:p-14 text-white relative">
            <div className="relative z-10">
              <div className="w-16 h-16 bg-emerald-400/20 rounded-2xl flex items-center justify-center mb-6">
                <UserPlus size={32} className="text-emerald-400" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Rekomendasi Tokoh</h1>
              <p className="text-emerald-100/80 leading-relaxed max-w-2xl">
                Bantu kami mendokumentasikan sosok-sosok yang telah memberikan inspirasi, melakukan pembelaan kemanusiaan, atau merawat alam di komunitas Anda.
              </p>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
              <ShieldCheck size={200} />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-14 space-y-12">
            <div className="space-y-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 border-b border-stone-100 pb-2">Informasi Tokoh</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700">Nama Lengkap Tokoh</label>
                  <input required type="text" className="w-full p-4 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Contoh: Mama Yosepha Alomang" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-stone-700">Peran / Bidang Perjuangan</label>
                  <input required type="text" className="w-full p-4 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Contoh: Aktivis Lingkungan" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-stone-700">Mengapa Tokoh ini Inspiratif?</label>
                <textarea required rows={5} className="w-full p-4 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Ceritakan kisah singkat atau jasa-jasa beliau bagi masyarakat..."></textarea>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 border-b border-stone-100 pb-2">Pendukung & Kontak</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="p-8 border-2 border-dashed border-stone-200 rounded-3xl bg-stone-50 hover:bg-emerald-50 hover:border-emerald-200 transition-all cursor-pointer group text-center">
                  <Upload size={32} className="mx-auto text-stone-300 group-hover:text-emerald-700 mb-4" />
                  <p className="text-sm font-bold text-stone-600">Unggah Foto (Opsional)</p>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">PNG, JPG up to 5MB</p>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <Info size={20} className="text-emerald-700 shrink-0" />
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      Tim JPIC akan melakukan riset mendalam sebelum mempublikasikan profil tokoh. Harap sertakan kontak Anda agar kami bisa melakukan verifikasi.
                    </p>
                  </div>
                  <input type="text" className="w-full p-4 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all" placeholder="Nomor WhatsApp Anda" />
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button type="submit" className="w-full bg-emerald-800 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-emerald-900 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3">
                Kirim Rekomendasi <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecommendationForm;
