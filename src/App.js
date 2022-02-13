import './app.css'
import { data } from './Data'
import ProjectCard from './components/ProjectCard';
import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import profPic from './assets/profPic.jpg'
import githubMark from './assets/github_mark.png'
import linkedIn from './assets/LI-In-Bug.png'
import Resume from './assets/Resume2021.pdf'
import pdfIcon from './assets/pdfIcon.png'
import foreground from './assets/fg.png'
import background from './assets/bg.png'
import { RingLoader } from 'react-spinners';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const projRef = useRef();
  const aboutRef = useRef();

  async function cacheImages(imgs) {
    const promises = imgs.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      })
    })
    await Promise.all(promises)
    setIsLoading(false)
  }

  useEffect(() => {
    const imgs = [foreground, background]
    cacheImages(imgs)
  }, [])

  const LoadingSpinner = () => <div className='h-screen w-full flex justify-center items-center bg-darkBlue'><RingLoader /></div>

  return (
    <div className='root' >
      <NavBar refs={{ projRef, aboutRef, }} />
      <div className="wrapper" id='wrapper'>
        {isLoading ? <LoadingSpinner /> : <Header />}

        <section className='bg-darkBlue sepia-[.2] py-40'>
          <div className='bg-lightGrey w-full md:w-3/4 mx-auto '>
            <div className='text-7xl text-titleBlue text-center font-bold italic py-10 pt-20' ref={projRef}>
              Projects
            </div>

            <div className='w-full md:w-3/4 mx-auto'>
              {data.map((item, index) => <ProjectCard item={item} key={index} />)}
            </div>
            <br />
            <div className='w-full md:w-1/2 mx-auto'>
              <div className='text-7xl text-titleBlue text-center font-bold italic py-10 pt-20' ref={aboutRef}>
                About Me
              </div>
              <div className='flex justify-center items-center flex-col pb-40'>
                <div className='w-[300px] h-[300px]'>
                  <img src={profPic} alt='' className=' w-full h-auto border block' style={{ borderRadius: '50%' }} />
                </div>
                <br />
                <p className='text-xl md:text-2xl'>Hi! Welcome to my portfolio.</p>
                <br />
                <p className='text-xl md:text-2xl p-5'>I'm a full stack web developer with a passion for making things work. That moment when everything comes together and runs smoothly - that is why I climb mountains.</p>
                <nav className='py-10 flex flex-row justify-evenly w-full'>
                  <a href='https://www.linkedin.com/in/tedthewebdev/' className='text-center md:text-xl' target="_blank" rel="noreferrer noopener"><img src={linkedIn} className='h-16 pb-2' />LinkedIn</a>
                  <a href='https://github.com/CedThen?tab=repositories' className='text-center md:text-xl' target="_blank" rel="noreferrer noopener"><img src={githubMark} className='h-16 pb-2' />Github</a>
                  <a href={Resume} className='text-center md:text-xl' target="_blank" rel="noreferrer noopener"><img src={pdfIcon} className='h-16 pb-2' />Resume</a>
                </nav>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default App;
