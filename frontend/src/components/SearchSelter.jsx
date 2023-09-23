import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { API } from "../constant";

function SearchSelter(){

    function handleFilter(){
        const shelterType = document.getElementById('shelterType').value;
        console.log("shelterType : ",shelterType);

    //     try {
    //         fetch(`${API}/disaster/shelter`)
    //           .then(response => {
    //             if (!response.ok) {
    //                 const data = response.json().then(d=>{
    //                     console.log(d)
    //                 });
    //               throw new Error('Network response was not ok');
    //             }
    //             return response.json(); // Assuming the response is in JSON format
    //           })
    //           .then(data => {
    //             // Work with the data here
    //             console.log("demand all data :",data);
                
    //             let markerPositions = data.data.map((ele)=>{
    //                 console.log("typs : ",ele.shelterType);
    //                 if(ele.shelterType == shelterType){
    //                     return ele.coord;
    //                 }
    //             });
    //             const newData = data.data.map((ele)=>{
    //                 if(ele.shelterType == shelterType)
    //                     return ele;
    //             })
    
    //             console.log(markerPositions);
    //             try {
    //                 // AIzaSyDDAbFDKGmZpbRF_mBU0DjUG2kChD4ZGGw
    //                 const fun = async () => {
    //                   const loader = new Loader({
    //                     apiKey: "AIzaSyDDAbFDKGmZpbRF_mBU0DjUG2kChD4ZGGw",
    //                     version: "weekly",
    //                     libraries: ["places"],
    //                   });
              
    //                   // Request needed libraries.
    //                   const { Map,InfoWindow } = await loader.importLibrary("maps");
    //                   const { AdvancedMarkerElement } = await loader.importLibrary("marker");
    //                   const map = new Map(document.getElementById("map"), {
    //                     center: { lat: 29.9476, lng: 76.8227 },
    //                     zoom: 10,
    //                     disableDoubleClickZoom:true,
    //                     mapId: "4504f8b37365c3d0",
    //                   });            
    
    //                     newData.data.forEach((ele)=>{
    //                         const draggableMarker = new AdvancedMarkerElement({
    //                         map,
    //                         position: ele.coord,
    //                         gmpDraggable: true,
    //                         title: "This marker is draggable.",
    //                     });
    //                     const infoWindow = new InfoWindow();
    //                     infoWindow.setContent(
    //                         `
    //                         <div style="margin-right:10px">Type : ${ele.shelterType}</div>
    //                         <div>Details : ${ele.description}</div>`
    //                       );
    //                       infoWindow.open(map, draggableMarker);
    //                     })
    
    //                     markerPositions.forEach((position) => {
    //                       const marker = new AdvancedMarkerElement({
    //                         position: position,
    //                         map: map, 
    //                     })});
    //                     //   var geocoder = new loader.Geocoder();
                      
              
    //               }
                    
    //               //   initMap();
    //                 fun();
              
    //               } catch (e) {
    //                 console.log("Error:", e);
    //               }
    
    
    //           })
    //           .catch(error => {
    //             // Handle errors here
    //             console.error('Fetch error:', error);
    //           });
    //     } catch (error) {
    //         // Handle exceptions that occur outside of the fetch block
    //         console.error('An exception occurred outside of fetch:', error);
    //     }   
    }

    try {
        fetch(`${API}/disaster/shelter`)
          .then(response => {
            if (!response.ok) {
                const data = response.json().then(d=>{
                    console.log(d)
                });
              throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the response is in JSON format
          })
          .then(data => {
            // Work with the data here
            console.log("data :",data);
            
            let markerPositions = data.data.map((ele)=>{
                return ele.coord;
            });

            console.log(markerPositions);
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
                    zoom: 10,
                    disableDoubleClickZoom:true,
                    mapId: "4504f8b37365c3d0",
                  });            

                    data.data.forEach((ele)=>{
                        const draggableMarker = new AdvancedMarkerElement({
                        map,
                        position: ele.coord,
                        gmpDraggable: true,
                        title: "This marker is draggable.",
                    });
                    const infoWindow = new InfoWindow();
                    infoWindow.setContent(
                        `
                        <div style="margin-right:10px">Type : ${ele.shelterType}</div>
                        <div>Details : ${ele.description}</div>`
                      );
                      infoWindow.open(map, draggableMarker);
                    })

                    markerPositions.forEach((position) => {
                      const marker = new AdvancedMarkerElement({
                        position: position,
                        map: map, 
                    })});
                    //   var geocoder = new loader.Geocoder();
                  
          
              }
                
              //   initMap();
                // fun();
          
              } catch (e) {
                console.log("Error:", e);
              }


          })
          .catch(error => {
            // Handle errors here
            console.error('Fetch error:', error);
          });
    } catch (error) {
        // Handle exceptions that occur outside of the fetch block
        console.error('An exception occurred outside of fetch:', error);
    }
      

      



    return(
        <div className="w-[60%] h-full flex flex-col"> 
            <div className="flex w-full h-[10%] border-2 border-solid border-red-800 bg-[#F56868] justify-center items-center space-x-2 ">
                <div>     
                    <label className="mx-2 font-[500]" htmlFor="Location">Location</label>
                    <select className="border-2 border-solid border-[#C5C5C5] w-32 rounded-lg" name="Location" id="Location">
                        <option value="Near Your Location">Near Your Location</option>
                        <option value="All Selters">All Selters</option>
                    </select>
                </div>
                <div>     
                    <label className="mx-2 font-[500] " htmlFor="Capacity">Capacity</label>
                    <select className="border-2 border-solid border-[#C5C5C5] w-32 rounded-lg" name="Capacity" id="Capacity">
                        <option value="Less than 100">Less than 100</option>
                        <option value="More than 100">More than 100</option>
                        <option value="More than 1000">More than 1000</option>
                        <option value="More than 1000">More than 1000</option>
                        <option value="More than 10000">More than 10000</option>
                    </select>
                </div>
                <div>     
                    <label className="mx-2 font-[500] " htmlFor="shelterType">Type</label>
                    <select className="border-2 border-solid border-[#C5C5C5] w-32 rounded-lg" name="shelterType" id="shelterType">
                        <option value="Food Shelter">Food Shelter</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Home">Home</option>
                        <option value="Rescue">Rescue</option>
                    </select>
                </div>
                <button className=" mx-7 border-2 border-solid border-[#C5C5C5] bg-[#6A8BFF] rounded-lg px-3 py-[1px] text-white hover:bg-[#343f65]">
                    Apply Filter
                </button>
            </div>
            <div className="w-full h-full border-2 border-solid border-red-800">
                {/* hello */}
                <div id="map" className="w-full h-full"></div>
            </div>
        </div>
    )
}
export default SearchSelter;