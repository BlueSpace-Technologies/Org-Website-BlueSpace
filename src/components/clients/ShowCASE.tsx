

import React from 'react'

interface ImageRepeatProps {
  count: number;
}

const Showcasee: React.FC<ImageRepeatProps> = ({ count }) => {
  return (
    <>
        <div className=" p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {Array.from({ length: count }).map((_, index: number) => (
        <section className='py-2 px-1 lg:p-8' key={index}>
          <h1 className='font-unisans font-bold text-3xl text-white py-5 lg:text-5xl'>
            Meta
          </h1>
          <p className='max-w-lg text-gray-400 font-unisans text-xl'>
            Strategy, web design, and development for Facebook’s new internet technology.
          </p>
        </section>
      ))}
      </div>
    </>
  )
}

export default Showcasee



