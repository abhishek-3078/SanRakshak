import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  useEffect(() => {
   
    try {
      // AIzaSyDDAbFDKGmZpbRF_mBU0DjUG2kChD4ZGGw
      const fun = async () => {
        const loader = new Loader({
          apiKey: "AIzaSyDDAbFDKGmZpbRF_mBU0DjUG2kChD4ZGGw",
          version: "weekly",
          libraries: ["places"],
        });
        const mapOptions = {
          center: {
            lat: 28.7,
            lng: 77.1,
          },
          zoom: 4,
        };



        // Request needed libraries.
        const { Map } = await loader.importLibrary("maps");
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");
        const map = new Map(document.getElementById("map"), {
          center: { lat: 29.9476, lng: 76.8227 },
          zoom: 14,
          mapId: "4504f8b37365c3d0",
        });
        const markerPositions = [
            { lat: 28.6129, lng: 77.2295 },
            { lat: 28.7, lng: 77.1 }, // Add more positions as needed
            { lat: 19.07, lng: 72.877 }, // Add more positions as needed
            { lat: 29.22, lng: 79.277 } // Add more positions as needed
            // Add more positions as needed
          ];
        // const marker = new AdvancedMarkerElement({
        //   map,
        //   position: { lat: 37.4239163, lng: -122.0947209 },
        // });
        markerPositions.forEach((position) => {
            const marker = new AdvancedMarkerElement({
              position: position,
              map: map,
             
            })});
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
    <div>
      hello
      <div id="map" className="w-screen h-[700px]"></div>
    </div>
  );
};

export default Map;
