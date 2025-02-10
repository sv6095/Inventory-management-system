import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gradient-to-r from-purple-900 to-indigo-900 backdrop-blur-lg bg-opacity-80 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            IMS
          </div>
          <div className="flex space-x-8">
            {["About", "Features", "Login", "Sign Up"].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-purple-300 transition-colors"
                href={`/${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
