import React, { useEffect, useState } from "react";
import { API } from '../constant.js';
import CurrentAlertBox from "./CurrentAlertBox";



    // console.log("We are posting this data", loginData);
  

const CurrentAlerts = () => {

    const [alerts,SetAlerts] = useState([]);
    const [load,SetLoad] = useState(0);

    useEffect(() => {

        const getAlert = async () => {
            console.log("Hello");
            try {
                console.log("Yaha pahuch gayaa");
    
                // setShowLoader(true)
                const id_token = localStorage.getItem('idToken')
                const response = await fetch(`${API}/admin/getalert`, {
                    method: "GET",
                    headers: {
                        'Authorization': id_token,
                        'Content-Type': "application/json"
                    }
                });
                console.log("vgv:", response)
                if (response.ok) {
                    const data = await response.json()
                    console.log(data);
                    console.log("abhishek ye raha data ", data);
                    // setShowLoader(false);
                    SetLoad(1);
                    SetAlerts(data);
                    console.log("This is our alerts",data);
                }
                else {
                    const data = await response.json()
                    console.log(data);
                    throw new Error('Network response was not ok');
                }
            }
            catch (error) {
                alert(error);
                console.log("This is the erroe", error);
            }
        }
    
        getAlert();
    }, [load])
    return (
        <>
            <div className=" border p-2 h-[95vh] overflow-auto rounded-[5px]">
                <p className="font-semibold text-3xl ">Alerts</p>
                <div className="mt-5 flex flex-wrap ml-3">
                    {/* <CurrentAlertBox level='1' />
                    <CurrentAlertBox level='1' />
                    <CurrentAlertBox level='1' />
                    <CurrentAlertBox level='2' />
                    <CurrentAlertBox level='2' />
                    <CurrentAlertBox level='2' />
                    <CurrentAlertBox level='0' />
                    <CurrentAlertBox level='0' />
                    <CurrentAlertBox level='0' /> */}
                    
                    {alerts.map((e)=>{
                        return(

                            <CurrentAlertBox severity = {e.severity} instruction = {e.instruction} title = {e.title} createdAt = {e.createdAt} description = {e.description}/>
                            // <CurrentAlertBox />
                            )
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default CurrentAlerts;