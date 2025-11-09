import './App.css'
import { NavLink, Outlet} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'

import Navbar from './components/Navbar.jsx';


function App() {
  
  
  return <>
    <div className='h-15'></div>
    
    Hello
    <ScrollToTop />
    <Navbar />
    <Outlet />
  </>
}

export default App;
