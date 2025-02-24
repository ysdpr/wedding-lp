import { useState, useEffect } from 'react'

const ScrollA = () => {

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



  const [countTime2, setCountTime2] = useState<number>(0);
  useCountDownInterval2(countTime2, setCountTime2);


  return (
    <div className={'transition-all' + ((windowY - posY) < 200 || ((countTime2 >= 3)  && ((posY) > 200)) ? ' opacity-100' : ' opacity-0')}>
      {/* <div className="ab__inner"></div> */}

      <div className={'fixed bottom-0 left-0 right-0 z-50 pb-2 mx-auto grid place-items-center'}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfBBg23M8-oJEv8C7oDsSK0FuEAHULrt2VowUmnzNdCKcKnzQ/viewform?usp=dialog" target='_blank' className={'grid w-[300px] place-items-center py-4 shadow-lg text-sm rounded-full silv'}>
        出席アンケートにご協力ください
        </a>
      </div>
    </div>


  )

}
export default ScrollA;