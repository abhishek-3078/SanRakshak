import { useState } from 'react'
import './App.css'
import RescueServicesPage from './pages/RescueServicesPage';
import AddShelterPage from './pages/AddShelterPage';
import BurgerContext from './contexts/BurgerContext';
import Login from './Login'
import UserAlert from './pages/UserAlert'

import UserMap from './components/UserMap'
import MissingPeopleDash from './components/MissingPeopleDash';
import SignUp from './components/SignUp'
import Home from './pages/Home'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import AdminAddress from './components/AdminAddress';
import SearchSelter from './components/SearchSelter';

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
    {/* <SearchSelter></SearchSelter> */}
    </div>
  )
}

export default App;
