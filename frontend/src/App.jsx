import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import ImportantInfoBox from './components/ImportantInfoBox';
import RescueServicesPage from './pages/RescueServicesPage';
import NewNavSide from './components/NewNavSide';
import ShelterForm from './components/ShelterForm';
import HomeNavbar from './components/HomeNavbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    // <RescueServicesPage></RescueServicesPage>
    <>
      {/* <Navbar color="#6A8BFF"></Navbar> */}
     {/* <NewNavSide></NewNavSide> */}
      {/* <ShelterForm></ShelterForm> */}
      <HomeNavbar color="#6A8BFF"></HomeNavbar>
    </>
  )
}

export default App;
