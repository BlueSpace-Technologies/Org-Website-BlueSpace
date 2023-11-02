import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const clients = () => {
    

return (
    <div className='bg-[#17191F] '>
        <div>
        <div className='lg:text-6xl md:pl-[180px] p-[60px]  text-white font-semibold  text-5xl'>
        <h1>Clients</h1>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 space-x-[10px]  lg:ml-[200px] md:ml-0">
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 1"
            className="w-full h-auto cursor-pointer hover:opacity-80"
            width={200} height={300}
            layout='responsive'
          />
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 2"
            className="w-full h-auto cursor-pointer hover:opacity-80"
            width={200} height={300}
            layout='responsive'
          />
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 3"
            className="w-full h-auto cursor-pointer hover:opacity-80"
            width={200} height={300}
            layout='responsive'
          />
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 4"
            className="w-full h-auto cursor-pointer hover:opacity-80"
            width={200} height={300}
            layout='responsive'
            
          />
        
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 5"
            className="w-full h-auto cursor-pointer hover:opacity-80"
            width={200} height={300}
            layout='responsive'
          />
        </div>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 space-x-[10px]  lg:ml-[200px] md:ml-0">
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 1"
            className="w-full h-auto cursor-pointer hover:opacity-80"
            width={200} height={300}
            layout='responsive'
          />
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 2"
            className="w-full h-auto cursor-pointer hover:opacity-80"
            width={200} height={300}
            layout='responsive'
          />
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 3"
            className="w-full h-auto cursor-pointer hover:opacity-80"
            width={200} height={300}
            layout='responsive'
          />
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 4"
            className="w-full h-auto cursor-pointer hover:opacity-80"
            width={200} height={300}
            layout='responsive'
          />
        
        </div>
        <div className="relative">
          <Image
            src="/google.svg"
            alt="Image 5"
            className="w-full h-auto cursor-pointer hover:opacity-80"
            width={200} height={300}
            layout='responsive'
          />
        </div>
        </div>
      </div>
    <div className=' lg:ml-[40rem] ml-[7.5rem] text-white text-xl space-y-1  opacity-75 hover:opacity-100 '>
    <p><Link href="/clients"> View all Clients</Link></p>
    <div className='border ml-[-8px] mt-[-100px] b bg-white-500 md:w-[120px] w-[150px]  opacity-30 hover:opacity-100'></div>
    </div>
    </div>
)


}

export default clients
