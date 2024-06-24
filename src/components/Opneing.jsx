import React, { useEffect, useState } from "react";

function Opneing() {
  const [rotate, setRotate] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mousemove' ,(e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      // Calculate the position for the pupil
      let eyeRadius = (13.5 * window.innerWidth) / 100 / 2; // 15vw converted to px
      let maxPupilOffset = eyeRadius * 0.2; // Pupil can move within 30% of the eye's radius

      let offsetX = (deltaX / (window.innerWidth / 2)) * maxPupilOffset;
      let offsetY = (deltaY / (window.innerHeight / 2)) * maxPupilOffset;

      // Clamp values to ensure the pupil stays within the eye
      offsetX = Math.max(-maxPupilOffset, Math.min(maxPupilOffset, offsetX));
      offsetY = Math.max(-maxPupilOffset, Math.min(maxPupilOffset, offsetY));

      setPosition({ x: offsetX, y: offsetY });
    }); // Adjust debounce delay as needed
});
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.8'  className="w-full h-screen relative bg-[#CDEA68]">
      <div className="w-full h-full flex items-center justify-center ">
         <div  data-scroll data-scroll-speed='.5' className="absolute flex gap-10  left-[35%] top-[30%] -translate-y-[50%] -translate-x-[50%]">
         <div className="w-[11vw] h-[11vw] flex items-center justify-center  bg-white rounded-full">
            <div
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
              className="w-[7vw] h-[7vw] transform-[0.1s] ease-out relative rounded-full bg-[#212121]"
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className=" line w-full pl-[1.5px]  absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-[11vw] h-[11vw] flex items-center justify-center  bg-white rounded-full">
            <div
              style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
              className="w-[7vw] h-[7vw] relative transform-[0.1s] ease-out rounded-full bg-[#212121]"
            >
              <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                className=" line w-full pl-[1.5px]  absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
         </div>
        <h1 className=" text-[17vw] text-[#212121] font-semibold  text-center leading-[11.3vw] font-['FoundersGrotesk']">READY <br /> TO START <br/> THE PROJECT?</h1>
      </div>
    </div>
  );
}

export default Opneing;
