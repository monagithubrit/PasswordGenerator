import react, { useState } from "react";
import "./first.css";

const First = () => {
  let [color, setColor] = useState("#2b2d42");
  return (
    <>
      <div className="hero w-full h-screen" style={{ background: color }}>
        <h1 className="text-white text-lg font-bold fs-5 text-2xl p-12 text-shadow-md text-center">
          Color changing on click button using
          <span className="underline">React JS</span>
        </h1>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <button
              className="outline-none rounded-full py-1 px-4 text-white shadow-lg"
              style={{ background: "#472d30" }}
              onClick={() => setColor("#472d30")}
            >
              #472d30
            </button>
            <button
              className="outline-none rounded-full py-1 px-4 text-white shadow-lg"
              style={{ background: "#c9184a" }}
              onClick={() => setColor("#c9184a")}
            >
              #c9184a
            </button>
            <button
              className="outline-none rounded-full py-1 px-4 text-white shadow-lg"
              style={{ background: "#ff5400" }}
              onClick={() => setColor("#ff5400")}
            >
              #ff5400
            </button>
            <button
              className="outline-none rounded-full py-1 px-4 text-white shadow-lg"
              style={{ background: "#002400" }}
              onClick={() => setColor("#002400")}
            >
              #002400
            </button>
            <button
              className="outline-none rounded-full py-1 px-4 text-white shadow-lg"
              style={{ background: "#f7915e" }}
              onClick={() => setColor("#f7915e")}
            >
              #f7915e
            </button>
            <button
              className="outline-none rounded-full py-1 px-4 text-white shadow-lg"
              style={{ background: "#183a37" }}
              onClick={() => setColor("#183a37")}
            >
              #183a37
            </button>
            <button
              className="outline-none rounded-full py-1 px-4 text-white shadow-lg"
              style={{ background: "#38b000" }}
              onClick={() => setColor("#38b000")}
            >
              #38b000
            </button>
            <button
              className="outline-none rounded-full py-1 px-4 text-white shadow-lg"
              style={{ background: "#010b13" }}
              onClick={() => setColor("#010b13")}
            >
              #010b13
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default First;
