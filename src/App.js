// src/App.js (One-page scrolling version - NO ROUTER)
import React, { useState, useEffect, useRef } from 'react';
import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Academics from './sections/Academics';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Honors from './sections/Honors';
import Contact from './sections/Contact';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const academicsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const honorsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const startTime = Date.now();
    const MINIMUM_DISPLAY_TIME = 2000;
    
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 15, 100);
        if (newProgress >= 100) {
          const elapsedTime = Date.now() - startTime;
          if (elapsedTime >= MINIMUM_DISPLAY_TIME) {
            clearInterval(interval);
            setIsLoading(false);
          }
        }
        return newProgress;
      });
    }, 200);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  const sectionRefs = {
    homeRef,
    aboutRef,
    academicsRef,
    experienceRef,
    skillsRef,
    projectsRef,
    honorsRef,
    contactRef
  };

  return (
    <>
      {isLoading && <LoadingScreen progress={loadingProgress} />}
      
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <Layout scrollToSection={scrollToSection} sectionRefs={sectionRefs}>
          <div ref={homeRef}><Home scrollToSection={scrollToSection} sectionRefs={sectionRefs} /></div>
          <div ref={aboutRef}><About /></div>
          <div ref={academicsRef}><Academics /></div>
          <div ref={experienceRef}><Experience /></div>
          <div ref={skillsRef}><Skills /></div>
          <div ref={projectsRef}><Projects /></div>
          <div ref={honorsRef}><Honors /></div>
          <div ref={contactRef}><Contact /></div>
        </Layout>
      </div>
    </>
  );
}

export default App;