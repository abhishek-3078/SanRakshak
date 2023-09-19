import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import ImportantInfoBox from './components/ImportantInfoBox';

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
              <div className='flex justify-center w-full mt-3'>
                  <ImportantInfoBox></ImportantInfoBox>
              </div>
          </section>
      </div>
    </>
  )
}

export default App;
