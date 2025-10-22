import React, { useState } from "react";
import logo from "../../assets/wlogo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (!section) {
      setIsOpen(false);
      return;
    }
    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.offsetHeight : 64;
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
    const target = Math.max(0, sectionTop - navHeight - 8);
    setIsOpen(false);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-[9999] border-b border-[#222]
        bg-gradient-to-r from-[#0d0d0d] via-[#1b1b1b] to-[#0d0d0d]
        animate-gradient-slow bg-[length:200%_200%]
        shadow-[0_0_25px_rgba(59,130,246,0.3)]
      "
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-5 sm:px-8 md:px-12 h-16">
        <div
          onClick={() => handleScroll("home")}
          className="flex items-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
        >
          <img src={logo} alt="Logo" className="w-10 h-auto" />
          <span className="text-white text-lg font-semibold tracking-wide">
            Warlito
          </span>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-12 text-white text-lg font-medium">
          {["home", "about", "projects", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => handleScroll(item)}
              className="cursor-pointer hover:text-blue-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] hover:scale-105"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        <Button
          onClick={() => handleScroll("contact")}
          className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transform hover:scale-105"
        >
          Connect With Me
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-[#1c1c1c]/80 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:bg-blue-600/40 transition-all duration-300"
            >
              <div className="flex flex-col gap-1">
                <span
                  className={`block w-5 h-[3px] bg-blue-400 rounded transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-[6px]" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-[3px] bg-blue-400 rounded transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block w-5 h-[3px] bg-blue-400 rounded transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[6px]" : ""
                  }`}
                />
              </div>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-[#1b1b1b] border-l border-[#333] h-screen pb-8 overflow-y-auto"
            style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 4rem)" }}
          >
            <ul className="flex flex-col gap-6 p-5 text-white text-base">
              {["home", "about", "projects", "contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-400 cursor-pointer transition-all duration-300"
                  onClick={() => handleScroll(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </li>
              ))}
              <li>
                <Button
                  onClick={() => handleScroll("contact")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                >
                  Connect With Me
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
