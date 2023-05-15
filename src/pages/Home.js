import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Main from '../components/Main'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {

  return (
    <>
      <Navigation />
      <Hero />
      <Main />
      <Footer />
    </>
  )
}

export default Home