"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Sprout,
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function LandingPage() {
  return (
    <div className="bg-green-50 text-gray-800 overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-br from-green-900 via-green-700 to-green-600 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1500595046743-cd271d694d30')] bg-cover bg-center" />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative max-w-5xl text-center"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            VerdantSphere AgriTech
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg md:text-xl text-green-100"
          >
            Smart Farming. Sustainable Future. Higher Yield with Intelligent
            Agriculture Solutions.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
          >
            <button className="px-6 py-3 bg-white text-green-800 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition">
              Get Started <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-green-800 transition">
              Explore Solutions
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Farmers Connected", value: "120K+" },
            { label: "Acres Optimized", value: "2.5M+" },
            { label: "Yield Increase", value: "38%" },
            { label: "Countries Served", value: "25+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow p-6"
            >
              <h2 className="text-2xl font-bold text-green-700">
                {stat.value}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            variants={item}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Smart Agriculture Solutions
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Tractor,
                title: "Smart Farming Equipment",
                desc: "AI-powered machinery for precision farming and automation.",
              },
              {
                icon: Droplets,
                title: "Irrigation Intelligence",
                desc: "Water-efficient systems powered by real-time soil data.",
              },
              {
                icon: BarChart3,
                title: "Crop Analytics",
                desc: "Predict yield, monitor growth, and optimize production.",
              },
              {
                icon: Sun,
                title: "Weather Forecast AI",
                desc: "Hyper-local weather prediction for better planning.",
              },
              {
                icon: ShieldCheck,
                title: "Crop Protection",
                desc: "Detect diseases early using AI vision systems.",
              },
              {
                icon: Globe2,
                title: "Global Market Access",
                desc: "Connect farmers to global buyers directly.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={item}
                className="p-6 rounded-2xl border hover:shadow-lg transition bg-green-50"
              >
                <service.icon className="text-green-700 w-8 h-8" />
                <h3 className="mt-4 font-semibold text-lg">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FEATURE STRIP */}
      <section className="py-16 bg-green-800 text-white px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Wheat, text: "High Yield Crops" },
            { icon: TreePine, text: "Sustainable Farming" },
            { icon: CloudRain, text: "Smart Irrigation" },
            { icon: Leaf, text: "Organic Growth" },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-3"
            >
              <f.icon />
              <p className="font-medium">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Data Collection",
                desc: "Sensors collect soil, weather, and crop data.",
              },
              {
                step: "02",
                title: "AI Analysis",
                desc: "Machine learning optimizes farming decisions.",
              },
              {
                step: "03",
                title: "Action & Growth",
                desc: "Automated systems improve yield and efficiency.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-2xl shadow"
              >
                <p className="text-green-700 font-bold text-xl">{p.step}</p>
                <h3 className="font-semibold mt-2">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Transform Your Farming?
        </h2>
        <p className="mt-4 text-green-100">
          Join thousands of farmers already using AI-powered agriculture.
        </p>

        <button className="mt-8 px-8 py-3 bg-white text-green-800 rounded-full font-semibold hover:scale-105 transition">
          Join Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} VerdantSphere AgriTech. All rights
        reserved.
      </footer>
    </div>
  );
}
