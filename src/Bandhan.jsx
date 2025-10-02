import React from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle2 } from "lucide-react";

export default function Bandhan() {
  const sweets = [
    {
      id: 1,
      name: "Kaju Katli",
      desc: "Kaju se bani patli aur soft barfi, upar chandi ka warq lagta hai.",
      img: "https://imgs.search.brave.com/L31GAV8o5tfX4EJt7h1mv5YkTSVqCK1kyUB73cEsgtk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI1Lzcv/NTMxNjI4MjMxL1hB/L1pQL1VELzU4NTM3/NDA4L2thanUta2F0/bGktc3dlZXQtNTAw/eDUwMC5qcGc",
    },
    {
      id: 2,
      name: "Ladoo",
      desc: "Gol-gol aur meetha, besan ya boondi se bane hue laddoo sabko pasand aate hain.",
      img: "https://imgs.search.brave.com/ukb25Ia13xJC4_gCiGc5tvE5LQ6TAmGTiwmD6gdvEmk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzQ2LzMxLzAw/LzM2MF9GXzI0NjMx/MDA5OF92NmdCR01w/UjF1cHhPMDNnN2F3/SmxCMGF5WWhma0w1/Vi5qcGc",
    },
    {
      id: 3,
      name: "Chirawa Famous Peda",
      desc: "Chirawa ka mashhoor peda, doodh se bana aur dry fruits ke saath serve kiya jata hai.",
      img: "https://imgs.search.brave.com/GzJSlDHvM-eLk0e6qAR5OSErq0axvAqO_OkG4tUDA9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWxs/a2FydC5jb20vY2Ru/L3Nob3AvZmlsZXMv/c2FuZHdpY2gtcGVk/YV8yMDQ4eDIwNDgu/anBnP3Y9MTY5NDQ1/NDExMw",
    },
    {
      id: 4,
      name: "Kalakand",
      desc: "Doodh aur khoya se bani danedar mithai, har festival ki jaan hai.",
      img: "https://imgs.search.brave.com/5hg8t85xsnCV1hswFAUiTFrbfL7c73qr4TBqhw4OmLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MjEvYjQvOWIvZjEv/a2FsYWthbmQuanBn",
    },
    {
      id: 5,
      name: "Besan Ki Burfi",
      desc: "Bhune hue besan, ghee aur chini se bani barfi jo muh me ghul jati hai.",
      img: "https://imgs.search.brave.com/-YESnZWuRgVWyOUWOsRq2QIQj8T_YFCLN85IyN0pr0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYWR1/cy5jby5pbi9jZG4v/c2hvcC9maWxlcy9V/bnRpdGxlZGRlc2ln/bi5wbmc_dj0xNjg3/OTM3MzcyJndpZHRo/PTEyMDA",
    },
    {
      id: 6,
      name: "Mishri Mawa",
      desc: "Mawa me mishri milakar bani mithai, khane me crispy aur creamy lagti hai.",
      img: "https://imgs.search.brave.com/BC0nZp4Yv-CmCQvX_zfGjyahczI2hs48jf1IQmRVt_Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kZWxp/Y2lvdXMtaW5kaWFu/LW1pdGhhaS1ob3Qt/bWlsa2Nha2Uta2Fs/YWthbmQtYnVyZmkt/YWx3YXIta2EtbWF3/YS1iYXJmaS1tYWRl/LWtob3lhLWRvb2Ro/LW1hbGFpLWRlY29y/YXRlZC1iYWRhbS1i/YWRhYW0tMjE3Njc2/Mjk2LmpwZw",
    },
    {
      id: 7,
      name: "Doda Barfi (Gund-Pak)",
      desc: "Gud aur ghee me gond milakar bani mithai, khane me soft aur energetic lagti hai.",
      img: "https://imgs.search.brave.com/9wSX-5dGdhPGoec4iNeryvGfoWzk6kJfgjFaQCKZBsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kb2RoYS1iYXJm/aS1kb2RhLWJ1cmZp/LWlzLXRyYWRpdGlv/bmFsLWluZGlhbi1z/d2VldC13aGljaC1o/YXMtZ3JhaW55LWNo/ZXd5LXRleHR1cmVf/NDY2Njg5LTg0OTcx/LmpwZw",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50 text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg">
              <img src="/logo.jpeg" alt="Bandhan Logo" className="w-full h-full object-cover scale-110" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Bandhan</h1>
              <p className="text-xs text-gray-500">Authentic sweets · Made with love</p>
            </div>
          </div>

          <nav className="space-x-6 hidden md:flex font-medium">
            <a href="#home" className="hover:text-rose-600">Home</a>
            <a href="#menu" className="hover:text-rose-600">Menu</a>
            <a href="#about" className="hover:text-rose-600">About</a>
            <a href="#contact" className="hover:text-rose-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section id="home" className="grid md:grid-cols-2 gap-10 items-center py-12">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <span className="inline-block bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm font-medium">
              Handmade • Fresh • Local
            </span>
            <h2 className="text-5xl font-extrabold leading-tight">
              Bandhan — Sweets that bring people together
            </h2>
            <p className="text-gray-600 text-lg">
              From classic festival favourites to seasonal treats — crafted using traditional recipes & premium ingredients.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#menu" className="px-6 py-3 bg-rose-600 text-white rounded-lg shadow hover:bg-rose-700 transition">
                View Menu
              </a>
              <a href="#contact" className="px-6 py-3 bg-white border rounded-lg shadow hover:bg-rose-50 transition">
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl bg-white"
          >
            <img
              src="https://imgs.search.brave.com/azGnDfwDI3L1gBGX0kjlbjKOaIwYZxvGcxp6Wgm7IwQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODU2/NTI0NzYvcGhvdG8v/cGVyc29uLXdpdGgt/cGxhdHRlci1vZi1k/aXdhbGktc3dlZXRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UaG51VVExRFI2/cVRVSmdkdzdwS3hz/TWZ3NGVUV3FaY3ND/YU9mTmtiMVY4PQ"
              alt="Sweets feature"
              className="w-full h-72 object-cover"
            />
          </motion.div>
        </section>

        {/* Menu */}
        <section id="menu" className="my-16">
          <h3 className="text-3xl font-bold mb-4">Our Sweets</h3>
          <p className="text-gray-600 mb-8">Handpicked favourites — small batch, freshly prepared.</p>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {sweets.map((s) => (
              <motion.article
                key={s.id}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-xl overflow-hidden shadow-md border hover:shadow-2xl transition"
              >
                <div className="h-48 overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover transform hover:scale-110 transition" />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-lg">{s.name}</h4>
                  <p className="text-sm text-gray-500 mt-2">{s.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="my-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold">About Bandhan</h3>
            <p className="text-gray-600 mt-4 text-lg">
              Bandhan started as a small family sweet shop with the idea that food creates bonds. 
              We focus on quality, traditional recipes, and a warm experience for every customer.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-rose-600 w-5 h-5"/> Fresh daily batches</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-rose-600 w-5 h-5"/> No preservatives</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-rose-600 w-5 h-5"/> Custom orders for events</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-rose-600 w-5 h-5"/> Delivery & pick-up available</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow text-center">
            <div className="text-xl font-semibold text-rose-700">Rahul Saini</div>
            <div className="text-gray-600 mt-2 flex items-center justify-center gap-2"><Phone size={16}/> +91 8823915546</div>
            <div className="text-sm text-gray-500 mt-1">For orders & inquiries</div>
          </div>
        </section>

        {/* Contact (Simple Info Only) */}
        <section id="contact" className="my-16">
          <div className="bg-white rounded-xl p-8 shadow text-center max-w-xl mx-auto">
            <div className="text-2xl font-semibold text-rose-700">Get in Touch</div>
            <div className="text-lg text-gray-700 mt-3 flex justify-center items-center gap-2">
              <Phone size={18}/> +91 8823915546
            </div>
            <p className="text-sm text-gray-500 mt-2">
              We are here to serve you the best traditional sweets. Call us directly to place your order.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center border-t text-sm text-gray-500">
          © {new Date().getFullYear()} Bandhan — Made with ♥
        </footer>
      </main>
    </div>
  );
}
