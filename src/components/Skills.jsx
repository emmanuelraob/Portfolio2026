import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const domains = [
    {
      area: "Design",
      items: ["User Interface", "Experience Design", "Design Systems", "Interaction", "Prototyping", "Art Direction"]
    },
    {
      area: "Development",
      items: ["React & Next.js", "Tailwind CSS", "TypeScript", "Three.js / WebGL", "Creative Coding", "Animation"]
    },
    {
      area: "Research",
      items: ["User Strategy", "Usability Testing", "Data Analysis", "Information Arch.", "A/B Testing", "Accessibility"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-40 px-6 lg:px-12 bg-black border-t border-white/10" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8"
          >
            ( Expertise )
          </motion.h2>
        </div>

        <div className="lg:col-span-8">
          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            {domains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-medium text-white mb-8 pb-4 border-b border-white/20">{domain.area}</h3>
                <ul className="space-y-4">
                  {domain.items.map((item, index) => (
                    <li key={index} className="text-zinc-400 text-sm md:text-base hover:text-white transition-colors cursor-default">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;