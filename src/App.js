import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIntroDone(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  // Fixed: Added parentheses around optional chaining
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Links
  const whatsapp1 = "https://wa.me/27698218311";
  const whatsapp2 = "https://wa.me/27714298172";
  const donateLink = "https://pay.yoco.com/xnetwork"; // Change later
  const facebook = "https://facebook.com/xnetwork";
  const instagram = "https://instagram.com/xnetwork";
  const twitter = "https://twitter.com/xnetwork";
  const linkedin = "https://linkedin.com/company/xnetwork";

  return (
    <>
      {/* EPIC INTRO */}
      <AnimatePresence>
        {!introDone && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring", stiffness: 90 }}
              className="text-8xl md:text-9xl font-black tracking-tighter"
            >
              <span className="text-purple-500">X</span>
              <span className="text-pink-500">NETWORK</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-black text-white">
        {/* HEADER */}
        <header className="fixed top-0 z-40 w-full bg-black/90 backdrop-blur-xl border-b border-purple-900/30">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              XNETWORK
            </h1>
            <nav className="hidden lg:flex gap-10 font-medium text-lg">
              {["home", "pricing", "services", "team", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="hover:text-purple-400 transition capitalize"
                >
                  {item === "home" ? "Home" : item}
                </button>
              ))}
            </nav>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-3xl">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed inset-0 bg-black z-30 pt-28 px-8 text-center"
            >
              {["home", "pricing", "services", "team", "testimonials", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="block w-full py-6 text-3xl font-bold border-b border-purple-900/50"
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO */}
        <section id="home" className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-purple-900/30 to-black">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-8xl font-black leading-tight">
              We build affordable <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Websites </span>
              <br />
              From R1000
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              We serve <strong className="text-purple-400">small businesses</strong> and{" "}
              <strong className="text-pink-400">big brands</strong> — same quality, same passion.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={whatsapp1}
                className="px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 font-bold text-xl rounded-full hover:scale-105 transition flex items-center justify-center gap-3"
              >
                <MessageCircle size={28} /> Chat on WhatsApp
              </a>
              <button
                onClick={() => scrollTo("pricing")}
                className="px-10 py-5 border-2 border-purple-500 font-bold text-xl rounded-full hover:bg-purple-500/20 transition"
              >
                View Pricing
              </button>
            </div>
          </motion.div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-black to-purple-900/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-4">Choose Your Level</h2>
            <p className="text-xl text-gray-400 mb-16">No hidden fees • Fast delivery • Made in Pretoria</p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* BASIC */}
              <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-3xl p-8 border border-purple-700 hover:border-purple-400 transition">
                <h3 className="text-3xl font-black text-purple-400">BASIC</h3>
                <p className="text-6xl font-black my-6">R1000<span className="text-xl text-gray-400">/once</span></p>
                <ul className="space-y-4 text-lg">
                  {["Personal/Portfolio Site", "1–5 Pages", "Mobile Friendly", "Contact Form", "Free Domain Help", "Delivery: 3–5 days"].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle className="text-green-400" /> {f}
                    </li>
                  ))}
                </ul>
                <a href={whatsapp1} className="block mt-10 py-4 bg-purple-600 rounded-xl font-bold hover:bg-purple-500 transition">
                  Get This Package
                </a>
              </div>

              {/* PRO */}
              <motion.div className="bg-gradient-to-b from-pink-900/60 to-purple-900/60 rounded-3xl p-8 border-4 border-pink-500 relative shadow-2xl">
                <div className="absolute top-0 right-0 bg-pink-500 text-black px-6 py-2 font-bold text-sm rounded-bl-2xl">
                  MOST POPULAR
                </div>
                <h3 className="text-4xl font-black text-pink-400">PRO</h3>
                <p className="text-7xl font-black my-6">R5500<span className="text-xl text-gray-400">/once</span></p>
                <ul className="space-y-4 text-lg">
                  {["Everything in Basic", "10–20 Pages", "E-commerce Ready", "Admin Dashboard", "SEO Optimized", "1 Year Free Hosting", "Delivery: 2 weeks"].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle className="text-pink-400" /> {f}
                    </li>
                  ))}
                </ul>
                <a href={whatsapp1} className="block mt-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl font-bold hover:scale-105 transition">
                  Get PRO Package
                </a>
              </motion.div>

              {/* ENTERPRISE */}
              <div className="bg-gradient-to-b from-purple-900/40 to-black rounded-3xl p-8 border border-purple-700 hover:border-purple-400 transition">
                <h3 className="text-3xl font-black text-purple-400">ENTERPRISE</h3>
                <p className="text-5xl font-black my-6">Custom Quote</p>
                <ul className="space-y-4 text-lg">
                  {["Mobile App + Website", "Custom Systems", "ERP/CRM", "Payment Gateways", "Ongoing Support", "Team Training"].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle className="text-green-400" /> {f}
                    </li>
                  ))}
                </ul>
                <a href={whatsapp1} className="block mt-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold hover:scale-105 transition">
                  Discuss Project
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES, TEAM, TESTIMONIALS — SAME AS BEFORE */}
        <section id="services" className="py-20 px-6 text-center">
          <h2 className="text-5xl font-black mb-12">We Also Build</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-xl">
            {["Mobile Apps", "Online Stores", "Admin Dashboards", "School Systems", "Booking Platforms", "Church Websites", "Restaurant Menus", "Custom Software"].map((s) => (
              <div key={s} className="py-6 border border-purple-800 rounded-2xl hover:bg-purple-900/30 transition">
                {s}
              </div>
            ))}
          </div>
        </section>

       {/* TEAM — UPGRADED & CLEAN */}
