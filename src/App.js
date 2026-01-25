import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, MessageCircle, Mail, CheckCircle,
  Star, Heart, Facebook, Instagram, Twitter, Linkedin,
 ShieldCheck,FileSearch,
  Layout, Smartphone, ShoppingBag, Database, Globe
} from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIntroDone(true), 4200);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // --- DATA RECOVERY ---
  const whatsappMain = "https://wa.me/27698218311";
  const accountNum = "2305612245";

  return (
    <>
      {/* 🌪️ CINEMATIC INTRO */}
      <AnimatePresence>
        {!introDone && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.div 
              initial={{ letterSpacing: "-0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.2em", opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center"
            >
              <h1 className="text-7xl md:text-[10rem] font-black italic tracking-tighter text-white">
                X<span className="text-pink-600 font-black">NET.</span>
              </h1>
              <p className="text-gray-500 font-bold uppercase tracking-[0.5em] text-[10px] mt-4">Pretoria's Digital Foundry</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#050505] text-white selection:bg-pink-500 font-sans">
        
        {/* NAV */}
        <header className="fixed top-0 z-40 w-full bg-black/60 backdrop-blur-2xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-black italic tracking-tighter cursor-pointer" onClick={() => scrollTo("home")}>
              X<span className="text-pink-600">N.</span>
            </h1>
            <nav className="hidden lg:flex gap-8 font-black uppercase text-[10px] tracking-widest text-gray-400">
              {["home", "services", "pricing", "team", "testimonials", "projects", "contact"].map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="hover:text-pink-500 transition">{item}</button>
              ))}
            </nav>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 bg-white/5 rounded-xl"><Menu /></button>
          </div>
        </header>

        {/* HERO */}
        <section id="home" className="pt-64 pb-32 px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.5 }}>
            <span className="text-pink-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Est. 2024 • Pretoria, South Africa</span>
            <h1 className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter italic uppercase">
              Digital <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">Excellence.</span>
            </h1>
            <p className="mt-12 text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto font-bold leading-relaxed italic">
              Building the next generation of African digital empires. From high-performance websites to complex ecosystem software.
            </p>
            <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
               <a href={whatsappMain} className="px-14 py-7 bg-pink-600 rounded-2xl font-black italic tracking-widest text-xl hover:bg-white hover:text-black transition-all shadow-2xl shadow-pink-600/20">START YOUR PROJECT</a>
               <button onClick={() => scrollTo("services")} className="px-14 py-7 border border-white/10 rounded-2xl font-black italic tracking-widest text-xl hover:bg-white/5 transition-all">OUR SERVICES</button>
            </div>
          </motion.div>
        </section>

        {/* --- SERVICES (DETAILED) --- */}
        <section id="services" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-24">Core <span className="text-pink-600">Capabilities.</span></h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: <Globe />, title: "Web Architecture", desc: "Custom-built websites focused on speed, SEO, and conversion. We don't use boring templates; we build unique digital identities." },
                { icon: <ShoppingBag />, title: "E-Commerce", desc: "Full-scale online stores with payment gateway integration, stock management, and automated delivery tracking systems." },
                { icon: <Smartphone />, title: "Mobile Ecosystems", desc: "Native and cross-platform mobile applications for iOS and Android that scale with your business growth." },
                { icon: <Database />, title: "Custom Software", desc: "Bespoke ERP, CRM, and management systems designed specifically for your company's unique workflow." },
                { icon: <Layout />, title: "UI/UX Design", desc: "High-end visual design that prioritizes user experience and brand authority. Grayscale to color, liquid animations, and more." },
                { icon: <ShieldCheck />, title: "Security & Ops", desc: "Rock-solid cloud hosting, database encryption, and ongoing maintenance to keep your platform running 24/7/365." }
              ].map((s, i) => (
                <div key={i} className="p-10 bg-white/5 rounded-[3rem] border border-white/5 hover:border-pink-500 transition-all group">
                  <div className="text-pink-500 mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                  <h3 className="text-2xl font-black italic uppercase mb-4">{s.title}</h3>
                  <p className="text-gray-400 font-bold text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PRICING (RESTORED) --- */}
        <section id="pricing" className="py-32 px-6 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black italic text-center mb-20 uppercase tracking-tighter">Strategic <span className="text-pink-600">Pricing.</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* BASIC */}
              <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/5">
                <h3 className="text-xl font-black text-purple-400 italic mb-2 tracking-widest">BASIC</h3>
                <div className="text-6xl font-black mb-8 italic">R1000</div>
                <ul className="space-y-5 mb-12 text-sm font-bold text-gray-400">
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> 1–5 Premium Pages</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Fully Mobile Responsive</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Professional Contact Form</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-green-500"/> Social Media Integration</li>
                </ul>
                <a href={whatsappMain} className="block w-full py-5 bg-white text-black text-center font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-pink-600 hover:text-white transition-all">CHOOSE BASIC</a>
              </div>
              {/* PRO */}
              <div className="bg-gradient-to-b from-pink-900/40 to-black p-12 rounded-[3.5rem] border-4 border-pink-600 scale-110 relative shadow-2xl shadow-pink-600/20">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-pink-600 px-6 py-2 rounded-full font-black text-[10px] tracking-widest uppercase">Elite Choice</div>
                <h3 className="text-xl font-black text-pink-400 italic mb-2 tracking-widest">PRO</h3>
                <div className="text-6xl font-black mb-8 italic">R5500</div>
                <ul className="space-y-5 mb-12 text-sm font-bold text-white/80">
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-pink-500"/> Full E-commerce System</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-pink-500"/> Advanced Admin Dashboard</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-pink-500"/> Inventory Management</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-pink-500"/> 1 Year Hosting Included</li>
                </ul>
                <a href={whatsappMain} className="block w-full py-5 bg-pink-600 text-white text-center font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-white hover:text-black transition-all">CHOOSE PRO</a>
              </div>
              {/* ENTERPRISE */}
              <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/5">
                <h3 className="text-xl font-black text-red-500 italic mb-2 tracking-widest">ENTERPRISE</h3>
                <div className="text-6xl font-black mb-8 italic">CUSTOM</div>
                <ul className="space-y-5 mb-12 text-sm font-bold text-gray-400">
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-red-500"/> Mobile App (iOS/Android)</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-red-500"/> ERP/CRM Logic Systems</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-red-500"/> Multi-vendor Marketplace</li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-red-500"/> Dedicated Server Setup</li>
                </ul>
                <a href={whatsappMain} className="block w-full py-5 bg-white/10 text-white text-center font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-red-600 transition-all">INQUIRE</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- TEAM (DETAILED BIOS) --- */}
        <section id="team" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-6xl font-black italic tracking-tighter uppercase mb-24">The <span className="text-pink-600">Architects.</span></h2>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { name: "ENDY MOHLOLA", role: "Founder & Lead Dev", bio: "Diploma in Software Development. Specialist in React, Node.js, and complex system logic.", img: "/images/endy.jpeg" },
                { name: "UNA RAMS", role: "CEO & Strategist", bio: "Marketing visionary and Forex trading expert. Focused on brand growth and market dominance.", img: "/images/una.jpeg" },
                { name: "RONEWA", role: "Full-Stack Engineer", bio: "Precision coder specializing in database architecture and secure API integrations.", img: "/images/ronewa.jpeg" }
              ].map((m, i) => (
                <div key={i} className="group">
                  <div className="relative aspect-square rounded-[3.5rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8 border-2 border-transparent group-hover:border-pink-500">
                    <img src={m.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={m.name} />
                  </div>
                  <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-2">{m.name}</h3>
                  <p className="text-pink-500 font-black uppercase tracking-[0.2em] text-xs mb-4">{m.role}</p>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS (NEW) --- */}
        <section id="testimonials" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-black italic uppercase mb-20 tracking-tighter">Client <span className="text-pink-500">Words.</span></h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                { name: "Sello M.", project: "E-commerce Site", text: "XNETWORK transformed our local shop into a national brand. The Pro package was the best investment we made." },
                { name: "Lerato K.", project: "Church Website", text: "Professional, fast, and high quality. They understood our vision and delivered a site that truly represents our ministry." }
              ].map((t, i) => (
                <div key={i} className="p-12 bg-black border border-white/5 rounded-[3rem] italic text-left relative">
                  <Star className="text-pink-600 mb-6" fill="currentColor"/>
                  <p className="text-gray-400 text-lg font-bold mb-8 leading-relaxed">"{t.text}"</p>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm">{t.name}</h4>
                  <p className="text-pink-500 text-[10px] font-black uppercase mt-1">{t.project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECTS & HUB --- */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto space-y-32">
            {/* JITASHOP */}
<div className="bg-white/5 rounded-[4rem] p-10 md:p-20 border border-white/10 flex flex-col md:flex-row gap-16 items-center">
  <div className="md:w-1/2">
    <span className="text-pink-500 font-black uppercase tracking-widest text-xs mb-4 block italic underline decoration-2 underline-offset-8">Featured Live Project</span>
    <h3 className="text-6xl font-black italic uppercase mb-8 tracking-tighter">JitaShop</h3>
    <p className="text-gray-400 text-xl font-bold mb-10 italic leading-relaxed">
      The premier Kasi community marketplace. Connecting thousands of local vendors with a high-performance logistics and admin engine.
    </p>
    <a 
      href="https://jitashopx.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block px-10 py-5 border-2 border-white/20 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all"
    >
      EXPLORE JITASHOP UI
    </a>
  </div>
  <div className="md:w-1/2 w-full aspect-square bg-zinc-900 rounded-[4rem] border border-white/10 overflow-hidden shadow-inner">
    {/* REPLACE THE SRC BELOW WITH YOUR ACTUAL IMAGE PATH */}
    <img 
      src="/images/mock.png" 
      alt="JitaShop Interface" 
      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
    />
  </div>
</div>

            {/* GAMING HUB TEASER */}
            <div className="bg-gradient-to-r from-purple-900/40 via-black to-pink-900/40 p-12 md:p-20 rounded-[4rem] border border-white/10 text-center">
               <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 italic">X NETWORK <br/> <span className="text-pink-500">GAMING & EDU HUB</span></h2>
               <p className="text-gray-300 text-xl md:text-2xl font-bold max-w-2xl mx-auto italic mb-12">The largest educational and gaming portal in Africa. Redefining digital learning and competitive play.</p>
               <div className="inline-block px-12 py-6 bg-white/5 border border-white/10 rounded-3xl font-black italic text-2xl tracking-tighter">COMING MAY 2026</div>
            </div>
          </div>
        </section>

        {/* --- THE BIG CV REVIEW (R10) --- */}
<section id="cv-review" className="py-32 px-6">
  <div className="max-w-6xl mx-auto bg-gradient-to-br from-zinc-900 to-black p-12 md:p-24 rounded-[5rem] border border-white/10 text-center relative overflow-hidden shadow-2xl">
    <div className="absolute -bottom-20 -left-20 opacity-5 rotate-12"><FileSearch size={400} /></div>
    <h2 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase mb-10">AI CV <br/> REVIEW</h2>
    <p className="text-gray-400 text-2xl font-bold max-w-xl mx-auto mb-12 italic">Professional scoring. Immediate results. Get the job you deserve.</p>
    <div className="text-7xl font-black text-pink-500 mb-12 italic">R10.00</div>
    {/* REPLACE THE HREF BELOW WITH YOUR CV WEBSITE LINK */}
    <a 
      href="https://iboy-xnetwork.github.io/cvreview/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block px-20 py-8 bg-pink-600 rounded-[2rem] font-black italic tracking-widest text-2xl hover:bg-white hover:text-black transition-all shadow-xl shadow-pink-600/30"
    >
      RUN MY CV NOW
    </a>
  </div>
</section>

        {/* --- BANKING --- */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[4rem] p-16 text-center">
            <Heart size={64} className="text-red-600 mx-auto mb-10 animate-pulse" />
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-12">Support the Vision</h2>
            <div className="max-w-sm mx-auto space-y-4">
               <div className="flex justify-between text-[10px] font-black uppercase text-gray-500 tracking-[0.3em]"><span>Account Number</span> <span className="text-white tracking-widest">{accountNum}</span></div>
               <div className="flex justify-between text-[10px] font-black uppercase text-gray-500 tracking-[0.3em]"><span>Account Name</span> <span className="text-white">XNETWORK (PTY) LTD</span></div>
               <div className="flex justify-between text-[10px] font-black uppercase text-gray-500 tracking-[0.3em]"><span>Bank</span> <span className="text-white">CAPITEC BANK</span></div>
            </div>
          </div>
        </section>

        {/* --- CONTACT & FOOTER --- */}
        <section id="contact" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-16 underline decoration-pink-600 underline-offset-[12px]">Get Started</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <a href={whatsappMain} className="py-10 bg-emerald-600 rounded-3xl font-black italic tracking-widest uppercase text-xl flex items-center justify-center gap-4 hover:scale-105 transition-transform shadow-xl shadow-emerald-600/20"><MessageCircle size={32}/> WhatsApp Main</a>
              <a href="mailto:Ramaanounarine03@gmail.com" className="py-10 bg-white/5 border border-white/10 rounded-3xl font-black italic tracking-widest uppercase text-xl flex items-center justify-center gap-4 hover:bg-white/10 transition-colors"><Mail size={32}/> Official Email</a>
            </div>
            <div className="flex justify-center gap-10 text-gray-600 mb-20">
              <Facebook size={24}/> <Instagram size={24}/> <Twitter size={24}/> <Linkedin size={24}/>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-800 italic">XNETWORK DIGITAL PRETORIA © 2026</p>
          </div>
        </section>

      </div>
    </>
  );
}
