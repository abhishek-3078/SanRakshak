import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
function Map(){
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
      <>
      <div className="w-full h-[90%] border-2 border-solid border-red-800">
          {/* hello */}
          <div id="map" className="w-screen h-[700px]"></div>
      </div>
      </>
    )
}

