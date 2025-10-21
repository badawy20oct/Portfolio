"use client";

import React from "react";
import { motion } from "framer-motion";

// Button Component
interface ButtonProps {
  title: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ title, className, onClick }) => {
  return (
    <button
      className={`mt-6 px-5 py-2 bg-[#327D7D] cursor-pointer text-white rounded-lg shadow-md hover:bg-teal-600 transition ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

// HeroPage Component
const HeroPage: React.FC = () => {
  return (
    <section className="w-full h-[90vh] flex justify-evenly items-center bg-white">

      {/* Left Content */}
      <motion.div
        className="w-[45%] h-[500px] flex flex-col justify-center items-start p-6 bg-white rounded-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-900 mb-2 text-lg">Hi I am</p>
        <h2 className="text-2xl font-bold text-gray-900">Abdelrhman Badawy</h2>
        <h1 className="text-4xl w-[200px] font-extrabold text-[#327D7D] mt-2 leading-tight">
          Front End <br />
          <span className="pl-28 w-full">Developer</span>
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Passionate about creating modern, responsive, and user-friendly web applications.
          Specialized in React, Next.js, and UI/UX best practices.
        </p>

        {/* Animated Button */}
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
          <Button title="Hire Me" />
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative w-[45%] h-[500px] flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.05, y: -5 }}
      >
        <div className="absolute w-[300px] h-[350px] rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 transform translate-x-3 translate-y-3"></div>
        <img
          src="/Abdelrahman.jpg"
          alt="profile"
          className="relative w-[300px] h-[350px] object-cover rounded-2xl shadow-lg"
        />
      </motion.div>

    </section>
  );
};

export default HeroPage;
