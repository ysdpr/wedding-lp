import { useState, useRef, useEffect } from 'react'
import './App.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import img1 from './assets/241101_067.jpg';
import img2 from './assets/241101_061.jpg';
import img3 from './assets/241101_046.jpg';
import Path from './Path';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const pi = useRef(null);
  const ref2 = useRef(null);
  const pi2 = useRef(null);
  const pi3 = useRef(null);
  const pi4 = useRef(null);
  const pi5 = useRef(null);


  const textup1 = useRef(null);
  const textup2 = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const el2 = pi.current;
    const element2 = ref2.current;
    const el3 = pi2.current;
    const el4 = pi3.current;
    const el5 = pi4.current;
    const el6 = pi5.current;


    const pTextup1 = textup1.current;
    const pTextup2 = textup2.current;


    gsap.to(element, {
      backgroundColor: '#dbd0e6',
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });

    gsap.to(element2, {
      backgroundColor: '#f0908d',
      scrollTrigger: {
        trigger: element2,
        start: 'center 70%',
        end: 'center 30%',
        scrub: true,
      },
    });

    gsap.to(el2, {
      x: '0%',
      scrollTrigger: {
        trigger: el2,
        start: 'center 96%',
        end: 'center 60%',
        scrub: true,
      },
    });

    gsap.to(el3, {
      x: '0%',
      scrollTrigger: {
        trigger: el3,
        start: 'center 96%',
        end: 'center 70%',
        scrub: true,
      },
    });

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


    gsap.to(pTextup1, {
      y: '0%',
      opacity: '1',
      scrollTrigger: {
        trigger: pTextup1,
        start: 'center 94%',
      },
    });

    gsap.to(pTextup2, {
      y: '0%',
      opacity: '1',
      scrollTrigger: {
        trigger: pTextup2,
        start: 'center 94%',
      },
    });



  }, []);


  const useCountDownInterval = (
    countTime: number | null,
    setCountTime: (arg0: number) => void,
  ) => {
    useEffect(() => {
      const countDownInterval = setInterval(() => {
        if (countTime === 0) {
          clearInterval(countDownInterval)
        }
        if (countTime && countTime > 0) {
          setCountTime(countTime - 1)
        }
      }, 1000)
      return () => {
        clearInterval(countDownInterval)
      }
    }, [countTime])
  }

  const useCountDownInterval2 = (
    countTime2: number,
    setCountTime2: (arg0: number) => void,
  ) => {
    useEffect(() => {
      const countDownInterval = setInterval(() => {
        window.addEventListener('scroll', function () {
          clearInterval(countDownInterval)
          setCountTime2(0);
        });
        setCountTime2(countTime2 + 1);
      }, 1000)
      return () => {
        clearInterval(countDownInterval)
      }
    }, [countTime2])
  }



  const now = new Date();
  const goal = new Date(2025, (3 - 1), 21, 11, 30, 0, 0);
  const betweenTime = ((goal.getTime() - now.getTime()) / 1000);
  const [countTime, setCountTime] = useState<number>(betweenTime);
  useCountDownInterval(countTime, setCountTime);
  const [countTime2, setCountTime2] = useState<number>(0);
  useCountDownInterval2(countTime2, setCountTime2)

  // window.addEventListener('scroll', function(){
  //   setCountTime2(0);
  // });

  const [posY, setPosY] = useState<number>(0);
  const [windowY, setWindowY] = useState<number>(0);

  const scrollTop = (): number => {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  };

  window.onload = function () {
    setWindowY(document.body.offsetHeight - window.innerHeight);
  }

  window.addEventListener("resize", () => {
    setWindowY(document.body.offsetHeight - window.innerHeight);
  });

  window.addEventListener('scroll', function () {
    setPosY(scrollTop);
  });

  const [drawer, setDrawer] = useState<boolean>(false);


  // イベントリスナーの設定
  useEffect(() => {
    const handle = (event: any) => {
      event.preventDefault();
    };
    if (drawer) {
      document.addEventListener('touchmove', handle, { passive: false }); // タッチ操作でのスクロール無効化
      document.addEventListener('mousewheel', handle, { passive: false }); // マウスホイール操作でのスクロール無効化
    } else {
      document.removeEventListener('touchmove', handle); // タッチ操作でのスクロール有効化
      document.removeEventListener('mousewheel', handle); // マウスホイール操作でのスクロール有効化
    }
    return () => {
      document.removeEventListener('touchmove', handle); // タッチ操作でのスクロール有効化
      document.removeEventListener('mousewheel', handle); // マウスホイール操作でのスクロール有効化
    };
  }, [drawer]);

  return (
    <div>
      <div className={'drawer-menu w-16 h-16 md:w-[10vw] md:h-[10vw]  fixed top-0 right-0 z-50 cursor-pointer' + (drawer ? " dt" : "")}
        onClick={() => {
          setDrawer(!drawer);
        }}
      >
        <div className="drawer-menu__inner">
          <div className="drawer-menu__line drawer-menu__line--1"> </div>
          <div className="drawer-menu__line drawer-menu__line--2"> </div>
          <div className="drawer-menu__line drawer-menu__line--3"> </div>
        </div>

      </div>
      <div className={'w-full h-full opacity-90 bg-[#2a4073] fixed top-0 right-0 z-40 transition-all' + (drawer ? ' translate-x-0' : ' translate-x-[100%]')}>
        <ul className="px-4 py-4 text-2xl flex flex-col items-center justify-center h-full drawer-list">
          <li className="">
            <a href="#" className="text-white" onClick={() => {setDrawer(false) }}>TOP</a>

          </li>
          <li className="pt-5 mt-5">
            <a href="#p1" className="text-white" onClick={() => {setDrawer(false) }}>ご挨拶</a>

          </li>
          <li className="pt-5 mt-5">
            <a href="#p2" className="text-white" onClick={() => {setDrawer(false) }}>新郎新婦紹介</a>

          </li>
          <li className="pt-5 mt-5">
            <a href="#p3" className="text-white" onClick={() => {setDrawer(false) }}>挙式まで</a>

          </li>
          <li className="pt-5 mt-5">
            <a href="#p4" className="text-white" onClick={() => {setDrawer(false) }}>当日のご案内</a>

          </li>
        </ul>
      </div>
      <div className={'ab transition-all' + (((countTime2 >= 3) && ((windowY - posY) > 200)) ? ' opacity-100' : ' opacity-0')}>
        <div className="ab__inner"></div>
        <p>
          scroll
        </p>
      </div>
      <div className="overflow-x-hidden">
        <div className="w-[100vw] h-[100vh] py-8 relative"> {/* TODO: 案を出す */}
          <div className="w-full h-full absolute top-0 left-0 bg-z opacity-60"></div>
          <div className="w-full h-full relative z-10 flex flex-col items-center justify-center">
            <div className="w-[390px] h-[390px] relative overflow-hidden mv">
              <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[128px] h-[128px]">
                <svg viewBox="0 0 128 128" className="svgbox">
                  <g fontSize="128">
                    <text x="64" y="56" textAnchor="middle" dominantBaseline="central">
                      <tspan>寿</tspan>
                    </text>
                  </g>
                </svg>
              </div>
              <Path />
            </div>
            {/* <p className="text-white text-5xl paint2 test mt-8">
              Our Wedding
            </p> */}
          </div>
        </div>

        <div className="w-[100vw] h-[88vh] flex justify-center items-center snap-start relative" id='p1'>
          <div className="w-full h-full absolute top-0 left-0 bg-f opacity-30"></div>

          <div className="relative z-10 flex flex-col text-l md:text-2xl md:leading-normal [writing-mode:vertical-rl]">
            <p className="">
              謹啓
            </p>
            <p className="mr-1 md:mr-4">
              皆様におかれましては<br />
              ますますご清祥のことと<br className="hidden md:inline" />
              お慶び申し上げます
            </p>
            <p className="mr-3 md:mr-4">
              このたび私たちは<br className="hidden md:inline" /><span className="md:hidden">　</span>
              結婚式を挙げることになりました<br />
              つきましては　幾久しくご懇情を賜りたく<br />
              披露かたがた小宴を催したく存じます
            </p>
            <p className="mr-3 md:mr-4">
              ご多用中誠に恐縮ではございますが<br />
              ぜひご出席をいただきたく<br className="hidden md:inline" />
              ご案内申し上げます
            </p>
            <p className="mr-1 md:mr-4 text-right">
              謹白
            </p>
            <p className="mr-4 text-right">
              令和七年三月吉日
            </p>
            <p className="md:mr-4 leading-tight text-right">
              櫻井 友貴<br />
              岡本 果波
            </p>
          </div>
        </div>

        <div ref={ref2} className="w-[100vw] bg-[#2a4073] snap-start px-4 md:py-0 bg-t1" id="p2">
          <div className="md:w-[720px] m-auto zzz px-8 md:px-10 py-12 md:py-24 text-[#444]">
            <div className="t-width ml-[-3rem]">
              <div ref={pi} className="flex gap-2 items-end justify-between w-full translate-x-[150%]">
                <img src={img1} className="w-0 flex-grow imgclip" alt="" />
                <p className="shrink-0 text-2xl md:text-3xl">
                  櫻井 友貴
                </p>
              </div>
            </div>
            <div ref={textup1} className="text-sm mt-6 translate-y-16 opacity-0 md:text-right md:text-base">
              <p>1991年8月29日、東京都生まれ。エンジニア。</p>
              <p>プログラミング・DIY・洋菓子作りなど、ものづくりが好き。</p>
              <p className="mt-3">美味しい料理・お酒をご用意してお待ちしております。</p>
            </div>
            <div className="t-width mr-[-3rem] mt-8">
              <div ref={pi2} className="flex flex-row-reverse gap-2 items-end justify-between w-full translate-x-[-150%]">
                <img src={img2} className="w-0 flex-grow imgclip2" alt="" />
                <p className="shrink-0 text-2xl md:text-3xl">
                  岡本 果波
                </p>
              </div>
            </div>
            <div ref={textup2} className="text-sm mt-6 translate-y-16 opacity-0 md:text-base">
              <p>1998年10月11日、兵庫県生まれ。ホテルスタッフ。</p>
              <p>FIXME</p> {/* TODO: 文言入力 */}
              <p className="mt-3">当日、みなさまにお会いできることを楽しみにしています。</p>
            </div>
          </div>
        </div>

        <div className="w-[100vw] text-slate-700 bg-cherry" id="p3">
          <div className="w-full h-full bg-white bg-opacity-65 py-12 px-4">
            <h2 className="text-xl text-center">挙式まで</h2>
            <p className="flex items-end justify-center mt-2">
              <span className="text-5xl ovo w-[3.6rem] text-right">{Math.floor(countTime / 60 / 60 / 24)}</span>
              <span className="text-l ml-1 pb-1">日と</span>
              <span className="text-5xl ovo w-[3.6rem] text-right">{Math.floor(countTime / 60 / 60) % 24}</span>
              <span className="text-l ml-1 pb-1">時間</span>
              <span className="text-5xl ovo w-[3.6rem] text-right">{String(Math.floor(countTime / 60) % 60).padStart(2, '0')}</span>
              <span className="text-l ml-1 pb-1">分</span>
              <span className="text-5xl ovo w-[3.6rem] text-right">{String(Math.floor(countTime) % 60).padStart(2, '0')}</span>
              <span className="text-l ml-1 pb-1">秒</span>
            </p>
          </div>
        </div>

        <div ref={ref} className="w-[100vw] bg-[#c1e4e9] py-12 px-6 md:py-24 bg-ex" id="p4">
          <div className="md:w-[720px] m-auto">

            <div className="md:m-auto md:w-[320px]">
              <h2 className="text-2xl text-center">ご案内</h2> {/* TODO: 見出しの装飾を作る */}
              <div className="">
                <p className="text-md mt-2">日程</p>
                <p className="flex items-end mt-1">
                  <span className="text-4xl ovo">2025</span>
                  <span className="text-2xl ml-1 pb-1">年</span>
                  <span className="text-4xl ml-1 ovo">03</span>
                  <span className="text-2xl ml-1 pb-1">月</span>
                  <span className="text-4xl ml-1 ovo">21</span>
                  <span className="text-2xl ml-1 pb-1">日</span>
                  <span className="text-2xl ml-1 pb-1">(金)</span>
                </p>
                <dl className="flex flex-col">
                  <div className="flex items-end gap-4">
                    <div className="flex items-end gap-4 text-2xl">
                      <dt className="mb-1 w-20">挙式</dt>
                      <dd className="w-16 ovo">11:30</dd>
                    </div>
                    <div className="flex items-end gap-2 text-sm text-slate-600">
                      <dt className="mb-1">受付</dt>
                      <dd className="mb-0.5 w-16 ovo">10:30</dd>
                    </div>
                  </div>
                  <div className="flex items-end gap-4">
                    <div className="flex items-end gap-4 text-2xl">
                      <dt className="mb-1 w-20">披露宴</dt>
                      <dd className="w-16 ovo">12:45</dd>
                    </div>
                    <div className="flex items-end gap-2 text-sm text-slate-600">
                      <dt className="mb-1">受付</dt>
                      <dd className="mb-0.5 w-16 ovo">12:15</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>

            <div className="md:m-auto md:w-[320px]">

              <h2 className="text-2xl text-center mt-8">アクセス</h2>
              <p className="mt-2">会場</p>
              <p className="text-3xl mt-1">神田明神</p>
              <div className="">
                <p className="mt-2 text-sm">〒101-0021 東京都千代田区外神田2-16-2</p>
                <p className="text-sm">03-6384-0477</p>
                <p className="text-sm">https://myojin.tokyo/</p>
              </div>
            </div>

            <div className="mt-4 md:mt-8 w-full h-60 md:h-[36rem]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.005369730445!2d139.76525902578862!3d35.70148547258068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1ecc161bed%3A0xf397e4b6bf417c8b!2z56We55Sw56We56S-77yI56We55Sw5piO56We77yJ!5e0!3m2!1sja!2sjp!4v1736514079080!5m2!1sja!2sjp" className="w-full h-full" loading="lazy"></iframe>
            </div>
          </div>

        </div>
        <div className="w-[100vw] h-[100vh] relative overflow-hidden">
          <img src={img3} className="absolute top-0 left-0 w-full h-full object-cover blur-3xl" ref={pi3} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-45" ref={pi4}></div>
          <p ref={pi5} className="text-[#e5abbe] text-xl absolute bottom-[50%] text-center left-0 right-0 mx-auto translate-y-[50%] z-20 ssss">
            みなさまにお会いできるのを<br />
            楽しみにしております
          </p>
        </div>

      </div>
    </div>
  )
}

export default App
