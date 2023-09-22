import { useState } from "react";
import Burger from "./Burger";

function Navbar({handleBurgerClick,color}){
    return(
        <div className={`bg-[${color}] h-14 w-screen flex items-center justify-between`}>
            <div className="mx-3">
                <Burger handleBurgerClick = {handleBurgerClick}/>
            </div>
            <div className="flex">
                <p className="pr-8 text-white text-[27px]">{localStorage.getItem('username')}</p>
                <img className="w-10 h-10 mr-10 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="userimg" />
            </div>
        </div>
    )
}
export default Navbar;