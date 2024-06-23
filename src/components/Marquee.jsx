import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-speed='-.002' className='w-full py-10 overflow-hidden rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
        <div className='h-[19vw]  text border-t-2  border-b-2 mt-10 border-zinc-100  flex whitespace-nowrap'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className=' pr-14 text-[27vw] leading-none uppercase transform-[0.1s] ease-out font-semibold mt-2 font-["Founders_Grotesk"]'>We are ochi </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className=' pr-14 text-[27vw] leading-none uppercase transform-[0.1s] ease-out font-semibold mt-2 font-["Founders_Grotesk"]'>We are ochi </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className=' pr-14 text-[27vw] leading-none uppercase transform-[0.1s] ease-out font-semibold mt-2 font-["Founders_Grotesk"]'>We are ochi </motion.h1>
        </div>
    </div>
  )
}


export default Marquee