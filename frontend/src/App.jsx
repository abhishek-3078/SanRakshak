import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import ImportantInfoBox from './components/ImportantInfoBox';
import UserMap from './components/UserMap'
import MissingPeopleDash from './components/MissingPeopleDash';
import SignUp from './components/SignUp';
import OrgRegister from './components/OrgRegister';
import OrgLogin from './components/OrgLogin';
import AlertComponent from './components/AlertComponent';

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
      <SignUp/>
      {/* <OrgRegister/> */}
      {/* <OrgLogin/> */}
      {/* <AlertComponent/> */}
    </>
  )
}

export default App;
