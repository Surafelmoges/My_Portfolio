import React from 'react'
import Navbar from './Componets/NavBar/Navbar'
import HeroSec from './Componets/Hero/HeroSec'
import About from './Componets/About/About'
import Service from './Componets/Services/Service'
export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <About />
      <Service />
    </div>
  )
}
