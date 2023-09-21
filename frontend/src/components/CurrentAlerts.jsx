import React from "react";
import CurrentAlertBox from "./CurrentAlertBox";

const CurrentAlerts = () => {
    return (
        <>
            <div className=" border p-2 h-[80vh] overflow-auto">
                <p className="font-semibold text-3xl ">Alerts</p>
                <div className="mt-5 flex flex-wrap ">
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