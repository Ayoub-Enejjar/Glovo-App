import React, { useState } from 'react';

// Header Component
export const Header = ({ onBack, onSearchToggle, showSearch }) => {
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100 sticky top-0 z-40">
      <div className="flex items-center space-x-3">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <span className="text-[10px] text-gray-400 block font-bold uppercase tracking-wider">Deliver to</span>
          <span className="text-xs font-bold text-gray-800 flex items-center">
            Maarif, Casablanca
            <svg className="w-3.5 h-3.5 ml-0.5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button onClick={onSearchToggle} className={`p-2 rounded-full transition-all ${showSearch ? 'bg-red-50 text-red-500 scale-105' : 'hover:bg-gray-100 text-gray-600'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Restaurant Info Component
export const RestaurantInfo = ({ restaurant }) => {
  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="h-40 w-full overflow-hidden relative">
        <img 
          src={restaurant.coverImage} 
          alt={restaurant.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      {/* Info Card */}
      <div className="px-4 -mt-12 relative z-10">
        <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-extrabold text-gray-900">{restaurant.name}®</h1>
                {restaurant.isPrime && <span className="prime-badge">Prime</span>}
              </div>
              <p className="text-xs text-gray-400 mt-0.5">{restaurant.address}</p>
            </div>
            
            <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-black text-xl">M</span>
            </div>
          </div>
          
          <hr className="my-3 border-gray-100" />
          
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-1 font-bold text-gray-800">
              <svg className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>{restaurant.rating}%</span>
              <span className="text-[10px] text-gray-400 font-normal">({restaurant.reviewCount})</span>
            </div>
            
            <div className="flex items-center space-x-1 font-bold text-gray-800">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{restaurant.deliveryTime} min</span>
            </div>
            
            <div className="flex items-center space-x-1 font-bold text-gray-800">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <span>{restaurant.deliveryFee.toFixed(2)} {restaurant.currency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Offers Carousel Component
export const OffersCarousel = ({ offers }) => {
  return (
    <div className="flex overflow-x-auto space-x-3 pb-1 hide-scroll">
      {offers.map(offer => (
        <div 
          key={offer.id}
          className="offer-card text-white flex flex-col justify-between"
          style={{ background: offer.bg }}
        >
          <div className="flex justify-between items-start">
            <span className="text-xl">{offer.emoji}</span>
          </div>
          <div className="mt-6">
            <h4 className="text-sm font-black leading-tight">{offer.title}</h4>
            <p className="text-[10px] text-white/90 font-bold">{offer.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Category Tabs Component
export const CategoryTabs = ({ categories, active, onChange }) => {
  return (
    <div className="flex overflow-x-auto space-x-2 py-1 hide-scroll">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`cat-tab ${active === cat ? 'active' : ''}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

// Search Bar Component
export const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="search-bar">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        placeholder="Search for food, drinks, desserts..."
      />
      {value && (
        <button onClick={onClear} className="p-0.5 hover:bg-gray-150 rounded-full transition-colors">
          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

// Menu Item Component
export const MenuItem = ({ item, onAddToCart, cartItem, onUpdateQty }) => {
  return (
    <div className="menu-card flex p-3 anim-scale-in">
      <div className="flex-1 pr-3 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-1.5 mb-1">
            <h3 className="font-extrabold text-gray-900 text-sm leading-snug">{item.name}</h3>
            {item.isPopular && <span className="popular-badge">Popular</span>}
          </div>
          <p className="text-gray-500 text-[11px] line-clamp-2 leading-relaxed mb-2">{item.description}</p>
        </div>
        
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="font-black text-base text-gray-900">{item.price.toFixed(2)} MAD</span>
            <span className="text-[9px] text-gray-400 font-bold">{item.calories} kcal • {item.ordersCount} ordered</span>
          </div>
          
          <div>
            {cartItem ? (
              <div className="flex items-center space-x-2 bg-red-500 text-white rounded-full p-0.5 shadow-md">
                <button 
                  onClick={() => onUpdateQty(item.id, cartItem.quantity - 1)}
                  className="qty-btn bg-white/20 hover:bg-white/30 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
                >
                  -
                </button>
                <span className="font-black text-xs min-w-[12px] text-center">{cartItem.quantity}</span>
                <button 
                  onClick={() => onUpdateQty(item.id, cartItem.quantity + 1)}
                  className="qty-btn bg-white/20 hover:bg-white/30 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs"
                >
                  +
                </button>
              </div>
            ) : (
              <button 
                onClick={() => onAddToCart(item)}
                className="w-8 h-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-colors shadow-md btn-spring"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      
      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

// Delivery Progress Component
export const DeliveryProgress = ({ total, min, extraFee, currency }) => {
  const percentage = Math.min(100, (total / min) * 100);
  const remaining = min - total;
  
  return (
    <div className="bg-amber-50 border border-amber-100 rounded-xl p-3 mx-4 my-2">
      {total >= min ? (
        <div className="flex items-center space-x-1.5">
          <span className="text-emerald-500 font-bold text-base">🎉</span>
          <p className="text-xs font-bold text-emerald-800">
            You unlocked free delivery!
          </p>
        </div>
      ) : (
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-bold text-amber-900">
            <span>Add {remaining.toFixed(2)} {currency} for free delivery</span>
            <span>{percentage.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-amber-200/50 rounded-full h-2 overflow-hidden">
            <div 
              className="delivery-bar-fill h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-[10px] text-amber-700/80 font-bold">
            Reach {min.toFixed(2)} {currency} to avoid {extraFee.toFixed(2)} {currency} extra fee!
          </p>
        </div>
      )}
    </div>
  );
};

// Cart Button Component
export const CartButton = ({ count, total, currency, onClick }) => {
  return (
    <div className="fixed bottom-16 left-0 right-0 px-4 z-30">
      <button 
        onClick={onClick}
        className="w-full max-w-[398px] mx-auto cart-float-btn text-white py-3.5 px-5 rounded-2xl font-black flex items-center justify-between shadow-lg"
      >
        <div className="flex items-center space-x-2.5">
          <div className="bg-white text-red-500 w-5.5 h-5.5 rounded-full flex items-center justify-center text-[11px] font-black shadow-inner">
            {count}
          </div>
          <span className="text-sm tracking-wide">View Basket</span>
        </div>
        <span className="text-base tracking-wide">{total.toFixed(2)} {currency}</span>
      </button>
    </div>
  );
};

// Add to Cart Modal Component
export const AddToCartModal = ({ item, onConfirm, onClose, currency }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Medium');
  const [extras, setExtras] = useState([]);

  const toggleExtra = (extra) => {
    setExtras(prev => prev.includes(extra) ? prev.filter(e => e !== extra) : [...prev, extra]);
  };

  const extraPrice = extras.length * 5.00;
  const totalPrice = (item.price + (size === 'Large' ? 10.00 : 0) + extraPrice) * quantity;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="bg-white w-full max-w-[430px] rounded-t-3xl overflow-hidden anim-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image & Close */}
        <div className="h-36 relative bg-gray-100">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          <button onClick={onClose} className="absolute top-3.5 right-3.5 bg-white/80 backdrop-blur p-1.5 rounded-full text-gray-800 shadow">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
          <div>
            <h2 className="text-lg font-black text-gray-900">{item.name}</h2>
            <p className="text-gray-500 text-[11px] mt-0.5 leading-relaxed">{item.description}</p>
          </div>
          
          {/* Size selection */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Choose size</label>
            <div className="flex space-x-2">
              {['Medium', 'Large (+10.00 MAD)'].map(opt => {
                const optSize = opt.startsWith('Large') ? 'Large' : 'Medium';
                const isActive = size === optSize;
                return (
                  <button
                    key={optSize}
                    onClick={() => setSize(optSize)}
                    className={`flex-1 py-2 px-3 rounded-xl border-2 text-[11px] font-bold transition-all ${
                      isActive 
                        ? 'border-red-500 bg-red-50/50 text-red-600' 
                        : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-200'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Extras */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Add extras (+5.00 MAD each)</label>
            <div className="space-y-1.5">
              {['Extra Cheese', 'Extra Bacon (Halal)', 'Extra Sauce'].map(extra => {
                const hasExtra = extras.includes(extra);
                return (
                  <button
                    key={extra}
                    onClick={() => toggleExtra(extra)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-[11px] font-bold transition-all ${
                      hasExtra 
                        ? 'border-emerald-500 bg-emerald-50/30 text-emerald-700' 
                        : 'border-gray-100 bg-gray-50/50 text-gray-600 hover:border-gray-200'
                    }`}
                  >
                    <span>{extra}</span>
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                      hasExtra ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-300'
                    }`}>
                      {hasExtra && (
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Quantity and confirm */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-bold text-gray-800">Quantity</span>
            <div className="flex items-center space-x-3 bg-gray-100 rounded-full px-2.5 py-1">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-gray-800 font-bold shadow-sm"
              >
                -
              </button>
              <span className="font-black text-sm min-w-[16px] text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-gray-800 font-bold shadow-sm"
              >
                +
              </button>
            </div>
          </div>
          
          <button 
            onClick={() => onConfirm(item, quantity)}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3.5 rounded-2xl font-bold transition-all shadow-lg flex justify-center items-center space-x-1.5"
          >
            <span>Add to Basket</span>
            <span>•</span>
            <span>{totalPrice.toFixed(2)} {currency}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Bottom Navigation Component
export const BottomNav = ({ active, onChange, cartCount }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-100 z-30 py-1 shadow-sm">
      <div className="max-w-[430px] mx-auto flex justify-around items-center">
        <button onClick={() => onChange('home')} className={`nav-item ${active === 'home' ? 'active' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span>Home</span>
        </button>
        
        <button onClick={() => onChange('orders')} className={`nav-item ${active === 'orders' ? 'active' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <span>Orders</span>
        </button>
        
        <button onClick={() => onChange('cart')} className={`nav-item ${active === 'cart' ? 'active' : ''} relative`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
          <span>Basket</span>
        </button>
        
        <button onClick={() => onChange('profile')} className={`nav-item ${active === 'profile' ? 'active' : ''}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
};

// Checkout Modal Component
export const CheckoutModal = ({ onClose, total, currency, onConfirm }) => {
  const [address, setAddress] = useState('Maarif, 20100 Casablanca');
  const [payment, setPayment] = useState('Cash');
  const [phone, setPhone] = useState('+212 612 345678');

  return (
    <div className="modal-backdrop" onClick={onClose} style={{ zIndex: 100 }}>
      <div 
        className="bg-white w-full max-w-[430px] rounded-t-3xl overflow-hidden anim-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-gray-900">Checkout</h2>
            <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Delivery address */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Delivery Address</label>
              <input 
                type="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)}
                className="input-field" 
              />
            </div>
            
            {/* Phone */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Phone Number</label>
              <input 
                type="text" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                className="input-field" 
              />
            </div>
            
            {/* Payment Method */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Payment Method</label>
              <div className="flex space-x-2">
                {['Cash', 'Credit Card'].map(method => {
                  const isActive = payment === method;
                  return (
                    <button
                      key={method}
                      onClick={() => setPayment(method)}
                      className={`flex-1 py-2.5 px-3 rounded-xl border-2 text-[11px] font-bold transition-all ${
                        isActive 
                          ? 'border-red-500 bg-red-50/50 text-red-600' 
                          : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-200'
                      }`}
                    >
                      {method === 'Cash' ? '💵 Cash on Delivery' : '💳 Credit Card'}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-3.5 rounded-2xl flex justify-between items-center border border-gray-100">
            <span className="font-bold text-xs text-gray-800">Total Price</span>
            <span className="font-black text-base text-gray-900">{total.toFixed(2)} {currency}</span>
          </div>
          
          <button 
            onClick={onConfirm}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3.5 rounded-2xl font-bold transition-all shadow-lg text-center"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

// Cart View Component
export const CartView = ({ 
  cart, total, count, restaurant, onUpdateQty, onBack, 
  onCheckout, showCheckout, onConfirmOrder, onCloseCheckout 
}) => {
  const deliveryFee = restaurant.deliveryFee;
  const isBelowMin = total < restaurant.minOrder;
  const smallOrderFee = isBelowMin ? restaurant.extraFee : 0;
  const grandTotal = total > 0 ? (total + deliveryFee + smallOrderFee) : 0;

  return (
    <div className="App bg-gray-50 min-h-screen">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen flex flex-col justify-between pb-8">
        
        {/* Header */}
        <div className="px-4 py-3 flex items-center border-b border-gray-100 sticky top-0 bg-white z-20">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-2">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-black text-gray-900">Your Basket</h1>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
          {cart.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <span className="text-5xl block">🛍️</span>
              <h2 className="text-base font-extrabold text-gray-900">Your basket is empty</h2>
              <p className="text-xs text-gray-500">Go back to add delicious meals to your basket!</p>
              <button 
                onClick={onBack}
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl transition-all shadow-md btn-spring"
              >
                Shop Now
              </button>
            </div>
          ) : (
            <>
              {/* Restaurant Header Summary */}
              <div className="bg-gray-50 rounded-2xl p-3 flex items-center justify-between border border-gray-100">
                <div>
                  <h3 className="font-extrabold text-gray-950 text-xs">{restaurant.name}</h3>
                  <p className="text-[10px] text-gray-400 mt-0.5">Delivered from {restaurant.address}</p>
                </div>
                <div className="w-8 h-8 bg-yellow-400 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  M
                </div>
              </div>
              
              {/* Item List */}
              <div className="space-y-2">
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Items</h3>
                <div className="space-y-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between p-2.5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                      <div className="flex items-center space-x-2.5">
                        <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <h4 className="font-extrabold text-xs text-gray-900">{item.name}</h4>
                          <span className="text-[10px] text-gray-400">{item.price.toFixed(2)} MAD</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold hover:bg-gray-200 text-xs"
                        >
                          -
                        </button>
                        <span className="font-bold text-xs w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold hover:bg-gray-200 text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Small Order Fee Warning */}
              {isBelowMin && (
                <div className="bg-amber-50 border border-amber-100 rounded-2xl p-3 flex items-start space-x-2.5">
                  <span className="text-amber-600 text-base">⚠️</span>
                  <div className="text-[10px] text-amber-800 leading-relaxed font-bold">
                    <p className="font-extrabold mb-0.5">Small Order Fee Applied</p>
                    Your order subtotal is below the {restaurant.minOrder.toFixed(2)} MAD minimum. 
                    Add {(restaurant.minOrder - total).toFixed(2)} MAD to avoid the extra {restaurant.extraFee.toFixed(2)} MAD fee.
                  </div>
                </div>
              )}
              
              {/* Summary breakdown */}
              <div className="bg-gray-50/50 rounded-2xl p-3.5 border border-gray-100 space-y-2">
                <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Receipt Details</h3>
                <div className="space-y-1.5 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Products Subtotal</span>
                    <span className="font-bold text-gray-800">{total.toFixed(2)} MAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery fee</span>
                    <span className="font-bold text-gray-800">{deliveryFee.toFixed(2)} MAD</span>
                  </div>
                  {isBelowMin && (
                    <div className="flex justify-between text-amber-700">
                      <span>Small order fee</span>
                      <span className="font-bold">{smallOrderFee.toFixed(2)} MAD</span>
                    </div>
                  )}
                  <hr className="my-1.5 border-dashed border-gray-200" />
                  <div className="flex justify-between text-sm font-black text-gray-950">
                    <span>Total to pay</span>
                    <span>{grandTotal.toFixed(2)} MAD</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        {/* Footer actions */}
        {cart.length > 0 && (
          <div className="px-4 pt-3 border-t border-gray-100 sticky bottom-0 bg-white z-20">
            <button 
              onClick={onCheckout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3.5 rounded-2xl font-bold transition-all shadow-lg flex justify-between px-5 text-sm"
            >
              <span>Proceed to Checkout</span>
              <span>{grandTotal.toFixed(2)} MAD</span>
            </button>
          </div>
        )}
        
        {/* Checkout Modal */}
        {showCheckout && (
          <CheckoutModal 
            onClose={onCloseCheckout} 
            total={grandTotal} 
            currency={restaurant.currency} 
            onConfirm={onConfirmOrder} 
          />
        )}
      </div>
    </div>
  );
};

// Order Confirmation Component
export const OrderConfirmation = ({ step, restaurant, onBack }) => {
  return (
    <div className="App bg-gray-50 min-h-screen">
      <div className="max-w-[430px] mx-auto bg-white min-h-screen flex flex-col justify-between p-5 pb-8">
        
        <div className="flex-1 flex flex-col items-center justify-center space-y-6 my-auto">
          {/* Animated Success checkmark */}
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center check-circle shadow-inner">
            <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="check-path" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div className="text-center space-y-1">
            <h1 className="text-xl font-black text-gray-900">Order Confirmed!</h1>
            <p className="text-xs text-gray-500 max-w-[240px] mx-auto leading-relaxed">
              Your order from {restaurant.name} has been successfully placed.
            </p>
          </div>
          
          {/* Delivery Tracker Steps */}
          <div className="w-full bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider text-center">Live Delivery Tracker</h3>
            
            <div className="flex justify-between items-center relative px-1">
              {[
                { name: 'Sent', icon: '📝', s: 1 },
                { name: 'Cooking', icon: '🍳', s: 2 },
                { name: 'Road', icon: '🚴', s: 3 },
                { name: 'Arrived', icon: '🏠', s: 4 }
              ].map((item, idx, arr) => {
                const active = step >= item.s;
                const current = step === item.s;
                
                return (
                  <React.Fragment key={item.name}>
                    <div className="flex flex-col items-center space-y-1 relative z-10">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-500 ${
                        active 
                          ? 'bg-red-500 text-white scale-110 shadow-md shadow-red-500/20' 
                          : 'bg-white text-gray-400 border border-gray-200'
                      } ${current ? 'ring-4 ring-red-100 animate-pulse' : ''}`}>
                        {item.icon}
                      </div>
                      <span className={`text-[9px] font-extrabold ${active ? 'text-gray-900' : 'text-gray-400'}`}>
                        {item.name}
                      </span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="tracker-connector flex-1 mx-1">
                        <div 
                          className="tracker-connector-fill h-full bg-red-500" 
                          style={{ 
                            transform: `scaleX(${step > item.s ? 1 : 0})`, 
                            transformOrigin: 'left',
                            transition: 'transform 0.5s ease'
                          }}
                        ></div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            
            <div className="text-center bg-white p-2.5 rounded-xl border border-gray-100/50">
              <span className="text-[10px] font-bold text-gray-400">Estimated Delivery Time</span>
              <p className="font-black text-sm text-gray-900 mt-0.5">25 minutes</p>
            </div>
          </div>
        </div>
        
        <button 
          onClick={onBack}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3.5 rounded-2xl font-bold transition-all shadow-lg text-center"
        >
          Back to Restaurant
        </button>
      </div>
    </div>
  );
};

const Components = {
  Header,
  RestaurantInfo,
  OffersCarousel,
  CategoryTabs,
  SearchBar,
  MenuItem,
  DeliveryProgress,
  CartButton,
  AddToCartModal,
  BottomNav,
  CartView,
  CheckoutModal,
  OrderConfirmation
};

export default Components;