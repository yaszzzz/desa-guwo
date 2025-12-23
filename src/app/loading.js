import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-desa-dark text-white">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 border-t-4 border-desa-gold rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-4 border-white/20 rounded-full animate-spin [animation-duration:1.5s]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shadow-inner">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover animate-pulse" />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-desa-gold tracking-widest animate-pulse">DESA GUWO</h2>
        <p className="text-sm text-gray-400 mt-2 tracking-wide uppercase">Memuat Halaman...</p>
      </div>
    </div>
  );
}

export default Loading;
