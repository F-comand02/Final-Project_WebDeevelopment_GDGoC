const Footer = () => {
  return (
    <footer className="glass mt-20 border-t-0">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      
          <div className="space-y-4">
            <h2 className="text-2xl font-black italic tracking-tighter text-black">
              GUDANG<span className="text-cyan-400">-FAREL</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pusat teknologi masa depan. Menyediakan perangkat keras dan lunak 
              mutakhir untuk era Cybercore 2026.
            </p>
          </div>

          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Navigation</h3>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">System Catalog</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Secure Wishlist</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Protocol History</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">System Status</h3>
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              All Systems Operational
            </div>
            <p className="text-gray-500 text-xs mt-4 font-mono">© 2026 GUDANG-FAREL CORE v4.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;