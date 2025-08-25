import { useContext, useState } from "react";
import ButtonTransparent from "./ButtonTransparent";
import BurgerContext from "../contexts/BurgerContext";
import { Link } from "react-router-dom";

function NewNavSide(){
    const isBurgerOn = useContext(BurgerContext);
    console.log("isBurgerOn : ",isBurgerOn);

    function handleLogout(){
        localStorage.removeItem('idToken');
        window.location.href = '/';
    }
    return(
        <div className={`bg-[#6A8BFF] ${isBurgerOn? 'w-[5vw]':'w-[15vw]'} min-h-screen h-full`}>
            <ul className="flex flex-col w-full pt-5">
                <Link to="/adminDashboard">
                    <li className="flex ml-2 space-x-5 my-5">
                        <img className="w-6 h-6 invert-[1] m-2" src="https://cdn-icons-png.flaticon.com/128/3524/3524878.png" alt="" />
                        {!isBurgerOn && <ButtonTransparent>Dashboard</ButtonTransparent>}
                    </li>
                </Link>
                <Link to="/createAlert">
                    <li className="flex ml-2 space-x-5 my-5">
                        <img className="w-6 h-6 invert-[1] m-2" src="https://cdn-icons-png.flaticon.com/128/497/497789.png" alt="" />
                        {!isBurgerOn && <ButtonTransparent>Alerts</ButtonTransparent>}
                    </li>
                </Link>
                <Link to="/addDisaster">
                    <li className="flex ml-2 space-x-5 my-5">
                        <img className="w-6 h-6 invert-[1] m-2" src="https://cdn-icons-png.flaticon.com/128/6013/6013909.png" alt="" />
                        {!isBurgerOn && <ButtonTransparent>Disaster Details</ButtonTransparent>}
                    </li>
                </Link>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1] m-2" src="https://cdn-icons-png.flaticon.com/128/3121/3121571.png" alt="" />
                    {!isBurgerOn && <ButtonTransparent>Statistics</ButtonTransparent>}
                </li>
                <li onClick={handleLogout} className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1] m-2" src="https://cdn-icons-png.flaticon.com/128/1828/1828479.png" alt="" />
                    {!isBurgerOn && <ButtonTransparent>Log Out</ButtonTransparent>}
                </li>
            </ul>
        </div>
    )
}
export default NewNavSide;
