import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projects';

const Work = () => {
  const [ref, isInView] = useInView({ threshold: 0.05 });

  return (
    <section id="work" className="py-24 md:py-40 px-6 lg:px-12 bg-black border-t border-white/10" ref={ref}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="mb-16 md:mb-24 flex justify-between items-end"
      >
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
          ( Selected Work )
        </h2>
        <span className="hidden md:block text-xs text-zinc-600 font-mono">2021 — 2024</span>
      </motion.div>

      <div className="space-y-0">
        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-xs text-zinc-600 uppercase tracking-wider font-medium">
          <div className="col-span-1">No.</div>
          <div className="col-span-4">Project</div>
          <div className="col-span-5">Context</div>
          <div className="col-span-2 text-right">Year</div>
        </div>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} isInView={isInView} />
        ))}
      </div>
    </section>
  );
};

export default Work;