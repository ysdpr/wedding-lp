const Greeting = () => {
    return (
        <div className="w-[100vw] py-40 flex justify-center items-center snap-start relative">
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
            令和七年二月吉日
          </p>
          <p className="md:mr-4 leading-tight text-right">
            櫻井 友貴<br />
            岡本 果波
          </p>
        </div>
      </div>

    )

}
export default Greeting