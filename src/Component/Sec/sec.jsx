import { data } from "../Dummydata/dummyData.jsx";
import react, { useState } from "react";
import "./sec.css";

const Sec = () => {
  return (
    <>
      <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {data.map((item) => (
          <div class="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] product">
            <img
              src={item.img}
              alt={item.alt}
              class="z-0 h-full w-full rounded-md object-cover"
            />
            <div class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute bottom-4 left-4 text-left">
              <h1 class="text-lg font-semibold text-white">{item.head}</h1>
              <p class="mt-2 text-sm text-gray-300">{item.desc}</p>
              <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Sec;
