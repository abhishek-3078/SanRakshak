import React from 'react'

const UserMap = () => {
  return (
    <div className="w-[50%] border-[#C5C5C5] border-solid border-[2px] h-[80vh] flex flex-col justify-center rounded-[9px]">
        <div className="flex">
            <h1 className="text-[25px] mx-5 font-[500] pt-[3px]">Find Nearest Rescue Services</h1>
        </div>


        <div id="map" className="w-[95%] h-[90%] flex justify-center items-center bg-[#D9D9D9] ml-5 mr-0 my-5 rounded-[10px]"> 
            <iframe className="w-[100%] h-[90%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117977.46320093345!2d69.9758386535699!3d22.474309431175403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957154934c04597%3A0xe8b7dd81a49b75ca!2sJamnagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1695148219137!5m2!1sen!2sin" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default UserMap