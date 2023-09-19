import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-white text-blue-400 '>
          <section>
              <Navbar></Navbar>
          </section>
          <section className='flex'>
              <NavSide></NavSide>
              <div>
                  
              </div>
          </section>
      </div>
    </>
  )
}

export default App;
