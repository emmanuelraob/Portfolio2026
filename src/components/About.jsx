import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 md:py-40 px-6 lg:px-12 bg-black border-t border-white/10" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 sticky top-32"
          >
            ( Profile )
          </motion.h2>
        </div>

        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-white">
              Bridging the gap between <span className="text-zinc-600">artistic vision</span> and <span className="text-zinc-600">technical execution</span>.
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 text-lg text-zinc-400 font-light leading-relaxed">
              <p>
                I approach digital product creation not as a series of isolated tasks, but as a holistic process. My background allows me to speak the languages of both design and engineering fluently, ensuring that no nuance is lost in translation.
              </p>
              <p>
                Currently focused on creating experimental interfaces and robust design systems that scale. I believe in minimalism not as an aesthetic choice, but as a tool for clarity and focus.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;