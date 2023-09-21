import ButtonTransparent from "./ButtonTransparent";
function NavSide() {
    return (
        <div className="bg-[#F56868] w-[15vw] h-full">
            <ul className="flex flex-col w-full pt-5 ">
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/3524/3524878.png" alt="" />
                    <ButtonTransparent>Dashboard</ButtonTransparent>
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/1247/1247944.png" alt="" />
                    <ButtonTransparent>Report /<br/>Complaint</ButtonTransparent>
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/497/497789.png" alt="" />
                    <ButtonTransparent>Alerts</ButtonTransparent>
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/1542/1542858.png" alt="" />
                    <ButtonTransparent>Public Forum</ButtonTransparent>
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/9975/9975755.png" alt="" />
                    <ButtonTransparent>What to do ?</ButtonTransparent>
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/1828/1828479.png" alt="" />
                    <ButtonTransparent>Log Out</ButtonTransparent>
                </li>
            </ul>
        </div>
    )
}
export default NavSide;