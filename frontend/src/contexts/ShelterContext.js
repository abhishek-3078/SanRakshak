import { createContext } from "react";

const ShelterContext = createContext({
    type: "",
    coordinator: "",
    capacity: "",
    description: "",
    coords: {
        lat: "",
        lng: ""
    }
});
export default ShelterContext;