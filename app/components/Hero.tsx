import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden font-poppins">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-[#FFD700] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD700] rounded-full blur-[120px] opacity-20" />
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-white">Welcome to </span>
          <span className="text-[#FFD700]">Vizyn</span>
        </h1>
        
        <div className="text-xl md:text-3xl mb-8">
          <span className="text-white">Where </span>
          <TypeWriter />
          <span className="text-white"> Meets Design</span>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3 bg-[#FFD700] text-black rounded-full font-semibold hover:bg-[#FFD700]/90 transition-colors text-center"
          >
            Get Started
          </a>
          <a 
            href="#work" 
            className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm text-center"
          >
            View Work
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 border border-[#FFD700]/20 rounded-full"
      />
      <motion.div
        animate={{
          rotate: -360
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 left-1/4 w-16 md:w-32 h-16 md:h-32 border border-white/20 rounded-full"
      />
    </div>
  );
};

export default Hero; 