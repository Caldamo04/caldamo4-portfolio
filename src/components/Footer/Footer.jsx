import React from "react";
import logo from "../../assets/wlogo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-16 px-10 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-black opacity-30 animate-gradient-slow"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping top-10 left-1/4"></div>
        <div className="absolute w-3 h-3 bg-pink-500 rounded-full animate-pulse bottom-20 right-1/3"></div>
        <div className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping top-1/3 right-10"></div>
        <div className="absolute w-2 h-2 bg-teal-400 rounded-full animate-pulse bottom-10 left-1/5"></div>
      </div>

      <div className="relative z-10 flex flex-col gap-10 mx-[120px] sm:mx-5">
        <div className="flex justify-between items-start flex-wrap sm:flex-col sm:items-center gap-5">
          <div className="flex flex-col items-start sm:items-center">
            <img src={logo} alt="Logo" className="w-[55px] mb-2 drop-shadow-[0_0_10px_#3b82f6]" />
            <p className="text-gray-300 text-base leading-[22px] max-w-[380px] text-left sm:text-center">
              Warlito Caldamo Jr. | BS Computer Science Student<br />
              A passionate Computer Science student from Cavite State University, exploring the world of programming, technology, and innovation. Always learning, always coding.
            </p>
          </div>

          <div className="flex items-center gap-5 sm:flex-col sm:gap-3">
            <Card className="flex items-center gap-4 bg-gray-900/80 rounded-full px-6 py-4 border border-blue-500/30 hover:border-blue-400 transition-all sm:flex-col sm:px-5 sm:py-5">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none border-none text-gray-300 w-[250px] text-lg sm:w-full sm:text-base"
              />
            </Card>
            <Button className="bg-blue-500 text-white text-lg px-8 py-4 rounded-full cursor-pointer transition-transform hover:scale-105 hover:bg-blue-600 sm:px-6 sm:py-3 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Subscribe
            </Button>
          </div>
        </div>

        <hr className="border-gray-700" />

        <div className="flex justify-between items-center text-gray-400 text-[15px] sm:flex-col sm:gap-2">
          <p>2025 Caldamo Warlito. All rights reserved</p>
          <div className="flex gap-7 sm:flex-col sm:gap-2">
            <p className="hover:text-blue-400 transition">Terms of Service</p>
            <p className="hover:text-blue-400 transition">Privacy Policy</p>
            <p className="hover:text-blue-400 transition">Connect with Me</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
