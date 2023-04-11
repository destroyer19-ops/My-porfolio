import React, { useEffect, useState } from 'react';
import './App.css'
import HeroSection from './components/HeroSection'
import Services from './components/Services';
import Works from './components/Works';
import SideNav from './components/SideNav';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  const [theme, setTheme] = useState(null);


  useEffect(
    () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }, []);
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }
  return (
    <>
      <button
        type='button'
        onClick={handleThemeSwitch}
        className='fixed z-10 right-4 top-4 bg-[#454e56] 
        text-lg p-1 rounded-full transition ease-in-out delay-100
        grayscale hover:grayscale-0'>
        {theme === 'dark' ? '🌓' : '🌓'}
      </button>
      <div className="w-full h-screen absolute top-0 left-0 font-inter bg-gray-200 dark:bg-gray-900 transition ease-in-out delay-100">
        <div className='max-w-5xl mx-auto w-full'>

          {/* <h1 className='text-5xl text-cyan-400'>Hello</h1> */}
          <SideNav />
          <HeroSection></HeroSection>
          <Projects></Projects>
          <Contact></Contact>
          {/* <Services></Services> */}
          {/* <Works></Works> */}
        </div>
      </div>
    </>
  );
}

export default App
