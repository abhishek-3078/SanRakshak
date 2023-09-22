import { useState } from 'react'
import './App.css'
import Login from './Login';
import SignUp from './components/SignUp';
import UserAlert from './pages/UserAlert';
import Home from './pages/Home';
import RescueServicesPage from './pages/RescueServicesPage';
import AddShelterPage from './pages/AddShelterPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

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
