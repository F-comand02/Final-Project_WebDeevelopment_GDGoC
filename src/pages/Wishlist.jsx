import { useApp } from '../context/AppContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, placeOrder } = useApp();

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fadeIn">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Wishlist Kosong</h2>
        <p className="text-gray-500 mt-2">Belum ada barang impian yang kamu simpan.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900">My Wishlist</h2>
      <div className="grid gap-4">
        {wishlist.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <img src={item.image} alt={item.name} className="w-full md:w-32 h-32 object-cover rounded-xl" />
            <div className="mt-4 md:mt-0 md:ml-6 flex-1 text-center md:text-left">
              <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
              <p className="text-blue-600 font-bold">Rp {item.price.toLocaleString('id-ID')}</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <button 
                onClick={() => removeFromWishlist(item.id)}
                className="px-4 py-2 text-red-500 font-medium hover:bg-red-50 rounded-xl transition-colors"
              >
                Hapus
              </button>
              <button 
                onClick={() => placeOrder(item)}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95"
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;