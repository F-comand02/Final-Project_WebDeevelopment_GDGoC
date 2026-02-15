import { useState } from 'react'
import './index.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Catalog from './pages/Catalog';
import Wishlist from './pages/Wishlist';
import History from './pages/History';
import Footer from './components/Footer'; 


const Navbar = () => {
  const { wishlist } = useApp();
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="sticky top-0 z-50 glass border-b-0 mb-6">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-black italic tracking-tighter text-black">
          GUDANG<span className="text-cyan-400">-FAREL</span>
        </Link>

        
        <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-widest">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Catalog</Link>
          <Link to="/wishlist" className="relative group">
            <span className="hover:text-cyan-400 transition-colors">Wishlist</span>
            {wishlist.length > 0 && (
              <span className="absolute -top-3 -right-4 bg-cyan-500 text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/history" className="bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">History</Link>
        </div>

        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none p-2 glass rounded-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden glass border-t border-white/10`}>
        <div className="flex flex-col p-6 gap-4 font-bold text-sm uppercase tracking-widest">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">Catalog</Link>
          <Link to="/wishlist" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 flex justify-between items-center">
            <span>Wishlist</span>
            {wishlist.length > 0 && <span className="bg-cyan-500 text-black px-2 py-0.5 rounded-full text-[10px]">{wishlist.length}</span>}
          </Link>
          <Link to="/history" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">History Protocol</Link>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
