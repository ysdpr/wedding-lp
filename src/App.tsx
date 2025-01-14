import { useState, useRef, useEffect, useCallback } from 'react'
import './App.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import img1 from './assets/241101_067.jpg';
import img2 from './assets/241101_061.jpg';
import img3 from './assets/241101_046.jpg';
import img4 from './assets/241101_110.jpg';
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

  useEffect(() => {
    const element = ref.current;
    const el2 = pi.current;
    const element2 = ref2.current;
    const el3 = pi2.current;
    const el4 = pi3.current;
    const el5 = pi4.current;
    const el6 = pi5.current;


    gsap.to(element, {
      // x: '40%', // 左に移動
      backgroundColor: '#dbd0e6',
      scrollTrigger: {
        trigger: element,
        scrub: true, // スクロールに応じてアニメーションさせる
      },
    }); gsap.to(element2, {
      // x: '40%', // 左に移動
      backgroundColor: '#f0908d',
      scrollTrigger: {
        trigger: element2,
        start: 'center 70%',
        end: 'center 30%',
        scrub: true, // スクロールに応じてアニメーションさせる
      },
    });
    // [#2a4073]
    // '#507ea4''
    gsap.to(el2, {
      x: '0%', // 左に移動
      // backgroundColor: '#FF0000',
      scrollTrigger: {
        trigger: el2,
        start: 'center 96%',
        end: 'center 60%',
        scrub: true, // スクロールに応じてアニメーションさせる
      },
    });
    gsap.to(el3, {
      x: '0%', // 左に移動
      // backgroundColor: '#FF0000',
      scrollTrigger: {
        trigger: el3,
        start: 'center 96%',
        end: 'center 60%',
        scrub: true, // スクロールに応じてアニメーションさせる
      },
    });

    gsap.to(el4, {
      filter: 'blur(0px)', // 左に移動
      // backgroundColor: '#FF0000',
      scrollTrigger: {
        trigger: el4,
        start: 'center 96%',
        end: 'center 50%',
        scrub: true, // スクロールに応じてアニメーションさせる
      },
    });




    gsap.to(el5, {
      opacity: '0', // 左に移動
      // backgroundColor: '#FF0000',
      scrollTrigger: {
        trigger: el5,
        start: 'center 100%',
        end: 'center 50%',
        scrub: true, // スクロールに応じてアニメーションさせる
      },
    });


    gsap.to(el6, {
      bottom: '10px', // 左に移動
      color: '#393f4c',
      // backgroundColor: '#FF0000',
      scrollTrigger: {
        trigger: el5,
        start: 'center 75%',
        end: 'center 40%',
        scrub: true, // スクロールに応じてアニメーションさせる
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



  const now = new Date();
  const goal = new Date(2025, (3 - 1), 21, 11, 30, 0, 0);
  const betweenTime = ((goal.getTime() - now.getTime()) / 1000);
  const [countTime, setCountTime] = useState<number>(betweenTime)
  useCountDownInterval(countTime, setCountTime)
  return (
    <>
      <div className="scroll-bar"></div>
      <div className="overflow-x-hidden">
        <div className="w-[100vw] h-[100vh] py-8 relative">
          <div className="w-full h-full absolute top-0 left-0 bg-z opacity-60"></div>
          {/* <div className="text-[#302833] text-4xl paint2 shuku bg-[#c85554] w-80 h-80 rounded-full grid place-items-center pb-6 absolute top-0 left-0 translate-x-[-50%] translate-y-[-50%]"></div> */}
          <div className="w-full h-full relative z-10 flex flex-col items-center justify-center">
            <div className="w-[390px] h-[390px] relative overflow-hidden scale-125">
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

        <div className="w-[100vw] h-[100vh] flex justify-center items-center snap-start relative">
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
              このたび私たちは<br className="hidden md:inline" />
              結婚式を挙げることになりました<br />
              つきましては皆様により一層の<br className="hidden md:inline" />
              ご指導を賜りたく<br />
              ささやかではございますが披露宴を<br className="hidden md:inline" />
              催したく存じます
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

        <div ref={ref2} className="w-[100vw] py-12 bg-[#2a4073] snap-start px-6">
          <div className="flex justify-center">
            <div ref={pi} className="relative w-full aspect-[3/2] translate-x-[150%]">
              <img src={img1} className="imgclip absolute top-0 left-0" alt="" />
              <p className="text-white text-2xl absolute bottom-0 right-0">
                櫻井 友貴
              </p>
            </div>
          </div>
          <div className="text-white text-md mt-6 leading-7">
            <p>1991年8月29日、東京都生まれ。エンジニア。</p>
            <p>プログラミング・DIY・洋菓子作りなど、ものづくりが好き。</p>
            <p className="mt-3">美味しい料理・お酒をご用意してお待ちしております。</p>
          </div>
          <div className="flex justify-center mt-8">
            <div ref={pi2} className="relative w-full aspect-[3/2] translate-x-[-150%]">
              <img src={img2} className="imgclip2 absolute bottom-0 right-0" alt="" />
              <p className="text-white text-2xl absolute top-0 left-0">
                岡本 果波
              </p>
            </div>

          </div>
          <div className="text-white text-md mt-6 leading-7">
            <p>1998年10月11日、兵庫県生まれ。ホテルスタッフ。</p>
            <p>イラスト・デザインが得意で、</p>
            <p className="mt-3">当日、みなさまにお会いできることを楽しみにしています。</p>
          </div>
        </div>

        <div className="w-[100vw] text-slate-700 bg-cherry">
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

        <div ref={ref} className="w-[100vw] bg-[#c1e4e9] py-12 px-4">
          <h2 className="text-3xl text-center">ご案内</h2>
          <div className="">
            <p className="text-md mt-2">日付</p>
            <p className="flex items-end mt-1 pl-2">
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
                <div className="flex items-end gap-4 text-2xl pl-2">
                  <dt className="mb-1 w-20">挙式</dt>
                  <dd className="w-16 ovo">11:30</dd>
                </div>
                <div className="flex items-end gap-2 text-sm text-slate-600">
                  <dt className="mb-1">受付</dt>
                  <dd className="mb-0.5 w-16 ovo">10:30</dd>
                </div>
              </div>
              <div className="flex items-end gap-4 pl-2">
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
          <h2 className="text-3xl text-center mt-8">アクセス</h2>
          <p className="mt-2">会場</p>
          <p className="text-3xl mt-1">神田明神</p>
          <div className="pl-2">
            <p className="mt-2 text-sm">〒101-0021 東京都千代田区外神田2-16-2</p>
            <p className="text-sm">03-6384-0477</p>
            <p className="text-sm">https://myojin.tokyo/</p>
          </div>
          <div>
            <div className="mt-4 w-full h-60">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.005369730445!2d139.76525902578862!3d35.70148547258068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c1ecc161bed%3A0xf397e4b6bf417c8b!2z56We55Sw56We56S-77yI56We55Sw5piO56We77yJ!5e0!3m2!1sja!2sjp!4v1736514079080!5m2!1sja!2sjp" className="w-full h-full" loading="lazy"></iframe>

            </div>
          </div>

        </div>
        <div className="w-[100vw] h-[100vh] relative overflow-hidden">
          <img src={img3} className="absolute top-0 left-0 w-full h-full object-cover blur-3xl" ref={pi3} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-45" ref={pi4}></div>
          <p ref={pi5} className="text-[#e5abbe] text-xl absolute bottom-[50%] text-center left-0 right-0 mx-auto translate-y-[50%] z-20">
            みなさまにお会いできるのを<br />
            楽しみにしております
          </p>
        </div>

      </div>
    </>
  )
}

export default App
