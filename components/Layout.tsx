
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Heart, Globe, MessageSquare, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Profil', path: '/profil' },
    { label: 'Laporan HAM', path: '/laporan' },
    { label: 'Publikasi', path: '/publikasi' },
    { label: 'Hubungi Kami', path: '/kontak' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-800 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl group-hover:bg-emerald-700 transition-colors shrink-0">
                <Shield size={20} />
              </div>
              <div className="overflow-hidden">
                <span className="block text-emerald-900 font-bold text-sm sm:text-lg leading-tight uppercase tracking-wider truncate">JPIC OFM Papua</span>
                <span className="block text-[8px] sm:text-xs text-stone-500 uppercase tracking-widest truncate">Keadilan & Perdamaian</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                  isActive(item.path) ? 'text-emerald-800 border-b-2 border-emerald-800' : 'text-stone-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/lapor-aman"
              className="bg-emerald-800 text-white px-4 lg:px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-900 transition-all shadow-sm hover:shadow-md active:scale-95 whitespace-nowrap"
            >
              LAPOR AMAN
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-600 hover:text-emerald-800 transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium rounded-lg ${
                  isActive(item.path) ? 'text-emerald-800 bg-emerald-50' : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/lapor-aman"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-emerald-800 text-white px-3 py-4 rounded-xl font-bold shadow-lg"
              >
                LAPOR AMAN
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/6281234567890" // Ganti dengan nomor asli
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/40 transition-all active:scale-95 flex items-center justify-center group animate-bounce-subtle"
    aria-label="Chat WhatsApp"
  >
    <MessageCircle size={32} fill="currentColor" />
    <span className="absolute right-full mr-3 bg-white text-stone-800 text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-stone-100 uppercase tracking-widest pointer-events-none">
      Hubungi Admin WA
    </span>
  </a>
);

const Footer = () => (
  <footer className="bg-stone-900 text-stone-300 py-12 md:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="text-emerald-500" size={32} />
            <h3 className="text-xl font-bold text-white tracking-wide">JPIC OFM PAPUA</h3>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Mewujudkan Keadilan, Perdamaian, dan Keutuhan Ciptaan di Tanah Papua melalui pelayanan kenabian yang berakar pada semangat Fransiskan.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"><Globe size={20} /></Link>
            <Link to="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all"><MessageSquare size={20} /></Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Navigasi</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/profil" className="hover:text-emerald-400 transition-colors">Tentang Kami</Link></li>
            <li><Link to="/laporan" className="hover:text-emerald-400 transition-colors">Laporan Publik</Link></li>
            <li><Link to="/publikasi" className="hover:text-emerald-400 transition-colors">Publikasi & Artikel</Link></li>
            <li><Link to="/kontak" className="hover:text-emerald-400 transition-colors">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Keamanan</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">Kebijakan Privasi</Link></li>
            <li><Link to="/lapor-aman" className="hover:text-emerald-400 transition-colors">Prosedur Pelaporan</Link></li>
            <li><Link to="/security" className="hover:text-emerald-400 transition-colors">Perlindungan Data</Link></li>
          </ul>
        </div>

        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Kontak Darurat</h4>
          <p className="text-xs mb-4 text-stone-400">Jika Anda membutuhkan pendampingan mendesak terkait pelanggaran HAM:</p>
          <a 
            href="https://wa.me/6281234567890" 
            className="text-emerald-400 font-bold text-lg select-all hover:text-emerald-300 transition-colors flex items-center gap-2"
          >
            <MessageCircle size={20} /> +62 812-XXXX-XXXX
          </a>
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Jayapura, Papua</p>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs text-stone-500">
        <p>&copy; {new Date().getFullYear()} JPIC Ordo Fratrum Minorum Papua.</p>
        <p className="font-medium tracking-widest uppercase">Pax et Bonum - Damai dan Kebaikan</p>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-papua-pattern">
      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
