import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import ImportantInfoBox from './components/ImportantInfoBox';
import RescueServicesPage from './pages/RescueServicesPage';
import ShelterDetailBox, { MainDisplayFunction } from './components/ShelterDetailBox';
import ShelterDetailPopUpBox from './components/ShelterDetailPopUpBox';






function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <RescueServicesPage /> */}

      {/* <ShelterDetailBox /> */}


      {/* <ShelterDetailPopUpBox id="12213059" name="Jamnagar Medical Shelter 2148" coordinator={"Archit Chetan Chhajed"} area="Near Bedi Road, Jamnagar, Gujarat" dateOfCreation={"19/03/2004"} type={"Medical Aid Shelter"} resources={[
            {
                resource_id: 1,
                resource_name: "insulin",
                resource_qty: "300 injections"
            },
            {
                resource_id: 1,
                resource_name: "insulin",
                resource_qty: "300 injections"
            }
        ]}/>*/}


        <MainDisplayFunction></MainDisplayFunction>



      

    </>
  )
}

export default App;
