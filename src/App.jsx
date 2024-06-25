import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Featured2 from './components/Featured2'
import Featured3 from './components/Featured3'
import Cards from './components/Cards'
import Opneing from './components/Opneing'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'



const App = () => {
  const locomotiveScroll = new LocomotiveScroll();  
  return (
    <div className="w-full h-screen text-white ">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Featured2/>
      <Featured3/>
      <Cards/>
      <Opneing/>
      <Footer/>
    </div>
  )
}



export default App



