import React from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  const heroImage = '/images/ProfilePicture.png';
  return <section className="relative min-h-screen flex flex-col justify-end pb-12 px-6 lg:px-12 overflow-hidden bg-black">
      {/* Right-side hero image with fade */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 0.9, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-0 h-full w-full md:w-1/2 lg:w-2/5 pointer-events-none z-0 flex items-center justify-center"
      >
        <div className="relative h-[70%] w-[70%] md:h-[75%] md:w-[75%] lg:h-[70%] lg:w-[70%] max-w-xl">
          <img
            src={heroImage}
            alt="Featured work"
            className="h-full w-full object-cover object-center opacity-80"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
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