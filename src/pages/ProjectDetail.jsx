import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/projects';
import Contact from '@/components/Contact';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);
  const processImages = [project?.imageProcess1, project?.imageProcess2].filter(Boolean);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Project not found</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white pt-32">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors mb-12 uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Index
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">{project.title}</h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl">
                {project.fullDescription}
              </p>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2 border border-white/20 bg-zinc-900 hover:bg-white hover:text-black text-white font-medium rounded-full transition-colors duration-200 shadow-sm text-base group"
                >
                  <span>Test Demo</span>
                  <ArrowUpRight size={18} className="group-hover:text-black transition-colors duration-200" />
                </a>
              )}
            </div>
            
            <div className="lg:col-span-4 space-y-8 lg:pt-4">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-2">Role</h3>
                <p className="text-lg">{project.role}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-2">Year</h3>
                <p className="text-lg">{project.year}</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-zinc-600 mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-sm border border-zinc-800 px-3 py-1 rounded-full text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full aspect-video bg-zinc-900 mb-24 overflow-hidden rounded-sm"
        >
          <img alt={project.imageAlt} className="w-full h-full object-cover" src={project.imageUrl} />
        </motion.div>

        {/* Process Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 sticky top-32">
              ( The Process )
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light mb-12">
              {project.process}
            </p>
            {processImages.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {processImages.map((src, idx) => (
                  <div key={src} className="bg-zinc-900 aspect-square">
                    <img
                      alt={`Process image ${idx + 1}`}
                      className="w-full h-full object-cover opacity-50"
                      src={src}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Outcomes Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 sticky top-32">
              ( Outcomes )
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="border-l-2 border-white/20 pl-8 py-2">
               <p className="text-2xl md:text-3xl text-white font-medium italic">
                 "{project.outcomes}"
               </p>
            </div>
          </div>
        </div>

        {/* Next Project Link */}
        <div className="border-t border-white/10 pt-24 pb-12 flex justify-between items-center">
          <span className="text-zinc-500 uppercase tracking-widest text-xs">Next Project</span>
          <Link to="/" className="text-2xl md:text-4xl hover:text-zinc-400 transition-colors flex items-center gap-4">
             Back to Index <ArrowUpRight />
          </Link>
        </div>
      </div>
      
      <Contact />
    </div>
  );
};

export default ProjectDetail;