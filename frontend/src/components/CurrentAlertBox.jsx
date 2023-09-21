import React from "react";
import { MdKeyboardDoubleArrowRight, MdLocationOn } from "react-icons/md";
const CurrentAlertBox = (props) => {

    var yay;

    if (props.level == '1') {
        yay = 'bg-red-500'
    }
    else if (props.level == '2') {
        yay = 'bg-green-500'
    }
    else {
        yay = 'bg-yellow-500'
    }

    return (
        <>

                <div className="md:min-w-[47%] md:max-w-[47%] min-w-[95%] max-w-[95%] rounded-md overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] mt-3 mr-3">
                    <div className={`flex ${yay} justify-between p-2 text-white text-xl`}>
                        <p>Heading of Alert</p>
                        <button><MdKeyboardDoubleArrowRight color="white" size={30} /></button>
                    </div>
                    <div className="p-2">
                        <div className="flex justify-between text-[13px] font-semibold">
                            <p>Level of threat</p>
                            <p className="text-[#b5b5b5]">20th Sept 2023 | 01:50 PM</p>
                        </div>
                        <div className="text-[13px] mt-2">
                            <p className="font-semibold">Description of the Alert : </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus commodi sapiente........</p>
                        </div>
                        <div className="flex text-[#b5b5b5] text-[13px] mt-2">
                            <MdLocationOn color="#b5b5b5" size={18} />
                            <p>Affected Areas</p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default CurrentAlertBox;