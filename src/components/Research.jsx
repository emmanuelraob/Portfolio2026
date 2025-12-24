import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Research = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { toast } = useToast();

  const articles = [
    {
      title: 'The Future of AI in Design Systems',
      date: 'Oct 2024',
      tag: 'Technology'
    },
    {
      title: 'Methodologies for User-Centered Research',
      date: 'Aug 2024',
      tag: 'Research'
    },
    {
      title: 'Accessibility as a Primary Constraint',
      date: 'Jun 2024',
      tag: 'Inclusive Design'
    },
  ];

  const handleArticleClick = () => {
    toast({
      title: "🚧 Coming Soon",
      description: "This article is being finalized.",
    });
  };

  return (
    <section id="research" className="py-24 md:py-40 px-6 lg:px-12 bg-black border-t border-white/10" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8"
          >
            ( Insights )
          </motion.h2>
        </div>

        <div className="lg:col-span-8 space-y-2">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={handleArticleClick}
              className="group flex flex-col md:flex-row md:items-center justify-between border-t border-white/10 py-8 cursor-pointer hover:border-white transition-colors duration-500"
            >
              <h3 className="text-xl md:text-3xl text-zinc-400 group-hover:text-white transition-colors font-light max-w-2xl">
                {article.title}
              </h3>
              <div className="mt-4 md:mt-0 flex items-center gap-6 text-sm">
                 <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">{article.date}</span>
                 <ArrowRight className="text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;