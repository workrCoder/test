import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden font-poppins">
        {/* Modern Background */}
        <div className="absolute inset-0">
          {/* Base Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
          
          {/* High Resolution Gold Accent Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c4af57]/5 via-transparent to-[#c4af57]/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#c4af57]/3 via-transparent to-[#c4af57]/3" />
          
          {/* High Resolution Animated Circles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-[#c4af57]/10 blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] rounded-full bg-[#c4af57]/10 blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* High Resolution Floating Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-${i % 2 === 0 ? '4' : '3'} h-${i % 2 === 0 ? '4' : '3'} rounded-full bg-[#c4af57]/20 blur-sm`}
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${15 + (i * 10)}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
          
          {/* High Resolution Grid Overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 215, 0, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 215, 0, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }} />
          
          {/* High Resolution Noise Texture */}
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
          }} />
          
          {/* High Resolution Light Rays */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }} />
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="inline-block mb-8"
          >
            <span className="text-[#c4af57] text-sm uppercase tracking-widest font-medium px-4 py-2 rounded-full border border-[#c4af57]/20">
              About Vizyn
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="text-white">Crafting Digital </span>
            <span className="text-[#c4af57]">Excellence</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            We're a team of passionate innovators dedicated to transforming your digital presence into something extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center items-center"
          >
            <motion.a 
              href="#contact" 
              className="group w-full sm:w-auto px-8 py-4 border border-[#c4af57]/20 text-white rounded-lg font-semibold hover:border-[#c4af57]/40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Your Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c4af57]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Why Choose </span>
            <span className="text-[#c4af57]">Vizyn</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Innovation First",
                description: "Pushing boundaries and creating new possibilities in digital experiences.",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Future-Ready",
                description: "Building scalable solutions that adapt to tomorrow's challenges.",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Agile & Dynamic",
                description: "Quick to adapt, responsive to change, and focused on results.",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group p-8 rounded-xl border border-[#c4af57]/10 hover:border-[#c4af57]/30 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c4af57]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-[#c4af57] mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-[#c4af57] mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-black to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Our </span>
            <span className="text-[#c4af57]">Vision</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-400 leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're not just building products; we're crafting experiences that 
            inspire, innovate, and transform the digital landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="#contact" 
              className="group inline-block px-8 py-4 bg-[#c4af57] text-black rounded-lg font-semibold hover:bg-[#c4af57]/90 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Join Our Vision</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c4af57] to-[#c4af57]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
