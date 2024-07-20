import { useState } from "react";
import { instance } from "../index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp) {
      return alert("Please enter OTP");
    }
    instance
      .post("/login-with-otp", { email, otp })
      .then((res) => {
        alert(res.data.message);
        if (res.status === "200") {
          setFlag(false);
        }
        navigate("/profile");
        setOtp("");
        setEmail("");
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
    }
    try {
      instance
        .post("/request-login-otp", { email })
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          setFlag(true);
        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className=" text-center text-4xl font-semibold mt-20">Login</h1>
      <div className=" sm:w-96 sm:mx-auto border shadow-md p-5 rounded-md mt-5 mx-5 ">
        <form onSubmit={handleLogin}>
          <div>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray
                -700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <button
            disabled={flag}
            type="submit"
            className=" shadow w-full py-2 px-3 rounded text-gray-700 mt-5 bg-slate-200"
          >
            Login
          </button>
        </form>
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

export default Login;
