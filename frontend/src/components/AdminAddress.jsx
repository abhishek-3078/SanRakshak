import React, { useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function AdminAddress() {

    const [formMode, setFormMode] = useState(true);

    function handleMarkLocation(e) {

        setFormMode(false);
        e.preventDefault();
        const formData = Array.from(document.getElementsByClassName("data"));

        const streetname = formData[0].value;
        const streetnumber = formData[1].value;
        const pincode = formData[2].value;
        const city = formData[3].value;
        const distict = formData[4].value;
        const state = formData[5].value;
        const country = formData[6].value;

        console.log("streetname: " + streetname);
        const completeAddress = streetname + ',' + streetnumber + ',' + pincode + ',' + city + ',' + distict + ',' + state + ',' + country;
        console.log(completeAddress);

        const mapLocationKey = `https://maps.googleapis.com/maps/api/geocode/json?address=${completeAddress}&key=AIzaSyDDAbFDKGmZpbRF_mBU0DjUG2kChD4ZGGw`

        try {
            fetch(mapLocationKey)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // Assuming the response is in JSON format
                })
                .then(data => {
                    // Work with the data here
                    let mydata = data;
                    console.log("data : ", data);
                    const coordinates = mydata.results[0].geometry.location;
                    console.log("my:", coordinates);

                    const fun = async () => {
                        const loader = new Loader({
                            apiKey: "AIzaSyDDAbFDKGmZpbRF_mBU0DjUG2kChD4ZGGw",
                            version: "weekly",
                            libraries: ["places"],
                        });

                        // Request needed libraries.
                        const { Map, InfoWindow } = await loader.importLibrary("maps");
                        const { AdvancedMarkerElement } = await loader.importLibrary("marker");
                        const map = new Map(document.getElementById("map"), {
                            center: { lat: coordinates.lat, lng: coordinates.lng },
                            zoom: 15,
                            disableDoubleClickZoom: true,
                            mapId: "4504f8b37365c3d0",
                        });
                        console.log("hello:", map)
                        const infoWindow = new InfoWindow();
                        const draggableMarker = new AdvancedMarkerElement({
                            map,
                            position: { lat: coordinates.lat, lng: coordinates.lng },
                            gmpDraggable: true,
                            title: "This marker is draggable.",
                        });
                        
                        draggableMarker.addListener("dragend", (event) => {
                            const position = draggableMarker.position;
                            // alert("hello")
                            console.log("hllo", position, position.lat)
                            // infoWindow.close();
                            infoWindow.setContent(
                                `
                        <div style="padding:10px">
                        Pin dropped at: ${position.lat} , ${position.lng}
                        </div>`
                            );
                            infoWindow.open(draggableMarker.map, draggableMarker);
                        });



                    }

                    fun();

                })
                .catch(error => {
                    // Handle errors here
                    console.error('Fetch error:', error);
                });
        } catch (error) {
            // Handle exceptions that occur outside of the fetch block
            console.error('An exception occurred outside of fetch:', error);
        }

    }
    return (
        <>
        <div>
            <p className="text-4xl font-semibold text-center mt-6">Register : 1 of 2</p>
        </div>
            <div className="flex p-4 justify-evenly mt-4">

                <section className="border-2 border-solid border-[#C5C5C5] w-[45%] rounded-xl h-screen px-10 py-10 overflow-auto">
                    <div>
                        <h1 className="text-[25px] font-bold">
                            Address Details
                        </h1>
                        <p>
                            Add the address of your head office
                        </p>
                    </div>
                    <form onSubmit={handleMarkLocation} className="my-5 myForm" action="">
                        <div className="flex flex-col space-y-5 justify-center">
                            <input required id="streetname" name="streetname" type="text" placeholder="Street name" className="border-2 data border-solid border-[#C5C5C5] px-3 rounded-lg" />
                            <input required name="streetnumber" type="tel" placeholder="Street number" className="border-2 data border-solid border-[#C5C5C5] px-3 rounded-lg" />

                            <input required name="pincode" type="tel" placeholder="pincode" className="border-2 data border-solid border-[#C5C5C5] px-3 rounded-lg" />
                            <input required name="city" type="text" placeholder="city" className="border-2 data border-solid border-[#C5C5C5] px-3 rounded-lg" />
                            <input required name="distict" type="text" placeholder="distict" className="border-2 data border-solid border-[#C5C5C5] px-3 rounded-lg" />

                            <input required name="state" type="text" placeholder="state" className="border-2 data border-solid border-[#C5C5C5] px-3 rounded-lg" />
                            <input required name="country" type="text" placeholder="country" className="border-2  data border-solid border-[#C5C5C5] px-3 rounded-lg" />
                            <button className="border-2 border-solid border-[#C5C5C5] bg-[#6A8BFF] text-white py-1 rounded-md">Confirm Address</button>
                        </div>

                    </form>
                </section>
                <div className="flex flex-col items-center border-2 border-solid border-[#C5C5C5] w-[45%] rounded-xl h-screen px-10 py-10 overflow-auto">
                    {/* hello */}
                    <div className="font-bold text-[25px] my-5 ">
                        Try to Mark the exact location , if correct leave as is it
                    </div>
                    {formMode?
                    <div className="w-full h-[80vh] bg-[#c5c5c5]">
                        <p className="text-4xl font-semibold text-center mt-16">Please Enter Your Address first</p>
                        <p className="text-4xl font-semibold text-center mt-2">To Select exact Location</p>
                    </div>
                    :<div id="map" className="w-full h-[80vh]"></div>}
                    
                    <div className="w-full mx-auto my-5 flex justify-center space-x-[200px]">
                        <button onClick={() => setFormMode(true)} className="border-2 border-solid border-[#C5C5C5] px-10 rounded-lg text-white bg-[#6c6cbc]">Edit</button>
                        <button className="border-2 border-solid border-[#C5C5C5] px-10 rounded-lg text-white bg-[#ab4545]" >Confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminAddress;