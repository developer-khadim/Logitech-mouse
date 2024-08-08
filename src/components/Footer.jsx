import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='text-white bg-black/30 h-[20vh]' >
        <div className='py-5 w-[10vw] h-auto mx-auto text-center' >
            <h2 className='font-bold hover:text-active duration-300 py-1 hover:cursor-pointer'>Home</h2>
            <h2 className='font-bold hover:text-active duration-300 py-1 hover:cursor-pointer'>About</h2>
            <h2 className='font-bold hover:text-active duration-300 py-1 hover:cursor-pointer'>Products</h2>
            <h2 className='font-bold hover:text-active duration-300 py-1 hover:cursor-pointer'>Specification</h2>
        </div>
        <div className='flex  items-center justify-center gap-5 mx-auto'>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-white hover:text-active' size={25} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-white hover:text-active' size={25} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-white hover:text-active' size={25} />
            </a>
        </div>
    </footer>
  )
}
export default Footer