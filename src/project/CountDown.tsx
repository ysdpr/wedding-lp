import { useState, useEffect } from 'react'

const CountDown = () => {

    
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
      const [countTime, setCountTime] = useState<number>(betweenTime);
      useCountDownInterval(countTime, setCountTime);

    return (
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


    )

}
export default CountDown