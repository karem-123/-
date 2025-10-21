import React from 'react';

const MarketingBanner: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2">مرحبًا بكم في سوق كريم!</h2>
      <p className="mb-4">استمتع بأفضل العروض والخصومات على منتجاتنا المميزة.</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        تسوق الآن
      </button>
    </div>
  );
};

export default MarketingBanner;