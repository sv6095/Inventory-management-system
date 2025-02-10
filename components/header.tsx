import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-black/90 backdrop-blur-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-white text-2xl font-bold">TRICKS</h1>
        <nav>
          <ul className="flex space-x-8">
            {["About", "Patreon", "Dribbble", "YouTube", "Instagram"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#e879f9" }}
                className="text-white text-lg font-semibold cursor-pointer hover:text-pink-400"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
