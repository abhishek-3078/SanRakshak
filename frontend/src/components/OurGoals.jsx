import React from "react";
import { FaFistRaised, FaHeartbeat } from "react-icons/fa";
// import { BiSolidCommentDetail } from "react-icons/Bi";
// import { BiSolidTimer } from "react-icons/Bi";

export default function OurGoals() {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/268959/pexels-photo-268959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-cover flex flex-col justify-center items-center py-5">
        <div className='mx-auto mt-6 px-6 py-1 mb-6 w-fit text-center text-4xl font-semibold text-white bg-[#f4b124]'>
        Our Goals
      </div>
      <div className="grid grid-cols-2 gap-6 w-1/2 ">
        {/* 1 */}
        <div >
          <div className="border-2 border-solid border-gray-400 bg-white h-64">
            <div className="my-1 px-2 py-1 mx-2">
              <FaHeartbeat size={40}></FaHeartbeat>
            </div>
            <div>
              <h1 className="text-2xl font-semibold my-1 px-2 py-1 mx-2">
                Reducing Casualities
              </h1>
              <p className="text-base font-normal my-1 px-2 py-1 mx-2">
                it provides users with essential
                information and tools to help them prepare for, respond to, and
                recover from disasters in order to minimize injuries and save
                lives.
              </p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div >
          <div className="border-2 border-solid border-gray-400 bg-white h-64">
            <div className="my-1 px-2 py-1 mx-2">
              <FaFistRaised size={40}></FaFistRaised>
            </div>
            <div>
              <h1 className="text-2xl font-semibold my-1 px-2 py-1 mx-2">
                Improving Disaster Preparedness
              </h1>
              <p className="text-base font-normal my-1 px-2 py-1 mx-2">
                This app educates and empower users to prepare in advance
                for disasters, this includes creating emergency plans,
                assembling disaster preparedness kits.
              </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div >
          <div className="border-2 border-solid border-gray-400 bg-white h-64">
            <div className="my-1 px-2 py-1 mx-2">
              {/* <BiSolidCommentDetail size={40}></BiSolidCommentDetail> */}
            </div>
            <div>
              <h1 className="text-2xl font-semibold my-1 px-2 py-1 mx-2">
              Facilitating Communication
              </h1>
              <p className="text-base font-normal my-1 px-2 py-1 mx-2">
              Disaster management apps should enable effective communication between users, emergency responders, and relevant authorities. This can include two-way messaging, reporting incidents, and requesting assistance.
              </p>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div >
          <div className="border-2 border-solid border-gray-400 bg-white h-64">
            <div className="my-1 px-2 py-1 mx-2">
              {/* <BiSolidTimer size={40}></BiSolidTimer> */}
            </div>
            <div>
              <h1 className="text-2xl font-semibold my-1 px-2 py-1 mx-2">
              Providing Real-time Information
              </h1>
              <p className="text-base font-normal my-1 px-2 py-1 mx-2">
                It provides users with essential
                information and tools to help them prepare for, respond to, and
                recover from disasters in order to minimize injuries and save
                lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
