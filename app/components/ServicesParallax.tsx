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
      viewport={{ once: true, margin: "0px" }}
      className="flex items-center mb-4 group"
    >
      <motion.span 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: delay + 0.1 }}
        viewport={{ once: true, margin: "0px" }}
        className="h-2 w-2 min-w-[8px] bg-[#c4af57] rounded-full mr-3 flex-shrink-0"
        style={{ willChange: 'transform' }}
      />
      <span className="text-white/80 group-hover:text-[#c4af57] transition-colors text-base sm:text-lg">
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
        className="absolute inset-0 bg-[#c4af57]/10 mix-blend-overlay z-10"
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
  const imageSrc = `/images/landing/${index + 1}.png`; // Using the new landing images

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
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#c4af57]"
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
              <span className="text-[#c4af57]">.</span>
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
            
            <div className="border-l-2 border-[#c4af57]/30 pl-6 mt-8">
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
      title: "Web Development",
      description: "At Vizyn, we design and develop fast, scalable, and visually stunning websites that elevate your brand and drive results. From custom landing pages to fully dynamic websites, we build experiences that captivate and convert.",
      features: [
        "Custom Website Design",
        "Webflow, WordPress, and Shopify Development",
        "Responsive & Mobile Optimization",
        "Website Redesigns & Revamps",
        "Landing Page Design & Development",
        "E-Commerce Development"
      ],
      imageAlt: "Modern web development showcase",
      bgColor: "bg-black"
    },
    {
      title: "Automation & Digital Transformation",
      description: "We transform your operations by integrating smart automations that save time, reduce errors, and accelerate growth. Vizyn helps you unlock efficiency and streamline your business workflows through tailored digital solutions.",
      features: [
        "Workflow Automation (CRM, Scheduling, Billing)",
        "API Integrations",
        "CRM Setups and Customization",
        "Automated Lead Capture and Nurturing Systems",
        "Custom Web Apps and Internal Tools"
      ],
      imageAlt: "Digital transformation solutions",
      bgColor: "bg-zinc-950"
    },
    {
      title: "SEO & Growth Strategy",
      description: "Visibility is everything. We help your brand get found by the right people at the right time with SEO strategies and digital growth planning designed for long-term success.",
      features: [
        "SEO Audits and Optimization",
        "Keyword Research & Content Strategy",
        "On-Page and Technical SEO",
        "Local SEO and Google My Business Optimization",
        "Analytics, Reporting & Performance Monitoring",
        "Backlink Building Campaigns"
      ],
      imageAlt: "SEO and growth strategy implementation",
      bgColor: "bg-black"
    },
    {
      title: "Brand Identity & UI/UX Design",
      description: "A strong digital presence starts with a strong brand. Vizyn crafts memorable brand identities and seamless user experiences that connect with your audience and drive engagement across every touchpoint.",
      features: [
        "Logo and Visual Identity Design",
        "Brand Guidelines Creation",
        "UI/UX Wireframing and Prototyping",
        "Website and App User Experience Design",
        "Brand Messaging and Voice Development"
      ],
      imageAlt: "Brand identity and UI/UX design showcase",
      bgColor: "bg-zinc-950"
    },
    {
      title: "Content & Digital Presence",
      description: "Your digital channels should work together to amplify your brand's story. Vizyn helps you manage and create consistent, on-brand content that drives engagement and builds loyalty.",
      features: [
        "Website Copywriting and Content Strategy",
        "Blog and Resource Center Development",
        "Email Marketing Automation Setup",
        "Social Media Integration and Optimization",
        "Content Management Systems (CMS) Setup"
      ],
      imageAlt: "Content and digital presence management",
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