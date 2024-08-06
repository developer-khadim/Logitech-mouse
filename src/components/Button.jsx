import React from 'react'

const Button = ({ onClick , text }) => {
  return (
    <button onClick={onClick} className='border-2 border-active px-12 py-4 rounded-full font-bold text-white hover:text-active/80 duration-300 ' >
        {text}
    </button>
  )
}

export default Button