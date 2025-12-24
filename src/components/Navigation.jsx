import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Index', href: '/#work' },
    { name: 'Profile', href: '/#about' },
    { name: 'Expertise', href: '/#skills' },
    { name: 'Insights', href: '/#research' },
  ];

  const handleNavClick = (e, href) => {
    // If we are on the home page, scroll smoothly
    if (location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '#');
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
       setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white"
      >
        <div className="w-full px-6 lg:px-12 py-8 flex justify-between items-baseline">
          <Link to="/" className="text-sm font-bold tracking-widest uppercase hover:opacity-70 transition-opacity">
            Emmanuel (2025)
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            {navItems.map((item, i) => {
               // For hash links to work from other pages, keep them as full paths or hash links
               // If on home, standard hash link behavior via click handler
               // If on project page, Link to="/" + hash works natively in some setups, but specialized handling is safer.
               // We use standard <a> tags or Link tags pointing to absolute path with hash.
               return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-xs font-medium tracking-[0.2em] uppercase hover:underline underline-offset-4 decoration-1 opacity-70 hover:opacity-100 transition-all"
                  >
                    {`0${i + 1} / ${item.name}`}
                  </a>
               );
            })}
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, '/#contact')}
              className="text-xs font-bold tracking-[0.2em] uppercase border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-xs font-bold tracking-[0.2em] uppercase"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center px-6"
          >
            <div className="space-y-8">
              {navItems.map((item, i) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-4xl font-light tracking-tight hover:italic transition-all"
                >
                  <span className="text-xs tracking-widest block mb-2 opacity-50">0{i + 1}</span>
                  {item.name}
                </a>
              ))}
              <a
                 href="/#contact"
                 onClick={(e) => handleNavClick(e, '/#contact')}
                 className="block text-4xl font-light tracking-tight hover:italic transition-all pt-8 border-t border-white/20"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;