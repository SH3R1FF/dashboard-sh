import React from 'react'
import SideNavbar from '../../components/SideNavbar'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {data} from '../../data/data'
import { FaShoppingBag } from 'react-icons/fa'
import Image from 'next/image'
// import img3 from '../../assets/wave.png'

const orders = () => {
  return (

  <SideNavbar>

    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <h2 className='text-2xl sm:text-3xl font-bold '>Orders</h2>
        {/* <div className='flex flex-row items-center gap-2'>
        <Image 
        src={img3}
        width={35}
        height={35}
        alt="Picture of the author"
        className='rounded-full'
        />
        <h2 className='font-bold text-xs sm:text-sm hidden sm:inline-block'>Hi,<span className='text-indigo-600'> Himanshu </span></h2>
      </div> */}
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white shadow-xl overflow-y-auto'> 
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center'>
            <span className='font-bold'>Order</span>
            <span className='sm:text-left text-right font-bold'>Status</span>
            <span className='hidden md:grid font-bold'>Last Order</span>
            <span className='hidden sm:grid font-bold'>Method</span>
          </div>
          <ul>
            {data.map((order,id) =>(
              <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center cursor-pointer'>

                <div className='flex'> 
                    <div className='bg-purple-100 p-3 rounded-lg'>
                      <FaShoppingBag className='text-indigo-600'/>
                    </div>
                    <div className='pl-4'>
                      <p className='text-gray-800 font-bold sm:text-base text-[.70rem]'>${order.total.toLocaleString()}</p>
                      <p className='text-gray-800 text-sm'>{order.name.first}</p>
                    </div>
                </div>
                <p className='text-gray-600 sm:text-left text-right sm:text-base text-xs'>
                  <span className={
                    order.status === 'Processing' ? 'bg-green-200 p-2  rounded-lg' : order.status == 'Completed' ? 'bg-blue-200 p-2 rounded-lg':'bg-yellow-200 p-2 rounded-lg' 
                  }>{order.status}</span>
                </p> 
                <p className='hidden md:flex'>{order.date}</p>
                  <div className='hidden sm:flex justify-between items-center'>
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

export default orders