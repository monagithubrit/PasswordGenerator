import React, { useState } from "react";
import "./third.css";

const Third = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({
      [name]: value,
    }));
  };

  return (
    <>
      <section className="bg-zinc-300 h-screen w-full">
        <form className="rounded shadow-lg w-1/2 bg-orange-200 h-100 p-5 mx-auto">
          <div className="">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="px-4 py-2 w-full"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="">Email</label> <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 w-full"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="">Password</label> <br />
            <input
              type="text"
              placeholder="Enter your Password"
              className="px-4 py-2 w-full"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <br />
          <button
            type="submit"
            className="bg-amber-500 text-white rounded px-5 py-3 w-full"
          >
            Submit
          </button>
        </form>

        <h1 className="text-center text-2xl mt-5">
          Your name:- {formData.username} and your Email:- {formData.email} and
          your Password:- {formData.password}
        </h1>

      </section>
    </>
  );
};

export default Third;
