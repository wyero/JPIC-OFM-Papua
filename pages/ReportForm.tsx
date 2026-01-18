
import React, { useState } from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Lock, 
  Info, 
  Send, 
  Upload, 
  CheckCircle2, 
  MapPin, 
  Calendar, 
  FileText, 
  UserCircle,
  AlertTriangle
} from 'lucide-react';
import { ViolationType } from '../types';
import { REGIONS } from '../constants';

const ReportForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    incidentType: '',
    location: '',
    date: '',
    description: '',
    witnesses: '',
    contactInfo: '',
    isAnonymous: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulation logic here
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center bg-white p-12 rounded-3xl shadow-2xl border border-emerald-100 animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-2xl font-bold text-emerald-950 mb-4">Laporan Diterima</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Terima kasih atas keberanian Anda untuk melapor. Tim kami akan segera meninjau informasi ini dengan tingkat kerahasiaan tertinggi.
          </p>
          <div className="p-4 bg-emerald-50 rounded-xl mb-8">
            <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-widest">Nomor Referensi</p>
            <p className="text-lg font-mono font-bold text-emerald-900">JPIC-2024-{Math.floor(1000 + Math.random() * 9000)}</p>
          </div>
          <p className="text-xs text-stone-400 italic mb-8">
            "Pax et Bonum - Damai dan Kebaikan"
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-emerald-800 text-white py-4 rounded-xl font-bold hover:bg-emerald-900 transition-all shadow-lg active:scale-95"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Unified Trust Header */}
        <div className="bg-emerald-900 text-white p-10 rounded-t-3xl shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-400/20 rounded-lg">
                  <ShieldAlert className="text-emerald-400" size={28} />
                </div>
                <h1 className="text-3xl font-bold">Pojok Lapor Aman</h1>
              </div>
              <p className="text-emerald-100/90 text-sm leading-relaxed">
                Platform aman untuk melaporkan pelanggaran hak asasi manusia dan ketidakadilan lingkungan di Tanah Papua. Seluruh data dienkripsi dan privasi Anda adalah jaminan utama kami.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Lock className="text-emerald-300" size={32} />
              <span className="text-[10px] font-bold uppercase tracking-tighter text-center">Enkripsi End-to-End <br/> Aktif</span>
            </div>
          </div>
          <div className="absolute right-[-40px] bottom-[-40px] opacity-5 pointer-events-none">
            <ShieldCheck size={240} />
          </div>
        </div>

        {/* Main Form Content */}
        <form onSubmit={handleSubmit} className="bg-white border-x border-b border-stone-200 p-6 md:p-12 rounded-b-3xl shadow-2xl space-y-12">
          
          {/* Section 1: Detail Kejadian */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-stone-100">
              <AlertTriangle className="text-emerald-700" size={20} />
              <h2 className="text-xl font-bold text-emerald-950 uppercase tracking-wide text-sm">Bagian 1: Detail Kejadian</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-stone-700">
                  <FileText size={16} className="text-emerald-600" />
                  Jenis Pelanggaran / Kejadian
                </label>
                <select 
                  required
                  className="w-full p-4 rounded-xl border border-stone-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm hover:border-emerald-300"
                  value={formData.incidentType}
                  onChange={(e) => setFormData({...formData, incidentType: e.target.value})}
                >
                  <option value="">Pilih Jenis</option>
                  {Object.values(ViolationType).map(v => <option key={v} value={v}>{v}</option>)}
                </select>
                <p className="text-[10px] text-stone-400 italic">Pilih kategori yang paling mendekati kejadian.</p>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-stone-700">
                  <MapPin size={16} className="text-emerald-600" />
                  Lokasi (Kabupaten/Kota)
                </label>
                <select 
                  required
                  className="w-full p-4 rounded-xl border border-stone-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm hover:border-emerald-300"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                >
                  <option value="">Pilih Lokasi</option>
                  {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-stone-700">
                  <Calendar size={16} className="text-emerald-600" />
                  Tanggal Kejadian
                </label>
                <input 
                  type="date"
                  required
                  className="w-full p-4 rounded-xl border border-stone-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm hover:border-emerald-300"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-bold text-stone-700">
                  Saksi-saksi (Opsional)
                </label>
                <input 
                  type="text"
                  placeholder="Nama atau inisial saksi..."
                  className="w-full p-4 rounded-xl border border-stone-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm hover:border-emerald-300"
                  value={formData.witnesses}
                  onChange={(e) => setFormData({...formData, witnesses: e.target.value})}
                />
              </div>
            </div>
          </section>

          {/* Section 2: Deskripsi & Bukti */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-stone-100">
              <FileText className="text-emerald-700" size={20} />
              <h2 className="text-xl font-bold text-emerald-950 uppercase tracking-wide text-sm">Bagian 2: Kronologi & Bukti</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-stone-700">Ceritakan Kejadian Secara Detail</label>
                <textarea 
                  required
                  rows={6}
                  placeholder="Jelaskan apa yang terjadi, siapa yang terlibat, dan bagaimana kronologinya..."
                  className="w-full p-5 rounded-2xl border border-stone-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm resize-none hover:border-emerald-300"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="p-8 border-2 border-dashed border-stone-200 rounded-3xl bg-stone-50/50 hover:bg-emerald-50 hover:border-emerald-200 transition-all cursor-pointer group text-center flex flex-col items-center justify-center">
                  <Upload size={40} className="text-stone-300 group-hover:text-emerald-600 mb-4 transition-colors" />
                  <p className="font-bold text-stone-600 mb-1 group-hover:text-emerald-900">Unggah Bukti</p>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Foto, Video, atau Dokumen (Max 50MB)</p>
                  <input type="file" className="hidden" />
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 bg-stone-50 rounded-2xl border border-stone-100">
                    <Info className="text-emerald-600 shrink-0" size={20} />
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Bukti foto atau video sangat membantu tim kami dalam melakukan verifikasi lapangan. Jika Anda tidak memilikinya, keterangan tertulis yang kuat tetap berharga.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Identitas & Keamanan */}
          <section className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-stone-100">
              <UserCircle className="text-emerald-700" size={20} />
              <h2 className="text-xl font-bold text-emerald-950 uppercase tracking-wide text-sm">Bagian 3: Identitas & Keamanan</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex gap-4">
                  <ShieldCheck className="text-emerald-700 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-emerald-900">Opsi Anonimitas</h4>
                    <p className="text-xs text-emerald-700/80">Demi keamanan, kami menyarankan pelapor untuk tetap anonim.</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    checked={formData.isAnonymous}
                    onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
                  />
                  <div className="w-14 h-7 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-700"></div>
                  <span className="ml-3 text-sm font-bold text-stone-700 group-hover:text-emerald-900 transition-colors">
                    {formData.isAnonymous ? 'Tetap Anonim' : 'Berikan Identitas'}
                  </span>
                </label>
              </div>

              {!formData.isAnonymous && (
                <div className="animate-in slide-in-from-top-4 duration-300 space-y-2">
                  <label className="block text-sm font-bold text-stone-700">Informasi Kontak (Email/No. WhatsApp)</label>
                  <input 
                    type="text"
                    required
                    placeholder="Contoh: 0812XXXXXXXX atau nama@email.com"
                    className="w-full p-4 rounded-xl border border-stone-200 bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all shadow-sm"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({...formData, contactInfo: e.target.value})}
                  />
                  <p className="text-[10px] text-amber-600 font-bold uppercase tracking-wider">Kontak Anda akan kami rahasiakan dan hanya digunakan untuk verifikasi jika diperlukan.</p>
                </div>
              )}
            </div>
          </section>

          {/* Submission Area */}
          <div className="pt-10 border-t border-stone-100 space-y-8">
            <div className="flex items-start gap-4">
              <input type="checkbox" required id="consent" className="mt-1 w-5 h-5 accent-emerald-800 rounded border-stone-300" />
              <label htmlFor="consent" className="text-xs text-stone-500 font-medium leading-relaxed uppercase tracking-tighter">
                SAYA MENYATAKAN BAHWA INFORMASI YANG SAYA BERIKAN ADALAH BENAR DAN SAYA MEMAHAMI BAHWA JPIC OFM PAPUA AKAN MENANGANI LAPORAN INI DENGAN PRINSIP KERAHASIAAN DAN KEADILAN.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full group bg-emerald-800 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-900 transition-all shadow-xl hover:shadow-emerald-900/20 active:scale-[0.98]"
            >
              KIRIM LAPORAN SEKARANG
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            <p className="text-center text-xs text-stone-400 italic">
              "Kebenaran akan memerdekakan kamu."
            </p>
          </div>
        </form>

        {/* Security Info Card Footer */}
        <div className="mt-8 p-6 bg-stone-100/50 rounded-2xl border border-stone-200 flex flex-col md:flex-row gap-6 items-center">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <ShieldCheck className="text-emerald-700" size={24} />
          </div>
          <div className="text-xs text-stone-500 leading-relaxed text-center md:text-left">
            <p className="font-bold text-stone-700 mb-1">Penting:</p>
            <p>Situs ini menggunakan sertifikat keamanan SSL kelas atas. Segala bentuk intimidasi terhadap pelapor adalah pelanggaran hukum. Jika Anda merasa dalam bahaya mendesak, segera cari tempat aman sebelum melapor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;
