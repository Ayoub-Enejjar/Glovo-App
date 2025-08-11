import React, { useState, useEffect } from 'react';
import './App.css';
import Components from './components';

const { 
  Header, 
  RestaurantInfo, 
  TopSellers, 
  MenuItem, 
  CartButton, 
  DeliveryInfo,
  AddToCartModal 
} = Components;

// Mock data for McDonald's menu
const menuData = {
  restaurant: {
    name: "McDonald's",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg",
    rating: 86,
    deliveryTime: "15-25",
    deliveryFee: "7.00",
    currency: "MAD",
    isPrime: true
  },
  topSellers: [
    {
      id: 1,
      name: "Best of™ big tasty™",
      description: "Big Tasty sandwich with signature sauce",
      price: 79.00,
      image: "https://images.unsplash.com/photo-1619683909021-fb6499a0d7ae",
      ordersCount: "10k+",
      category: "Burgers"
    },
    {
      id: 2,
      name: "Big mac™ duo menu",
      description: "Two Big Mac burgers with fries and drinks",
      price: 95.00,
      image: "https://images.pexels.com/photos/4109116/pexels-photo-4109116.jpeg",
      ordersCount: "10k+",
      category: "Combo Meals"
    },
    {
      id: 3,
      name: "Best of™ McChicken Menu",
      description: "Crispy chicken sandwich with fries and drink",
      price: 64.00,
      image: "https://images.pexels.com/photos/4021944/pexels-photo-4021944.jpeg",
      ordersCount: "5k+",
      category: "Combo Meals"
    },
    {
      id: 4,
      name: "Large French Fries",
      description: "Golden crispy French fries",
      price: 25.00,
      image: "https://images.pexels.com/photos/4109234/pexels-photo-4109234.jpeg",
      ordersCount: "15k+",
      category: "Sides"
    },
    {
      id: 5,
      name: "Coca-Cola Medium",
      description: "Refreshing Coca-Cola drink",
      price: 18.00,
      image: "https://images.unsplash.com/photo-1554866585-cd94860890b7",
      ordersCount: "20k+",
      category: "Drinks"
    },
    {
      id: 6,
      name: "McFlurry Oreo",
      description: "Vanilla ice cream with Oreo cookies",
      price: 32.00,
      image: "https://images.unsplash.com/photo-1720217095888-8c047bdb8156",
      ordersCount: "8k+",
      category: "Desserts"
    }
  ]
};

function App() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setCartTotal(total);
  }, [cart]);

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const confirmAddToCart = (item, quantity) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    
    setShowModal(false);
  };

  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      setCart(cart.filter(item => item.id !== itemId));
    } else {
      setCart(cart.map(item => 
        item.id === itemId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  return (
    <div className="App min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white shadow-lg relative">
        <Header />
        
        <RestaurantInfo restaurant={menuData.restaurant} />
        
        <div className="px-4 py-6 space-y-6">
          <TopSellers />
          
          <div className="space-y-4">
            {menuData.topSellers.map((item) => (
              <MenuItem 
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
                cartItem={cart.find(cartItem => cartItem.id === item.id)}
                onUpdateQuantity={updateCartQuantity}
              />
            ))}
          </div>
        </div>
        
        <DeliveryInfo />
        
        {cart.length > 0 && (
          <CartButton 
            itemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
            total={cartTotal}
            currency={menuData.restaurant.currency}
          />
        )}
        
        {showModal && selectedItem && (
          <AddToCartModal 
            item={selectedItem}
            onConfirm={confirmAddToCart}
            onClose={() => setShowModal(false)}
            currency={menuData.restaurant.currency}
          />
        )}
      </div>
    </div>
  );
}

export default App;