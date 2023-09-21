import { useState } from "react";
function Burger({handleBurgerClick}){
    const [toggle,setToggle] = useState(false);
    return(
        <img onClick={()=>{handleBurgerClick(!toggle),setToggle(!toggle)}} className="w-10 h-10 cursor-pointer invert-[1]" src="https://cdn-icons-png.flaticon.com/128/5358/5358649.png" alt="burger" />
    )
}

export default Burger;