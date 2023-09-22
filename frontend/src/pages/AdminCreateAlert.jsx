import NewNavSide from "../components/NewNavSide";
import Navbar from '../components/Navbar';
import ShelterForm from "../components/ShelterForm";
import AddLocationOnMap from "../components/AddLocationOnMap";
import CurrentAlerts from '../components/CurrentAlerts';
import { useState } from "react";
import BurgerContext from '../contexts/BurgerContext'
import PreviousAlerts from "../components/PreviousAlerts";
import Map from "../components/LocationSelectorMap";
import AlertPage from "../components/AlertComponent";
// import LocationMap from '../components/ShowLocationMap'

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
                        <h1 className="text-2xl font-semibold text-blue-500 p-4">
                            Create an alert
                        </h1>
                        <div className="flex justify-center">
                            <AlertPage />
                        </div>

                    </div>
                </div>
            </section>
        </BurgerContext.Provider>
    </>)
}
export default AddShelterPage;