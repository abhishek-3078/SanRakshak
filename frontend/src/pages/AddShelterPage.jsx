import NewNavSide from "../components/NewNavSide";
import Navbar from '../components/Navbar';
import ShelterForm from "../components/ShelterForm";
import AddLocationOnMap from "../components/AddLocationOnMap";
import CurrentAlerts from '../components/CurrentAlerts';
import { useState } from "react";
import BurgerContext from '../contexts/BurgerContext'
import PreviousAlerts from "../components/PreviousAlerts";

function AddShelterPage() {
    const [isBurgerOn, setIsBurgerOn] = useState(false);

    function handleBurgerClick(isBur) {
        setIsBurgerOn(isBur);
    }

    return (<>
        <BurgerContext.Provider value={isBurgerOn}>
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
                                    <ShelterForm />
                                </div>
                                <div className="flex flex-col">
                                    <div className="w-[400px]">
                                        <AddLocationOnMap />
                                    </div>
                                    <div className="flex justify-end space-x-10 my-5">
                                        <button className=" bg-transparent text-[grey] border-2 border-solid rounded-lg border-[grey] px-4 py-1 hover:shadow-black hover:shadow-md" >Cancel</button>
                                        <button className="bg-[#6A8BFF] text-white border-2 border-solid rounded-lg border-blue-300 px-4 py-1 hover:shadow-md hover:shadow-blue-300">Add Selter</button>
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
export default AddShelterPage;