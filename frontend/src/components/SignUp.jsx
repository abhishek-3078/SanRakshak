import {FcGoogle} from 'react-icons/fc';
import img from "../assets/main_bg3.jpg";

function App() {
  return (
    <div className="flex bg-gradient-to-r from-red-500 to-red-400 rounded-2xl items-center h-full md:h-screen md:w-screen  m-auto">
        <div className="w-11/12 md:w-9/12 py-0 px-0 md:py-10 md:px-8 bg-white rounded-xl mx-auto flex shadow-lg flex-col my-5 md:my-auto items-center relative md:flex-row">
          <div className="relative w-auto p-4 md:w-1/2">
            <img src={img} className="rounded-2xl h-auto w-auto" alt="Error" />
          </div>
          <div className="mx-auto w-4/5 md:w-1/2 md:pr-4">
            <div className="w-full">
              <h1 className="font-medium text-3xl mb-3">Register</h1>
              <p className="font-normal text-lg mb-3">Create your account it's free and only takes a minute</p>
              <div className="w-full inline-block mx-auto mb-3">
                <button className="flex flex-row mx-auto border-solid border-2 border-black py-2 px-4 rounded-full">
                  <FcGoogle className="h-6 mr-2" alt="err"/>
                  <span>Sign up with Google</span>
                </button>
              </div>
              <div className="w-full flex flex-row justify-center mb-3">
                <div className="w-2/5 border-solid border-b-2 relative bottom-2 border-gray-200"></div>
                <div className="mx-4">or</div>
                <div className="w-2/5 border-solid border-b-2 relative bottom-2 border-gray-200"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-end">
                <div className="border-solid border-2 border-black rounded-sm">
                  <input
                    className="w-full py-3 px-2 outline-0"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                  ></input>
                </div>
                <div className="border-solid border-2 border-black rounded-sm">
                  <input
                    className="w-full py-3 px-2 outline-0"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                  ></input>
                </div>
                <div className="border-solid border-2 border-black col-span-2 rounded-sm">
                  <input
                    className="w-full py-3 px-2 outline-0"
                    type="email"
                    placeholder="Email"
                    name="email"
                  ></input>
                </div>
                <div className="border-solid border-2 border-black col-span-2 rounded-sm">
                  <input
                    className="w-full py-3 px-2 outline-0"
                    type="password"
                    placeholder="Password"
                    name="password"
                  ></input>
                </div>
                <div className="border-solid border-2 border-black col-span-2 rounded-sm">
                  <input
                    className="w-full py-3 px-2 outline-0"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                  ></input>
                </div>
              </div>
              <div className="mt-3">
                <input type="checkbox"></input>
                <span className="ml-1">I accept the Terms of Use & Privacy Policy</span>
              </div>
              <button className="bg-red-400 mx-auto block md:left-0 md:inline-block rounded-md py-2 px-2 text-white mt-3  mb-3 hover:bg-red-500 duration-200">
                Register Now
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}
export default App;
