import img from "../assets/main_bg3.jpg";
import { API } from '../constant.js';
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from '../img/demo.json'

function OrgRegister() {

  const [showLoader,setShowLoader] = useState(false);

  const [AdminData, SetAdminData] = useState(
    {
      name: "",
      type: "",
      email: "",
      telephone: "",
      address: ""
    }
  )

  const handleData = (e) => {
    var TempData = AdminData;
    TempData[e.target.name] = e.target.value;
    SetAdminData(TempData);
    console.log(AdminData);
  }

  const LogAdmin = async () => {
    console.log("Hello");
    try {
      console.log("Yaha pahuch gayaa");
      setShowLoader(true)
      const response = await fetch(`${API}/admin/signup`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(AdminData)
      });
      console.log("vgv:", response)
      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("idToken", data.token);
        console.log(data.token);
        console.log(data);
        window.location.href="/OrgLogin" 
      }
      else {
        throw new Error('Network response was not ok');
      }
    }
    catch (error) {
      alert(error);
      console.log("This is the erroe", error);
    }
    console.log("We are posting this data", AdminData);
  }

  return (
    <>
      <div className={ `${showLoader?'block':'hidden'} flex justify-center items-center h-screen w-screen absolute z-30`}>
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

        <div className="w-11/12 md:w-9/12 py-0 px-0 md:py-10 md:px-8 bg-white rounded-xl mx-auto flex shadow-lg flex-col my-5 md:my-auto items-center relative md:flex-row h-[95vh] overflow-y-auto">
          <div className="relative w-auto p-4 md:w-1/2">
            <img src={img} className="rounded-2xl h-auto w-auto" alt="Error" />
          </div>
          <div className="mx-auto w-4/5 md:w-1/2 md:pr-4 pt-4">
            <div className="w-full">
              <h1 className="font-medium text-3xl mb-3">Register</h1>
              <p className="font-normal text-lg mb-3">
                Create your account it's free and only takes a minute
              </p>
              <div className="grid grid-cols-2 gap-4 items-end">
                <div className="flex flex-col">
                  <label className="py-1" htmlFor="name">Name of the Organisation</label>
                  <div className="border-solid border-2 border-black rounded-sm">
                    <input
                      className="w-full py-3 px-2 outline-0"
                      type="text"
                      id="name"
                      placeholder="Name"
                      name="name"
                      onChange={(e) => handleData(e)}
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="py-1" htmlFor="type">Type</label>
                  <div className="border-solid border-2 border-black rounded-sm">
                    <select
                      name="type"
                      id="type"
                      className="w-full py-3 px-2 outline-0"
                      onChange={(e) => handleData(e)}
                    >
                      <option value="noOption">Select a type</option>
                      <option value="fire">Fire Fighters</option>
                      <option value="medical">Medical services</option>
                      <option value="rescue">Rescue Operations</option>
                      <option value="others">Others</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="py-1" htmlFor="email">Email</label>
                  <div className="border-solid border-2 border-black rounded-sm">
                    <input
                      className="w-full py-3 px-2 outline-0"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => handleData(e)}
                    ></input>
                  </div>
                </div>
                <div>
                  <label className="py-1" htmlFor="telephone">Telephone No.</label>
                  <div className="border-solid border-2 border-black rounded-sm">
                    <input
                      className="w-full py-3 px-2 outline-0"
                      type="tel"
                      id="telephone"
                      name="telephone"
                      placeholder="Enter Telephone no."
                      onChange={(e) => handleData(e)}
                    ></input>
                  </div>
                </div>
                <div>
                  <label className="py-1" htmlFor="password">Password</label>
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
                {/* <div>
                <label className="py-1" htmlFor="confirmPassword">Confirm Password</label>
                <div className="border-solid border-2 border-black rounded-sm">
                <input
                className="w-full py-3 px-2 outline-0"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                
                ></input>
                </div>
              </div> */}
                <div className="col-span-2">
                  <label className="py-1" htmlFor="address">Permanent Address</label>
                  <div className="border-solid border-2 border-black rounded-sm">
                    <textarea
                      className="w-full py-3 px-2 h-20 outline-0 resize-none"
                      id="confirmPassword"
                      placeholder="Enter the permenent address of the organisation"
                      name="address"
                      onChange={(e) => handleData(e)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <input type="checkbox"></input>
                <span className="ml-1">
                  I accept the Terms of Use & Privacy Policy
                </span>
              </div>
              <button className="bg-red-400 mx-auto block md:left-0 md:inline-block rounded-md p-2 text-white mt-3  mb-3 hover:bg-red-500 duration-200"
                onClick={LogAdmin}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrgRegister;
