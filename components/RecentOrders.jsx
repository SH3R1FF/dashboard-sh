import React from 'react'
import {data} from '../data/data.js'
import {FaShoppingBag} from 'react-icons/fa'

const RecentOrders = () => {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white hide-scrollbar overflow-y-scroll shadow-xl'>
         {/* hide-scrollbar   */}
      <h1 className='text-xl font-bold ' >Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
              <div className='bg-purple-100 rounded-lg p-3'>
                <FaShoppingBag className='text-indigo-600'/>
              </div>
              <div className='pl-4'>
                <p className='text-gray-800 font-bold'>${order.total}</p>
                <p className='text-gray-400 text-sm'>${order.name.first}</p>
              </div>
              <p className='lg:flex md:hidden absolute right-6 sm:text-xs text-[.60rem]'> 
                {order.date}
              </p>
          </li>

        ))}
      </ul>

    </div>
  )
}

export default RecentOrders