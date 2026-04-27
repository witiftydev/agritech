"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-lg shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-green-400 font-bold text-xl"
        >
          <Leaf />
          VerdantSphere
        </motion.div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          {["Home", "Features", "Solutions", "Dashboard", "Contact"].map(
            (item, i) => (
              <Link
                key={i}
                href={`#${item.toLowerCase()}`}
                className="hover:text-green-400 transition"
              >
                {item}
              </Link>
            ),
          )}
        </nav>

        {/* BUTTON */}
        <div className="hidden md:block">
          <button className="px-5 py-2 bg-green-500 text-black rounded-full font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/10 px-6 py-4"
        >
          <div className="flex flex-col gap-4 text-gray-300">
            {["Home", "Features", "Solutions", "Dashboard", "Contact"].map(
              (item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-green-400"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ),
            )}

            <button className="mt-2 px-5 py-2 bg-green-500 text-black rounded-full font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
