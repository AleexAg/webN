
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { 
  ShoppingCart, 
  Star, 
  Play, 
  X, 
  Zap, 
  Smartphone, 
  Laptop, 
  Headphones,
  Camera,
  Watch,
  Gamepad2,
  Tv,
  Speaker,
  Heart,
  Eye,
  ArrowRight,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const App = () => {
  const [showPromo, setShowPromo] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  // Datos de productos simulados
  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1199,
      originalPrice: 1299,
      rating: 4.9,
      category: "Smartphones",
      isNew: true,
      image: "iPhone 15 Pro Max con diseño premium",
      video: "https://example.com/iphone-video",
      description: "El iPhone más avanzado con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR de 6.7 pulgadas.",
      features: ["Chip A17 Pro", "Cámara 48MP", "Titanio", "USB-C"]
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      price: 1999,
      originalPrice: 2199,
      rating: 4.8,
      category: "Laptops",
      isNew: true,
      image: "MacBook Pro M3 con pantalla brillante",
      video: "https://example.com/macbook-video",
      description: "Potencia profesional con el chip M3, pantalla Liquid Retina XDR y hasta 22 horas de batería.",
      features: ["Chip M3", "16GB RAM", "512GB SSD", "Pantalla 14\""]
    },
    {
      id: 3,
      name: "AirPods Pro 2",
      price: 249,
      originalPrice: 279,
      rating: 4.7,
      category: "Audio",
      isNew: false,
      image: "AirPods Pro 2 con cancelación de ruido",
      video: "https://example.com/airpods-video",
      description: "Cancelación activa de ruido de siguiente nivel con audio espacial personalizado.",
      features: ["Cancelación de ruido", "Audio espacial", "Resistente al agua", "30h batería"]
    },
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      price: 1299,
      originalPrice: 1399,
      rating: 4.8,
      category: "Smartphones",
      isNew: true,
      image: "Samsung Galaxy S24 Ultra con S Pen",
      video: "https://example.com/samsung-video",
      description: "El smartphone más potente de Samsung con S Pen integrado y cámara de 200MP.",
      features: ["S Pen incluido", "Cámara 200MP", "Snapdragon 8 Gen 3", "Pantalla 6.8\""]
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      price: 399,
      originalPrice: 449,
      rating: 4.9,
      category: "Audio",
      isNew: false,
      image: "Sony WH-1000XM5 auriculares premium",
      video: "https://example.com/sony-video",
      description: "Los mejores auriculares con cancelación de ruido y calidad de sonido excepcional.",
      features: ["Cancelación de ruido líder", "30h batería", "Carga rápida", "Multipoint"]
    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      price: 429,
      originalPrice: 479,
      rating: 4.6,
      category: "Wearables",
      isNew: true,
      image: "Apple Watch Series 9 con correa deportiva",
      video: "https://example.com/watch-video",
      description: "El smartwatch más avanzado con chip S9 y nuevas funciones de salud.",
      features: ["Chip S9", "Pantalla Always-On", "GPS", "Resistente al agua"]
    }
  ];

  const newProducts = featuredProducts.filter(product => product.isNew);

  const categories = [
    { name: "Smartphones", icon: Smartphone, count: 25 },
    { name: "Laptops", icon: Laptop, count: 18 },
    { name: "Audio", icon: Headphones, count: 32 },
    { name: "Cámaras", icon: Camera, count: 15 },
    { name: "Wearables", icon: Watch, count: 12 },
    { name: "Gaming", icon: Gamepad2, count: 28 },
    { name: "TV & Video", icon: Tv, count: 20 },
    { name: "Altavoces", icon: Speaker, count: 16 }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast({
      title: "¡Producto añadido!",
      description: `${product.name} se ha añadido al carrito`,
    });
  };

  const addToWishlist = (product) => {
    toast({
      title: "🚧 Esta función no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀",
    });
  };

  const quickView = (product) => {
    setSelectedProduct(product);
  };

  const playVideo = (product) => {
    toast({
      title: "🚧 Esta función no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <Toaster />
      
      {/* Promoción Modal */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full relative overflow-hidden"
            >
              <div className="absolute inset-0 gradient-bg opacity-10"></div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10"
                onClick={() => setShowPromo(false)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="inline-block mb-6"
                >
                  <Sparkles className="h-16 w-16 text-purple-600 mx-auto" />
                </motion.div>
                
                <h1 className="text-4xl font-bold gradient-text mb-4">
                  ¡NUEVOS PRODUCTOS LLEGARON!
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Descubre la última tecnología con descuentos increíbles
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                    Hasta 20% OFF
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                    Envío Gratis
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                    12 Meses Sin Intereses
                  </div>
                </div>
                
                <Button
                  size="lg"
                  className="gradient-bg text-white px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform"
                  onClick={() => setShowPromo(false)}
                >
                  Ver Productos <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold gradient-text">TechStore</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#tienda" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Tienda
              </a>
              <a href="#novedades" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Novedades
              </a>
              <a href="#ofertas" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Ofertas
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Contacto
              </a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold gradient-text mb-6"
          >
            Tecnología del Futuro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Descubre los productos electrónicos más innovadores con la mejor calidad y precios increíbles
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="gradient-bg text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform">
              Explorar Productos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                onClick={() => toast({
                  title: "🚧 Esta función no está implementada aún—¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀",
                })}
              >
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <category.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} productos</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados - Tienda */}
      <section id="tienda" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Productos Destacados</h2>
            <p className="text-xl text-gray-600">Los mejores productos con ofertas especiales</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105"
              >
                <div className="relative">
                  <img  
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    alt={`${product.name} - ${product.description}`}
                   src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NUEVO
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/80 backdrop-blur-sm hover:bg-white"
                      onClick={() => addToWishlist(product)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/80 backdrop-blur-sm hover:bg-white"
                      onClick={() => quickView(product)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-600 font-medium">{product.category}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    {product.originalPrice > product.price && (
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      className="flex-1 gradient-bg text-white hover:scale-105 transition-transform"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Añadir al Carrito
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => playVideo(product)}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Información de Producto con Video */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Producto Destacado</h2>
            <p className="text-xl text-gray-600">Conoce en detalle nuestro producto estrella</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full inline-block font-semibold">
                PRODUCTO ESTRELLA
              </div>
              
              <h3 className="text-4xl font-bold text-gray-800">{featuredProducts[0].name}</h3>
              <p className="text-lg text-gray-600">{featuredProducts[0].description}</p>
              
              <div className="space-y-3">
                {featuredProducts[0].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-purple-100 rounded-full p-1">
                      <Zap className="h-4 w-4 text-purple-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-purple-600">${featuredProducts[0].price}</span>
                <span className="text-xl text-gray-400 line-through">${featuredProducts[0].originalPrice}</span>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                  -{Math.round(((featuredProducts[0].originalPrice - featuredProducts[0].price) / featuredProducts[0].originalPrice) * 100)}% OFF
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="gradient-bg text-white px-8 hover:scale-105 transition-transform"
                  onClick={() => addToCart(featuredProducts[0])}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Comprar Ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => playVideo(featuredProducts[0])}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Ver Video
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img  
                  className="w-full h-96 object-cover"
                  alt={`${featuredProducts[0].name} - imagen principal del producto`}
                 src="https://images.unsplash.com/photo-1677693972403-db681288b5da" />
                
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/90 text-gray-800 hover:bg-white hover:scale-110 transition-all"
                    onClick={() => playVideo(featuredProducts[0])}
                  >
                    <Play className="h-8 w-8 mr-2" />
                    Reproducir Video
                  </Button>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-gray-800">{featuredProducts[0].rating}</span>
                  <span className="text-gray-600">/ 5.0</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">+1,200 reseñas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Novedades */}
      <section id="novedades" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              <h2 className="text-4xl font-bold gradient-text">Novedades</h2>
            </div>
            <p className="text-xl text-gray-600">Los productos más recientes que acaban de llegar</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105 relative"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                
                <div className="relative">
                  <img  
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    alt={`${product.name} - nuevo producto`}
                   src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                    ¡NUEVO!
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/80 backdrop-blur-sm hover:bg-white"
                      onClick={() => quickView(product)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                      <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                      OFERTA
                    </div>
                  </div>
                  
                  <Button
                    className="w-full gradient-bg text-white hover:scale-105 transition-transform"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Añadir al Carrito
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Producto */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img  
                    className="w-full h-96 object-cover rounded-2xl"
                    alt={`${selectedProduct.name} - vista detallada`}
                   src="https://images.unsplash.com/photo-1671376354106-d8d21e55dddd" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <span className="text-sm text-purple-600 font-medium bg-purple-100 px-3 py-1 rounded-full">
                      {selectedProduct.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-800 mt-4">{selectedProduct.name}</h2>
                    <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">Características:</h4>
                    {selectedProduct.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="bg-purple-100 rounded-full p-1">
                          <Zap className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-purple-600">${selectedProduct.price}</span>
                    <span className="text-xl text-gray-400 line-through">${selectedProduct.originalPrice}</span>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                      -{Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)}% OFF
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(selectedProduct.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">({selectedProduct.rating}/5.0)</span>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button
                      size="lg"
                      className="flex-1 gradient-bg text-white hover:scale-105 transition-transform"
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Añadir al Carrito
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => playVideo(selectedProduct)}
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Ver Video
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold">TechStore</span>
              </div>
              <p className="text-gray-400">
                Tu tienda de confianza para los mejores productos electrónicos con la última tecnología.
              </p>
            </div>
            
            <div>
              <span className="text-lg font-semibold mb-4 block">Productos</span>
              <div className="space-y-2">
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Smartphones</p>
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Laptops</p>
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Audio</p>
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Accesorios</p>
              </div>
            </div>
            
            <div>
              <span className="text-lg font-semibold mb-4 block">Soporte</span>
              <div className="space-y-2">
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Centro de Ayuda</p>
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Garantías</p>
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Devoluciones</p>
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Contacto</p>
              </div>
            </div>
            
            <div>
              <span className="text-lg font-semibold mb-4 block">Síguenos</span>
              <div className="space-y-2">
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Facebook</p>
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Instagram</p>
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Twitter</p>
                <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">YouTube</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 TechStore. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
