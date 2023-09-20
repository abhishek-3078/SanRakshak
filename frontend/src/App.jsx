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

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      
    <Router>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<RescueServicesPage/>}/>
    </Routes>
    </Router>
    </div>
    
    // <RescueServicesPage></RescueServicesPage>
  )
}

export default App;
