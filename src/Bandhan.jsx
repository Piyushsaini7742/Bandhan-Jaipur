import React from "react";
import { motion } from "framer-motion";

export default function Bandhan() {
  const sweets = [
    {
      id: 1,
      name: "Kaju Katli",
      desc: "Soft, syrupy and melt-in-mouth delights.",
      img: "https://imgs.search.brave.com/L31GAV8o5tfX4EJt7h1mv5YkTSVqCK1kyUB73cEsgtk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI1Lzcv/NTMxNjI4MjMxL1hB/L1pQL1VELzU4NTM3/NDA4L2thanUta2F0/bGktc3dlZXQtNTAw/eDUwMC5qcGc",
    },
    {
      id: 2,
      name: "Ladoo",
      desc: "Light spongy cheese balls soaked in sugar syrup.",
      img: "https://imgs.search.brave.com/ukb25Ia13xJC4_gCiGc5tvE5LQ6TAmGTiwmD6gdvEmk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQ2LzMxLzAw/LzM2MF9GXzI0NjMx/MDA5OF92NmdCR01w/UjF1cHhPMDNnN2F3/SmxCMGF5WWhma0w1/Vi5qcGc",
    },
    {
      id: 3,
      name: "Chirawa Famous Peda",
      desc: "Crisp, syrupy spirals with a bright orange pop.",
      img: "https://imgs.search.brave.com/GzJSlDHvM-eLk0e6qAR5OSErq0axvAqO_OkG4tUDA9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWxs/a2FydC5jb20vY2Ru/L3Nob3AvZmlsZXMv/c2FuZHdpY2gtcGVk/YV8yMDQ4eDIwNDgu/anBnP3Y9MTY5NDQ1/NDExMw",
    },
    {
      id: 4,
      name: "Kalakand",
      desc: "Silky cashew fudge — festive favourite.",
      img: "https://imgs.search.brave.com/5hg8t85xsnCV1hswFAUiTFrbfL7c73qr4TBqhw4OmLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MjEvYjQvOWIvZjEv/a2FsYWthbmQuanBn",
    },
    {
      id: 5,
      name: "Besan Ki Burfi",
      desc: "Hand-rolled goodness with ghee and nuts.",
      img: "https://imgs.search.brave.com/-YESnZWuRgVWyOUWOsRq2QIQj8T_YFCLN85IyN0pr0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYWR1/cy5jby5pbi9jZG4v/c2hvcC9maWxlcy9V/bnRpdGxlZGRlc2ln/bi5wbmc_dj0xNjg3/OTM3MzcyJndpZHRo/PTEyMDA",
    },
    {
      id: 6,
      name: "Mishri Mawa",
      desc: "Dense milk fudge in many flavours.",
      img: "https://imgs.search.brave.com/BC0nZp4Yv-CmCQvX_zfGjyahczI2hs48jf1IQmRVt_Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kZWxp/Y2lvdXMtaW5kaWFu/LW1pdGhhaS1ob3Qt/bWlsa2Nha2Uta2Fs/YWthbmQtYnVyZmkt/YWx3YXIta2EtbWF3/YS1iYXJmaS1tYWRl/LWtob3lhLWRvb2Ro/LW1hbGFpLWRlY29y/YXRlZC1iYWRhbS1i/YWRhYW0tMjE3Njc2/Mjk2LmpwZw",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50 text-gray-800">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
  <div className="flex items-center gap-4">
    {/* Logo Image */}
    <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
  <img 
    src="/logo.jpeg" 
    alt="Bandhan Logo" 
    className="w-full h-full object-cover scale-110" 
  />
</div>


    <div>
      <h1 className="text-2xl font-semibold">Bandhan</h1>
      <p className="text-sm text-gray-600">Authentic sweets · Made with love</p>
    </div>
  </div>

  <nav className="space-x-6 hidden md:flex">
    <a href="#home" className="text-gray-700 hover:text-rose-600">Home</a>
    <a href="#menu" className="text-gray-700 hover:text-rose-600">Menu</a>
    <a href="#about" className="text-gray-700 hover:text-rose-600">About</a>
    <a href="#contact" className="text-gray-700 hover:text-rose-600">Contact</a>
  </nav>
</header>


      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center my-8">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">Handmade • Fresh • Local</span>
            <h2 className="text-4xl font-extrabold leading-tight">Bandhan — Sweets that bring people together</h2>
            <p className="text-gray-700">From classic festival favourites to fresh seasonal treats — crafted using traditional recipes and premium ingredients.</p>

            <div className="flex gap-4 mt-4">
              <a href="#menu" className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg shadow hover:scale-[1.02] transition">View Menu</a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="text-sm">
                <div className="font-semibold">Open</div>
                <div className="text-gray-600">Mon - Sun: 9:00 AM - 9:00 PM</div>
              </div>
              <div className="text-sm">
                <div className="font-semibold">Contact</div>
                <div className="text-gray-600">+91 8823915546</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl bg-white"
          >
            <img
              src="https://imgs.search.brave.com/azGnDfwDI3L1gBGX0kjlbjKOaIwYZxvGcxp6Wgm7IwQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODU2/NTI0NzYvcGhvdG8v/cGVyc29uLXdpdGgt/cGxhdHRlci1vZi1k/aXdhbGktc3dlZXRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UaG51VVExRFI2/cVRVSmdkdzdwS3hz/TWZ3NGVUV3FaY3ND/YU9mTmtiMVY4PQ"
              alt="Sweets feature"
              className="w-full h-64 object-cover"
            />
          </motion.div>
        </section>

        {/* Menu */}
        <section id="menu" className="my-12">
          <h3 className="text-2xl font-bold mb-4">Our Sweets</h3>
          <p className="text-gray-600 mb-6">Handpicked favourites — small batch, freshly prepared.</p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {sweets.map((s) => (
              <motion.article
                key={s.id}
                whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}
                className="bg-white rounded-xl overflow-hidden border"
              >
                <div className="h-44 overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{s.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{s.desc}</p>
                    </div>
                    {/* <div className="text-right">
                      <div className="text-rose-600 font-semibold">{s.price}</div>
                      <div className="text-xs text-gray-400">per serving</div>
                    </div> */}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="my-12 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold">About Bandhan</h3>
            <p className="text-gray-700 mt-4">Bandhan started as a small family sweet shop with the idea that food creates bonds. We focus on quality, traditional recipes, and a warm experience for every customer.</p>

            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
              <li>• Fresh daily batches</li>
              <li>• No preservatives</li>
              <li>• Custom orders for events</li>
              <li>• Delivery & pick-up available</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow text-center">
            <div className="text-lg font-semibold text-rose-700">Rahul Saini</div>
            <div className="text-gray-600 mt-2">📞 +91 8823915546</div>
            <div className="text-sm text-gray-500 mt-1">For orders & inquiries</div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="my-12">
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <div className="mt-6 bg-white rounded-xl p-8 shadow text-center">
            <div className="text-2xl font-semibold text-rose-700">Rahul Saini</div>
            <div className="text-lg text-gray-700 mt-2">📞 +91 8823915546</div>
            <p className="text-sm text-gray-500 mt-2">We are here to serve you the best traditional sweets. Call us directly to place your order.</p>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Bandhan — Made with ♥ · Replace assets & contact before publishing</footer>
      </main>
    </div>
  );
}