<section id="team" className="py-32 px-6 bg-gradient-to-b from-purple-900/20 via-black to-black">
  <div className="max-w-7xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-black mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
    >
      Meet The Team
    </motion.h2>

    <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
      {/* ENDY MOHLOLA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="group"
      >
        <div className="relative mb-8 overflow-hidden rounded-3xl">
          <img
            src="/images/endy.jpeg"
            alt="Endy Mohlola — Founder & Lead Developer"
            className="w-80 h-80 md:w-96 md:h-96 mx-auto object-cover rounded-3xl shadow-2xl border-4 border-purple-600 transition-all duration-500 group-hover:scale-105 group-hover:border-purple-400"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white">ENDY MOHLOLA</h3>
        <p className="text-purple-400 text-xl mt-2">Founder & Lead Developer</p>
        <p className="text-gray-400 mt-3 text-lg">3-Year Software Development Diploma<br />Full-Stack Engineer • Visionary</p>
      </motion.div>

      {/* UNA RAMS */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="group"
      >
        <div className="relative mb-8 overflow-hidden rounded-3xl">
          <img
            src="/images/una.jpeg"
            alt="Una Rams — CEO & Business Strategist"
            className="w-80 h-80 md:w-96 md:h-96 mx-auto object-cover rounded-3xl shadow-2xl border-4 border-pink-600 transition-all duration-500 group-hover:scale-105 group-hover:border-pink-400"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white">UNA RAMS</h3>
        <p className="text-pink-400 text-xl mt-2">CEO & Business Strategist</p>
        <p className="text-gray-400 mt-3 text-lg">Supply Chain • Forex Trading • Marketing Genius</p>
      </motion.div>

      {/* RONEWA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="group"
      >
        <div className="relative mb-8 overflow-hidden rounded-3xl">
          <img
            src="/images/ronewa.jpg"
            alt="Ronewa — Full-Stack Developer"
            className="w-80 h-80 md:w-96 md:h-96 mx-auto object-cover rounded-3xl shadow-2xl border-4 border-purple-600 transition-all duration-500 group-hover:scale-105 group-hover:border-purple-400"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-white">RONEWA</h3>
        <p className="text-purple-400 text-xl mt-2">Full-Stack Developer</p>
        <p className="text-gray-400 mt-3 text-lg">3-Year Software Development Diploma<br />Code Perfectionist</p>
      </motion.div>
    </div>
  </div>
</section>

        <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-black to-purple-900/20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-black mb-16">What People Say</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-purple-900/30 p-10 rounded-3xl">
                <Star className="text-yellow-400 mx-auto mb-4" fill="currentColor" size={40} />
                <p className="text-xl italic">"XNETWORK built my salon website for only R1200 — best money I ever spent!"</p>
                <p className="mt-6 font-bold">— Thandi M., Pretoria</p>
              </div>
              <div className="bg-purple-900/30 p-10 rounded-3xl">
                <Star className="text-yellow-400 mx-auto mb-4" fill="currentColor" size={40} />
                <p className="text-xl italic">"They delivered my online store in 10 days. Clients are pouring in!"</p>
                <p className="mt-6 font-bold">— Sipho, Johannesburg</p>
              </div>
            </div>
          </div>
        </section>

        {/* DONATE */}
        <section className="py-20 px-6 text-center bg-gradient-to-b from-purple-900/30 to-black">
          <h2 className="text-5xl font-black mb-8">Want to Bless the Team?</h2>
          <p className="text-xl text-gray-300 mb-10">Every donation helps us support more small businesses</p>
          <a
            href={donateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full font-bold text-xl hover:scale-110 transition"
          >
            <Heart size={32} /> Donate Any Amount
          </a>
        </section>

        {/* CONTACT + SOCIALS + MAP */}
        <section id="contact" className="py-32 px-6 text-center bg-gradient-to-b from-purple-900/30 to-black">
          <h2 className="text-6xl font-black mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto space-y-8 text-xl">
            <a href={whatsapp1} className="block py-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl font-bold text-2xl hover:scale-105 transition flex items-center justify-center gap-4">
              <MessageCircle size={40} /> +27 69 821 8311 (Main)
            </a>
            <a href={whatsapp2} className="block py-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl font-bold text-2xl hover:scale-105 transition flex items-center justify-center gap-4">
              <MessageCircle size={40} /> +27 71 429 8172
            </a>

            <div className="space-y-6 text-lg">
              <a href="mailto:Ramaanounarine03@gmail.com" className="flex items-center justify-center gap-3 text-purple-400 hover:text-purple-300">
                <Mail size={28} /> Ramaanounarine03@gmail.com
              </a>
              <a href="mailto:deandie17@gmail.com" className="flex items-center justify-center gap-3 text-pink-400 hover:text-pink-300">
                <Mail size={28} /> deandie17@gmail.com
              </a>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex justify-center gap-8 mt-10">
              <a href={facebook} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <Facebook size={36} />
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                <Instagram size={36} />
              </a>
              <a href={twitter} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <Twitter size={36} />
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                <Linkedin size={36} />
              </a>
            </div>

            {/* MAP */}
            <div className="mt-16">
              <div className="flex items-center justify-center gap-3 text-2xl font-bold mb-6">
                <MapPin size={40} className="text-purple-400" /> Pretoria, South Africa
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28732.93458120898!2d28.1879!3d-25.7479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561b000000001%3A0xafe65d1b7bf4c5e!2sPretoria!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="400"
                className="rounded-3xl border-4 border-purple-700"
                loading="lazy"
                title="XNETWORK Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 text-center border-t border-purple-900/50">
          <p className="text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            XNETWORK
          </p>
          <p className="text-gray-400 mt-4">© 2025 • Pretoria • From R1000 • Small & Big Brands Welcome</p>
        </footer>
      </div>
    </>
  );
}