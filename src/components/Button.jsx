import React from 'react'

const Button = ({ onClick , text }) => {
  return (
    <button onClick={onClick} className='border-2 border-active px-12 py-4 rounded-full font-semibold text-white hover:text-active/15 duration-300 ' >
        {text}
    </button>
  )
}

export default Button