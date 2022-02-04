import './app.css'
import { data } from './Data'
import ProjectCard from './components/ProjectCard';
import React, { useRef } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import profPic from './assets/profPic.jpg'
import githubMark from './assets/github_mark.png'
import linkedIn from './assets/LI-In-Bug.png'
import Resume from './assets/Resume2021.pdf'
import pdfIcon from './assets/pdfIcon.png'

function App() {
  const projRef = useRef();
  const aboutRef = useRef();

  return (
    <div className='root' >
      <NavBar refs={{ projRef, aboutRef, }} />
      <div className="wrapper" id='wrapper'>
        <Header />

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
