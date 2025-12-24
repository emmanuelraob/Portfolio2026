import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Work from '@/components/Work';
import Research from '@/components/Research';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Research />
      <Contact />
    </>
  );
};

export default Home;