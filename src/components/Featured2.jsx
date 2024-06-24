import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const controlls = [useAnimation(), useAnimation()];
  const imageanimation = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
    controlls[index].start({ scale: 0.95 });
    imageanimation[index].start({ scale: 1.1 });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
    controlls[index].start({ scale: 1 });
    imageanimation[index].start({ scale: 1 });
  };

  return (
    <div className="w-full z-[100] ">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center  px-16  gap-2.5 py-3 w-1/2" > 
        <span className="p-1.5 rounded-full bg-[#212121]"></span>
        <h3 className="uppercase text-[#212121] ">trawa</h3>
        </div>
        <div className="flex  justify-start items-center px-5 gap-2.5 py-3 w-1/2"> 
        <span className="p-1.5 rounded-full bg-[#212121]"></span>
        <h3 className="uppercase text-[#212121] ">PREMIUM BLEND</h3>
        </div>
      </div>
      <div className="px-16 relative">
        <h1 className='flex  absolute text-[#CDEA68] z-[9] overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-["NeueMontreal"] tracking-tighter  font-bold text-[6vw]'>
          {"TRAWA".split("").map((item, index) => (
            <motion.span
              initial={{ y: "100%" }}
              animate={cards[0]}
              transition={{
                ease: [0, 0.55, 0.45, 1],
                delay: index * 0.03,
              }}
              className="inline-block "
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <h1 className=' absolute flex overflow-hidden text-[#CDEA68] z-[9] right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 font-["NeueMontreal"] tracking-tighter  font-bold text-[6vw]'>
          {"PREMIUM BLEND".split("").map((item, index) => (
            <motion.span
              initial={{ y: "100%" }}
              animate={cards[1]}
              transition={{ ease: [0, 0.55, 0.45, 1], delay: index * 0.03 }}
              className="inline-block "
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div className="cards w-full bg-r-green-300 flex gap-4 ">
          <motion.div
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            animate={controlls[0]}
            className="cardcontainer relative w-3/5 h-[75vh]"
          >
            <div className="card w-full h-full bg-cover overflow-hidden rounded-xl bg-[#CECECF] ">
              <motion.img
                animate={imageanimation[0]}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
                className="w-fit h-full"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            animate={controlls[1]}
            className="cardcontainer w-3/5 h-[75vh] relative"
          >
            <div className="card w-full h-full bg-cover bg-[#19181E] overflow-hidden rounded-xl">
              <motion.img
                animate={imageanimation[1]}
                transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
                className="w-fit h-full"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;