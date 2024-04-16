import React from 'react'
import Herobanner from '../components/landingpage/Herobanner'
import Ourservices from '../components/landingpage/Ourservices'
import Protectworker from '../components/landingpage/Protectworker'
import Ourmembers from '../components/landingpage/Ourmembers'
import Industrynews from '../components/landingpage/Industrynews'
import Protectionslide from '../components/landingpage/Protectionslide'
import Form from '../components/landingpage/Form'
import Brandlogos from '../components/landingpage/Brandlogos'
import Protectingslider from '../components/landingpage/Protectingslider'
import ClientFeedBackCarousel from '../components/ClientFeedBackCarousel'


function Home() {

  return (
    <>
        <Herobanner/>
        
        <Ourservices/>
        <Protectworker/>
        <Ourmembers/>
        <Brandlogos/>
        <Industrynews/>
        <ClientFeedBackCarousel/>
        <Protectionslide/>
    
        <Protectingslider/>
        <Form/>
    </>
  )
}

export default Home
