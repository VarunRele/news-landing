import React from 'react'
import Hero from './components/Hero'
import Items from './components/Items'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <div className='container max-w-sm mx-auto md:w-[65%] md:max-w-none m-3 mt-6 px-5'>
        <Navbar />
        <Hero />
        <Items />
      </div>
    </>
  )
}

export default App