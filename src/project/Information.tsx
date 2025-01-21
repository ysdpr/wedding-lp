import { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Information = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);


  useEffect(() => {
    const element = ref.current;

    gsap.to(element, {
      backgroundColor: '#dbd0e6',
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });




  }, []);

  return (

    <div ref={ref} className="w-[100vw] bg-[#c1e4e9] py-12 px-6 md:py-24 bg-ex">
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
    )

}
export default Information