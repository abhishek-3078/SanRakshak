import React from "react";
import PreviousAlertBox from "./PreviousAlertBox";

const PreviousAlerts = () => {
    return (
        <>
            <div className=" border p-2 overflow-auto h-[80vh]">
                <p className="font-semibold text-3xl ">Previous Alerts</p>
                <PreviousAlertBox />
                <PreviousAlertBox />
                <PreviousAlertBox />
                <PreviousAlertBox />
                <PreviousAlertBox />
                <PreviousAlertBox />
                <PreviousAlertBox />
                <PreviousAlertBox />
            </div>
        </>
    )
}

export default PreviousAlerts;