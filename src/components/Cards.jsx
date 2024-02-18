import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 text-yellow-500'>&copy;2019-2024</button>
            </div>
        </div>
        <div className='cardcontainer w-1/2 h-[50vh] flex gap-5'>
            <div className='card relative flex items-center justify-center  rounded-xl w-1/2 h-full bg-[#192826]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 text-yellow-500'>RATING5.0 0N CLUTCH</button>
            </div>
            <div className='card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#192826]'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 text-yellow-500'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}

export default Cards