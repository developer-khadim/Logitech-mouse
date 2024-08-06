import React from 'react'
import Mouseimages from '../assets/image.png';


const Mouseimg = () => {
  return ( 
    <div className='w-full sm:w-auto md:w-full lg:w-full xl:max-w-[2545px] h-auto  bg-red-400 ' >
    <img src={Mouseimages}  className='w-full' />
    </div>
  )
}

export default Mouseimg