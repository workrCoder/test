import { TypeAnimation } from 'react-type-animation';

interface TypeWriterProps {
  text: string[];
  delay?: number;
  infinite?: boolean;
}

const TypeWriter = ({ text, delay = 1000, infinite = true }: TypeWriterProps) => {
  const sequence = text.flatMap((item) => [item, delay]);
  
  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={60}
      className="text-[#c4af57] font-bold"
      repeat={infinite ? Infinity : 0}
    />
  );
};

export default TypeWriter; 