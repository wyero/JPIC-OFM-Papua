
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Shield, 
  Globe, 
  MessageSquare, 
  MessageCircle, 
  ChevronDown, 
  ChevronRight,
  Instagram,
  Facebook,
  Youtube,
  Music2
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { label: 'Beranda', path: '/' },
    { 
      label: 'Profil', 
      children: [
        { label: 'Sejarah & Misi', path: '/profil' },
        { label: 'Tokoh Inspiratif', path: '/tokoh' },
        { label: 'Jaringan & Mitra', path: '/jaringan' }
      ]
    },
    { 
      label: 'Karya Kami', 
      children: [
        { label: 'Advokasi', path: '/karya/advokasi' },
        { label: 'Animasi', path: '/karya/animasi' },
        { label: 'Sitasi Sosial', path: '/karya/sitasi-social' },
        { label: 'Ekopastoral', path: '/karya/ekopastoral' }
      ]
    },
    { 
      label: 'Publikasi', 
      children: [
        { label: 'Publikasi Media', path: '/publikasi?cat=Media' },
        { label: 'Siaran Pers', path: '/publikasi?cat=Siaran+Pers' },
        { label: 'Memoria Passionis', path: '/publikasi?cat=Memoria+Passionis' },
        { label: 'Memoria Resurectionis', path: '/publikasi?cat=Memoria+Resurectionis' },
        { label: 'Laporan Berkala', path: '/laporan' }
      ]
    },
    { 
      label: 'Info & Etika', 
      children: [
        { label: 'Agenda Kegiatan', path: '/agenda' },
        { label: 'Kebijakan & Kode Etik', path: '/etika' }
      ]
    },
    { label: 'Kontak', path: '/kontak' },
  ];

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 font-sans-ui">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform">
                <Shield size={20} />
              </div>
              <div className="hidden sm:block">
                <span className="block text-emerald-900 font-bold text-lg leading-tight uppercase tracking-wider">JPIC OFM Papua</span>
                <span className="block text-[10px] text-stone-500 uppercase tracking-widest">Justice, Peace & Integrity of Creation</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.label} className="relative group py-2">
                {item.children ? (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-stone-600 hover:text-emerald-800 transition-colors">
                    {item.label} <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link to={item.path!} className={`px-3 py-2 text-sm font-semibold transition-colors ${location.pathname === item.path ? 'text-emerald-800' : 'text-stone-600 hover:text-emerald-800'}`}>
                    {item.label}
                  </Link>
                )}
                
                {item.children && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-stone-200 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    {item.children.map((sub) => (
                      <Link key={sub.label} to={sub.path} className="block px-4 py-2.5 text-sm text-stone-600 hover:bg-emerald-50 hover:text-emerald-800 transition-colors">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/lapor-aman" className="bg-emerald-800 text-white px-5 py-2.5 rounded-full text-xs font-black hover:bg-emerald-900 transition-all shadow-md active:scale-95 ml-4 uppercase tracking-widest">
              LAPOR AMAN
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-stone-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav - Refined font size and weight */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-stone-50 last:border-none">
                {item.children ? (
                  <div className="py-1">
                    <button 
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-semibold text-emerald-950 rounded-lg hover:bg-stone-50 transition-colors"
                    >
                      {item.label}
                      <ChevronDown size={16} className={`transition-transform duration-300 ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeSubmenu === item.label && (
                      <div className="pl-4 space-y-0.5 mt-1 mb-2 animate-in fade-in slide-in-from-left-2">
                        {item.children.map((sub) => (
                          <Link 
                            key={sub.label} 
                            to={sub.path} 
                            onClick={() => setIsOpen(false)} 
                            className="block px-3 py-2.5 text-[14px] text-stone-600 hover:text-emerald-800 font-medium border-l-2 border-transparent hover:border-emerald-800 transition-all"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path!} 
                    onClick={() => setIsOpen(false)} 
                    className="block px-3 py-3 text-[15px] font-semibold text-emerald-950 rounded-lg hover:bg-stone-50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2">
              <Link 
                to="/lapor-aman" 
                onClick={() => setIsOpen(false)} 
                className="block w-full text-center bg-emerald-800 text-white py-4 rounded-xl text-sm font-bold shadow-md uppercase tracking-[0.1em]"
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
    href="https://wa.me/6281234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center group"
  >
    <MessageCircle size={32} fill="currentColor" />
  </a>
);

const Footer = () => (
  <footer className="bg-stone-900 text-stone-300 py-16 font-sans-ui">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="text-emerald-500" size={32} />
            <h3 className="text-xl font-bold text-white tracking-widest">JPIC OFM PAPUA</h3>
          </div>
          <p className="text-sm leading-relaxed font-light">
            Pax et Bonum. Melayani di garda terdepan untuk kemanusiaan dan alam Tanah Papua yang diberkati.
          </p>
          <div className="space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">Ikuti Kami</p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all shadow-lg group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all shadow-lg group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-lg group">
                <Music2 size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all shadow-lg group">
                <Youtube size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Dokumentasi</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/publikasi?cat=Memoria+Passionis" className="hover:text-emerald-400 transition-colors">Memoria Passionis</Link></li>
            <li><Link to="/publikasi?cat=Memoria+Resurectionis" className="hover:text-emerald-400 transition-colors">Memoria Resurectionis</Link></li>
            <li><Link to="/laporan" className="hover:text-emerald-400 transition-colors">Laporan HAM Berkala</Link></li>
            <li><Link to="/etika" className="hover:text-emerald-400 transition-colors">Kode Etik & Kebijakan</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Karya Pastoral</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/karya/advokasi" className="hover:text-emerald-400 transition-colors">Advokasi & Hukum</Link></li>
            <li><Link to="/karya/ekopastoral" className="hover:text-emerald-400 transition-colors">Ekopastoral & Lingkungan</Link></li>
            <li><Link to="/karya/animasi" className="hover:text-emerald-400 transition-colors">Animasi & Edukasi</Link></li>
            <li><Link to="/jaringan" className="hover:text-emerald-400 transition-colors">Jaringan & Mitra</Link></li>
          </ul>
        </div>

        <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
          <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-[0.2em]">Kontak Darurat</h4>
          <a href="https://wa.me/6281234567890" className="text-emerald-400 font-bold text-lg hover:text-emerald-300 transition-colors block mb-2">+62 812-XXXX-XXXX</a>
          <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Jayapura, Papua</p>
          <Link to="/agenda" className="mt-6 block w-full text-center bg-white/10 hover:bg-white/20 py-3 rounded-xl text-xs font-bold uppercase transition-all tracking-widest border border-white/10">Agenda Kegiatan</Link>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-stone-800 text-center text-[10px] text-stone-500 uppercase tracking-[0.3em] font-bold">
        &copy; {new Date().getFullYear()} JPIC OFM Papua. Seluruh Hak Dilindungi.
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-papua-pattern">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
    <WhatsAppButton />
  </div>
);
