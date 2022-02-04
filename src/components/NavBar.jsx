import React from 'react';

function NavBar({ refs }) {
  const { projRef, aboutRef } = refs

  function onHome() {
    const wrapper = document.getElementById('wrapper')
    wrapper.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function onAbout() {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  function onProjects() {
    projRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className='bg-darkGrey h-12 fixed top-0 text-lightGrey w-full text-center flex flex-row justify-evenly text-xl md:text-3xl items-center z-10' >
      <p className='cursor-pointer' onClick={onHome}>Home</p>
      <p className='cursor-pointer' onClick={onProjects} >Projects</p>
      <p className='cursor-pointer' onClick={onAbout}>About Me</p>
    </nav>
  )
}

export default NavBar;
