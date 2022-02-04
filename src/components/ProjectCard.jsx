import React from 'react';

function ProjectCard({ item }) {
  const { title, description, description2, github, graphic, link, stack } = item
  return (
    <div className='w-full md:h-64 flex flex-col md:flex-row md:m-5 p-5 shadow-md justify-center items-center'>
      <div className='w-80 md:w-96 h-full flex justify-center items-center p-5' >
        <a href={github} target="_blank" rel="noreferrer noopener" ><img src={graphic} alt='' className='cursor-pointer' /></a>
      </div>
      <div className='flex flex-col w-full md:w-3/5'>
        <div className='text-center text-xl pb-5 underline'>{title}</div>
        <div className=''>{description} {description2}</div>
        <br />
        <div className=''>Stack: {stack}</div>
      </div>
    </div>);
}

export default ProjectCard;
