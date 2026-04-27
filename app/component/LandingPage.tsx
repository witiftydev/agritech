"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Tractor,
  Globe2,
  Sun,
  Droplets,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Wheat,
  TreePine,
  CloudRain,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  return (
    <div className="bg-[#0b1f14] text-white overflow-hidden">
      {/* Floating Background Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[400px] h-[400px] bg-emerald-400/20 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* FIXED BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            VerdantSphere <span className="text-green-400">AgriTech</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            AI-powered farming ecosystem for smarter cultivation, higher yield,
            and sustainable agriculture.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-3 bg-green-500 hover:bg-green-400 text-black rounded-full font-semibold flex items-center gap-2 transition">
              Get Started <ArrowRight size={18} />
            </button>

            <button className="px-6 py-3 border border-green-400 rounded-full hover:bg-green-400/10 transition">
              Explore Platform
            </button>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 grid md:grid-cols-4 gap-6">
        {[
          ["120K+", "Farmers Connected"],
          ["2.5M+", "Acres Optimized"],
          ["38%", "Yield Increase"],
          ["25+", "Countries"],
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl text-center border border-white/10"
          >
            <h2 className="text-3xl font-bold text-green-400">{s[0]}</h2>
            <p className="text-gray-300 mt-2">{s[1]}</p>
          </motion.div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">
        <h2 className="text-center text-4xl font-bold mb-12">
          Smart Agriculture Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Tractor,
              title: "Smart Farming",
              desc: "AI-driven equipment automation.",
            },
            {
              icon: Droplets,
              title: "Smart Irrigation",
              desc: "Water optimization systems.",
            },
            {
              icon: BarChart3,
              title: "Crop Analytics",
              desc: "Predictive yield insights.",
            },
            {
              icon: Sun,
              title: "Weather AI",
              desc: "Hyper-local forecasting.",
            },
            {
              icon: ShieldCheck,
              title: "Crop Protection",
              desc: "Disease detection AI.",
            },
            {
              icon: Globe2,
              title: "Global Market",
              desc: "Direct farm-to-buyer network.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
            >
              <s.icon className="text-green-400 w-8 h-8" />
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE */}
      <section className="py-16 text-center bg-green-500/10">
        <div className="grid md:grid-cols-4 gap-6 px-6">
          {[Leaf, Wheat, TreePine, CloudRain].map((Icon, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <Icon className="mx-auto text-green-400 w-8 h-8" />
              <p className="mt-2 text-gray-200">Smart Agriculture</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">
          Start Your Smart Farming Journey Today
        </h2>

        <button className="mt-8 px-8 py-3 bg-green-500 text-black rounded-full font-semibold hover:scale-105 transition">
          Join Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-400">
        © {new Date().getFullYear()} VerdantSphere AgriTech
      </footer>
    </div>
  );
}
