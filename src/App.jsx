import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './pages/About';

const Home = () => {
  return (
    <>
      <section className='w-full h-[100vh] back-img'>
        <Header/>
        <Hero/>
      </section>
      <section className='back-img'>
        <About/>
      </section>
    </>
  )
}

export default Home
