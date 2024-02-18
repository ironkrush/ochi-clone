import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-36 px-20'>
          {["We Create", "Eye Opening", "Presentations"].map((item,index)=>{
            return <div className='masker'>
              <div className='w-fit flex overflow-hidden items-end'>
                {index === 1 && (<motion.div initial={{width:0}}
                 animate={{width: "9vw"}}
                 transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                  className=' mr-[1vw] w-[9vw] rounded-md h-[5vw] relative -top-[1.2vw] bg-blue-500'></motion.div>)}
            <h1 className="uppercase text-[7.5vw] font-['Test Founders Gtsk X-Cond'] leading-[7vw] tracking-tighter 
            font-medium">{item}</h1>
               </div>
               </div>
          })}
         
        </div>

        <div className='border-t-[1px] border-zinc-800 mt-16 flex justify-between items-center py-5 px-20'>
          {["For public and private companies", "From the first pitch to IPO"].map((item,index)=>(<p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
          <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md capitalize rounded-full'>Start the Project</div>
            <div className='w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center'>
              <span className='rotate-[45deg]'><FaArrowUp /></span></div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage