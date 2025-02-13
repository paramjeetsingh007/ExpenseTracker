import React from "react";
import { motion } from "framer-motion";

function Dashboard({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#bc6c25] to-[#dda15e] text-white">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Tracker
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        className="text-lg md:text-xl mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Track your expenses & income effortlessly with visual insights.
      </motion.p>

      {/* Start Button */}
      <motion.button
        onClick={onStart}
        className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-white hover:text-black transition duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Go to Application
      </motion.button>
    </div>
  );
}

export default Dashboard;
