import React from 'react'
import Image from 'next/image'

const why = () => {
  return (
    <div className='text-[black] lg:mt-[100px] ml-[30px] overflow-hidden mt-[150px]'>
        <div className='lg:text-6xl lg:ml-[180px] font-bold text-4xl ml-0'>
        <h1><span className='opacity-75'>Why {"`"}</span> BlueSpace</h1>
    </div>
    <div className='mt-[150px]'>
    <div className=" mt-[60px] mr-[50px] lg:hidden sm:block">
            <Image src="/about1.png" width={500} height={700} alt='about' layout='responsive' />
        </div>
    <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
            <div className='text-6xl font-bold opacity-30 lg:ml-[200px]'>
                <h1>01</h1>
            </div>
            <br />
            <div className="text-5xl font-bold lg:ml-[200px] mt-3 ml-[-40]">
                <h1>
                Teams Led by <br className='lg:hidden sm:block' />Co-Founders 
                </h1>
                </div>
                <div className='text-2xl  lg:ml-[200px] mt-6'>
                    <p>We differentiate ourselves from large agencies where<br />
                            junior talent typically handles most of the work, and <br />
                            interactions with design leaders are limited.</p>
                            <br />
                            <p>At Clay, our co-founders lead dedicated, senior-level<br />
                                teams with cross-disciplinary expertise to ensure project<br /> success</p>
                </div>
        </div>
        <div className="col-span-1 md:col-span-1 mt-[60px] mr-[180px] hidden lg:block">
            <Image src="/about1.png" width={500} height={900} alt='about' layout='responsive '  />
        </div>
    </div>
    <div className='mt-[180px]'>
    <div className=" mt-[60px] mr-[50px] lg:hidden sm:block">
            <Image src="/about1.png" width={500} height={700} alt='about' layout='responsive' />
        </div>
    <div className="grid grid-cols-1 md:grid-cols-3">
    <div className="col-span-1 md:col-span-1 mt-[60px] ml-[180px] lg:block hidden ">
            <Image src="/about1.png" width={500} height={700} alt='about' layout='responsive'  />
    </div>
    <div className="col-span-1 md:col-span-2">
    <div className="col-span-1 md:col-span-2">
            <div className='text-6xl font-bold opacity-30 lg:ml-[200px]'>
                <h1>02</h1>
            </div>
            <br />
            <div className="text-5xl font-bold lg:ml-[200px] mt-3 ml-[-100]">
                <h1>
                Collaboration Is Key 
                </h1>
                </div>
                <div className='text-2xl  lg:ml-[200px] mt-6'>
                    <p>We prioritize communication and transparency in all our<br />
                    engineers building notable brands and premier <br />
                    digital experiences that captivate users worldwide.</p>
                            <br />
                            <p>Our unified approach ensures scalability and<br />
                            consistency across all brand touchpoints by<br />
                            building robust design systems.</p>
                </div>
                </div>
        </div>
        </div>
        <div className='mt-[100px]'>
        <div className=" mt-[60px] mr-[50px] lg:hidden sm:block">
            <Image src="/about1.png" width={500} height={700} alt='about' layout='responsive' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
            <div className='text-6xl font-bold opacity-30 lg:ml-[200px]'>
                <h1>03</h1>
            </div>
            <br />
            <div className="text-5xl font-bold lg:ml-[200px] mt-3 ml-[-40]">
                <h1>
                Our Work Is <br className='lg:hidden sm:block' />Future-Proof
                </h1>
                </div>
                <div className='text-2xl  lg:ml-[200px] mt-6'>
                    <p>We create designs that can easily scale and sustain your<br />
                    business goals for years to come. Our portfolio features <br />
                    multiple websites and products that have remained.
                            <br />
                            untouched for 5+ years, proving our work is future-proof.</p>
                </div>
        </div>
        <div className="col-span-1 md:col-span-1 mt-[60px] mr-[180px] hidden lg:block">
            <Image src="/about1.png" width={500} height={900} alt='about' layout='responsive '  />
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}

export default why
