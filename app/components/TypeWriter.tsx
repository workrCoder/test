import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        'Innovation',
        1000,
        'Creativity',
        1000,
        'Excellence',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-[#FFD700] font-bold"
      repeat={Infinity}
    />
  );
};

export default TypeWriter; 