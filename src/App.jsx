import './App.css'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/Navbar.jsx';
import Loding from './components/Loding.jsx';
import Footer from './components/Footer.jsx';


function App() {
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add('dark')
      setLoding(false)
    }, 2000)
  }, []);

  if (loding) {
    return (
      <Loding />
    )
  }

  return <>
    <ScrollToTop />
    <div className='h-15'></div>
    <Navbar />
    <main className='main'>
      <Outlet />
    </main>
    <Footer />
  </>
}

export default App;
