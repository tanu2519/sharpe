import React from 'react'
import BarHome from './Graphs/BarChart';
import ContinuousLineGraph from './Graphs/LineGraph';
import DarkVariantExample from './CarouselObj'
import Footer from './Footer'
import '../App.css'

const Home = () => {
  return (
    <>
    <DarkVariantExample />
    <div className='homeScreen'>
      <BarHome/>
      <ContinuousLineGraph/> 
    </div>
    <Footer/>
    </>
  )
}

export default Home