import { useContext, useState } from "react";
import ButtonTransparent from "./ButtonTransparent";
import BurgerContext from "../contexts/BurgerContext";

function NewNavSide(){
    const isBurgerOn = useContext(BurgerContext);
    console.log("isBurgerOn : ",isBurgerOn);
    return(
        
        <div className={`bg-[#6A8BFF] w-[${isBurgerOn ? 7:15}vw] h-full`}>
            <ul className="flex flex-col w-full pt-5">
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1] m-2" src="https://cdn-icons-png.flaticon.com/128/3524/3524878.png" alt="" />
                    {!isBurgerOn && <ButtonTransparent>Dashboard</ButtonTransparent>}
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1] m-2" src="https://cdn-icons-png.flaticon.com/128/11445/11445224.png" alt="" />
                    {!isBurgerOn && <ButtonTransparent>Partners</ButtonTransparent>}
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1] m-2" src="https://cdn-icons-png.flaticon.com/128/497/497789.png" alt="" />
                    {!isBurgerOn && <ButtonTransparent>Alerts</ButtonTransparent>}
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1] m-2" src="https://cdn-icons-png.flaticon.com/128/3121/3121571.png" alt="" />
                    {!isBurgerOn && <ButtonTransparent>Statistics</ButtonTransparent>}
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1] m-2" src="https://cdn-icons-png.flaticon.com/128/1828/1828479.png" alt="" />
                    {!isBurgerOn && <ButtonTransparent>Log Out</ButtonTransparent>}
                </li>
            </ul>
        </div>
    )
}
export default NewNavSide;
