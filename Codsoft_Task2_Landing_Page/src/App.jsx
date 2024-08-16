import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Mission from './Components/Mission'
import Expertise from './Components/Expertise'
import Review from './Components/Review'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <Hero></Hero>
      <Navbar></Navbar>
      <Dishes></Dishes>
      <About></About>
      <Mission></Mission>
      <Expertise></Expertise>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}

export default App