import NewNavSide from "../components/NewNavSide";
import Navbar from '../components/Navbar';
import ShelterForm from "../components/ShelterForm";
import AddLocationOnMap from "../components/AddLocationOnMap";
import CurrentAlerts from '../components/CurrentAlerts';
import { useState } from "react";
import BurgerContext from '../contexts/BurgerContext'
import PreviousAlerts from "../components/PreviousAlerts";
import Map from "../components/LocationSelectorMap";
import { API } from '../constant.js';
import swal from "sweetalert";
import Lottie from "lottie-react";
import animationData from '../img/demo.json'

// import LocationMap from '../components/ShowLocationMap'

function AddShelterPage() {
    const [isBurgerOn, setIsBurgerOn] = useState(false);
    const [showLoader, setShowLoader] = useState(false);


    function handleBurgerClick(isBur)
    {
        setIsBurgerOn(isBur);
    }

    const [sheleterData, SetShelterData] = useState({
        shelterType: "",
        coordinator: "",
        capacity: "",
        description: "",
        coord: {
            lat: "",
            lng: ""
        }
    })

    const handleInput = (e) => {
        var tempData = sheleterData;
        tempData[e.target.name] = e.target.value;
        SetShelterData(tempData);
        console.log(sheleterData);
    }

    const mapInput = (lat, lng) => {
        console.log("This is the mapniput function")
        console.log("aksfhksf", lat, lng);
        var tempData = sheleterData;
        tempData.coord.lat = lat;
        tempData.coord.lng = lng;
        SetShelterData(tempData);
        console.log(sheleterData);
    }

    const AddShelter = async () => {
        console.log("Hello");
        try {
            console.log("Yaha pahuch gayaa");
              setShowLoader(true)
            console.log("this is the data we are showing ", sheleterData)
            const idToken = localStorage.getItem('idToken')
            const response = await fetch(`${API}/disaster/addshelter`, {
                method: "POST",
                headers: {
                    'Authorization': idToken,
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(sheleterData)
            });
            console.log("vgv:", response)
            if (response.ok) {
                const data = await response.json()
                console.log(data);
                setShowLoader(false);
                swal("Shelter Added", "Shelter can now be viewed by the masses", "success")
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
        console.log("We are posting this data", AdminData);
    }

    return (
        <>
            <div className={`${showLoader ? 'block' : 'hidden'} flex justify-center items-center h-screen w-screen absolute z-30`}>
                <div>
                    <Lottie
                        animationData={animationData}
                        autoplay
                        loop
                        style={{ width: '200px', height: '200px' }}
                    />
                </div>
            </div>
            <BurgerContext.Provider value={isBurgerOn} >
                <section className="flex flex-col">
                    <div>
                        <Navbar handleBurgerClick={handleBurgerClick} color="#6A8BFF" />
                    </div>
                    <div className="flex">
                        <div>
                            <NewNavSide />
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col w-[97%] mx-auto my-5 px-3">
                                <div className="">
                                    <h1 className="font-bold text-[30px] mb-4">Dashboard : Add Shelter</h1>
                                </div>
                                <div className="flex justify-between space-x-5">
                                    <div className="w-full">
                                        <ShelterForm handleInput={handleInput} />
                                    </div>
                                    <div className="flex flex-col border-2 p-4">
                                        <p className="font-semibold text-2xl ">Select Location</p>
                                        <div className="w-[400px] mt-4">
                                            <Map mapInput={mapInput} />
                                        </div>
                                        <div className="flex justify-end space-x-10 my-5">
                                            <button className=" bg-transparent text-[grey] border-2 border-solid rounded-lg border-[grey] px-4 py-1 hover:shadow-black hover:shadow-md" >Cancel</button>
                                            <button className="bg-[#6A8BFF] text-white border-2 border-solid rounded-lg border-blue-300 px-4 py-1 hover:shadow-md hover:shadow-blue-300" onClick={AddShelter}>Add Shelter</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </BurgerContext.Provider>
        </>)
}
export default AddShelterPage;