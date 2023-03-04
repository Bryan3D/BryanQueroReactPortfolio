import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App(){
  return (
    // This makes sure that the component is initialized  properly  when       the application is started  and loaded into memory
    <main className="decoration-white  bg-slate-800 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}