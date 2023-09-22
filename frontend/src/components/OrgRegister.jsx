import { FcGoogle } from "react-icons/fc";
import img from "../assets/main_bg3.jpg";

function App() {
  return (
    <div className="flex bg-gradient-to-r from-red-500 to-red-400 rounded-2xl items-center h-full md:h-screen md:w-screen m-auto">
      <div className="w-11/12 md:w-9/12 py-0 px-0 md:py-10 md:px-8 bg-white rounded-xl mx-auto flex shadow-lg flex-col my-5 md:my-auto items-center relative md:flex-row">
        <div className="relative w-auto p-4 md:w-1/2">
          <img src={img} className="rounded-2xl h-auto w-auto" alt="Error" />
        </div>
        <div className="mx-auto w-4/5 md:w-1/2 md:pr-4">
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
                  >
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
                    placeholder="Email"
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
                    placeholder="Enter Telephone no."
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
                  ></input>
                </div>
              </div>
              <div>
                <label className="py-1" htmlFor="confirmPassword">Confirm Password</label>
                <div className="border-solid border-2 border-black rounded-sm">
                  <input
                    className="w-full py-3 px-2 outline-0"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                  ></input>
                </div>
              </div>
              <div className="col-span-2">
                <label className="py-1" htmlFor="address">Permanent Address</label>
                <div className="border-solid border-2 border-black rounded-sm">
                  <textarea
                    className="w-full py-3 px-2 h-20 outline-0 resize-none"
                    id="confirmPassword"
                    placeholder="Enter the permenent address of the organisation"
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
            <button className="bg-red-400 mx-auto block md:left-0 md:inline-block rounded-md p-2 text-white mt-3  mb-3 hover:bg-red-500 duration-200">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
