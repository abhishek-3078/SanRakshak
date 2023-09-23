import { FcGoogle } from "react-icons/fc";
import img from "../assets/main_bg3.jpg";
import { API } from '../constant.js';
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from '../img/demo.json'

function App() {

  const [showLoader, setShowLoader] = useState(false);
  const [loginData, SetLoginData] = useState({
    email: "",
    password: ""
  })

  const handleData = (e) => {
    var TempData = loginData;
    TempData[e.target.name] = e.target.value;
    SetLoginData(TempData);
    console.log(loginData);
  }

  const LogAdmin = async () => {
    console.log("Hello");
    try {
      console.log("Yaha pahuch gayaa");

      setShowLoader(true)
      const id_token = localStorage.getItem('idToken')
      const response = await fetch(`${API}/admin/login`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(loginData)
      });
      console.log("vgv:", response)
      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("idToken", data.token);
        console.log(data.token);
        console.log("abhishek ye raha data ", data.completed);
        localStorage.setItem('username', data.user.name)
        setShowLoader(false);
          window.location.href = "/adminDashboard"
      }
      else {
        const data = await response.json();
        console.log(data);
        throw new Error('Network response was not ok');
      }
    }
    catch (error) {
      alert(error);
      console.log("This is the erroe", error);
    }
    console.log("We are posting this data", loginData);
  }

  return (
    <>
      <div className={`${showLoader ? 'block' : 'hidden'} flex justify-center items-center h-screen w-screen absolute z-30`}>
        <div>
          <Lottie
            animationData={animationData}
            autoplay
            loop
            style={{ width: '200px', height: '200px' }}
          />
        </div>
      </div>
      <div className="flex bg-gradient-to-r from-red-500 to-red-400 rounded-2xl items-center h-full md:h-screen md:w-screen m-auto">
        <div className="w-11/12 md:w-9/12 py-0 px-0 md:py-10 md:px-8 bg-white rounded-xl mx-auto flex shadow-lg flex-col my-5 md:my-auto items-center relative md:flex-row">
          <div className="relative w-auto p-4 md:w-1/2">
            <img src={img} className="rounded-2xl h-auto w-auto" alt="Error" />
          </div>
          <div className="mx-auto w-4/5 md:w-1/2 md:pr-4">
            <div className="w-full">
              <h1 className="font-medium text-4xl mb-3 mx-0 md:mx-4">Login</h1>
              <p className="font-normal text-xl mb-3 mx-0 md:mx-4">
                Welcome Back!
              </p>
              <div className="flex flex-col">
                <div className="py-3 mx-0 md:mx-4">
                  <label className="py-1 text-lg" htmlFor="email">Email</label>
                  <div className="border-solid border-2 border-black rounded-sm">
                    <input
                      className="w-full py-3 px-2 outline-0"
                      type="email"
                      id="email"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => handleData(e)}
                    ></input>
                  </div>
                </div>
                <div className="py-3 mx-0 md:mx-4">
                  <label className="py-1 text-lg" htmlFor="password">Password</label>
                  <div className="border-solid border-2 border-black rounded-sm">
                    <input
                      className="w-full py-3 px-2 outline-0"
                      type="password"
                      id="password"
                      placeholder="Password"
                      name="password"
                      onChange={(e) => handleData(e)}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="mt-3 mx-0 md:mx-4">
                <input type="checkbox"></input>
                <span className="ml-1">
                  Keep me signed in.
                </span>
              </div>
              <button className="bg-red-400 mx-0 md:mx-4 block  md:left-0 md:inline-block rounded-md px-4 py-2 text-white mt-3  mb-3 hover:bg-red-500 duration-200" onClick={LogAdmin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
