import { useState } from "react";
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
                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.10860326683!2d76.82013447424663!3d29.947554623157192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3f422f5244e7%3A0x9c630c311d6349b8!2sNIT%20KURUKSHETRA!5e0!3m2!1sen!2sin!4v1695206905977!5m2!1sen!2sin" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}
export default AddLocationOnMap;