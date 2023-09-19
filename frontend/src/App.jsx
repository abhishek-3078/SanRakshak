import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import MissingPeopleDash from './components/MissingPeopleDash';
import UserMap from './components/UserMap';
import ImportantInfo from './components/ImportantInfo';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
          <section>
              <Navbar></Navbar>
          </section>
          <section className='flex'>
              <NavSide></NavSide>
              <div className='flex flex-col'>
                <ImportantInfo></ImportantInfo>
                  {/* <MissingPeopleDash /> */}
                  {/* <UserMap /> */}
              </div>
          </section>
      </div>
    </>
  )
}

export default App;
