import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Quote from '../Components/Quote/Quote'
import Testimonies from '../Components/Testimonies/Testimonies'
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <div>
        <Navbar home />
        <Quote/>
        <Testimonies home/>
        <Footer/>
    </div>
  )
}

export default Home