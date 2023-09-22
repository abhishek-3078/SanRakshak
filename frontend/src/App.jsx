import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import ImportantInfoBox from './components/ImportantInfoBox';
import RescueServicesPage from './pages/RescueServicesPage';
import Home from './pages/Home';
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";
import ShelterForm from './components/ShelterForm'
import AddLocationOnMap from './components/AddLocationOnMap';
import AddShelterPage from './pages/AddShelterPage';
import BurgerContext from './contexts/BurgerContext';
import Login from './Login'
import SignUp from './components/SignUp'
import UserAlert from './pages/UserAlert'

import UserMap from './components/UserMap'
import MissingPeopleDash from './components/MissingPeopleDash';
import SignUp from './components/SignUp'
import Home from './pages/Home'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)
  return (

    <div>
    <Router>
    <Routes>
      
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/alerts" element={<UserAlert/>}></Route>
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
