import { useState } from 'react'
import './App.css'
import RescueServicesPage from './pages/RescueServicesPage';
import AddShelterPage from './pages/AddShelterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrgRegister from './components/OrgRegister';
import OrgLogin from './components/OrgLogin';

import BurgerContext from './contexts/BurgerContext';
import Login from './Login'
import UserAlert from './pages/UserAlert'

import UserMap from './components/UserMap'
import MissingPeopleDash from './components/MissingPeopleDash';
import SignUp from './components/SignUp'
import Home from './pages/Home'
import AdminAddress from './components/AdminAddress';
import AdminCreateAlert from './pages/AdminCreateAlert';
import RescueAgencyDashBoard from './pages/RescueAgencyDashBoard';
import CommunityForumPage from './pages/CommunityForumPage'
import Footer from './components/Footer';
import CommunityList from './components/communityList';
import HomePage from './pages/HomePage';
// import Awareness from './pages/Awareness';
import UserToDo from './pages/UserToDo';
import AwarenessCards from './components/AwarenessCards';
import DisasterFormPage from './components/DisasterForm';


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/userlogin" element={<Login />}></Route>
          <Route path="/userdashboard" element={<RescueServicesPage />} />
          <Route path="/usersignup" element={<SignUp />}></Route>
          <Route path="/alerts" element={<UserAlert />}></Route>
          <Route path="/publicforum/:id" element={<CommunityForumPage />}></Route>
          <Route path="/OrgRegister" element={<OrgRegister />} />
          <Route path="/OrgLogin" element={<OrgLogin />} />
          <Route path="/createAlert" element={<AdminCreateAlert />} />
          <Route path="/addShelter" element={<AddShelterPage />} />
          <Route path="/awareness" element={<UserToDo />} />
          
          <Route path="/" element={<HomePage />} />
          <Route path="/publicforumlist" element={<CommunityList />} />
          
          

          <Route path="/AdminAddress" element={<AdminAddress />} />
          
          <Route path="/adminDashboard" element={<RescueAgencyDashBoard />} />

        </Routes>



        {/* <CommunityForumPage/> */}
      </Router>
      {/* <AdminAddress/> */}
    </div>
  )
}

export default App;
