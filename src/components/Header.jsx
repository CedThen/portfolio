import React, { useState } from 'react';
import foreground from '../assets/fg.png'
import background from '../assets/bg.png'
import useWindowDimensions from '../useWindowDimensions';

const bgfgStyle = {
  position: `absolute`,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  zIndex: -1,
}

function Header() {
  const { width } = useWindowDimensions();
  const [offsetX, setOffsetX] = useState(0);

  function trackMouse(e) {
    let pageX = ((e.nativeEvent.pageX / width) * 0.005 - 0.0025).toFixed(4)
    setOffsetX(pageX)
  }

  return (
    <header onMouseMove={trackMouse}>
      <img src={foreground}
        className="foreground" alt=''
        style={{ transform: `translateZ(-5px)  rotateY(${offsetX}deg) scale(1.6)`, ...bgfgStyle }}
      />
      <img src={background}
        className="background" alt=''
        style={{ transform: `translateZ(-10px) scale(2)`, ...bgfgStyle }}
      />
      <div className='titleContainer flex justify-center items-center mb-60 flex-col'
        style={{ transform: `rotateY(${offsetX * 20}deg)` }}>
        <h1 className='text-titleBlue italic  text-7xl md:text-8xl font-bold'>Ted Chen</h1>
        <p className='text-titleBlue italic text-3xl md:text-4xl font-bold pt-4'>web developer</p>

      </div>

    </header>
  )
}

export default Header;
