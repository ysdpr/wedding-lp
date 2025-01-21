import { useState, useEffect } from 'react'

const Scroll = () => {

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
        <div className={'ab transition-all' + (((countTime2 >= 3) && ((windowY - posY) > 200)) ? ' opacity-100' : ' opacity-0')}>
        <div className="ab__inner"></div>
        <p>
          scroll
        </p>
      </div>


    )

}
export default Scroll