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
  Users,
  Sprout,
  Brain,
  LineChart,
  Hand,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="bg-[#0b1f14] text-white overflow-hidden relative">
      {/* FLOATING BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[400px] h-[400px] bg-emerald-400/20 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
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
          className="relative text-center max-w-5xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            VerdantSphere <span className="text-green-400">AgriTech</span>
          </h1>

          <p className="mt-6 text-gray-200 text-lg">
            AI-powered agriculture platform helping farmers increase yield,
            reduce cost, and grow sustainably using smart technology.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-3 bg-green-500 text-black rounded-full flex items-center gap-2 font-semibold hover:scale-105 transition">
              Get Started <ArrowRight size={18} />
            </button>

            <button className="px-6 py-3 border border-green-400 rounded-full hover:bg-green-400/10 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6 grid md:grid-cols-4 gap-6">
        {[
          ["120K+", "Farmers Empowered"],
          ["2.5M+", "Acres Monitored"],
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

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-bold mb-12"
        >
          Why Farmers Choose VerdantSphere
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Precision Farming",
              desc: "Every decision powered by real-time machine learning models.",
            },
            {
              title: "Cost Reduction",
              desc: "Reduce water, fertilizer, and operational costs up to 40%.",
            },
            {
              title: "Higher Yield Guarantee",
              desc: "Data-driven farming ensures maximum productivity per acre.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
            >
              <h3 className="text-green-400 font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-6 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Illustration placeholder */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          className="h-80 bg-green-500/10 rounded-2xl border border-green-500/20 flex items-center justify-center"
        >
          <Sprout className="w-20 h-20 text-green-400" />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
        >
          <h2 className="text-4xl font-bold mb-4">Next-Gen Smart Farming</h2>
          <p className="text-gray-300">
            VerdantSphere combines AI, IoT, and predictive analytics to
            transform traditional agriculture into a smart ecosystem.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>✔ Real-time crop monitoring</li>
            <li>✔ AI-powered irrigation control</li>
            <li>✔ Disease detection using computer vision</li>
            <li>✔ Smart yield prediction models</li>
          </ul>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20">
        <h2 className="text-center text-4xl font-bold mb-12">
          Smart Agriculture Solutions
        </h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {[
            {
              icon: Tractor,
              title: "Smart Farming",
              desc: "AI-driven automation for modern farms.",
            },
            {
              icon: Droplets,
              title: "Smart Irrigation",
              desc: "Water optimization using sensors.",
            },
            {
              icon: Brain,
              title: "AI Predictions",
              desc: "Forecast yield & crop health.",
            },
            {
              icon: LineChart,
              title: "Growth Analytics",
              desc: "Track farm performance in real time.",
            },
            {
              icon: ShieldCheck,
              title: "Crop Protection",
              desc: "Early disease detection system.",
            },
            {
              icon: Globe2,
              title: "Global Market",
              desc: "Direct farmer-to-buyer platform.",
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
        </motion.div>
      </section>

      {/* AI DECISION ENGINE */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">AI Farm Decision Engine</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Our system continuously analyzes soil, weather, crop health, and
            market trends to make real-time farming decisions for maximum profit
            and yield.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
          >
            <h3 className="text-green-400 font-semibold text-lg">
              🌱 Smart Crop Recommendation
            </h3>
            <p className="text-gray-300 mt-3 text-sm">
              AI suggests the best crop based on soil nutrients, season, and
              market demand.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
          >
            <h3 className="text-green-400 font-semibold text-lg">
              💧 Automated Irrigation Control
            </h3>
            <p className="text-gray-300 mt-3 text-sm">
              Smart sensors trigger water systems only when needed — saving up
              to 45% water.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg"
          >
            <h3 className="text-green-400 font-semibold text-lg">
              📊 Market Price Prediction
            </h3>
            <p className="text-gray-300 mt-3 text-sm">
              AI predicts crop prices so farmers can sell at the highest profit
              window.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM HIGHLIGHT BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center p-6 rounded-2xl bg-green-500/10 border border-green-500/20"
        >
          <p className="text-green-300 font-medium">
            ⚡ Powered by real-time IoT sensors + Machine Learning models
          </p>
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Collect Data",
              desc: "Sensors gather soil & weather data.",
            },
            {
              step: "02",
              title: "AI Analysis",
              desc: "Machine learning processes insights.",
            },
            {
              step: "03",
              title: "Optimize Growth",
              desc: "Automated farming decisions.",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-green-400 text-xl font-bold">{p.step}</h3>
              <h4 className="font-semibold mt-2">{p.title}</h4>
              <p className="text-gray-300 mt-2">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO IS THIS PLATFORM FOR */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">Built for Every Type of Farmer</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            VerdantSphere adapts to all farming scales — from small farms to
            industrial agriculture systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Small Farmers",
              desc: "Simple AI tools to improve yield and reduce manual effort.",
              icon: "🌱",
            },
            {
              title: "Commercial Farms",
              desc: "Scale production with data-driven farming automation.",
              icon: "🚜",
            },
            {
              title: "Agri Enterprises",
              desc: "Full analytics dashboard with global supply tracking.",
              icon: "🏭",
            },
            {
              title: "Government Projects",
              desc: "Monitor agriculture at national scale with AI insights.",
              icon: "🌍",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-center"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-green-400 font-semibold">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM IMPACT LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-14 text-center"
        >
          <p className="text-green-300 font-medium">
            ⚡ One platform. All farm sizes. Fully scalable AI agriculture
            system.
          </p>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 text-center relative">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <h2 className="text-4xl font-bold">What Farmers Say</h2>
          <p className="text-gray-300 mt-3">
            Real feedback from farmers using our AI agriculture system.
          </p>
        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Rahim Uddin",
              role: "Rice Farmer",
              location: "Rajshahi, Bangladesh",
              text: "Yield increased by 42% using AI irrigation suggestions. My farm is now fully optimized.",
            },
            {
              name: "Ayesha Khan",
              role: "Organic Farm Owner",
              location: "Dhaka, Bangladesh",
              text: "The crop disease detection system saved my entire harvest this season.",
            },
            {
              name: "John Mathews",
              role: "Agri Entrepreneur",
              location: "Texas, USA",
              text: "Best farming analytics platform I’ve ever used. Data accuracy is incredible.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg text-left relative overflow-hidden"
            >
              {/* QUOTE ICON BACKGROUND */}
              <div className="absolute text-green-500/10 text-8xl top-2 right-4 font-bold">
                “”
              </div>

              {/* USER HEADER */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  🌱
                </div>

                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-xs text-gray-400">{t.role}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>

              {/* STAR RATING */}
              <div className="text-green-400 text-sm mb-3">★ ★ ★ ★ ★</div>

              {/* TEXT */}
              <p className="text-gray-300 text-sm leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>

        {/* FEATURED TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 max-w-4xl mx-auto bg-green-500/10 border border-green-500/20 rounded-2xl p-8 backdrop-blur-lg"
        >
          <p className="text-green-300 font-medium text-lg">
            🌟 “VerdantSphere completely transformed how I manage my farm.
            Everything is automated and data-driven now.”
          </p>
          <p className="text-gray-400 mt-3 text-sm">
            — Verified Farmer Community Feedback
          </p>
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-300 mt-4">
            Everything you need to know about VerdantSphere AgriTech.
          </p>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              q: "How does AI improve farming efficiency?",
              a: "Our AI analyzes soil, weather, and crop data in real time to optimize irrigation, fertilization, and harvesting decisions, increasing yield and reducing waste.",
            },
            {
              q: "Do I need special hardware to use VerdantSphere?",
              a: "Basic sensors improve performance, but our platform can also work with manual data input for small farms.",
            },
            {
              q: "Is this suitable for small farmers?",
              a: "Yes, the system is scalable — from small family farms to large agricultural enterprises.",
            },
            {
              q: "How accurate is the AI prediction system?",
              a: "Our models achieve up to 90–95% accuracy in yield prediction based on historical and real-time data.",
            },
            {
              q: "Can I track my farm remotely?",
              a: "Yes, you can monitor soil health, irrigation, and crop status from anywhere using the dashboard.",
            },
          ].map((item, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-white font-medium">
                {item.q}
                <span className="text-green-400 group-open:rotate-45 transition">
                  +
                </span>
              </summary>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {item.a}
              </p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* AI FARM LIVE DEMO DASHBOARD */}
      <section className="py-28 px-6 max-w-6xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-white">
            Live AI Farm Dashboard
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Real-time simulation of smart farming system powered by AI + IoT
            sensors.
          </p>
        </motion.div>

        {/* MAIN CARD (VISIBLE FIX) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white text-black rounded-2xl p-8 shadow-2xl border-4 border-green-400"
        >
          {/* HEADER */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div>
              <h3 className="text-green-700 font-bold text-lg">
                🌾 Farm Status: ACTIVE
              </h3>
              <p className="text-gray-600 text-sm">
                Location: Rajshahi, Bangladesh
              </p>
            </div>

            <div className="flex gap-2">
              <span className="px-3 py-1 text-xs bg-green-200 text-green-800 rounded-full font-semibold">
                AI ONLINE
              </span>
              <span className="px-3 py-1 text-xs bg-blue-200 text-blue-800 rounded-full font-semibold">
                IoT CONNECTED
              </span>
            </div>
          </div>

          {/* DATA GRID */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border shadow-md bg-green-50"
            >
              <h4 className="font-bold text-green-700">🌱 Crop Health</h4>
              <p className="text-3xl font-bold mt-2 text-black">92%</p>
              <p className="text-gray-600 text-sm mt-1">
                Healthy crops detected
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border shadow-md bg-blue-50"
            >
              <h4 className="font-bold text-blue-700">💧 Water Level</h4>
              <p className="text-3xl font-bold mt-2 text-black">78%</p>
              <p className="text-gray-600 text-sm mt-1">Irrigation optimal</p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border shadow-md bg-yellow-50"
            >
              <h4 className="font-bold text-yellow-700">📊 Yield Forecast</h4>
              <p className="text-3xl font-bold mt-2 text-black">+38%</p>
              <p className="text-gray-600 text-sm mt-1">Expected increase</p>
            </motion.div>
          </div>

          {/* LIVE STATUS BAR */}
          <div className="mt-10 p-5 rounded-xl bg-black text-white">
            <motion.p
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-sm"
            >
              ⚡ LIVE UPDATE: Soil improving • Irrigation optimized • No disease
              detected
            </motion.p>
          </div>
        </motion.div>
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
      <footer className="relative mt-20 border-t border-white/10 bg-[#071a12] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-green-400 font-bold text-xl"
            >
              <Leaf />
              VerdantSphere
            </motion.div>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              AI-powered agriculture platform helping farmers increase yield,
              reduce cost, and grow sustainably with smart technology.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-green-400 cursor-pointer">
                AI Dashboard
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Smart Irrigation
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Crop Analytics
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Market Insights
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-green-400 cursor-pointer">About Us</li>
              <li className="hover:text-green-400 cursor-pointer">Careers</li>
              <li className="hover:text-green-400 cursor-pointer">Contact</li>
              <li className="hover:text-green-400 cursor-pointer">Support</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Get in Touch</h3>
            <p className="text-gray-400 text-sm">wit.ifty.dev@gmail.com</p>
            <p className="text-gray-400 text-sm mt-2">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-6 px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} VerdantSphere AgriTech. All rights
            reserved.
          </motion.p>

          <p className="text-green-400 text-sm mt-2 font-medium flex items-center justify-center gap-2">
            Designed & Developed by
            <Hand className="w-4 h-4 text-green-300 animate-pulse" />
            <a
              href="https://fahimahmedifty.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-300 transition font-semibold"
            >
              Fahim Ahmed Ifty
            </a>
          </p>
        </div>

        {/* GLOW EFFECT */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-green-500/10 blur-3xl pointer-events-none"></div>
      </footer>
    </div>
  );
}
