import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer ref={footerRef} className="bg-black text-white/70 py-12 font-poppins">
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-4">
              Vizyn<span className="text-[#c4af57]">.</span>
            </h3>
            <p className="text-sm leading-relaxed">
              Digital solutions for the modern world. Creating meaningful experiences through design and technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <motion.li variants={itemVariants}>
                <a href="/about" className="text-sm hover:text-[#c4af57] transition-colors">
                  About Us
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="/services" className="text-sm hover:text-[#c4af57] transition-colors">
                  Services
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="/portfolio" className="text-sm hover:text-[#c4af57] transition-colors">
                  Portfolio
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="/contact" className="text-sm hover:text-[#c4af57] transition-colors">
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <motion.li variants={itemVariants} className="text-sm">
                <span className="text-[#c4af57]">Email:</span> hello@vizyn.com
              </motion.li>
              <motion.li variants={itemVariants} className="text-sm">
                <span className="text-[#c4af57]">Phone:</span> +1 (555) 123-4567
              </motion.li>
              <motion.li variants={itemVariants} className="text-sm">
                <span className="text-[#c4af57]">Address:</span> Mexico City, Mexico
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} Vizyn. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm hover:text-[#c4af57] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm hover:text-[#c4af57] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 