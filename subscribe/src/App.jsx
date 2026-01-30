import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bellOn from './assets/bellOn.jpg'
import bellOff from './assets/bellOff.jpg'

function App() {
  const initialMsg = 'Subscrbe to our channel!'
  const [msg,setMsg] = useState(initialMsg);
  const [bell,setBell] = useState(false);
  const [bellIcon,setBellIcon] = useState(bellOff);
  const msgChange = () =>{
    setMsg("Hit the bell icon!");
    setBell(true);
  }
  const bellChng= () =>{
    setMsg("Thankyou!")
    setBellIcon(bellOn);
  }

  return (
    <>
      <h1>Welcome!</h1>
      <p>{msg}</p>
      <button onClick={msgChange} >Subscribe!</button>
      {bell ? (
        <img src={bellIcon} onClick={bellChng} alt="" />
      ):(
        <></>
      )}
    </>
  )
}

export default App
