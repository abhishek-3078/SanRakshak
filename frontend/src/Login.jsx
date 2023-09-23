import React, { useState } from "react";
import { API } from "./constant";
import { FcGoogle, FcUnlock } from "react-icons/fc";
const Login = () => {
  const [ loginData, setLoginData ] = useState(
    {
    email: "",
    password: "",
  }
  )
  async function handleClick() {
    window.open(`${API}/auth/google/callback`, "_self");
    //     const res=await fetch("http://localhost:3000/auth/google/callback",{
    //     method: "GET",
    //   credentials: "include"})
    //     const data=res.json()
    //     console.log(data)
  }
  async function handleCheck() {
    // window.open("http://localhost:3000/auth/google/callback","_self")
    const res = await fetch(`${API}/auth/login/success`, {
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
  }
  const handleChange = (e) => {
    var tempData = loginData;
    tempData[e.target.name]=e.target.value;

    setLoginData(tempData)
    console.log("af",loginData)
  };
  async function handleLogin() {
    console.log(loginData);
    try {
      const res = await fetch(`${API}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(loginData),
      });
      if (!res.ok) {
        return swal("error", "Network connection error", "error");
      }
      const data = await res.json();
      console.log(data);
      localStorage.setItem('idToken',data.token)
      window.location.href="/dashboard"
    } catch (e) {
      console.log(data);
    }
  }
  async function handleLogout() {
    const res = await fetch(`${API}/user/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className="flex justify-center">
      <div className=" flex justify-center border md:w-[400px] w-[70%] p-4 py-6">
        <div className="w-[100%] px-4">
          <div
            className="justify-center flex border-2 border-black border-solid px-3 py-2 rounded-[10px] mb-4 cursor-pointer"
            onClick={handleClick}
          >
            <FcGoogle size={30} />
            <p className="font-semibold ml-2">Continue With Google</p>
          </div>
          <div
            className="justify-center flex border-2 border-black border-solid px-3 py-2 rounded-[10px] mb-4 cursor-pointer"
            onClick={handleCheck}
          >
            <FcGoogle size={30} />
            <p className="font-semibold ml-2">Check</p>
          </div>
          <div
            className="justify-center flex border-2 border-black border-solid px-3 py-2 rounded-[10px] mb-4 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </div>
          <div>
            <p className="mb-4">or</p>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className=" w-[100%] block border-2 border-black border-solid px-3 py-2 rounded-[10px] mb-4"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-[100%] block border-2 border-black border-solid px-3 py-2 rounded-[10px] mb-4"
            onChange={(e) => handleChange(e)}
          />
          <button
            className="bg-black text-white rounded-[10px] w-[100%] px-3 py-2 mb-4"
            onClick={handleLogin}
          >
            LogIn
          </button>
          <a href="#" className="text-blue-600 mb-2">
            Reset Password
          </a>
          <div className="flex w-[100%] justify-center">
            <p>No Account?</p>
            <a href="/signup" className="text-blue-600 ml-2">
              Create One!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
