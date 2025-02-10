import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);
  const [showTruck, setShowTruck] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTruck(false);
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    "🚛 Reduce Split-Shipments by 5-10%",
    "📦 Inventory Allocation & Management",
    "🔄 Inventory Mirroring",
    "⏳ Reduce Pick Time by 5-20%",
    "📊 Optimizing Stock Allocation & Warehouse Efficiency",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md py-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-extrabold tracking-widest text-white">Inventory Pro</h1>
          <nav>
            <ul className="flex space-x-8 text-lg font-semibold">
              {["Home", "About", "Features", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1, color: "#e879f9" }}
                  className="cursor-pointer hover:text-pink-400"
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Truck Animation */}
      {showTruck && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{ duration: 3, ease: "linear" }}
          className="fixed top-1/3 w-[350px] h-[180px]"
        >
          <img src="/truck.png" alt="Truck Animation" className="object-contain w-full h-full" />
        </motion.div>
      )}

      {/* Main Content */}
      {showContent && (
        <>
          {/* Hero Section */}
          <section
            id="home"
            className="text-center py-20 bg-gradient-to-b from-blue-900 to-indigo-900 relative"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-extrabold mb-6"
            >
              Revolutionizing Inventory Management
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
              Optimize your inventory allocation and streamline operations with cutting-edge AI tools.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"
            >
              Get Started
            </motion.button>

            {/* Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(255,255,255,0.2)",
              }}
              className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[350px] h-[200px] bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 hidden md:block"
            >
              <h3 className="text-xl font-bold text-white mt-6">Glassmorphism Effect</h3>
              <p className="text-gray-300 mt-2">Modern UI Design with Tailwind CSS</p>
            </motion.div>
          </section>

          {/* About Us Section */}
          <section id="about" className="py-20 px-6 bg-gradient-to-b from-indigo-900 to-purple-900">
            <div className="container mx-auto max-w-screen-lg text-center">
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We revolutionize inventory management with AI-powered solutions that optimize supply chains,
                reduce operational costs, and enhance customer satisfaction through intelligent stock allocation and real-time analytics.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-gradient-to-b from-purple-900 to-blue-900">
            <div className="container mx-auto max-w-screen-lg">
              <h2 className="text-center text-4xl font-bold mb-12">Key Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 10px 30px rgba(255,255,255,0.2)",
                    }}
                    className="p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20"
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gradient-to-b from-blue-900 to-indigo-900">
            <div className="container mx-auto max-w-xl text-center">
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg text-gray-300 mb-8">Have questions? Reach out to us at:</p>
              <a
                href="mailto:support@inventory.com"
                className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"
              >
                support@inventory.com
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer
            id="#footer"
            className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 py-6 mt-auto text-center"
          >
            © {new Date().getFullYear()} Inventory Solutions. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
}
