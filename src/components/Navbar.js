import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-20 bg-gray-300 flex p-4 items-center justify-between shadow-lg">
      <div className=" text-4xl">Logo</div>
      <h1 className=" text-2xl font-extrabold">User Management API</h1>
      <div className="flex gap-2">
        <Link className=" bg-green-600 p-2 rounded-lg" to={"/"}>
          Login
        </Link>
        <Link className=" bg-blue-600 p-2 rounded-lg" to={"/sign-up"}>
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
