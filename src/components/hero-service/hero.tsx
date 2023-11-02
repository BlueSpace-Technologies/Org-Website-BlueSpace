import React from 'react'
import Image from 'next/image'

const hero = () => {
  return (
      <header className="bg-black    text-white ">
        <div className="    lg:mt-28 mb-20 ">
          
          <h1 className=" lg:pl-[200px]  lg:text-[4.5rem] md:text-5xl text-4xl font-semibold sm:font-bold pl-[20px] ">
          We transform <br className='lg:hidden'/> brands through  <br className='sm:hidden'/> 
            elevated digital experiences
          </h1>
        </div>
        <div className='lg:ml-[160px] lg:mt-[190px]'>
          <Image src='/group photo.png' alt='group' width={1200} height={500} layout='resposnsive' />
        </div>
      </header>
    
  )
}

export default hero
