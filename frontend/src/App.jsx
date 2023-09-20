import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavSide from './components/NavSide';
import Navbar from './components/Navbar';
import Login from './Login';
import ImportantInfoBox from './components/ImportantInfoBox';
import RescueServicesPage from './pages/RescueServicesPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <RescueServicesPage></RescueServicesPage>
  )
}

export default App;
