import { useContext } from "react";
import BurgerContext from "../contexts/BurgerContext";
import ButtonTransparent from "./ButtonTransparent";
import { Link } from "react-router-dom";

function NavSide() {
    const isBurgerOn = useContext(BurgerContext);
    console.log("isBurgerOn : ", isBurgerOn);

    function handleLogout() {
        localStorage.removeItem('idToken');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('profileUrl');
        window.location.href = '/';
    }

    return (
        <div className={`bg-[#F56868] ${!isBurgerOn ? 'w-[5vw]' : 'w-[15vw]'} h-full`}>
            <ul className="flex flex-col w-full pt-5 ">
                <Link to="/userdashboard">
                    <li className="flex ml-2 space-x-5 my-5">
                        <img className="w-6 h-6 invert-[1] m-3" src="https://cdn-icons-png.flaticon.com/128/3524/3524878.png" alt="" />
                        {isBurgerOn && <ButtonTransparent>Dashboard</ButtonTransparent>}
                    </li>
                </Link>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1] m-3" src="https://cdn-icons-png.flaticon.com/128/1247/1247944.png" alt="" />
                    {isBurgerOn && <ButtonTransparent>Report /<br />Complaint</ButtonTransparent>}
                </li>
                <Link to="/alerts" >
                    <li className="flex ml-2 space-x-5 my-5">
                        <img className="w-6 h-6 invert-[1] m-3" src="https://cdn-icons-png.flaticon.com/128/497/497789.png" alt="" />
                        {isBurgerOn && <ButtonTransparent>Alerts</ButtonTransparent>}
                    </li>
                </Link>
                <Link to="/publicforumlist"><li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1] m-3" src="https://cdn-icons-png.flaticon.com/128/1542/1542858.png" alt="" />
                    {isBurgerOn && <ButtonTransparent>Public Forum</ButtonTransparent>}
                </li></Link>

                <Link to="/awareness">
                    <li className="flex ml-2 space-x-5 my-5">
                        <img className="w-6 h-6 invert-[1] m-3" src="https://cdn-icons-png.flaticon.com/128/9975/9975755.png" alt="" />
                        {isBurgerOn && <ButtonTransparent>What to do ?</ButtonTransparent>}
                    </li>
                </Link>
                
                <li onClick={handleLogout} className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1] m-3" src="https://cdn-icons-png.flaticon.com/128/1828/1828479.png" alt="" />
                    {isBurgerOn && <ButtonTransparent>Log Out</ButtonTransparent>}
                </li>
            </ul>
        </div>
    )
}
export default NavSide;