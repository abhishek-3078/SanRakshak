import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import Login from './Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-white text-blue-400 '>
         <Login/>
      </div>
    </>
  )
}

export default App;
