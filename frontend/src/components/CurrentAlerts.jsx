import React from "react";
import CurrentAlertBox from "./CurrentAlertBox";

const CurrentAlerts = () => {
    return (
        <>
            <div className=" border p-2 h-[95vh] overflow-auto rounded-[5px]">
                <p className="font-semibold text-3xl ">Alerts</p>
                <div className="mt-5 flex flex-wrap ml-3">
                    <CurrentAlertBox level = '1' />
                    <CurrentAlertBox level = '1' />
                    <CurrentAlertBox level = '1' />
                    <CurrentAlertBox level = '2'/>
                    <CurrentAlertBox level = '2'/>
                    <CurrentAlertBox level = '2'/>
                    <CurrentAlertBox level = '0'/>
                    <CurrentAlertBox level = '0'/>
                    <CurrentAlertBox level = '0'/>
                </div>
            </div>
        </>
    )
}

export default CurrentAlerts;