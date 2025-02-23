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
      {/* <Scroll /> */}
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
        <div className={'fixed bottom-0 left-0 right-0 z-50 pb-2 mx-auto grid place-items-center'}>
        {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBBg23M8-oJEv8C7oDsSK0FuEAHULrt2VowUmnzNdCKcKnzQ/viewform?usp=dialog" target='_blank' className={''}><button className="bn632-hover bn25">返信アンケートに回答する</button></a> */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBBg23M8-oJEv8C7oDsSK0FuEAHULrt2VowUmnzNdCKcKnzQ/viewform?usp=dialog" target='_blank' className={'grid w-[300px] place-items-center py-4 shadow-lg rounded-full silv'}>出席アンケートに回答する</a>
        </div>
        {/* <div className='h-20 bg-[#f2e8ec]'></div> */}

      </div>
    </div>
  )
}

export default App
