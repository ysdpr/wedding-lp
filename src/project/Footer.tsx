import { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import img3 from '../assets/241101_046.jpg';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Footer = () => {
  gsap.registerPlugin(ScrollTrigger);
  const pi3 = useRef(null);
  const pi4 = useRef(null);
  const pi5 = useRef(null);



  useEffect(() => {
    const el4 = pi3.current;
    const el5 = pi4.current;
    const el6 = pi5.current;


    gsap.to(el4, {
      filter: 'blur(0px)',
      scrollTrigger: {
        trigger: el4,
        start: 'center 96%',
        end: 'center 70%',
        scrub: true,
      },
    });

    gsap.to(el5, {
      opacity: '0',
      scrollTrigger: {
        trigger: el5,
        start: 'center 100%',
        end: 'center 50%',
        scrub: true,
      },
    });


    gsap.to(el6, {
      bottom: '10px',
      // color: '#393f4c',
      color: '#FFFFFF',
      scrollTrigger: {
        trigger: el6,
        start: 'center 75%',
        end: 'center 40%',
        scrub: true,
      },
    });




  }, []);

  return(
    <div className="w-[100vw] h-[100vh] relative overflow-hidden">
    <img src={img3} className="absolute top-0 left-0 w-full h-full object-cover blur-3xl" ref={pi3} alt="" />
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-45" ref={pi4}></div>
    <p ref={pi5} className="text-[#e5abbe] text-xl absolute bottom-[50%] text-center left-0 right-0 mx-auto translate-y-[50%] z-20 ssss">
      みなさまにお会いできるのを<br />
      楽しみにしております
    </p>
  </div>
    )

}
export default Footer