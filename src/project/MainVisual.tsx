import Path from './Path';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import img1 from '../assets/241101_048.jpg';
import img2 from '../assets/241101_071.jpg';
// import img3 from '../assets/241101_080.jpg';
import { img80 } from '../assets/jsimg/img80';
// import img4 from '../assets/241101_051.jpg';
import { img51 } from '../assets/jsimg/img51';
import GOne from '../project/g1';
import yk6 from '../assets/yk6.svg';



const MainVisual = () => {

  return (
    <div className="w-[100vw] h-[100vh] py-8 relative"> {/* TODO: 案を出す */}

      <div className="w-full h-full absolute top-0 left-0 opacity-60">
        <div className="swiper-wrap">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            speed={2000}
            onSlideChange={() => console.log('slide change')}
            loop={true}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="slide-img">
                <img src={img1} alt="" />
                {/* <img src="https://placehold.jp/3d4070/ffffff/700x450.png?text=1" alt="1" /> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-img">
                <img src={img2} alt="" />
                {/* <img src="https://placehold.jp/40703d/ffffff/700x450.png?text=2" alt="2" /> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-img">
                <img src={img80} alt="" />
                {/* <img src="https://placehold.jp/403d70/ffffff/700x450.png?text=3" alt="3" /> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-img">
                <img src={img51} alt="" />
                {/* <img src="https://placehold.jp/70403d/ffffff/700x450.png?text=4" alt="4" /> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="absolute inset-0 m-auto z-10 grid place-items-center">
          <div className="w-[60%]">
            <div className="translate-y-[-0.4em]">
              <p className="mya mb-5"></p>
            </div>
            <p>
              <img src={yk6} alt="" className="w-24 mb-4 mx-auto" />

            </p>
            <GOne />
            <p className="font-eee">Please join us to celebrate</p>
            <div className="translate-y-[-4vw]">
              <p className="mya mt-5"></p>
            </div>
          </div>
        </div>
      </div>

    </div>

  )

}
export default MainVisual