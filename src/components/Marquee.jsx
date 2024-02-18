import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-3xl
    bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
        <motion.h1  initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat: Infinity, ease: "linear", duration: 10}}  className='text-[21vw] leading-none font-["Test Founders Gtsk X-Cond"] font-bold uppercase  pt-10 pr-20'>we are ochi</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ repeat: Infinity, ease: "linear", duration: 10}}  className='text-[21vw] leading-none font-["Test Founders Gtsk X-Cond"] font-bold uppercase pt-10 pr-20'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee