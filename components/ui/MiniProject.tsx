import React from 'react';
import { motion } from "framer-motion";
import { StaticImageData } from 'next/image';

interface MiniProjectProps {
  title: string;
  description: string;
  url: string;
  backgroundImage: string | StaticImageData;
}

const MiniProject: React.FC<MiniProjectProps> = ({ title, description, url, backgroundImage }) => {
  const backgroundImageUrl = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src;

  return (
    <motion.div 
      whileInView={{ x: 0, opacity: 1 }} 
      initial={{ opacity: 0, x: -200 }} 
      transition={{ duration: 0.5 }} 
      className='relative flex flex-col w-10/12 md:w-9/12 p-6 shadow-lg shadow-white/10 drop-shadow-2xl transform transition hover:scale-110 items-center duration-800 border border-gray-200 rounded-xl bg-black/70 text-white gap-6'
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Ensure background image is not repeated
      }}
    >
      <div className="absolute inset-0 bg-black/70 rounded-xl"></div>
      <div className="relative z-10">
        <a href={url} target='_blank' className='text-2xl text-center cursor-pointer hover:text-gray-400'>{title}</a>
        <p className='text-xs md:text-sm font-medium'>{description}</p>
      </div>
    </motion.div>
  );
}

export default MiniProject;
