"use client"
import React, { useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from 'next/image';

const App = () => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const slideLeft = () => {
    const slider = document.getElementById('slider') as HTMLElement;
    slider.scrollLeft = scrollLeft - 500;
    setScrollLeft(scrollLeft - 500);
  };

  const slideRight = () => {
    const slider = document.getElementById('slider') as HTMLElement;
    slider.scrollLeft = scrollLeft + 500;
    setScrollLeft(scrollLeft + 500);
  };

  const data = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1478359844494-1092259d93e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1514999037859-b486988734f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1509477887414-681937645173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 10,
      img: 'https://images.unsplash.com/photo-1454783904586-9fa42a1e8442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 11,
      img: 'https://images.unsplash.com/photo-1530539595977-0aa9890547c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 12,
      img: 'https://images.unsplash.com/photo-1542262868-cec49cce6571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    },
  ];
  

  return (
    <>
      <div className='relative flex items-center bg-gray-200'>
        <MdChevronLeft
          className=' bg-gray-200  cursor-pointer '
          onClick={slideLeft}
          size={40}
        />
        <div
          id='slider'
          className='w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {data.map((item) => (
            <div
              key={item.id}
              className=' inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 scrollbar-hide'
            >
              <Image
                src={item.img}
                alt=''
                width={800} 
                height={600}
              />
            </div>
          ))}
        </div>
        <MdChevronRight
          className='bg-gray-200 cursor-pointer'
          onClick={slideRight}
          size={40}
        />
      </div>
      <style jsx global>{`
        /* Hide scrollbar for Firefox */
        .scroll::-webkit-scrollbar {
          width: 0;
        }

        /* Hide scrollbar for Webkit-based browsers */
        .scroll::-webkit-scrollbar {
          width: 0;
        }
      `}</style>
    </>
  );
};

export default App;
