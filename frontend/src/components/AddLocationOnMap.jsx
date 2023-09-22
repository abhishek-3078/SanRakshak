import { useState } from "react";
import Map from "./LocationSelectorMap";


function AddLocationOnMap(){
    const [isOnFocus,setIsOnFocus] = useState(false);
    const onFocus = () => setIsOnFocus(true)
    const onBlur = () => setIsOnFocus(false)
    return(
        <section className="w-[100%] h-[80vh] border-2 border-solid border-[#C5C5C5] rounded-xl px-5 py-2">
            <div>
                <h1 className="font-bold text-[25px]">Location</h1>
                <p>Select Location from the Map or use the search bar</p>
            </div>
            <div className="my-5">
                <div className="relative">
                    <input type="search" autoComplete="off" name="search" id="search" onFocus={()=>setIsOnFocus(true)} onBlur={()=>setIsOnFocus(false)} placeholder="search location" className="border-2 border-solid border-[#C5C5C5] p-2  h-8 rounded-2xl" />
                    {!isOnFocus && <img className="w-6 h-6 absolute top-[6px] left-[165px]" src="https://cdn-icons-png.flaticon.com/128/8915/8915520.png"  alt="" />}
                </div>
            </div>
            <div className="w-full border-[1px] border-solid border-[#C5C5C5] my-5 rounded-lg overflow-hidden">
                <Map/>
            </div>
        </section>
    )
}
export default AddLocationOnMap;