import { motion } from "framer-motion";
import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-speed='-.7' className="w-full h-screen bg-[#F1F1F1] pt-1 text-[#212121]">
      <div className="textstructure mt-40 px-10">
      {["We Create", "Eye-Opening", "PRESENTATIONS"].map((text, index) => {
        // Conditional style for the second h1 element (index === 1)
        // const h1Style = index === 1 ? { marginLeft: '-100px',backgroundColor:"white", zIndex: 10} : {};

          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (

                  <motion.div initial={{width:0}} animate={{width:"8.6vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1  }} className="w-[8.6vw] mr-2 relative top-[1vw]  mb-[1.2vw] h-[5.5vw] overflow-hidden rounded-md">
                    <img className="h-full" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>
                )}     
               <h1 key={index} className="flex items-center justify-center uppercase text-[9.3vw] h-full tracking-[0.1px] font-semibold leading-[6vw] font-['FoundersGrotesk']">
                  {text}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[0.3px] border-zinc-400 mt-32 flex justify-between items-center py-4 px-20">
        {[
          "For Public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="uppercase  text-zinc-700 text-md font-[2px] tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-6 py-1 border-[1.6px] uppercase border-zinc-500 font-[NeueMontreal] rounded-full">
            Start The Project
          </div>
          <div className="w-9 h-9 flex justify-center items-center text-[1.5vw] rounded-full text-zinc-700 font-medium border-[1.5px] border-zinc-500  ">
           
            <HiMiniArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
