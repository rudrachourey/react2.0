import React from "react";
import { motion, useAnimation } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  const divhover = useAnimation();
  const iconAnimation = useAnimation();
  const divAnimation = useAnimation();
  const imageAnimation = useAnimation();

  const handleHover = () => {
    divhover.start({ scale: 4 });
    iconAnimation.start({ scale: .5 });
    divAnimation.start({ scale: 0.98});
    imageAnimation.start({ scale: 1.1 });
    
  };
  const handleEnd = () => {
    divhover.start({ scale: 1 });
    iconAnimation.start({ scale: 0 });
    divAnimation.start({ scale: 1});
    imageAnimation.start({ scale: 1 });
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.06">
      <div className="overflow-hidden w-full z-30 px-16 py-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-['NeueMontreal']   ">
        <h1 className="text-[3.5vw] leading-[4vw] ">
          Ochi is a strategic partner for fast-grow­ing tech <br /> businesses
          that need to raise funds, sell prod­ucts, <br /> ex­plain com­plex
          ideas, and hire great peo­ple.
        </h1>
        <div className=" flex w-full border-t-[1px] border-[#3d4423] pt-10 mt-16">
          <div className="w-1/2">
            <h1 className="text-6xl ">Our approch:</h1>
            <motion.button
              onHoverStart={() => handleHover()}
              onHoverEnd={() => handleEnd()}
              className=" h-[3.8vw] w-[11.5vw] uppercase pl-5 pr-6 justify-between mt-5 bg-[#212121] rounded-full text-white flex items-center "
            >
              Read More{" "}
              <motion.div
                animate={divhover}
                transition={{ ease: [0.25, 1, 0.5, 1],delay: .1}}
                className=" bg-white  rounded-full"
                >
                <motion.div
                  animate={iconAnimation}
                  transition={{ ease: [0.25, 1, 0.5, 1],delay: .1 }}
                  initial={{ scale:0,}}
                  className="text-black "
                >
                  <GoArrowUpRight className="text-black h-2.5 w-2.5  " />
                </motion.div>
              </motion.div>{" "}
            </motion.button>
          </div>
          <motion.div
            animate={divAnimation}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
           className="w-1/2 h-[66vh] overflow-hidden rounded-xl">
            <motion.img
              animate={imageAnimation} 
              transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
