import React, { useEffect, useState, useCallback } from "react";
import { instance } from "..";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    mobileNumber: "",
    address: "",
    state: "",
    country: "",
  });

  const [user, setUser] = useState({});

  const fetchUser = useCallback(async () => {
    try {
      const res = await instance.get("/profile");
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
      if (error.response.status === 401) {
        navigate("/");
      }
    }
  }, [navigate]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .put("/profile", userData)
      .then((res) => {
        alert(res.data.message);
        fetchUser();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
    setUserData({
      name: "",
      mobileNumber: "",
      address: "",
      state: "",
      country: "",
    });
  };

  return (
    <div>
      <h1 className="text-center text-4xl mt-10 ">User Details</h1>
      <div className="md:flex justify-center gap-5 mt-5">
        <div className=" grid gap-3 grid-cols-2 md:w-1/2 bg-slate-200 border rounded-lg p-3 m-4">
          <div className="text-right text-2xl mt-2">Name:</div>{" "}
          <div className=" text-2xl mt-2">{user.name}</div>
          <div className="text-right text-2xl mt-2">Email: </div>
          <div className="text-2xl mt-2">{user.email || "Not available"}</div>
          <div className="text-right text-2xl mt-2">Phone:</div>
          <div className="text-2xl mt-2">
            {user.mobileNumber || "Not available"}
          </div>
          <div className="text-right text-2xl mt-2">Gender: </div>
          <div className="text-2xl mt-2">{user.gender || "Not available"}</div>
          <div className="text-right text-2xl mt-2">Address: </div>
          <div className="text-2xl mt-2">{user.address || "Not available"}</div>
          <div className="text-right text-2xl mt-2">State: </div>
          <div className="text-2xl mt-2">{user.state || "Not available"}</div>
          <div className="text-right text-2xl mt-2">Country: </div>
          <div className="text-2xl mt-2">{user.country || "Not available"}</div>
        </div>
        <div className="md:w-1/2 px-5">
          <h1 className=" text-center text-3xl">Update User Details</h1>
          <form
            className=" md:w-1/2 mx-auto border p-2 rounded"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              value={userData.name}
              onChange={handleChange}
              type="text"
              placeholder="update name "
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              name="mobileNumber"
              value={userData.mobileNumber}
              onChange={handleChange}
              type="tel"
              placeholder="update phone number "
              className="shadow mt-2 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              name="address"
              value={userData.address}
              onChange={handleChange}
              type="text"
              placeholder="update Address "
              className="shadow appearance-none mt-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              name="state"
              value={userData.state}
              onChange={handleChange}
              type="text"
              placeholder="update state "
              className="shadow appearance-none mt-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              name="country"
              value={userData.country}
              onChange={handleChange}
              type="text"
              placeholder="update country "
              className="shadow appearance-none mt-2 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className=" shadow w-full py-2 px-3 rounded text
              -gray-700 mt-5 bg-slate-200"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
