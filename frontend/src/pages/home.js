import React from 'react'
import Cards from '../components/Cards.js'
import Hero from '../components/Hero.js'
import Data from './data.json'

console.log(Data);


const home = () => {
  return (
    <div>
      <Hero />
      <Cards />
    </div>
  )
}

export default home;
