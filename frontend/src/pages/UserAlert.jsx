// import NewNavSide from "../components/NewNavSide";
import Navbar from '../components/Navbar';
import ShelterForm from "../components/ShelterForm";
import AddLocationOnMap from "../components/AddLocationOnMap";
import CurrentAlerts from '../components/CurrentAlerts';
import { useState } from "react";
import BurgerContext from '../contexts/BurgerContext'
import PreviousAlerts from "../components/PreviousAlerts";
import NavSide from "../components/NavSide";

function UserAlert() {
    const [isBurgerOn, setIsBurgerOn] = useState(false);

    function handleBurgerClick(isBur) {
        setIsBurgerOn(isBur);
    }

    return (<>
        <BurgerContext.Provider value={isBurgerOn}>
            <section className="flex flex-col">
                <div>
                    <Navbar handleBurgerClick={handleBurgerClick} color="#F56868" />
                </div>
                <div className="flex">
                    <div>
                        <NavSide />
                    </div>
                    <div className="w-full bg-[#f5f5f5]">
                        <div className="flex p-4 justify-between">

                            <div className="w-[75%] bg-white">
                                <CurrentAlerts />
                            </div>
                            <div className="w-[23%] bg-white">
                                <PreviousAlerts />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BurgerContext.Provider>
    </>)
}
export default UserAlert;