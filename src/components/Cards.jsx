import React from "react";

function Cards() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-1' className="w-full h-screen  px-14 flex gap-5 items-center bg-zinc-100">
      <div className="cardcontainer h-[55vh] w-1/2">
        <div className="card w-full h-full rounded-xl bg-[#004D43] relative flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 border-[1px] px-3 py-1 border-[#CDEA68] text-[#CDEA68] rounded-full">
            @2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[55vh] w-1/2">

        <div className="card w-1/2 h-full flex items-center justify-center rounded-xl relative bg-[#212121]">
            <img
              className="w-32"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
          <button className="absolute uppercase left-10 bottom-10 border-[1px] px-3 py-1  rounded-full">
            ratinf 5.0 on clutch
          </button>
        </div>
        <div className="card w-1/2 h-full flex items-center justify-center rounded-xl relative bg-[#212121]">
          <img
            className="w-24"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute uppercase left-10 bottom-10 border-[1px] px-3 py-1  rounded-full">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
