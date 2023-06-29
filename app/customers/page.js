import React from 'react'
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs'
import {data} from '../../data/data'
import SideNavbar from '../../components/SideNavbar'
import Image from 'next/image'
import img2 from '../../assets/wave.png'

const customers = () => {
  return (
  

  <SideNavbar>

    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <h2 className='text-2xl sm:text-3xl font-bold '>Custo<span className='text-indigo-600'>mers</span></h2>
        <div className='flex flex-row items-center gap-2 cursor-pointer'>
          <Image 
          src={img2}
          width={35}
          height={35}
          alt="Picture of the author"
          className='rounded-full max-sm:hidden cursor-pointer'
          />
        <h2 className='font-bold text-xs sm:text-sm hidden sm:inline-block'>Hi,<span className='text-indigo-600'> Himanshu </span> </h2>
      </div>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white shadow-xl overflow-y-auto'>
          <div className='my-2 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'> 
              <span className='font-bold'>Name</span>
              <span className='sm:text-left text-right font-bold'>Email</span>
              <span className='hidden md:grid font-bold'>Last Order</span>
              <span className='hidden sm:grid font-bold'>Method</span>
          </div>
          <ul>
            {data.map((order,id) =>(
              
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  items-center justify-between cursor-pointer'>
                <div className='flex items-center'>
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <BsPersonFill className='text-indigo-600 text-xl'/>
                  </div>
                  <p className='pl-4 sm:text-base text-xs '>{order.name.first + ' ' + order.name.last}</p>
                </div>
                <p className='sm:text-left sm:text-base  text-[.60rem] text-right text-blue-800'>{order.name.first}@gmail.com</p>
                <p className='hidden md:flex' > {order.date} </p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical/>
                </div>
              </li>

))}
          </ul>
        </div>
      </div>
    </div>
 </SideNavbar>  
  )
}

export default customers