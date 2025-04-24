import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AgencyIntro = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Keep content fully visible for longer
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.7],  // Content stays fully visible from 20% to 50% scroll
    [0, 1, 1, 0]
  );

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.7],
    [100, 0, 0, -100]
  );

  const paragraphY = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.5, 0.7],
    [100, 0, 0, -100]
  );

  const buttonY = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.5, 0.7],
    [100, 0, 0, -100]
  );

  const decorativeOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.25, 0.5, 0.7],
    [0, 0.1, 0.1, 0]
  );

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center justify-center py-20 px-4 font-poppins overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          style={{ y: headingY, opacity }}
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
        >
          <span className="text-white">Digital, Creative & BTL</span>
          <br />
          <span className="text-white">Agency</span>
          <span className="text-[#FFD700]">.</span>
        </motion.h2>

        <motion.p
          style={{ y: paragraphY, opacity }}
          className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          We speak human, in a digital world. We are a full service digital, creative & 
          BTL agency based in Mexico City working with clients around the globe. We 
          help brands connect, engage and create meaningful experiences.
        </motion.p>

        <motion.div
          style={{ y: buttonY, opacity }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a 
            href="/portfolio" 
            className="group relative overflow-hidden rounded-full px-8 py-3 w-48 bg-transparent border border-[#FFD700] text-[#FFD700] transition-colors hover:text-black"
          >
            <span className="relative z-10">Portfolio</span>
            <div className="absolute inset-0 bg-[#FFD700] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
          <a 
            href="/contact" 
            className="group relative overflow-hidden rounded-full px-8 py-3 w-48 bg-transparent border border-white/20 text-white transition-colors hover:text-[#FFD700]"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ opacity: decorativeOpacity }}
          className="absolute top-20 left-20 w-64 h-64 bg-[#FFD700] rounded-full blur-[100px]"
        />
        <motion.div
          style={{ opacity: decorativeOpacity }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-[#FFD700] rounded-full blur-[100px]"
        />
      </div>
    </section>
  );
};

export default AgencyIntro; 