import React from "react";
import { MdKeyboardDoubleArrowRight} from "react-icons/md";

const PreviousAlertBox = () => {
    return(
        <>
            <div className="rounded-[7px] border-[#b5b5b5] border border-solid px-2 mt-4">
                <div className="flex justify-between font-semibold ">
                    <p className="text-xl underline">Heading of Alert</p>
                    <div className="text-[8px] mt-1">
                        <p>20/09/23</p>
                        <p>01:50 PM</p>
                    </div>
                </div>

                <div className="flex">
                    <p className="text-[12px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing Temporibus common..........
                    </p>
                    <button><MdKeyboardDoubleArrowRight size={35} color="#c5c5c5"/></button>
                </div>
            </div>
        </>
    )
}

export default PreviousAlertBox;