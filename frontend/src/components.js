import React, { useState } from 'react';

// Header Component
const Header = () => {
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-sm text-gray-600"></span>
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Restaurant Info Component
const RestaurantInfo = ({ restaurant }) => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-6 text-white">
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-yellow-400 font-bold text-2xl">M</span>
          </div>
        </div>
        
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{restaurant.name}®</h1>
          
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <span>{restaurant.rating}%</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>{restaurant.deliveryTime}'</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
              <span>{restaurant.deliveryFee} {restaurant.currency}</span>
            </div>
            
            {restaurant.isPrime && (
              <div className="bg-blue-800 px-2 py-1 rounded-full">
                <span className="text-xs font-semibold">Prime </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Top Sellers Section
const TopSellers = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <span className="text-2xl">🏆</span>
        <h2 className="text-xl font-bold text-gray-900">Top sellers</h2>
      </div>
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// Menu Item Component
const MenuItem = ({ item, onAddToCart, cartItem, onUpdateQuantity }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex p-4">
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold text-gray-900 text-lg leading-tight">{item.name}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16.8c-.22 0-.42.1-.55.27L14.8 10.5l1.48 1.26 1.22-1.44.69 2.07-1.64.68L12.8 10.5l-.69-2.07L13.33 8H12a2 2 0 0 0-2 2v8H8V10a4 4 0 0 1 4-4h1.33L12 3.27c.22-.17.42-.27.55-.27h1.74a1.5 1.5 0 0 1 1.42 1.01L18.5 12H21v6h-1z"/>
              </svg>
              <span>{item.ordersCount} ordered</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="font-bold text-xl text-gray-900">{item.price.toFixed(2)} MAD</span>
            
            {cartItem ? (
              <div className="flex items-center space-x-3 bg-red-600 text-white rounded-full px-3 py-2">
                <button 
                  onClick={() => onUpdateQuantity(item.id, cartItem.quantity - 1)}
                  className="w-6 h-6 flex items-center justify-center hover:bg-red-700 rounded-full transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="font-semibold min-w-[20px] text-center">{cartItem.quantity}</span>
                <button 
                  onClick={() => onUpdateQuantity(item.id, cartItem.quantity + 1)}
                  className="w-6 h-6 flex items-center justify-center hover:bg-red-700 rounded-full transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => onAddToCart(item)}
                className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            )}
          </div>
        </div>
        
        <div className="w-24 h-24 ml-4 flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

// Cart Button Component
const CartButton = ({ itemCount, total, currency }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="max-w-md mx-auto">
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-semibold text-lg transition-colors shadow-lg flex items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
              {itemCount}
            </div>
            <span>View Cart</span>
          </div>
          <span>{total.toFixed(2)} {currency}</span>
        </button>
      </div>
    </div>
  );
};

// Delivery Info Component
const DeliveryInfo = () => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mx-4 mb-6">
      <div className="text-center space-y-2">
        <p className="text-sm text-gray-700">
          Reach 50.00 MAD to avoid an extra fee of 5.00 MAD
        </p>
        <button className="flex items-center justify-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors mx-auto">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
          </svg>
          <span className="text-sm">Fees information</span>
        </button>
      </div>
    </div>
  );
};

// Add to Cart Modal Component
const AddToCartModal = ({ item, onConfirm, onClose, currency }) => {
  const [quantity, setQuantity] = useState(1);

  const handleConfirm = () => {
    onConfirm(item, quantity);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
      <div className="bg-white w-full max-w-md mx-auto rounded-t-3xl overflow-hidden">
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Add to cart</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-start space-x-4">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-20 h-20 object-cover rounded-xl"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              <p className="font-bold text-lg text-gray-900 mt-2">{item.price.toFixed(2)} {currency}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">Quantity</span>
            <div className="flex items-center space-x-4 bg-gray-100 rounded-full px-4 py-2">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="font-semibold text-lg min-w-[24px] text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
          
          <button 
            onClick={handleConfirm}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-semibold text-lg transition-colors"
          >
            Add to cart • {(item.price * quantity).toFixed(2)} {currency}
          </button>
        </div>
      </div>
    </div>
  );
};

const Components = {
  Header,
  RestaurantInfo,
  TopSellers,
  MenuItem,
  CartButton,
  DeliveryInfo,
  AddToCartModal
};

export default Components;