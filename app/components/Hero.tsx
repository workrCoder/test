import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';
import { Handshake } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden font-poppins">
    {/* Modern Background */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#c4af57] opacity-10" />
      
      {/* Primary Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 215, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 215, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center center'
        }}
      />
      
      {/* Animated Grid Lines - Primary */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center center'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Animated Grid Lines - Secondary */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 215, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 215, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px',
          transform: 'perspective(1000px) rotateX(60deg)',
          transformOrigin: 'center center'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '200px 200px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating 3D Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32"
        style={{
          background: 'rgba(255, 215, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          transform: 'perspective(1000px) rotateX(45deg) rotateY(45deg)',
        }}
        animate={{
          y: [0, -20, 0],
          rotateX: [45, 60, 45],
          rotateY: [45, 60, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24"
        style={{
          background: 'rgba(255, 215, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          transform: 'perspective(1000px) rotateX(-45deg) rotateY(-45deg)',
        }}
        animate={{
          y: [0, 20, 0],
          rotateX: [-45, -60, -45],
          rotateY: [-45, -60, -45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>

    {/* Content */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="relative z-10 text-center px-4 max-w-4xl mx-auto"
    >
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <span className="text-white">Bring Your Vision to Life with </span>
        <span className="text-[#c4af57]">Vizyn</span>
      </motion.h1>
      
      <motion.div 
        className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <TypeWriter
          text={["Websites. Automation. Growth.", "Built for the future."]}
          delay={2000}
          infinite
        />
      </motion.div>

      <motion.p 
        className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
      >
        Beautiful websites, brilliant automation, and bold strategy built for tomorrow.
      </motion.p>

      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a 
              href="#contact" 
              className="group w-full sm:w-auto px-8 py-4 bg-[#c4af57] text-black rounded-lg font-semibold hover:bg-[#c4af57]/90 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Let's Build Together</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c4af57] to-[#c4af57]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a 
              href="#work" 
              className="group w-full sm:w-auto px-8 py-4 border border-[#c4af57]/20 text-white rounded-lg font-semibold hover:border-[#c4af57]/40 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Discover More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#c4af57]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>
    </motion.div>
  </div>
  );
};

export default Hero; 