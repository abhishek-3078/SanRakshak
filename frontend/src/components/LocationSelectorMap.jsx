import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {

  const [location,setLocation] = useState({})

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
          zoom: 14,
          mapId: "4504f8b37365c3d0",
          disableDoubleClickZoom : true
        });
        
        const infoWindow = new InfoWindow();
        const draggableMarker = new AdvancedMarkerElement({
          map,
          position: { lat: 29.9476, lng: 76.8227 },
          gmpDraggable: true,
          title: "This marker is draggable.",
        });
        draggableMarker.addListener("dragend", (event) => {
          const position = draggableMarker.position;
          // alert("hello")
          console.log("hllo",position,position.lat)
          setLocation(position);
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
      fun();
    
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

  return (
    <div className="w-[100%]">
      <div id="map" className="w-[400px] border-2 border-red-400 h-[275px]"></div>
      <div>
        <p>Latitude :  {location.lat}</p>
        <p>Longitutde : {location.lng}</p>
      </div>
    </div>
  );
};

export default Map;
