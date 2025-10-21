import React from 'react';

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  description: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price, description, onAddToCart }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-400 mt-1">{description}</p>
      <p className="text-lg font-semibold mt-2">{price.toFixed(2)} ر.س</p>
      <button 
        onClick={onAddToCart} 
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        أضف إلى السلة
      </button>
    </div>
  );
};

export default ProductCard;