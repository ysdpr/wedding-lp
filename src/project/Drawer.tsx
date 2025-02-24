import { useState,useEffect } from 'react'

const Drawer = () => {
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
      <>
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
            <a href="#" className="text-white" onClick={() => { setDrawer(false) }}>TOP</a>
          </li>
          <li className="pt-5 mt-5">
            <a href="#p1" className="text-white" onClick={() => { setDrawer(false) }}>ご挨拶</a>
          </li>
          <li className="pt-5 mt-5">
            <a href="#p2" className="text-white" onClick={() => { setDrawer(false) }}>新郎新婦紹介</a>
          </li>
          <li className="pt-5 mt-5">
            <a href="#p3" className="text-white" onClick={() => { setDrawer(false) }}>挙式まで</a>
          </li>
          <li className="pt-5 mt-5">
            <a href="#p4" className="text-white" onClick={() => { setDrawer(false) }}>当日のご案内</a>
          </li>
          <li className="pt-5 mt-5">
            <a  href="https://docs.google.com/forms/d/e/1FAIpQLSfBBg23M8-oJEv8C7oDsSK0FuEAHULrt2VowUmnzNdCKcKnzQ/viewform?usp=dialog" target='_blank' className="text-white" onClick={() => { setDrawer(false) }}>出席アンケート</a>
          </li>
        </ul>
      </div>
      </>

    )

}
export default Drawer