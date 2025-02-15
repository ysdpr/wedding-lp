import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import img1 from '../assets/241101_067.jpg';
import img2 from '../assets/241101_058.jpg';
import { img58 } from '../assets/jsimg/img58';
import { img67 } from '../assets/jsimg/img67';
const Profile = () => {
  gsap.registerPlugin(ScrollTrigger);
  const pi = useRef(null);
  const pi2 = useRef(null);
  const ref2 = useRef(null);
const textup1 = useRef(null);
const textup2 = useRef(null);

  useEffect(() => {
    const el2 = pi.current;
    const el3 = pi2.current;
    const element2 = ref2.current;
    const pTextup1 = textup1.current;
    const pTextup2 = textup2.current;

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

    return (
        <div ref={ref2} className="w-[100vw] bg-[#2a4073] snap-start px-4 md:py-0 bg-t1" id="p2">
          <div className="md:w-[720px] m-auto zzz px-8 md:px-10 py-12 md:py-24 text-[#444]">
            <div className="t-width ml-[-3rem]">
              <div ref={pi} className="flex gap-2 items-end justify-between w-full translate-x-[150%]">
                <img src={img67} className="w-0 flex-grow imgclip" alt="" />
                <p className="shrink-0 text-2xl md:text-3xl">
                  櫻井 友貴
                </p>
              </div>
            </div>
            <div ref={textup1} className="text-sm mt-6 translate-y-16 opacity-0 md:text-right md:text-base">
              <p>1991年8月29日 東京都生まれ エンジニア</p>
              <p>プログラミング DIY 洋菓子作りなど ものづくりが好き</p>
              <p className="mt-3">美味しい料理・お酒をご用意してお待ちしております</p>
            </div>
            <div className="t-width mr-[-3rem] mt-8">
              <div ref={pi2} className="flex flex-row-reverse gap-2 items-end justify-between w-full translate-x-[-150%]">
                <img src={img58} className="w-0 flex-grow imgclip2" alt="" />
                <p className="shrink-0 text-2xl md:text-3xl">
                  岡本 果波
                </p>
              </div>
            </div>
            <div ref={textup2} className="text-sm mt-6 translate-y-16 opacity-0 md:text-base">
              <p>1998年10月11日 兵庫県生まれ ホテルスタッフ</p>
              <p>絵を描いたり散歩をすることが大好き</p> {/* TODO: 文言入力 */}
              <p className="mt-3">当日 みなさまにお会いできることを楽しみにしています</p>
            </div>
          </div>
        </div>
    )

}
export default Profile;