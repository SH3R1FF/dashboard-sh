import React from 'react'
import Image from 'next/image'
import img1 from '../assets/wave.png'

const Header = () => {
  return (
    <div className='flex justify-between px-4 pt-4'>
      <h2 className='text-2xl sm:text-3xl font-bold '>Dash<span className='text-indigo-600'>board</span></h2>
      <div className='flex flex-row items-center gap-2 cursor-pointer'>
          <Image 
          src={img1}
          width={35}
          height={35}
          alt="Picture of the author"
          className='rounded-full max-sm:hidden'
          />
        <h2 className='font-bold text-xs sm:text-sm hidden sm:inline-block'>Hi,<span className='text-indigo-600'> Himanshu </span> </h2>
      </div>
    </div>
  )
}

export default Header