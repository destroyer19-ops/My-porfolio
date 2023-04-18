import React, { useContext, useEffect, useState } from 'react';
import './App.css'
import HeroSection from './components/HeroSection'
// import Services from './components/Services';
// import Works from './components/Works';
import SideNav from './components/SideNav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BottomNav from './components/BottomNav';
import { useMediaQuery } from "@react-hook/media-query";
import ButtonToggle from './components/ButtonToggle';
import { FaSun, FaMoon } from 'react-icons/fa';
import { themeContext } from './Context';


function App() {
  const matches = useMediaQuery("(max-width: 640px)");
  const secondmatch = useMediaQuery("(min-width: 641px)");
  // const [theme, setTheme] = useState(null);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: 'toggle' })
  }

  // useEffect(
  //     () => {
  //       if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //         setTheme('dark');
  //       } else {
  //         setTheme('light');
  //       }
  //     }, []);
  //   useEffect(() => {
  //     if (theme === 'dark') {
  //       document.documentElement.classList.add('dark')
  //     } else {
  //       document.documentElement.classList.remove('dark')
  //     }
  //   }, [theme]);

  //   const handleThemeSwitch = () => {
  //     setTheme(theme === 'dark' ? 'light' : 'dark');
  //   }
  return (
    <div className='App' style={{
      background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : ''
    }}>
      <div
        className='toggle fixed z-10 
    right-4 top-4 text-lg p-1 rounded-full 
    transition ease-in-out delay-100  
    '>
        {/* <button
        type='button'
      > */}
        {/* {theme === 'dark' ? <FaMoon /> : <FaSun />} */}

        <FaMoon />
        <FaSun />

        <div className="t-button"
          onClick={handleClick}
          style={darkMode ? { left: '2px' } : { right: '2px' }}>

        </div>
        {/* </button> */}
      </div>
      <ButtonToggle />
      {matches && <BottomNav />}
      {secondmatch && <SideNav />}
      {/* <div className="w-full h-screen absolute top-0 left-0 font-inter bg-gray-200 dark:bg-gray-900 transition ease-in-out delay-100"> */}
      {/* <div className='max-w-5xl mx-auto w-full'> */}
      <div>
        <div>
          {/* <h1 className='text-5xl text-cyan-400'>Hello</h1> */}

          <HeroSection></HeroSection>
          <Projects></Projects>
          <Contact></Contact>
          {/* <Services></Services> */}
          {/* <Works></Works> */}
        </div>
      </div>
    </div>
  );
}

export default App
