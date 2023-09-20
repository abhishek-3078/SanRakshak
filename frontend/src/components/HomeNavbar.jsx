import { Link } from "react-router-dom";

function HomeNavbar({color}){
    return(
        <div className={`bg-[${color}] h-14 w-screen flex items-center justify-between `}>
            <h1 className="font-bold text-white text-[30px] mx-10 font-serif">
                Sanrakshak
            </h1>
            <div className="flex  items-center">
                <button className="mx-10 text-white bg-[#F56868] p-3 rounded-lg hover:bg-green-400">LogIn</button>
                <img className="w-10 h-10 mr-10 " src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="userimg" />
            </div>
        </div>
    )
}
export default HomeNavbar;