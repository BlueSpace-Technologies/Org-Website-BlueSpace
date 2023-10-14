

import React from 'react'

interface ImageRepeatProps {
  count: number;
}

const Showcasee: React.FC<ImageRepeatProps> = ({ count }) => {
  return (
    <>
        <div className=" py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      {Array.from({ length: count }).map((_, index: number) => (
        <section className='px-9 py-9' key={index}>
          <h1 className='font-unisans font-bold text-5xl text-white py-5'>
            Meta
          </h1>
          <p className='max-w-lg text-white font-unisans text-xl'>
            Strategy, web design, and development for Facebook’s new internet technology.
          </p>
        </section>
      ))}
      </div>
    </>
  )
}

export default Showcasee



