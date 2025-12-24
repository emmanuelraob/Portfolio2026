import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/project/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative border-b border-white/10 py-8 md:py-12 cursor-pointer transition-colors duration-500 hover:bg-zinc-900/30 block"
      >
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline pointer-events-none">
          {/* Number */}
          <div className="md:col-span-1 text-xs font-mono text-zinc-600 group-hover:text-white transition-colors">
            {project.id}
          </div>

          {/* Title & Category */}
          <div className="md:col-span-4 mb-4 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-medium text-white group-hover:translate-x-2 transition-transform duration-300 ease-out">
              {project.title}
            </h3>
            <p className="md:hidden text-sm text-zinc-500 mt-1">{project.category}</p>
          </div>

          {/* Description & Tags */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg group-hover:text-zinc-300 transition-colors">
              {project.description}
            </p>
            <div className="flex gap-3 mt-4 md:hidden">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs border border-white/10 px-2 py-1 text-zinc-500">{tag}</span>
              ))}
            </div>
          </div>

          {/* Year / Arrow */}
          <div className="md:col-span-2 flex justify-end items-center gap-4">
            <span className="hidden md:inline-block text-sm text-zinc-500">{project.year}</span>
            <ArrowUpRight 
              size={20} 
              className={`text-white transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-2 translate-y-2'}`} 
            />
          </div>
        </div>
        
        {/* Project Image Reveal on Hover */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isHovered ? { opacity: 0.9, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 z-0 pointer-events-none rounded-xl overflow-hidden"
        >
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            className="w-full h-full object-cover object-left transition-all duration-700"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;