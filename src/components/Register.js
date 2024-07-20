import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1 className=" text-center text-4xl font-semibold mt-20">SignUp</h1>
      <div className=" sm:w-96 sm:mx-auto border shadow-md p-5 rounded-md mt-5 mx-5 ">
        <form>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mt-2"
              htmlFor="
                name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray
                -700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mt-2"
              htmlFor="
                email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray
                -700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <button
            type="submit"
            className=" shadow w-full py-2 px-3 rounded text-gray-700 mt-5 bg-slate-200"
          >
            SignUp
          </button>
          <Link to={"/"}>
            <button className=" shadow w-full py-2 px-3 rounded text-gray-700 mt-5 bg-blue-300">
              Login{" "}
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
