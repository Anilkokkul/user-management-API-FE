import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { instance } from "..";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/verify-otp", { email, otp })
      .then((res) => {
        alert(res.data.message);
        if (res.status === "200") {
          setFlag(false);
        }
        navigate("/");
        setOtp("");
        setEmail("");
      })
      .catch((err) => {
        alert(err.response.data.message);
        // console.log(err.response);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill all the fields");
    }
    try {
      instance
        .post("/sign-up", { name, email })
        .then((res) => {
        //   console.log(res.data);
          alert(res.data.message);
          setFlag(true);
        })
        .catch((err) => {
        //   console.log(err);
          alert(err.response.data.message);
        });
    } catch (error) {
    //   console.log(error);
      alert("something went wrong");
    }
  };

  return (
    <div>
      <h1 className=" text-center text-4xl font-semibold mt-20">SignUp</h1>
      <div className=" sm:w-96 sm:mx-auto border shadow-md p-5 rounded-md mt-5 mx-5 ">
        {!flag && (
          <form onSubmit={handleSignUp}>
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
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
        )}
        {flag && (
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-center font-bold mt-2">
              Enter OTP
            </label>
            <input
              type="text"
              className="appearance-none text-center border-b rounded w-full py-2 px-3 text-gray
                -700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Please enter your 6 digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button
              type="submit"
              className=" shadow w-full py-2 px-3 rounded text
            -gray-700 mt-5 bg-slate-200"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
