import { useState, useCallback, useEffect, useRef } from "react";
import "./four.css";
const Four = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setpassword] = useState("");
  // useRef
  const PasswordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQURSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+=[]{}`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);
  const copyPasswordToClipboard = useCallback(() => {
    PasswordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="bg-black w-100 text-white h-screen">
        <h1 className="text-2xl text-center text-white pt-6">
          Password generator using React js
        </h1>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={Password}
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              readOnly
              ref={PasswordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 "
            >
              Copy
            </button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center-gap-x-1">
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="px-2">length: {length}</label>
            </div>
            <div className="flex items-center-gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberinput"
                onChange={() => {
                  setnumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberinput" className="px-2">
                Numbers
              </label>
            </div>

            <div className="flex items-center-gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterinput"
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterinput" className="px-2">
                Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Four;
