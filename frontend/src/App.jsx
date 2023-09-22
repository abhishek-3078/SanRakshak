import { useState } from 'react'
import './App.css'
import RescueServicesPage from './pages/RescueServicesPage';
import Home from './pages/Home';
import AddShelterPage from './pages/AddShelterPage';
import Login from './Login'
import SignUp from './components/SignUp'
import UserAlert from './pages/UserAlert'
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import AdminAddress from './components/AdminAddress';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
    {/* <Router>
    <Routes> 
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/alerts" element={<UserAlert/>}></Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<RescueServicesPage/>}/>
      <Route path="/addShelter" element={<AddShelterPage/>}/>

    </Routes>
    </Router> */}
    <AdminAddress/>
    </div>
    // <SignUp/>
  )
}

export default App;
