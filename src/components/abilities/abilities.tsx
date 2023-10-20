import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import Link from 'next/link'

function Item() {
  const items = [
    { id:1 ,title: 'Branding', value1: 'Brand Strategy',value2:"Brand Architecture",value3:'Verbal Identity'
    , value4:'Visual Identity',value5:'Brand Guideline', value6:'Brand Experiences' },
    { id:2 ,title: 'Digital Products', value1: 'Consumer & Enterprise Software',value2:"User Research & Testing",value3:'CX, UX & Interaction Design'
    , value4:'UI Design',value5:'Motion Design', value6:'Design Systems' },
    { id:2 ,title: 'Websites', value1: 'Content Strategy',value2:"Web Design",value3:'Interactive Experiences'
    , value4:'Content Production',value5:'Frontend & Backend Development', value6:'CMS Implementation' },
    { id:2 ,title: 'Content', value1: 'Art Direction',value2:"Illustration & Graphic Design",value3:'Iconography'
    , value4:'Animation',value5:'Photo & Video', value6:'3D' },
    { id:2 ,title: 'Development', value1: 'Technology Consulting',value2:"Architecture Planning",value3:'Mobile App Development'
    , value4:'Frontend Web Development',value5:'Backend Development & API Integration', value6:'Emerging Tech (AI, AR/VR, Wearables, Web3)' },
];
  return (
    <div className='bg-[#17191F] overflow-hidden mt-[150px]'>
        <div className='lg:text-6xl md:p-[180px] text-white p-[60px] font-semibold  text-5xl'>
        <h1>Capabilities</h1>
        </div>
        <div className="md:grid grid-cols-3 gap-4">
      <div className="col-span-1  p-4 space-y-[400px]  ">
      {items.map((item,) => (
        <div className='md:ml-[190px] text-white text-3xl font-semibold  ' key={item.id}>{item.title}</div>
      ))}
      </div>
      <div className="col-span-2  p-4 md:space-y-[170px] mt-[-110rem] space-y-[170px] md:mt-0">
      {items.map((item,) => (
        <div className='md:ml-[180px] text-xl opacity-30  text-white ' key={item.id}>
          <ul className='space-y-5 '>
            <li>{item.value1}</li>
            <li>{item.value2}</li>
            <li>{item.value3}</li>
            <li>{item.value4}</li>
            <li>{item.value5}</li>
            <li>{item.value6}</li>
            </ul>
          </div>
      ))}
      </div>
    </div>
    <div className=' lg:ml-[40rem] ml-[7.5rem]  text-white  text-2xl space-y-1 mt-[60px] opacity-75 hover:opacity-100 '>
    <p><Link href="/services">All services</Link></p>
    <div className='border ml-[-8px] mt-[-100px] b bg-white-500 w-[140px]  opacity-30 hover:opacity-100'></div>
    </div>
    

    </div>
  )
}

export default Item
