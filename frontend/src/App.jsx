import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import ImportantInfoBox from './components/ImportantInfoBox';
import UserMap from './components/UserMap'
import MissingPeopleDash from './components/MissingPeopleDash';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
    <Router>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/Alerts" element={<UserAlert/>}></Route>
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
