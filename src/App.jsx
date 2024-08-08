import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './pages/About';
import Mouseimg from './components/Mouseimg';
import Product from './components/Product';
import Specification from './components/Specification';
import Footer from './components/Footer';
const Home = () => {
  return (
    <>
      <section className='w-full h-[100vh] back-img'>
        <Header/>
        <Hero/>
      </section>
      <section className='back-img-about'>
        <About/>
      </section>
      <section>
       <Mouseimg/>
      </section>
      <section className=' back-img-pro' >
        <Product/>
      </section>
      <section className='bg-black/90 w-full h-auto' >
      <Specification/>
      <Footer/>
      </section>
    </>
  )
}

export default Home
