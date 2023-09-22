function DisasterForm(){
    return(
        <div className="flex flex-col w-[40vw] h-[90vh] border-2 border-solid border-[#C5C5C5] rounded-lg px-5 py-3 overflow-auto">
            <div>
                <h1 className="font-bold text-[25px]">Disaster Details</h1>
                <p>Fill the form to Add the disaster details for faster selter provision</p>
            </div>
            <div className="my-5">     
                <label className="font-[500] mr-3" htmlFor="shelterType">Disaster Type:</label>
                <select className="border-2 border-solid border-[#C5C5C5] w-32 rounded-lg" name="shelterType" id="shelterType">
                    <option value="volvo">Cyclone</option>
                    <option value="saab">Tsumani</option>
                    <option value="opel">Flood</option>
                    <option value="saab">LandSlide</option>
                    <option value="opel">Earthquakes</option>
                </select>
            </div>
            <div>
                <fieldset className="border-2 border-[#C5C5C5] p-3">
                    <legend className="font-bold text-[15px]">Location:</legend>
                    <label className="ml-4 font-[500]" for="city">City:</label>
                    <input className="border-b-2 mx-3 px-3" type="text" id="city" name="city"/><br/>
                    <label className="ml-4 font-[500]"  for="pincode">Pincode:</label>
                    <input className="border-b-2 mx-3 px-3" type="tel" id="pincode" name="pincode"/><br/>
                    <label className="ml-4 font-[500]"  for="distict">Distict:</label>
                    <input className="border-b-2 mx-3 px-3" type="text" id="distict" name="distict"/><br/>
                    <label className="ml-4 font-[500]"  for="state">State:</label>
                    <input className="border-b-2 mx-3 px-3" type="text" id="state" name="state"/>
                </fieldset>
            </div>
            <div className="my-5">
                <div>
                    <h1 className="font-bold text-[15px] relative top-3 left-2 ">Discription</h1>
                    <div>
                        <textarea name="discription" className="border-2 border-[#C5C5C5]  w-full h-[200px]"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <button className="bg-[#6A8BFF] border-2 border-[#C5C5C5] px-3 py-[1px] text-white rounded-lg float-right">Submit</button>
            </div>
        </div>
    )
}

export default DisasterForm;