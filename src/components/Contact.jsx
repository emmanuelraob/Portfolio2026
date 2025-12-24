import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText('info@emmanueldesign.com');
    toast({
      title: "Copied to clipboard",
      description: "Ready to paste!",
    });
  };

  return (
    <section id="contact" className="min-h-[80vh] py-24 px-6 lg:px-12 bg-black flex flex-col justify-between border-t border-white/10" ref={ref}>
      <div>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-24"
        >
          ( Contact )
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <button 
            onClick={handleCopy}
            className="group text-left"
          >
            <span className="block text-[8vw] leading-none font-bold text-white group-hover:text-zinc-400 transition-colors duration-500">
              INFO@
            </span>
            <span className="block text-[8vw] leading-none font-bold text-zinc-600 group-hover:text-white transition-colors duration-500">
              EMMANUELDESIGN
            </span>
            <span className="block text-[8vw] leading-none font-bold text-white group-hover:text-zinc-400 transition-colors duration-500">
              .COM
            </span>
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
        <div>
          <h3 className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Social</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="https://www.linkedin.com/in/emmanuel-ram%C3%ADrez-design/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com/emmanuelraob" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">GitHub</a></li>
            <li><a href="https://www.behance.net/emmanueramirez5" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Behance</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Code</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="https://github.com/emmanuelraob" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">GitHub</a></li>
          </ul>
        </div>
        <div className="col-span-2 md:text-right flex flex-col justify-end">
          <p className="text-xs text-zinc-600 uppercase tracking-widest">
            © 2026 — Portfolio
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;