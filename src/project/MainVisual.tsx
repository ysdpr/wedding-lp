import Path from './Path';


const MainVisual = () => {

    return (
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

    )

}
export default MainVisual