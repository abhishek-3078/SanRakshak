import React,{useState} from 'react'
import NavSide from '../components/NavSide'
import { MainDisplayFunction } from '../components/ShelterDetailBox'
import NewNavSide from "../components/NewNavSide";
import BurgerContext from '../contexts/BurgerContext'
import Navbar from '../components/Navbar';
import AgencyStatBox from '../components/AgencyStatBox';
const RescueAgencyDashBoard = () => {
    const [isBurgerOn, setIsBurgerOn] = useState(false);

    function handleBurgerClick(isBur) {
        setIsBurgerOn(isBur);
    }
  return (
    <BurgerContext.Provider value={isBurgerOn}>
            <section className="flex flex-col">
                <div>
                    <Navbar handleBurgerClick={handleBurgerClick} color="#6A8BFF" />
                </div>
                <div className="flex">
                    <div>
                        <NewNavSide />
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <div className="flex w-full justify-center">
                            <AgencyStatBox/>
                            <AgencyStatBox/>
                            <AgencyStatBox/>
                        </div>
                        <MainDisplayFunction/>
                    </div>
                </div>
            </section>
        </BurgerContext.Provider>
  )
}

export default RescueAgencyDashBoard