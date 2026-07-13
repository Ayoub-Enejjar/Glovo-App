import React, { useState, useEffect } from 'react';
import './App.css';
import Components from './components';

const {
  Header, RestaurantInfo, OffersCarousel, CategoryTabs,
  SearchBar, MenuItem, DeliveryProgress, CartButton,
  AddToCartModal, BottomNav, CartView, CheckoutModal, OrderConfirmation,
  HomeDashboard, CourierForm, AnythingForm, OrdersHistory, ProfileScreen,
  ComingSoonModal, LocationModal, PaymentMethodsModal, NotificationPreferencesModal, LanguageModal
} = Components;

export const menuData = {
  restaurants: [
    {
      id: 'mcdonalds',
      name: "McDonald's", rating: 86, reviewCount: '2.4k',
      deliveryTime: '15-25', deliveryFee: 7.00, minOrder: 50.00,
      extraFee: 5.00, currency: 'MAD', isPrime: true,
      address: 'Maarif, Casablanca',
      coverImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
      categories: ['All', 'Burgers', 'Combo Meals', 'Sides', 'Drinks', 'Desserts'],
      items: [
        { id: 1, name: "Best of™ Big Tasty™", description: "Big Tasty sandwich with signature smoke sauce, lettuce, tomato and cheese", price: 79.00, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", ordersCount: "10k+", category: "Burgers", isPopular: true, calories: 790 },
        { id: 2, name: "Big Mac™ Duo Menu", description: "Two Big Mac burgers with large fries and two medium drinks", price: 95.00, image: "https://images.pexels.com/photos/4109116/pexels-photo-4109116.jpeg?w=400", ordersCount: "10k+", category: "Combo Meals", isPopular: true, calories: 1080 },
        { id: 3, name: "McChicken™ Menu", description: "Crispy chicken sandwich with golden fries and refreshing drink", price: 64.00, image: "https://images.pexels.com/photos/4021944/pexels-photo-4021944.jpeg?w=400", ordersCount: "5k+", category: "Combo Meals", isPopular: false, calories: 650 },
        { id: 4, name: "Quarter Pounder™", description: "Juicy quarter-pound beef patty with onions, pickles and mustard", price: 68.00, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80", ordersCount: "7k+", category: "Burgers", isPopular: true, calories: 720 },
        { id: 5, name: "Large French Fries", description: "Golden crispy fries perfectly seasoned with sea salt", price: 25.00, image: "https://images.pexels.com/photos/4109234/pexels-photo-4109234.jpeg?w=400", ordersCount: "15k+", category: "Sides", isPopular: true, calories: 490 },
        { id: 6, name: "Chicken McNuggets™ 20pc", description: "20 golden crispy nuggets with your choice of dipping sauce", price: 55.00, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80", ordersCount: "8k+", category: "Sides", isPopular: false, calories: 860 },
        { id: 7, name: "Coca-Cola Medium", description: "Refreshing ice-cold Coca-Cola, perfectly paired with any meal", price: 18.00, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80", ordersCount: "20k+", category: "Drinks", isPopular: true, calories: 190 },
        { id: 8, name: "Fresh Orange Juice", description: "Freshly squeezed orange juice rich in Vitamin C", price: 22.00, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80", ordersCount: "3k+", category: "Drinks", isPopular: false, calories: 140 },
        { id: 9, name: "McFlurry™ Oreo", description: "Creamy vanilla soft serve swirled with crunchy Oreo cookie pieces", price: 32.00, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80", ordersCount: "8k+", category: "Desserts", isPopular: true, calories: 340 },
        { id: 10, name: "Apple Pie", description: "Warm flaky pastry filled with sweet cinnamon apple filling", price: 15.00, image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=400&q=80", ordersCount: "4k+", category: "Desserts", isPopular: false, calories: 250 }
      ]
    },
    {
      id: 'burgerking',
      name: "Burger King", rating: 83, reviewCount: '1.8k',
      deliveryTime: '20-30', deliveryFee: 9.00, minOrder: 50.00,
      extraFee: 5.00, currency: 'MAD', isPrime: true,
      address: 'Gauthier, Casablanca',
      coverImage: 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?w=800&q=80',
      categories: ['All', 'Burgers', 'Sides', 'Drinks', 'Desserts'],
      items: [
        { id: 11, name: "Whopper® Sandwich", description: "Flame-grilled beef patty with juicy tomatoes, fresh lettuce, creamy mayo, ketchup, pickles, and sliced white onions on a toasted sesame seed bun", price: 65.00, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", ordersCount: "8k+", category: "Burgers", isPopular: true, calories: 660 },
        { id: 12, name: "Chicken Royale", description: "Crispy chicken breast patty, shredded lettuce, and creamy mayonnaise on a toasted sesame seed bun", price: 59.00, image: "https://images.pexels.com/photos/4021944/pexels-photo-4021944.jpeg?w=400", ordersCount: "4k+", category: "Burgers", isPopular: false, calories: 570 },
        { id: 13, name: "Onion Rings 9pc", description: "Hot, crispy golden onion rings perfectly seasoned", price: 20.00, image: "https://images.unsplash.com/photo-1639024471283-2da7b3c6a267?w=400&q=80", ordersCount: "6k+", category: "Sides", isPopular: true, calories: 320 },
        { id: 14, name: "Hershey's Chocolate Sundae", description: "Creamy vanilla soft serve topped with rich chocolate fudge sauce", price: 28.00, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80", ordersCount: "2k+", category: "Desserts", isPopular: false, calories: 290 }
      ]
    },
    {
      id: 'pizzahut',
      name: "Pizza Hut", rating: 88, reviewCount: '3.1k',
      deliveryTime: '25-35', deliveryFee: 12.00, minOrder: 70.00,
      extraFee: 7.00, currency: 'MAD', isPrime: false,
      address: 'Anfa, Casablanca',
      coverImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
      categories: ['All', 'Pizzas', 'Sides', 'Drinks', 'Desserts'],
      items: [
        { id: 21, name: "Margherita Pizza Medium", description: "Classic tomato sauce base topped with premium mozzarella cheese and fresh basil", price: 65.00, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80", ordersCount: "12k+", category: "Pizzas", isPopular: true, calories: 920 },
        { id: 22, name: "Pepperoni Lover's Pizza Medium", description: "Loads of beef pepperoni, cheese, and pizza sauce", price: 85.00, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80", ordersCount: "10k+", category: "Pizzas", isPopular: true, calories: 1150 },
        { id: 23, name: "Garlic Bread with Cheese", description: "4 pieces of toasted baguette topped with garlic butter and melted mozzarella", price: 25.00, image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400&q=80", ordersCount: "9k+", category: "Sides", isPopular: true, calories: 410 },
        { id: 24, name: "Pepsi Medium", description: "Crisp and cold Pepsi, the perfect pizza companion", price: 18.00, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80", ordersCount: "15k+", category: "Drinks", isPopular: false, calories: 180 }
      ]
    },
    {
      id: 'starbucks',
      name: "Starbucks", rating: 91, reviewCount: '1.5k',
      deliveryTime: '10-20', deliveryFee: 10.00, minOrder: 40.00,
      extraFee: 5.00, currency: 'MAD', isPrime: true,
      address: 'Boulevard Zerktouni, Casablanca',
      coverImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
      categories: ['All', 'Coffee', 'Frappuccinos', 'Bakery'],
      items: [
        { id: 31, name: "Iced Caramel Macchiato Medium", description: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso and drizzled with caramel sauce over ice", price: 38.00, image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&q=80", ordersCount: "5k+", category: "Coffee", isPopular: true, calories: 250 },
        { id: 32, name: "Matcha Green Tea Frappuccino®", description: "Matcha green tea blended with milk, ice, and sweetened whipped cream", price: 42.00, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80", ordersCount: "3k+", category: "Frappuccinos", isPopular: true, calories: 410 },
        { id: 33, name: "Chocolate Muffin", description: "Moist chocolate muffin with chunks of rich Belgian chocolate", price: 25.00, image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80", ordersCount: "4k+", category: "Bakery", isPopular: false, calories: 380 }
      ]
    }
  ],
  offers: [
    { id: 1, title: '20% OFF', subtitle: 'On your first order', bg: 'linear-gradient(135deg,#E63946,#ff6b7a)', emoji: '🎉' },
    { id: 2, title: 'Free Delivery', subtitle: 'Orders above 100 MAD', bg: 'linear-gradient(135deg,#00B14F,#4ade80)', emoji: '🚚' },
    { id: 3, title: 'Combo Deal', subtitle: 'Burger + Fries + Drink', bg: 'linear-gradient(135deg,#6366f1,#a78bfa)', emoji: '🍟' },
  ]
};

const translations = {
  en: {
    deliverTo: "Deliver to",
    home: "Home",
    orders: "Orders",
    basket: "Basket",
    profile: "Profile",
    yourBasket: "Your Basket",
    basketEmpty: "Your basket is empty",
    basketEmptyDesc: "Go back to add delicious meals to your basket!",
    shopNow: "Shop Now",
    deliveredFrom: "Delivered from",
    items: "Items",
    smallOrderFeeApplied: "Small Order Fee Applied",
    belowMinDesc1: "Your order subtotal is below the",
    belowMinDesc2: "minimum.",
    belowMinDesc3: "Add",
    belowMinDesc4: "to avoid the extra",
    belowMinDesc5: "fee.",
    receiptDetails: "Receipt Details",
    subtotal: "Products Subtotal",
    deliveryFee: "Delivery fee",
    smallOrderFee: "Small order fee",
    totalToPay: "Total to pay",
    proceedCheckout: "Proceed to Checkout",
    checkout: "Checkout",
    deliveryAddress: "Delivery Address",
    phoneNumber: "Phone Number",
    paymentMethod: "Payment Method",
    cash: "Cash",
    creditCard: "Credit Card",
    totalPrice: "Total Price",
    confirmOrder: "Confirm Order",
    yourOrders: "Your Orders",
    orderId: "Order ID",
    delivered: "Delivered",
    itemsLabel: "items",
    reorder: "Reorder",
    premiumMember: "Premium Member",
    primeActive: "Glovo Prime active",
    primeDesc: "Free delivery on orders above 100 MAD",
    managed: "Managed",
    savedPayments: "Saved Payment Methods",
    savedAddresses: "Saved Delivery Addresses",
    notifPref: "Notification Preferences",
    langSettings: "Language Settings",
    signOut: "Sign Out",
    searchPlaceholder: "Search for restaurants or stores...",
    whatCanWeBring: "What can we bring you?",
    food: "Food",
    courier: "Courier",
    anything: "Anything",
    grocery: "Grocery",
    pharmacy: "Pharmacy",
    primeDeals: "Prime Deals",
    popularRestaurants: "Popular Restaurants",
    seeAll: "See all",
    noCards: "No payment methods saved.",
    deleteCard: "Delete Card",
    cardHolder: "CARD HOLDER",
    expires: "EXPIRES",
    addNewCard: "Add New Card",
    cardNumber: "Card Number",
    cardHolderName: "Cardholder Name",
    expiryDate: "Expiry Date",
    cancel: "Cancel",
    save: "Save",
    fillAllFields: "Please fill in all card details.",
    invalidCardNum: "Invalid card number (must be 16 digits).",
    pushNotif: "Push Notifications",
    pushNotifDesc: "Get updates about your orders and delivery status",
    emailNotif: "Email Notifications",
    emailNotifDesc: "Receive special offers, promos, and receipts via email",
    smsNotif: "SMS Notifications",
    smsNotifDesc: "Receive quick texts when courier is nearby",
    promoNotif: "Promotional Deals",
    promoNotifDesc: "Be the first to know about local restaurant promotions"
  },
  fr: {
    deliverTo: "Livrer à",
    home: "Accueil",
    orders: "Commandes",
    basket: "Panier",
    profile: "Profil",
    yourBasket: "Votre Panier",
    basketEmpty: "Votre panier est vide",
    basketEmptyDesc: "Retournez pour ajouter de délicieux repas à votre panier !",
    shopNow: "Acheter maintenant",
    deliveredFrom: "Livré depuis",
    items: "Articles",
    smallOrderFeeApplied: "Frais de petite commande appliqués",
    belowMinDesc1: "Le sous-total de votre commande est inférieur au minimum de",
    belowMinDesc2: ".",
    belowMinDesc3: "Ajoutez",
    belowMinDesc4: "pour éviter les frais supplémentaires de",
    belowMinDesc5: ".",
    receiptDetails: "Détails du reçu",
    subtotal: "Sous-total des produits",
    deliveryFee: "Frais de livraison",
    smallOrderFee: "Frais de petite commande",
    totalToPay: "Total à payer",
    proceedCheckout: "Passer à la caisse",
    checkout: "Caisse",
    deliveryAddress: "Adresse de livraison",
    phoneNumber: "Numéro de téléphone",
    paymentMethod: "Mode de paiement",
    cash: "Espèces",
    creditCard: "Carte de crédit",
    totalPrice: "Prix total",
    confirmOrder: "Confirmer la commande",
    yourOrders: "Vos Commandes",
    orderId: "ID de commande",
    delivered: "Livré",
    itemsLabel: "articles",
    reorder: "Recommander",
    premiumMember: "Membre Premium",
    primeActive: "Glovo Prime actif",
    primeDesc: "Livraison gratuite pour les commandes supérieures à 100 MAD",
    managed: "Géré",
    savedPayments: "Modes de paiement enregistrés",
    savedAddresses: "Adresses de livraison enregistrées",
    notifPref: "Préférences de notification",
    langSettings: "Paramètres de langue",
    signOut: "Se déconnecter",
    searchPlaceholder: "Rechercher des restaurants ou magasins...",
    whatCanWeBring: "Que pouvons-nous vous apporter ?",
    food: "Nourriture",
    courier: "Courrier",
    anything: "N'importe quoi",
    grocery: "Supermarché",
    pharmacy: "Pharmacie",
    primeDeals: "Offres Prime",
    popularRestaurants: "Restaurants populaires",
    seeAll: "Voir tout",
    noCards: "Aucune carte enregistrée.",
    deleteCard: "Supprimer la carte",
    cardHolder: "TITULAIRE DE LA CARTE",
    expires: "EXPIRE LE",
    addNewCard: "Ajouter une nouvelle carte",
    cardNumber: "Numéro de carte",
    cardHolderName: "Nom du titulaire",
    expiryDate: "Date d'expiration",
    cancel: "Annuler",
    save: "Enregistrer",
    fillAllFields: "Veuillez remplir tous les détails de la carte.",
    invalidCardNum: "Numéro de carte invalide (doit comporter 16 chiffres).",
    pushNotif: "Notifications Push",
    pushNotifDesc: "Recevez des mises à jour sur vos commandes et le statut de livraison",
    emailNotif: "Notifications par e-mail",
    emailNotifDesc: "Recevez des offres spéciales, des promotions et des reçus par e-mail",
    smsNotif: "Notifications par SMS",
    smsNotifDesc: "Recevez des SMS rapides lorsque le coursier est proche",
    promoNotif: "Offres promotionnelles",
    promoNotifDesc: "Soyez le premier informé des promotions des restaurants locaux"
  },
  ar: {
    deliverTo: "التوصيل إلى",
    home: "الرئيسية",
    orders: "طلباتي",
    basket: "السلة",
    profile: "حسابي",
    yourBasket: "سلتك",
    basketEmpty: "سلتك فارغة",
    basketEmptyDesc: "عد للخلف لإضافة وجبات لذيذة إلى سلتك!",
    shopNow: "تسوق الآن",
    deliveredFrom: "تم التوصيل من",
    items: "العناصر",
    smallOrderFeeApplied: "تم تطبيق رسوم الطلب الصغير",
    belowMinDesc1: "المجموع الفرعي لطلبك أقل من الحد الأدنى البالغ",
    belowMinDesc2: "درهم.",
    belowMinDesc3: "أضف",
    belowMinDesc4: "لتجنب الرسوم الإضافية البالغة",
    belowMinDesc5: "درهم.",
    receiptDetails: "تفاصيل الفاتورة",
    subtotal: "مجموع المنتجات الفرعي",
    deliveryFee: "رسوم التوصيل",
    smallOrderFee: "رسوم الطلب الصغير",
    totalToPay: "المبلغ الإجمالي للدفع",
    proceedCheckout: "المتابعة لإتمام الطلب",
    checkout: "الدفع",
    deliveryAddress: "عنوان التوصيل",
    phoneNumber: "رقم الهاتف",
    paymentMethod: "طريقة الدفع",
    cash: "نقداً",
    creditCard: "بطاقة الائتمان",
    totalPrice: "السعر الإجمالي",
    confirmOrder: "تأكيد الطلب",
    yourOrders: "طلباتك",
    orderId: "رقم الطلب",
    delivered: "تم التوصيل",
    itemsLabel: "عناصر",
    reorder: "إعادة الطلب",
    premiumMember: "عضو بريميوم",
    primeActive: "غلوفو برايم نشط",
    primeDesc: "توصيل مجاني للطلبات التي تفوق 100 درهم",
    managed: "مُدار",
    savedPayments: "طرق الدفع المحفوظة",
    savedAddresses: "عناوين التوصيل المحفوظة",
    notifPref: "تفضيلات الإشعارات",
    langSettings: "إعدادات اللغة",
    signOut: "تسجيل الخروج",
    searchPlaceholder: "البحث عن مطاعم أو متاجر...",
    whatCanWeBring: "ماذا يمكننا أن نجلب لك؟",
    food: "طعام",
    courier: "رسول توصيل",
    anything: "أي شيء",
    grocery: "بقالة",
    pharmacy: "صيدلية",
    primeDeals: "عروض برايم",
    popularRestaurants: "المطاعم الشعبية",
    seeAll: "عرض الكل",
    noCards: "لا توجد طرق دفع محفوظة.",
    deleteCard: "حذف البطاقة",
    cardHolder: "صاحب البطاقة",
    expires: "تاريخ الانتهاء",
    addNewCard: "إضافة بطاقة جديدة",
    cardNumber: "رقم البطاقة",
    cardHolderName: "اسم صاحب البطاقة",
    expiryDate: "تاريخ الانتهاء",
    cancel: "إلغاء",
    save: "حفظ",
    fillAllFields: "يرجى ملء جميع تفاصيل البطاقة.",
    invalidCardNum: "رقم بطاقة غير صالح (يجب أن يتكون من 16 رقمًا).",
    pushNotif: "إشعارات الهاتف",
    pushNotifDesc: "احصل على تحديثات حول طلباتك وحالة التوصيل",
    emailNotif: "إشعارات البريد الإلكتروني",
    emailNotifDesc: "تلقي العروض الخاصة والرموز الترويجية والإيصالات عبر البريد الإلكتروني",
    smsNotif: "إشعارات SMS",
    smsNotifDesc: "تلقي رسائل نصية سريعة عندما يكون Courier قريباً",
    promoNotif: "العروض الترويجية",
    promoNotifDesc: "كن أول من يعلم عن العروض الترويجية للمطاعم المحلية"
  }
};

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeNav, setActiveNav] = useState('home');
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem('glovo_cart');
    return localCart ? JSON.parse(localCart) : [];
  });
  
  const [selectedRestaurant, setSelectedRestaurant] = useState(() => {
    const localStore = localStorage.getItem('glovo_active_restaurant');
    return localStore ? JSON.parse(localStore) : menuData.restaurants[0];
  });

  const [ordersHistory, setOrdersHistory] = useState(() => {
    const localHistory = localStorage.getItem('glovo_orders_history');
    return localHistory ? JSON.parse(localHistory) : [];
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderStep, setOrderStep] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [comingSoonCategory, setComingSoonCategory] = useState('');
  
  // Location State
  const [location, setLocation] = useState(() => {
    return localStorage.getItem('glovo_user_location') || 'Maarif, Casablanca';
  });
  const [showLocationModal, setShowLocationModal] = useState(false);

  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('glovo_theme') || 'light';
  });

  // Language State
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('glovo_language') || 'en';
  });

  // Payment Cards State
  const [savedCards, setSavedCards] = useState(() => {
    const localCards = localStorage.getItem('glovo_saved_cards');
    return localCards ? JSON.parse(localCards) : [
      { id: '1', number: '**** **** **** 4321', expiry: '12/28', holder: 'AYOUB ENEJJAR', type: 'Visa' }
    ];
  });

  // Notification Preferences State
  const [notifPrefs, setNotifPrefs] = useState(() => {
    const localPrefs = localStorage.getItem('glovo_notif_prefs');
    return localPrefs ? JSON.parse(localPrefs) : {
      push: true,
      email: true,
      sms: false,
      offers: true
    };
  });

  // Modal Visibility States
  const [showPaymentsModal, setShowPaymentsModal] = useState(false);
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  // Get active translation dictionary
  const t = translations[language] || translations['en'];

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem('glovo_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('glovo_active_restaurant', JSON.stringify(selectedRestaurant));
  }, [selectedRestaurant]);

  useEffect(() => {
    localStorage.setItem('glovo_orders_history', JSON.stringify(ordersHistory));
  }, [ordersHistory]);

  useEffect(() => {
    localStorage.setItem('glovo_user_location', location);
  }, [location]);

  // Sync Theme with DOM
  useEffect(() => {
    localStorage.setItem('glovo_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }, [theme]);

  // Sync Language with DOM & Dir
  useEffect(() => {
    localStorage.setItem('glovo_language', language);
    const root = document.documentElement;
    if (language === 'ar') {
      root.dir = 'rtl';
      root.lang = 'ar';
    } else {
      root.dir = 'ltr';
      root.lang = language;
    }
  }, [language]);

  // Sync Saved Cards
  useEffect(() => {
    localStorage.setItem('glovo_saved_cards', JSON.stringify(savedCards));
  }, [savedCards]);

  // Sync Notif Prefs
  useEffect(() => {
    localStorage.setItem('glovo_notif_prefs', JSON.stringify(notifPrefs));
  }, [notifPrefs]);

  const cartTotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  const filteredItems = selectedRestaurant.items.filter(item => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleSelectRestaurant = (restaurant) => {
    if (cart.length > 0 && cart[0].restaurantId && cart[0].restaurantId !== restaurant.id) {
      if (window.confirm("You have items from another restaurant in your basket. Clear your basket to proceed?")) {
        setCart([]);
      } else {
        return;
      }
    }
    setSelectedRestaurant(restaurant);
    setCurrentView('restaurant');
    setActiveCategory('All');
    setSearchQuery('');
  };

  const handleAddToCart = (item) => { 
    setSelectedItem(item); 
    setShowModal(true); 
  };

  const confirmAdd = (item, qty) => {
    setCart(prev => {
      const ex = prev.find(c => c.id === item.id);
      if (ex) return prev.map(c => c.id === item.id ? { ...c, quantity: c.quantity + qty } : c);
      return [...prev, { ...item, quantity: qty, restaurantId: selectedRestaurant.id }];
    });
    setShowModal(false);
  };

  const updateQty = (id, qty) => {
    setCart(prev => qty === 0 ? prev.filter(c => c.id !== id) : prev.map(c => c.id === id ? { ...c, quantity: qty } : c));
  };

  const handleCourierOrder = (courierDetails) => {
    const newOrder = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      storeName: 'Courier Delivery',
      itemsCount: 1,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      total: courierDetails.price,
      status: 'Delivered',
      type: 'Courier',
      details: courierDetails
    };

    setOrdersHistory(prev => [newOrder, ...prev]);
    setCurrentView('confirmation');
    setOrderStep(0);
    const steps = [1, 2, 3, 4];
    steps.forEach((step, i) => setTimeout(() => setOrderStep(step), (i + 1) * 2200));
  };

  const handleAnythingOrder = (anythingDetails) => {
    const newOrder = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      storeName: 'Anything Delivery',
      itemsCount: 1,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      total: anythingDetails.price,
      status: 'Delivered',
      type: 'Anything',
      details: anythingDetails
    };

    setOrdersHistory(prev => [newOrder, ...prev]);
    setCurrentView('confirmation');
    setOrderStep(0);
    const steps = [1, 2, 3, 4];
    steps.forEach((step, i) => setTimeout(() => setOrderStep(step), (i + 1) * 2200));
  };

  const confirmOrder = () => {
    const deliveryFee = selectedRestaurant.deliveryFee;
    const isBelowMin = cartTotal < selectedRestaurant.minOrder;
    const smallOrderFee = isBelowMin ? selectedRestaurant.extraFee : 0;
    const grandTotal = cartTotal + deliveryFee + smallOrderFee;

    const newOrder = {
      id: Math.floor(1000 + Math.random() * 9000).toString(),
      storeName: selectedRestaurant.name,
      itemsCount: cartCount,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      total: grandTotal,
      status: 'Delivered',
      type: 'Food'
    };

    setOrdersHistory(prev => [newOrder, ...prev]);
    setShowCheckout(false);
    setCurrentView('confirmation');
    setOrderStep(0);
    const steps = [1, 2, 3, 4];
    steps.forEach((step, i) => setTimeout(() => setOrderStep(step), (i + 1) * 2200));
    setTimeout(() => { setCart([]); }, 200);
  };

  const handleReorder = (storeName) => {
    const store = menuData.restaurants.find(r => r.name === storeName);
    if (store) {
      handleSelectRestaurant(store);
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      setCart([]);
      setOrdersHistory([]);
      localStorage.clear();
      setLanguage('en');
      setTheme('light');
      setCurrentView('home');
      setActiveNav('home');
    }
  };

  const goHome = () => { 
    setCurrentView('home'); 
    setActiveNav('home'); 
    setOrderStep(0); 
  };

  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeDashboard 
            restaurants={menuData.restaurants}
            onSelectRestaurant={handleSelectRestaurant}
            onCourierClick={() => setCurrentView('courier')}
            onAnythingClick={() => setCurrentView('anything')}
            onSupermarketClick={() => setComingSoonCategory('Grocery')}
            onPharmacyClick={() => setComingSoonCategory('Pharmacy')}
            onSearchStore={(val) => {}}
            t={t}
          />
        );
      case 'courier':
        return <CourierForm onSubmit={handleCourierOrder} onBack={goHome} />;
      case 'anything':
        return <AnythingForm onSubmit={handleAnythingOrder} onBack={goHome} />;
      case 'orders':
        return <OrdersHistory orders={ordersHistory} onReorder={handleReorder} t={t} />;
      case 'profile':
        return (
          <ProfileScreen 
            onLogout={handleLogout} 
            onManageAddresses={() => setShowLocationModal(true)} 
            onManagePayments={() => setShowPaymentsModal(true)}
            onManageNotifications={() => setShowNotificationsModal(true)}
            onManageLanguage={() => setShowLanguageModal(true)}
            activeLanguageName={language === 'en' ? 'English' : language === 'fr' ? 'Français' : 'العربية'}
            t={t}
          />
        );
      case 'restaurant':
        return (
          <div style={{ overflowY: 'auto', paddingBottom: 140 }}>
            <RestaurantInfo restaurant={selectedRestaurant} />
            <div style={{ padding: '20px 16px 8px' }}>
              <OffersCarousel offers={menuData.offers} />
            </div>
            <div style={{ padding: '8px 16px' }}>
              <CategoryTabs categories={selectedRestaurant.categories} active={activeCategory} onChange={setActiveCategory} />
            </div>
            {!showSearch && (
              <div style={{ padding: '4px 16px 8px' }}>
                <SearchBar value={searchQuery} onChange={setSearchQuery} onClear={() => setSearchQuery('')} />
              </div>
            )}
            <DeliveryProgress total={cartTotal} min={selectedRestaurant.minOrder} extraFee={selectedRestaurant.extraFee} currency={selectedRestaurant.currency} />
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
        );
      default:
        return null;
    }
  };

  const handleNavChange = (nav) => {
    setActiveNav(nav);
    if (nav === 'home') {
      setCurrentView('home');
    } else if (nav === 'cart') {
      setCurrentView('cart');
    } else {
      setCurrentView(nav);
    }
  };

  if (currentView === 'confirmation') {
    return <OrderConfirmation step={orderStep} restaurant={selectedRestaurant} onBack={goHome} />;
  }

  if (currentView === 'cart') {
    return (
      <CartView
        cart={cart} total={cartTotal} count={cartCount}
        restaurant={selectedRestaurant}
        onUpdateQty={updateQty}
        onBack={() => {
          if (cart.length > 0) {
            const lastRest = menuData.restaurants.find(r => r.id === cart[0].restaurantId);
            if (lastRest) {
              setSelectedRestaurant(lastRest);
              setCurrentView('restaurant');
              return;
            }
          }
          setCurrentView('home');
        }}
        onCheckout={() => setShowCheckout(true)}
        showCheckout={showCheckout}
        onConfirmOrder={confirmOrder}
        onCloseCheckout={() => setShowCheckout(false)}
        defaultAddress={location}
        t={t}
      />
    );
  }

  return (
    <div className="App" style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 430, margin: '0 auto', background: 'var(--surface)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        
        {/* Render header on dashboard and restaurant view */}
        {(currentView === 'home' || currentView === 'restaurant') && (
          <Header 
            onBack={currentView === 'restaurant' ? goHome : null} 
            onSearchToggle={currentView === 'restaurant' ? () => setShowSearch(p => !p) : null} 
            showSearch={showSearch} 
            title={currentView === 'restaurant' ? "Store Menu" : t.deliverTo || "Deliver to"}
            location={location}
            onLocationClick={() => setShowLocationModal(true)}
            theme={theme}
            onThemeToggle={() => setTheme(p => p === 'light' ? 'dark' : 'light')}
            t={t}
          />
        )}

        {showSearch && currentView === 'restaurant' && (
          <div className="anim-slide-down" style={{ padding: '0 16px 12px', background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
            <SearchBar value={searchQuery} onChange={setSearchQuery} onClear={() => setSearchQuery('')} />
          </div>
        )}

        {/* View Content */}
        {renderActiveView()}

        {/* Floating Cart Button for restaurant menu page */}
        {cartCount > 0 && currentView === 'restaurant' && (
          <CartButton count={cartCount} total={cartTotal} currency={selectedRestaurant.currency}
            onClick={() => setCurrentView('cart')} />
        )}

        {/* Add to Cart Customization Modal */}
        {showModal && selectedItem && (
          <AddToCartModal item={selectedItem} onConfirm={confirmAdd}
            onClose={() => setShowModal(false)} currency={selectedRestaurant.currency} />
        )}

        {/* Bottom Nav Bar */}
        <BottomNav active={activeNav} onChange={handleNavChange} cartCount={cartCount} t={t} />

        {/* Coming Soon Popups */}
        {comingSoonCategory && (
          <ComingSoonModal category={comingSoonCategory} onClose={() => setComingSoonCategory('')} />
        )}

        {/* Location Selection Modal */}
        {showLocationModal && (
          <LocationModal 
            currentLocation={location}
            onSelectLocation={setLocation}
            onClose={() => setShowLocationModal(false)}
          />
        )}

        {/* Payment Methods Modal */}
        {showPaymentsModal && (
          <PaymentMethodsModal
            savedCards={savedCards}
            onAddCard={(card) => setSavedCards(prev => [...prev, card])}
            onDeleteCard={(cardId) => setSavedCards(prev => prev.filter(c => c.id !== cardId))}
            onClose={() => setShowPaymentsModal(false)}
            t={t}
          />
        )}

        {/* Notification Preferences Modal */}
        {showNotificationsModal && (
          <NotificationPreferencesModal
            preferences={notifPrefs}
            onUpdatePreferences={setNotifPrefs}
            onClose={() => setShowNotificationsModal(false)}
            t={t}
          />
        )}

        {/* Language Selection Modal */}
        {showLanguageModal && (
          <LanguageModal
            currentLang={language}
            onSelectLang={setLanguage}
            onClose={() => setShowLanguageModal(false)}
            t={t}
          />
        )}
      </div>
    </div>
  );
}

export default App;