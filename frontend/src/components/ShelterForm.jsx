import { useState } from "react";

function NewFieldList(){
    const initialFieldList = [[
        <div className="flex">
            <input className="border-2  w-60 mt-2 rounded-lg border-[grey] border-solid px-1" type="text" name="resource_name"/>
            <input className="border-2  w-60 mt-2 rounded-lg border-[grey] border-solid px-1" type="text" name="resource_qty"/>
        </div>
    ],
    [
        <div className="flex">
            <input className="border-2  w-60 mt-2 rounded-lg border-[grey] border-solid px-1" type="text" name="resource_name"/>
            <input className="border-2  w-60 mt-2 rounded-lg border-[grey] border-solid px-1" type="text" name="resource_qty"/>
        </div>
    ]
    ]
    const [fieldList,setFieldList] = useState( initialFieldList );

    return(
        <>

        </>
    )
}

function ShelterForm(){
    return(
        <div className="border-2 border-solid border-[grey] w-[40vw] rounded-xl h-[90vh] px-5 py-2">
            <div>
                <h1 className="text-[25px] font-bold">
                    Shelter Details
                </h1>
                <p>
                    Choose the Type and Resources alloted to the Shelter
                </p>
            </div>
            <form className="my-5" action="/action_page.php">
                <div className="flex justify-between my-3">
                    <div>     
                        <label className="block font-[500] " htmlFor="shelterType">Type</label>
                        <select className="border-2 border-solid border-[grey] w-32 mt-2 rounded-lg" name="shelterType" id="shelterType">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-[500]" htmlFor="shelterCordinator">ShelterCordinator</label>
                        <input className="border-2  w-60 mt-2 rounded-lg border-[grey] border-solid px-1" type="text" name="shelterCordinator"/>
                    </div>
                </div>
                <div className="flex flex-col w-full border-2 vorder-solid border-green-700 my-3">
                    <label className="block font-[500]" htmlFor="resources">Resources Allocated</label>
                    <div>

                    </div>
                    <div className="w-full">
                        <button className="w-28 h-7 float-right border-2 border-solid border-blue-500 font-bold bg-[#6A8BFF] text-white text-[14px] shadow-lg shadow-black">
                            Add Field <img className="w-3 h-3 inline text-center invert-[1]" src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className="my-3">
                    <div>
                        <label className="block font-[500]" htmlFor="Capacity">Capacity</label>
                        <input className="border-2  w-32 mt-2 rounded-lg border-[grey] border-solid px-1" type="number" name="Capacity"/>
                    </div>
                </div>
                <div className="my-3">
                    <div>
                        <label className="block font-[500]" htmlFor="Discription">Discription</label>
                        <textarea className="border-2  w-full h-32 mt-2 rounded-lg border-[grey] border-solid px-1 py-1 font-serif" type="text" name="Discription"/>
                    </div>             
                </div>

            </form>
        </div>
    )
}
export default ShelterForm;