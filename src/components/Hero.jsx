import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
const Hero = () => {
  const {
    scrollY
  } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  return <section className="relative min-h-screen flex flex-col justify-end pb-12 px-6 lg:px-12 overflow-hidden bg-black">
      {/* Abstract Background Element - User Image Integration */}
      <motion.div style={{
      y,
      opacity: 0.2
    }} className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
         <img className="w-full h-full object-cover grayscale mix-blend-screen opacity-50" alt="Emmanuel portrait" src="https://images.unsplash.com/photo-1581384892536-392dfd6fe94d" />
      </motion.div>

      <div className="max-w-[90vw] z-10 relative">
        <motion.div initial={{
        opacity: 0,
        y: 100
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }}>
          <h1 className="text-[9vw] md:text-[11vw] leading-[0.9] font-bold tracking-tighter text-white mix-blend-normal">
             Hi, I'm <br /> Emmanuel
          </h1>
        </motion.div>
        
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8,
        duration: 1
      }} className="mt-12 flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-6">
          <p className="max-w-md text-sm md:text-base leading-relaxed text-zinc-400 font-light">Product Designer, UX Researcher & Developer crafting digital ecosystems at the intersection of aesthetics and functionality.</p>
          <div className="mt-8 md:mt-0 text-right">
            <span className="block text-xs uppercase tracking-[0.2em] text-zinc-500 mb-1">Available For</span>
            <span className="block text-sm text-white">Freelance, Strategic Partnerships & New Ventures</span>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;