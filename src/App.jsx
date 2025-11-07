import './App.css'
import { NavLink, Outlet} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'

import { useState } from "react"


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
      setMode('dark')
    } else {
      document.body.classList.add('light')
      document.body.classList.remove('dark')
      setMode('light')
    }
  }
  
  return <>
    <p className='bg-red-300 text-[var(--texta)] text-8xl'>a</p>
    <button onClick={toggleMode} className='p-1 border-2 rounded-2xl cursor-pointer px-3 mx-2 my-10'>click</button>
    Hello
    <nav>
      <NavLink to="/A"> To: A </NavLink>
      <NavLink to="/B"> To: B </NavLink>
    </nav>
    <ScrollToTop/>
    <Outlet />
  </>
}

export default App;
