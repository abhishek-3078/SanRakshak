import React from 'react'
import Map from './Map'

const UserMap = () => {
  return (
    <div className="w-[100%] border-[#C5C5C5] border-solid border-[2px] h-[100vh] flex flex-col justify-center rounded-[9px]">
        <div className="flex">
            <h1 className="text-[25px] mx-5 font-[500] pt-[3px]">Find Nearest Rescue Services</h1>
        </div>


        <div id="map" className="w-[95%] h-[90%] flex justify-center items-center bg-[#D9D9D9] ml-5 mr-0 my-5 rounded-[10px]"> 
            <Map/>
        </div>
    </div>
  )
}

export default UserMap