import { useState, useRef, useEffect } from 'react'
import './App.css'
import ScrollA from './project/ScrollA';
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
      <ScrollA />
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

        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBBg23M8-oJEv8C7oDsSK0FuEAHULrt2VowUmnzNdCKcKnzQ/viewform?embedded=true" className="w-full" height="2446" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe> */}
        <Footer />

      </div>
    </div>
  )
}

export default App
