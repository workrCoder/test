import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  imageAlt: string;
  bgColor: string;
  index: number;
}

const FeatureItem = ({ feature, delay }: { feature: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: false, margin: "-50px" }}
      className="flex items-center mb-4 group"
    >
      <motion.span 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: delay + 0.1 }}
        viewport={{ once: false, margin: "-50px" }}
        className="h-1.5 w-1.5 bg-[#FFD700] rounded-full mr-3"
      />
      <span className="text-white/80 group-hover:text-[#FFD700] transition-colors">
        {feature}
      </span>
    </motion.div>
  );
};

const ParallaxImage = ({ y, src, alt }: { y: MotionValue<number>; src: string; alt: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative z-10 overflow-hidden rounded-xl"
      style={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)"
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 mix-blend-multiply z-10"
        animate={{ opacity: hovered ? 0.4 : 0.6 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 bg-[#FFD700]/10 mix-blend-overlay z-10"
        animate={{ opacity: hovered ? 0.2 : 0.1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        style={{ y }}
        src={src}
        alt={alt}
        className="w-full h-[500px] lg:h-[600px] object-cover object-center transform transition-transform"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

const ServiceCard = ({ title, description, features, imageAlt, bgColor, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;
  const imageSrc = `/images/apple-store.jpeg`; // Replace with actual image paths

  return (
    <motion.div 
      ref={cardRef}
      className={`min-h-screen relative flex items-center py-20 overflow-hidden ${bgColor}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, margin: "-10%" }}
    >
      {/* Background decoration circles */}
      <motion.div 
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], [isEven ? -200 : 200, isEven ? 200 : -200]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.06, 0])
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#FFD700]"
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content column */}
          <motion.div 
            className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            style={{ y, opacity }}
            initial={{ x: isEven ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: false, margin: "-10%" }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, margin: "-50px" }}
            >
              {title}
              <span className="text-[#FFD700]">.</span>
            </motion.h2>
            
            <motion.p 
              className="text-white/70 text-lg mb-10 max-w-xl leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, margin: "-50px" }}
            >
              {description}
            </motion.p>
            
            <div className="border-l-2 border-[#FFD700]/30 pl-6 mt-8">
              {features.map((feature, idx) => (
                <FeatureItem key={idx} feature={feature} delay={0.2 + (idx * 0.1)} />
              ))}
            </div>
          </motion.div>
          
          {/* Image column */}
          <motion.div 
            className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
            initial={{ x: isEven ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: false, margin: "-10%" }}
          >
            <ParallaxImage y={imageY} src={imageSrc} alt={imageAlt} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesParallax = () => {
  const services = [
    {
      title: "Design & Branding",
      description: "We develop full branding and design projects for different industry categories. Over 100+ projects done in the past year.",
      features: [
        "Naming",
        "Editorial",
        "Packaging",
        "Visual identity",
        "Brand strategy",
        "Brand applications",
        "Digital & printed materials"
      ],
      imageAlt: "Modern retail design showcase",
      bgColor: "bg-black"
    },
    {
      title: "Creative",
      description: "The creative work behind a brand sets them apart and speaks to their unique personality, giving the world a peek into their purpose and ambition.",
      features: [
        "Interactive",
        "Art direction",
        "Copyrighting",
        "Campaign design",
        "Brand positioning",
        "360 campaigns",
        "Concept development"
      ],
      imageAlt: "Creative retail environment",
      bgColor: "bg-zinc-950"
    },
    {
      title: "Social Media",
      description: "Understanding the digital consumer is extremely important today. We create strategies and content driven by data to create unforgettable customer experiences.",
      features: [
        "Strategy",
        "Copyrighting",
        "Event coverage",
        "Brand awareness",
        "Content production",
        "Digital communication",
        "Community management"
      ],
      imageAlt: "Modern retail experience",
      bgColor: "bg-black"
    }
  ];

  return (
    <div className="bg-black overflow-hidden perspective">
      {services.map((service, index) => (
        <ServiceCard 
          key={service.title}
          {...service}
          index={index}
        />
      ))}
    </div>
  );
};

export default ServicesParallax; 