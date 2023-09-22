import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function SearchSelter(){
    useEffect(() => {
   
        try {
          // AIzaSyDDAbFDKGmZpbRF_mBU0DjUG2kChD4ZGGw
          const fun = async () => {
            const loader = new Loader({
              apiKey: "AIzaSyDDAbFDKGmZpbRF_mBU0DjUG2kChD4ZGGw",
              version: "weekly",
              libraries: ["places"],
            });
    
            // Request needed libraries.
            const { Map,InfoWindow } = await loader.importLibrary("maps");
            const { AdvancedMarkerElement } = await loader.importLibrary("marker");
            const map = new Map(document.getElementById("map"), {
              center: { lat: 29.9476, lng: 76.8227 },
              zoom: 4,
              disableDoubleClickZoom:true,
              mapId: "4504f8b37365c3d0",
            });
            const markerPositions = [
                { lat: 28.6129, lng: 77.2295 },
                { lat: 28.7, lng: 77.1 }, // Add more positions as needed
                { lat: 19.07, lng: 72.877 }, // Add more positions as needed
                { lat: 29.22, lng: 79.277 }, // Add more positions as needed
                { lat: 29.9564963, lng: 76.8173138 }, // Add more positions as needed
                { lat: 29.9564963, lng: 76.8173138 }, // Add more positions as needed
                { lat: 29.960503, lng: 76.827335}, // Add more positions as needed
                // Add more positions as needed
              ];
            // const marker = new AdvancedMarkerElement({
            //   map,
            // 29.9564963
            //   position: { lat: 37.4239163, lng: -122.0947209 },
            // });
            const infoWindow = new InfoWindow();
            const draggableMarker = new AdvancedMarkerElement({
              map,
              position: { lat: 28.6129, lng: 77.1 },
              gmpDraggable: true,
              title: "This marker is draggable.",
            });
            draggableMarker.addListener("dragend", (event) => {
              const position = draggableMarker.position;
              // alert("hello")
              console.log("hllo",position,position.lat)
              // infoWindow.close();
              infoWindow.setContent(
                `
                <div style="padding:10px">
                Pin dropped at: ${position.lat} , ${position.lng}
                </div>`
              );
              infoWindow.open(draggableMarker.map, draggableMarker);
            });
    
    
    
    
            // markerPositions.forEach((position) => {
            //     const marker = new AdvancedMarkerElement({
            //       position: position,
            //       map: map,
                 
            //     })});
            //     var geocoder = new loader.Geocoder();
            
    
        }
          
        //   initMap();
        // }
        //   fun();
        
          //   loader
          //   .importLibrary('maps')
          //   .then(({Map}) => {
          //     new Map(document.getElementById("map"), mapOptions);
          //   })
          //   .catch((e) => {
          //     // do something
          //     console.log("error:",e)
          //   });
        } catch (e) {
          console.log("Error:", e);
        }
      }, []);

    return(
        <div className="w-screen h-screen flex flex-col"> 
            <div className="flex w-full h-[10%] border-2 border-solid border-red-800 bg-[#F56868] justify-center items-center space-x-2 ">
                <div>     
                    <label className="mx-2 font-[500]" htmlFor="shelterType">Location</label>
                    <select className="border-2 border-solid border-[#C5C5C5] w-32 rounded-lg" name="shelterType" id="shelterType">
                        <option value="volvo">Near Your Location</option>
                        <option value="saab" selected>All Selters</option>
                    </select>
                </div>
                <div>     
                    <label className="mx-2 font-[500]" htmlFor="shelterType">Resources</label>
                    <select className="border-2 border-solid border-[#C5C5C5] w-32 rounded-lg" name="shelterType" id="shelterType">
                        <option value="volvo">Food Shelter</option>
                        <option value="saab">Medicine</option>
                        <option value="opel">Stay</option>
                    </select>
                </div>
                <div>     
                    <label className="mx-2 font-[500] " htmlFor="shelterType">Capacity</label>
                    <select className="border-2 border-solid border-[#C5C5C5] w-32 rounded-lg" name="shelterType" id="shelterType">
                        <option value="volvo">Less than 100</option>
                        <option value="volvo" selected>More than 100</option>
                        <option value="saab">More than 1000</option>
                        <option value="opel">More than 1000</option>
                        <option value="audi">More than 10000</option>
                    </select>
                </div>
                <div>     
                    <label className="mx-2 font-[500] " htmlFor="shelterType">Type</label>
                    <select className="border-2 border-solid border-[#C5C5C5] w-32 rounded-lg" name="shelterType" id="shelterType">
                        <option value="volvo">Food Shelter</option>
                        <option value="saab">Medicine</option>
                        <option value="opel">Home</option>
                        <option value="audi">Rescue</option>
                    </select>
                </div>
                <button className=" mx-7 border-2 border-solid border-[#C5C5C5] bg-[#6A8BFF] rounded-lg px-3 py-[1px] text-white hover:bg-[#343f65]">
                    Apply Filter
                </button>
            </div>
            <div className="w-full h-[90%] border-2 border-solid border-red-800">
                {/* hello */}
                <div id="map" className="w-screen h-[700px]"></div>
            </div>
        </div>
    )
}
export default SearchSelter;