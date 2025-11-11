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
    const imagesToPreload = [
      './src/assets/background_light.jpg',
      './src/assets/background_dark.jpg'
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const timer = setTimeout(() => {
      document.body.classList.add('dark')
      setLoding(false)
    }, 2000)

    return () => clearTimeout(timer);
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
