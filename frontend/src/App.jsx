import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import Login from './Login';
import ImportantInfoBox from './components/ImportantInfoBox';
import RescueServicesPage from './pages/RescueServicesPage';
import Home from './pages/Home';
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";
import ShelterForm from './components/ShelterForm'
import AddLocationOnMap from './components/AddLocationOnMap';
import AddShelterPage from './pages/AddShelterPage';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
    <Router>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<RescueServicesPage/>}/>
      <Route path="/addShelter" element={<AddShelterPage/>}/>
    </Routes>
    </Router>
    </div>
    // <SignUp/>
  )
}

export default App;
