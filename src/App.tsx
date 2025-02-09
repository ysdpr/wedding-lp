import { useState, useRef, useEffect } from 'react'
import './App.css'
import Scroll from './project/Scroll';
import Drawer from './project/Drawer';
import MainVisual from './project/MainVisual';
import Greeting from './project/Greeting';
import Profile from './project/Profile';
import CountDown from './project/CountDown';
import Information from './project/Information';
import Footer from './project/Footer';

function App() {
  return (
    <div>
      <Drawer />
      <Scroll />
      <div className="overflow-x-hidden">
        <MainVisual />

        <section id='p1'>
          <Greeting />
        </section>

        <section id='p2'>
          <Profile />
        </section>

        <section id='p3'>
          <div className="h-10"></div>
          <CountDown />
          <div className="h-10"></div>
        </section>

        <section id='p4'>
          <Information />
        </section>

        <Footer />

      </div>
    </div>
  )
}

export default App
