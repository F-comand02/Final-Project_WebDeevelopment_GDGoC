import { useApp } from '../context/AppContext';

const History = () => {
  const { orders } = useApp();

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fadeIn">
        <div className="bg-blue-50 p-6 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Belum Ada Transaksi</h2>
        <p className="text-gray-500 mt-2">Riwayat belanja kamu akan muncul di sini setelah memesan.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Transaction History</h2>
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
            
            <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-b border-gray-200">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">ID: {order.orderId}</span>
              <span className="text-sm text-gray-500 font-medium">{order.date}</span>
            </div>
            
            
            <div className="p-6 flex items-center">
              <img src={order.image} alt={order.name} className="w-20 h-20 object-cover rounded-xl border border-gray-100" />
              <div className="ml-6 flex-1">
                <h3 className="font-bold text-gray-800 text-lg">{order.name}</h3>
                <p className="text-blue-600 font-bold">Rp {order.price.toLocaleString('id-ID')}</p>
              </div>
              <div className="hidden sm:block text-right">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Success
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;