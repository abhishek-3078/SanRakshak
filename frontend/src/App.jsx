import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import ImportantInfoBox from './components/ImportantInfoBox';
import UserMap from './components/UserMap'
import MissingPeopleDash from './components/MissingPeopleDash';
import RescueAgencyDashBoard from './pages/RescueAgencyDashBoard';
import { MainDisplayFunction } from './components/ShelterDetailBox';
import CommunityForumPage from './pages/CommunityForumPage'
import NewComponent from './components/newComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className=''>
          <section>
              <Navbar></Navbar>
          </section>
          <section className='flex'>
              <NavSide></NavSide>
              <div className='flex flex-col justify-center items-center w-full mt-3'>
                  <ImportantInfoBox></ImportantInfoBox>
                  <div className="flex w-full justify-center">
                    <UserMap />
                    <MissingPeopleDash />
                  </div> 
              </div>
          </section>
      </div> */}


      {/* <RescueAgencyDashBoard></RescueAgencyDashBoard> */}
      {/* <MainDisplayFunction></MainDisplayFunction> */}
      <CommunityForumPage/>
      {/* <RescueServices></RescueServices> */}
      {/* <Home></Home> */}


      {/* <NewComponent title="Hello This Is Title"/> */}
    </>
  )
}

export default App;
