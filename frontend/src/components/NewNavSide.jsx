import ButtonTransparent from "./ButtonTransparent";
function NewNavSide(){
    return(
        <div className="bg-[#6A8BFF] w-[15vw] h-[90vh]">
            <ul className="flex flex-col w-full pt-5">
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/3524/3524878.png" alt="" />
                    <ButtonTransparent>Dashboard</ButtonTransparent>
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/11445/11445224.png" alt="" />
                    <ButtonTransparent>Partners</ButtonTransparent>
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/497/497789.png" alt="" />
                    <ButtonTransparent>Alerts</ButtonTransparent>
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/3121/3121571.png" alt="" />
                    <ButtonTransparent>Statistics</ButtonTransparent>
                </li>
                <li className="flex ml-2 space-x-5 my-5">
                    <img className="w-6 h-6 invert-[1]" src="https://cdn-icons-png.flaticon.com/128/1828/1828479.png" alt="" />
                    <ButtonTransparent>Log Out</ButtonTransparent>
                </li>
            </ul>
        </div>
    )
}
export default NewNavSide;
