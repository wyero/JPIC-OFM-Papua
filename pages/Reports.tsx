
import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BarChart3, 
  Map as MapIcon, 
  Database, 
  Info, 
  X, 
  Calendar, 
  MapPin, 
  Tag, 
  Activity,
  Share2,
  Printer,
  ChevronRight,
  ShieldCheck,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MOCK_REPORTS, REGIONS } from '../constants';
import { ViolationType, Report } from '../types';

const Reports: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const filteredReports = useMemo(() => {
    return MOCK_REPORTS.filter(r => {
      const matchesSearch = r.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           r.region.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = !regionFilter || r.region === regionFilter;
      const matchesType = !typeFilter || r.type === typeFilter;
      return matchesSearch && matchesRegion && matchesType;
    });
  }, [searchTerm, regionFilter, typeFilter]);

  const chartData = useMemo(() => {
    const counts: Record<string, number> = {};
    MOCK_REPORTS.forEach(r => {
      counts[r.type] = (counts[r.type] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, []);

  const COLORS = ['#065f46', '#047857', '#059669', '#10b981', '#34d399'];

  const getStatusStep = (status: string) => {
    switch(status) {
      case 'Selesai': return 3;
      case 'Dalam Penyelidikan': return 2;
      default: return 1;
    }
  };

  return (
    <div className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 md:mb-20 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-emerald-950 mb-6">Database Laporan Publik</h1>
          <p className="text-stone-600 max-w-3xl leading-relaxed text-base sm:text-lg">
            Transparansi informasi adalah kunci akuntabilitas. Berikut adalah arsip kasus yang berhasil didokumentasikan oleh tim JPIC OFM Papua di seluruh wilayah adat.
          </p>
        </header>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="lg:col-span-2 bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <BarChart3 size={20} className="text-emerald-700" />
              </div>
              <h3 className="font-bold text-stone-900 uppercase tracking-widest text-[10px]">Data Pelanggaran per Kategori</h3>
            </div>
            <div className="h-64 sm:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 10, fontWeight: 700, fill: '#78716c' }} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                  />
                  <Bar dataKey="count" radius={[0, 8, 8, 0]} barSize={32}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-emerald-900 text-white p-10 rounded-3xl flex flex-col justify-center items-center text-center relative overflow-hidden group min-h-[300px]">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform hidden sm:block">
              <MapIcon size={160} />
            </div>
            <div className="relative z-10">
              <h3 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">{REGIONS.length}</h3>
              <p className="text-emerald-400 uppercase tracking-[0.3em] text-[10px] font-black mb-8">Wilayah Terpantau</p>
              <div className="pt-8 border-t border-emerald-800 w-full max-w-[200px] mx-auto">
                <p className="text-xs text-emerald-100/60 leading-relaxed font-medium">Arsip digital mencakup data terverifikasi dari seluruh Tanah Papua.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl mb-8 flex flex-col lg:flex-row gap-4 items-center border border-stone-200 shadow-sm">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
            <input
              type="text"
              placeholder="Cari kata kunci, wilayah, atau ID laporan..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-sm font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <select
              className="w-full sm:w-48 px-4 py-4 rounded-2xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/10 text-sm font-bold text-stone-700"
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
            >
              <option value="">Semua Wilayah</option>
              {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
            <select
              className="w-full sm:w-48 px-4 py-4 rounded-2xl border border-stone-200 bg-stone-50 outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/10 text-sm font-bold text-stone-700"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">Semua Jenis</option>
              {Object.values(ViolationType).map(v => <option key={v} value={v}>{v}</option>)}
            </select>
          </div>
        </div>

        {/* Table/List */}
        <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent">
            <table className="w-full text-left min-w-[800px] lg:min-w-0">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200">
                  <th className="px-6 py-6 text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">Tahun</th>
                  <th className="px-6 py-6 text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">Wilayah</th>
                  <th className="px-6 py-6 text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">Jenis Pelanggaran</th>
                  <th className="px-6 py-6 text-[10px] font-black text-stone-400 uppercase tracking-[0.2em]">Status</th>
                  <th className="px-6 py-6 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredReports.map((report) => (
                  <tr 
                    key={report.id} 
                    className="hover:bg-emerald-50/50 transition-all cursor-pointer group border-transparent border-l-4 hover:border-emerald-700"
                    onClick={() => setSelectedReport(report)}
                  >
                    <td className="px-6 py-6 font-bold text-stone-900">{report.year}</td>
                    <td className="px-6 py-6">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-stone-300" />
                        <span className="text-stone-700 font-medium">{report.region}</span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <span className="text-[10px] font-black px-3 py-1.5 bg-stone-100 rounded-lg text-stone-600 border border-stone-200 uppercase tracking-tighter">
                        {report.type}
                      </span>
                    </td>
                    <td className="px-6 py-6">
                      <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${
                        report.status === 'Selesai' ? 'bg-emerald-100 text-emerald-800' : 
                        report.status === 'Dalam Penyelidikan' ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-600'
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-800 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Detail <ChevronRight size={16} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredReports.length === 0 && (
            <div className="py-24 text-center bg-stone-50/50">
              <Database size={64} className="mx-auto text-stone-200 mb-6" />
              <p className="text-stone-500 font-bold uppercase tracking-widest text-xs">Data tidak ditemukan</p>
              <button 
                onClick={() => { setSearchTerm(''); setRegionFilter(''); setTypeFilter(''); }}
                className="mt-6 px-8 py-3 bg-white border border-stone-200 rounded-full text-emerald-800 text-xs font-black shadow-sm hover:shadow-md transition-all uppercase tracking-widest"
              >
                Reset Semua Filter
              </button>
            </div>
          )}
        </div>

        <div className="mt-12 p-8 md:p-10 bg-emerald-50 rounded-3xl border border-emerald-100 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md shrink-0 border border-emerald-100">
            <ShieldCheck className="text-emerald-700" size={32} />
          </div>
          <div className="text-sm text-stone-600 leading-relaxed text-center md:text-left space-y-2">
            <p className="font-black text-emerald-900 uppercase tracking-widest text-xs mb-1">Integritas Data Publik</p>
            <p className="font-medium">Data ini ditampilkan untuk kepentingan advokasi publik dan penelitian akademik. Berkas lengkap mencakup lampiran bukti fisik bersifat rahasia dan hanya tersedia melalui prosedur permintaan resmi demi menjaga keamanan saksi dan korban.</p>
          </div>
        </div>
      </div>

      {/* Detail Modal (Keep existing logic but ensured it's fully responsive) */}
      {selectedReport && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-3xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 flex flex-col max-h-[90vh]">
            <div className="bg-emerald-900 text-white px-6 sm:px-12 py-10 relative">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-300">Berkas Perkara</span>
                    <span className="w-8 h-px bg-emerald-500 hidden sm:block"></span>
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">#{selectedReport.id}</h2>
                  <p className="text-emerald-100/70 text-xs sm:text-sm max-w-md">Dokumentasi resmi pelanggaran di wilayah {selectedReport.region}.</p>
                </div>
                <button 
                  onClick={() => setSelectedReport(null)}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all text-white active:scale-90"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto px-6 sm:px-12 py-10 space-y-12 scrollbar-hide">
              {/* Status Tracker */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-widest flex items-center gap-2">
                  <Activity size={14} className="text-emerald-600" /> Tahapan Penanganan
                </h3>
                <div className="relative flex justify-between items-center px-2 sm:px-4">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-stone-100 -translate-y-1/2 z-0"></div>
                  <div 
                    className="absolute top-1/2 left-0 h-1 bg-emerald-600 -translate-y-1/2 z-0 transition-all duration-1000"
                    style={{ width: `${(getStatusStep(selectedReport.status) / 3) * 100}%` }}
                  ></div>

                  {[
                    { label: 'Arsip', icon: Database },
                    { label: 'Investigasi', icon: Search },
                    { label: 'Selesai', icon: CheckCircle2 }
                  ].map((step, idx) => {
                    const isActive = getStatusStep(selectedReport.status) >= idx + 1;
                    return (
                      <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md transition-colors duration-500 ${
                          isActive ? 'bg-emerald-600 text-white' : 'bg-stone-200 text-stone-400'
                        }`}>
                          <step.icon size={16} />
                        </div>
                        <span className={`text-[9px] sm:text-[10px] font-bold ${isActive ? 'text-emerald-800' : 'text-stone-400'}`}>
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="flex items-center gap-2 text-stone-400 mb-1">
                    <Calendar size={12} />
                    <span className="text-[9px] font-black uppercase">Waktu</span>
                  </div>
                  <p className="font-bold text-stone-800 text-sm">{selectedReport.date || selectedReport.year}</p>
                </div>
                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="flex items-center gap-2 text-stone-400 mb-1">
                    <MapPin size={12} />
                    <span className="text-[9px] font-black uppercase">Wilayah</span>
                  </div>
                  <p className="font-bold text-stone-800 text-sm">{selectedReport.region}</p>
                </div>
                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100">
                  <div className="flex items-center gap-2 text-stone-400 mb-1">
                    <Tag size={12} />
                    <span className="text-[9px] font-black uppercase">Klasifikasi</span>
                  </div>
                  <p className="font-bold text-stone-800 text-sm">{selectedReport.type}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-100 pb-2">Deskripsi Kronologis</h3>
                <div className="prose prose-stone prose-sm sm:prose-base max-w-none">
                  <p className="text-stone-700 leading-relaxed font-medium italic serif">
                    {selectedReport.description}
                  </p>
                  <p className="text-stone-600 leading-relaxed mt-4">
                    {selectedReport.detailedDescription || "Keterangan tambahan sedang dalam tahap penyusunan oleh tim advokasi di lapangan."}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-12 py-8 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-3 bg-white border border-stone-200 rounded-xl text-stone-600 hover:bg-stone-50 transition-all shadow-sm active:scale-95" title="Cetak">
                  <Printer size={18} />
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 p-3 bg-white border border-stone-200 rounded-xl text-stone-600 hover:bg-stone-50 transition-all shadow-sm active:scale-95" title="Bagikan">
                  <Share2 size={18} />
                </button>
              </div>
              
              <div className="flex gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => setSelectedReport(null)}
                  className="flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold text-sm text-stone-500 hover:text-stone-800 transition-all"
                >
                  Tutup
                </button>
                <button 
                  className="flex-1 sm:flex-none bg-emerald-800 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-emerald-900 transition-all shadow-lg active:scale-95 whitespace-nowrap"
                  onClick={() => window.location.href = '#/kontak'}
                >
                  Minta Pendampingan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
