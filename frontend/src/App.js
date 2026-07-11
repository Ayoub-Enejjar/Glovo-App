import React, { useState, useEffect } from 'react';
import './App.css';
import Components from './components';

const {
  Header, RestaurantInfo, OffersCarousel, CategoryTabs,
  SearchBar, MenuItem, DeliveryProgress, CartButton,
  AddToCartModal, BottomNav, CartView, CheckoutModal, OrderConfirmation
} = Components;

export const menuData = {
  restaurant: {
    name: "McDonald's", rating: 86, reviewCount: '2.4k',
    deliveryTime: '15-25', deliveryFee: 7.00, minOrder: 50.00,
    extraFee: 5.00, currency: 'MAD', isPrime: true,
    address: 'Maarif, Casablanca',
    coverImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
  },
  offers: [
    { id: 1, title: '20% OFF', subtitle: 'On your first order', bg: 'linear-gradient(135deg,#E63946,#ff6b7a)', emoji: '🎉' },
    { id: 2, title: 'Free Delivery', subtitle: 'Orders above 100 MAD', bg: 'linear-gradient(135deg,#00B14F,#4ade80)', emoji: '🚚' },
    { id: 3, title: 'Combo Deal', subtitle: 'Burger + Fries + Drink', bg: 'linear-gradient(135deg,#6366f1,#a78bfa)', emoji: '🍟' },
  ],
  categories: ['All', 'Burgers', 'Combo Meals', 'Sides', 'Drinks', 'Desserts'],
  items: [
    { id:1, name:"Best of™ Big Tasty™", description:"Big Tasty sandwich with signature smoke sauce, lettuce, tomato and cheese", price:79.00, image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", ordersCount:"10k+", category:"Burgers", isPopular:true, calories:790 },
    { id:2, name:"Big Mac™ Duo Menu", description:"Two Big Mac burgers with large fries and two medium drinks", price:95.00, image:"https://images.pexels.com/photos/4109116/pexels-photo-4109116.jpeg?w=400", ordersCount:"10k+", category:"Combo Meals", isPopular:true, calories:1080 },
    { id:3, name:"McChicken™ Menu", description:"Crispy chicken sandwich with golden fries and refreshing drink", price:64.00, image:"https://images.pexels.com/photos/4021944/pexels-photo-4021944.jpeg?w=400", ordersCount:"5k+", category:"Combo Meals", isPopular:false, calories:650 },
    { id:4, name:"Quarter Pounder™", description:"Juicy quarter-pound beef patty with onions, pickles and mustard", price:68.00, image:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80", ordersCount:"7k+", category:"Burgers", isPopular:true, calories:720 },
    { id:5, name:"Large French Fries", description:"Golden crispy fries perfectly seasoned with sea salt", price:25.00, image:"https://images.pexels.com/photos/4109234/pexels-photo-4109234.jpeg?w=400", ordersCount:"15k+", category:"Sides", isPopular:true, calories:490 },
    { id:6, name:"Chicken McNuggets™ 20pc", description:"20 golden crispy nuggets with your choice of dipping sauce", price:55.00, image:"https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80", ordersCount:"8k+", category:"Sides", isPopular:false, calories:860 },
    { id:7, name:"Coca-Cola Medium", description:"Refreshing ice-cold Coca-Cola, perfectly paired with any meal", price:18.00, image:"https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80", ordersCount:"20k+", category:"Drinks", isPopular:true, calories:190 },
    { id:8, name:"Fresh Orange Juice", description:"Freshly squeezed orange juice rich in Vitamin C", price:22.00, image:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80", ordersCount:"3k+", category:"Drinks", isPopular:false, calories:140 },
    { id:9, name:"McFlurry™ Oreo", description:"Creamy vanilla soft serve swirled with crunchy Oreo cookie pieces", price:32.00, image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80", ordersCount:"8k+", category:"Desserts", isPopular:true, calories:340 },
    { id:10, name:"Apple Pie", description:"Warm flaky pastry filled with sweet cinnamon apple filling", price:15.00, image:"https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=400&q=80", ordersCount:"4k+", category:"Desserts", isPopular:false, calories:250 },
  ]
};

function App() {
  const [currentView, setCurrentView] = useState('restaurant');
  const [activeNav, setActiveNav] = useState('home');
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderStep, setOrderStep] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  const cartTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  const filteredItems = menuData.items.filter(item => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAddToCart = (item) => { setSelectedItem(item); setShowModal(true); };

  const confirmAdd = (item, qty) => {
    setCart(prev => {
      const ex = prev.find(c => c.id === item.id);
      if (ex) return prev.map(c => c.id === item.id ? { ...c, quantity: c.quantity + qty } : c);
      return [...prev, { ...item, quantity: qty }];
    });
    setShowModal(false);
  };

  const updateQty = (id, qty) => {
    setCart(prev => qty === 0 ? prev.filter(c => c.id !== id) : prev.map(c => c.id === id ? { ...c, quantity: qty } : c));
  };

  const confirmOrder = () => {
    setShowCheckout(false);
    setCurrentView('confirmation');
    setOrderStep(0);
    const steps = [1, 2, 3, 4];
    steps.forEach((step, i) => setTimeout(() => setOrderStep(step), (i + 1) * 2200));
    setTimeout(() => { setCart([]); }, 200);
  };

  const goHome = () => { setCurrentView('restaurant'); setActiveNav('home'); setOrderStep(0); };

  if (currentView === 'confirmation') {
    return <OrderConfirmation step={orderStep} restaurant={menuData.restaurant} onBack={goHome} />;
  }

  if (currentView === 'cart') {
    return (
      <CartView
        cart={cart} total={cartTotal} count={cartCount}
        restaurant={menuData.restaurant}
        onUpdateQty={updateQty}
        onBack={() => setCurrentView('restaurant')}
        onCheckout={() => setShowCheckout(true)}
        showCheckout={showCheckout}
        onConfirmOrder={confirmOrder}
        onCloseCheckout={() => setShowCheckout(false)}
      />
    );
  }

  return (
    <div className="App" style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 430, margin: '0 auto', background: 'var(--surface)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        <Header onBack={() => {}} onSearchToggle={() => setShowSearch(p => !p)} showSearch={showSearch} />

        {showSearch && (
          <div className="anim-slide-down" style={{ padding: '0 16px 12px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
            <SearchBar value={searchQuery} onChange={setSearchQuery} onClear={() => setSearchQuery('')} />
          </div>
        )}

        <div style={{ overflowY: 'auto', paddingBottom: 140 }}>
          <RestaurantInfo restaurant={menuData.restaurant} />
          <div style={{ padding: '20px 16px 8px' }}>
            <OffersCarousel offers={menuData.offers} />
          </div>
          <div style={{ padding: '8px 16px' }}>
            <CategoryTabs categories={menuData.categories} active={activeCategory} onChange={setActiveCategory} />
          </div>
          {!showSearch && (
            <div style={{ padding: '4px 16px 8px' }}>
              <SearchBar value={searchQuery} onChange={setSearchQuery} onClear={() => setSearchQuery('')} />
            </div>
          )}
          <DeliveryProgress total={cartTotal} min={menuData.restaurant.minOrder} extraFee={menuData.restaurant.extraFee} currency={menuData.restaurant.currency} />
          <div style={{ padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filteredItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-2)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>🔍</div>
                <p style={{ fontWeight: 600 }}>No items found</p>
                <p style={{ fontSize: '0.85rem', marginTop: 4 }}>Try a different search or category</p>
              </div>
            ) : filteredItems.map(item => (
              <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart}
                cartItem={cart.find(c => c.id === item.id)} onUpdateQty={updateQty} />
            ))}
          </div>
        </div>

        {cartCount > 0 && (
          <CartButton count={cartCount} total={cartTotal} currency={menuData.restaurant.currency}
            onClick={() => setCurrentView('cart')} />
        )}

        {showModal && selectedItem && (
          <AddToCartModal item={selectedItem} onConfirm={confirmAdd}
            onClose={() => setShowModal(false)} currency={menuData.restaurant.currency} />
        )}

        <BottomNav active={activeNav} onChange={v => { setActiveNav(v); if (v === 'cart') setCurrentView('cart'); }} cartCount={cartCount} />
      </div>
    </div>
  );
}

export default App;