import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-speed='-.002' className='w-full py-10 overflow-hidden rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
        <div className=' border-t-[1.8px] border-b-[1.8px] mt-10 pb-12 border-[#4D837C]  flex whitespace-nowrap font-["FoundersGrotesk"]'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className=' pr-14 text-[28vw] leading-[16.5vw] uppercase transform-[0.1s] ease-out font-semibold'>We are ochi </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className=' pr-14 text-[28vw] leading-[16.5vw] uppercase transform-[0.1s] ease-out font-semibold'>We are ochi </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className=' pr-14 text-[28vw] leading-[16.5vw] uppercase transform-[0.1s] ease-out font-semibold'>We are ochi </motion.h1>
        </div>
    </div>
  )
}


export default Marquee