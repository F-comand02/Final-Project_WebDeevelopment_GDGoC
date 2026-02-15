import { useState } from 'react';
import { products } from '../data/products';
import { useApp } from '../context/AppContext';

const Catalog = () => {
  const { addToWishlist, placeOrder } = useApp();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(p => 
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-fadeIn">
      
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
        <div className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Search tech..." 
            className="w-full glass py-3 px-10 rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400 text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg className="w-5 h-5 absolute left-3 top-3.5 text-black-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${category === cat ? 'bg-cyan-500 text-black' : 'glass text-gray-400 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="py-16 text-center animate-fadeIn">
  <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-black mb-4">
    EQUIP YOUR <span className="text-cyan-400">FUTURE</span>
  </h1>
  <p className="text-cyan-400 max-w-2xl mx-auto text-lg font-light tracking-wide">
    Selamat datang di <span className="text-cyan font-bold">Gudang-Farel</span>. 
    Akses 10 perangkat teknologi level elit yang telah dienkripsi.
  </p>
</div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="glass rounded-3xl p-4 neon-border transition-all group">
            <div className="relative mb-4">
              <img src={product.image} className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform" />
              <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-cyan-400">
                {product.category}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1 tracking-tight">{product.name}</h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-1">{product.desc}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl font-mono text-cyan-400 font-bold">Rp{product.price.toLocaleString()}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <button onClick={() => addToWishlist(product)} className="glass py-2 rounded-xl hover:bg-white/10 text-sm font-bold transition-colors">Wishlist</button>
              <button onClick={() => placeOrder(product)} className="bg-cyan-500 hover:bg-cyan-400 text-black py-2 rounded-xl text-sm font-extrabold transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)]">ORDER</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;