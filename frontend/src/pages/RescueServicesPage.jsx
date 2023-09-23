import { useState,useEffect } from "react";
import { API } from "../constant";
import ImportantInfoBox from "../components/ImportantInfoBox";
import NavSide from "../components/NavSide";
import Navbar from "../components/Navbar"
import UserMap from "../components/UserMap"
import MissingPeopleDash from "../components/MissingPeopleDash";
import BurgerContext from "../contexts/BurgerContext";
import SearchSelter from "../components/SearchSelter";
import swal from "sweetalert";

function RescueServices(){
    const [data,setData]=useState('')
    useEffect(()=>{
        async function getUser(){
          const res=await fetch(`${API}/user`,{
            method:"GET",
            credentials:"include"
        })
          const data=await res.json();
          console.log("Data from backend:",data)
            try{
                const token=localStorage.getItem('idToken')
                const res=await fetch(`${API}/user`,{
                    method:"GET",
                    headers:{
                        "Authorization":token
                    }
                   
                    
                })
                
                if(res.status==401){
                    return window.location.href='/'
                }
                if(!res.ok){
                    return swal("Error in fetching")

                }
                const data=await res.json();
                setData(data)
                localStorage.setItem('name',data.name)
                localStorage.setItem('email',data.email)
                localStorage.setItem('profile',data.profileUrl)
                console.log("Data from backend:",data)
            }catch(e){
                swal(e.message)
            }
          
         
         
        }
        getUser()
      },[])

      const [isBurgerOn,setIsBurgerOn] = useState(true);

      const [shelterData,SetShelterData] = useState({
        
      }) 

      function handleBurgerClick(isBur){
          setIsBurgerOn(isBur);
      }
    return(
        <>
        <BurgerContext.Provider value={isBurgerOn}>
          <section className="flex flex-col ">
                <div>
                    <Navbar handleBurgerClick={handleBurgerClick} color="#F56868"></Navbar>
                </div>
                <div className="flex">
                    <div>
                        <NavSide></NavSide>
                    </div>
                    <div className="w-full">
                        <div>
                            <div className="w-full mt-3">
                                <ImportantInfoBox name={data.name} />
                            </div>
                            <div className="flex w-[80vw] h-screen mt-10 mx-auto justify-between space-x-5">
                                    <SearchSelter/>
                                    <MissingPeopleDash/>
                            </div>
                        </div>
                    </div>
                </div>
          </section>
          </BurgerContext.Provider>
        </>
    )
}
export default RescueServices;