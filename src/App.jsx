import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Emmanuel - Portfolio 2025</title>
        <meta name="description" content="Portfolio of Emmanuel, a multidisciplinary UX/UI designer and developer." />
      </Helmet>
      <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;