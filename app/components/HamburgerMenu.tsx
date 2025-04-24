import { motion } from 'framer-motion';

interface HamburgerMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const HamburgerMenu = ({ isOpen, toggle }: HamburgerMenuProps) => {
  return (
    <button
      onClick={toggle}
      className="flex flex-col justify-center items-center w-10 h-10 relative z-50 group"
      aria-label="Toggle Menu"
    >
      <motion.span
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0,
        }}
        className="w-7 h-[1px] bg-white mb-2 block transition-transform group-hover:bg-[#FFD700]"
      />
      <motion.span
        animate={{
          opacity: isOpen ? 0 : 1,
          x: isOpen ? 10 : 0,
        }}
        className="w-7 h-[1px] bg-white mb-2 block transition-all group-hover:bg-[#FFD700]"
      />
      <motion.span
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0,
        }}
        className="w-7 h-[1px] bg-white block transition-transform group-hover:bg-[#FFD700]"
      />
    </button>
  );
};

export default HamburgerMenu; 