import { useEffect } from "react";
import { API } from "../constant";
import ImportantInfoBox from "../components/ImportantInfoBox";
import NavSide from "../components/NavSide";
import Navbar from "../components/Navbar"
import UserMap from "../components/UserMap"
import MissingPeopleDash from "../components/MissingPeopleDash";

function RescueServices(){
    useEffect(()=>{
        async function getUser(){
          const res=await fetch(`${API}/user/getUser`,{
            method:"GET",
            credentials:"include"
        })
          const data=await res.json();
          console.log("Data from backend:",data)
        }
        getUser()
      },[])
    return(
        <>
          <section className="flex flex-col">
                <div>
                    <Navbar color="#F56868"></Navbar>
                </div>
                <div className="flex">
                    <div>
                        <NavSide></NavSide>
                    </div>
                    <div className="w-full">
                        <div>
                            <div className="w-full mt-3">
                                <ImportantInfoBox />
                            </div>
                            <div className="flex w-[80vw] mt-10 mx-auto justify-between space-x-5">
                                    <UserMap></UserMap>
                                    <MissingPeopleDash></MissingPeopleDash>
                            </div>
                        </div>
                    </div>
                </div>
          </section>
        </>
    )
}
export default RescueServices;