"use client"
import React from "react";
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
// import { Disclosure } from "@headlessui/react";
import {RxSketchLogo,RxDashboard,RxPerson} from 'react-icons/rx'
import {FiSettings} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { useState } from 'react';
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import Image from 'next/image'
// import img1 from '../assets/wave.png'

const SideNavbar =({children}) => {

  const [navCollapse, setNavCollapse] = useState(false)

  return (
<div>
      
        <ham className="absolute top-6 right-4 inline-flex sm:hidden items-center peer justify-center rounded-md p-2 text-black w-10 ">
          <Image 
          src={navCollapse ? close : menu}
           alt="menu" 
           onClick={e => setNavCollapse(!navCollapse)}
           className="text-black  object-contain"
           fill={'black'}
           />
        </ham>
         
      <div className="flex">
        <div className={` w-20 p-4 h-screen bg-white z-20  lg:left-0 fixed top-0   items-center justify-center peer-focus:left-0 peer:transition ease-out delay-150 duration-200 ${navCollapse ? "max:sm:visible" : "max-sm:hidden"} `}>
          

            <div className='flex flex-col items-center justify-center '>
                <Link href="/">
                    <div className='bg-indigo-600 text-white p-3 rounded-lg inline-block '>
                        <RxSketchLogo size={20} />
                    </div>
                </Link>
                <span className='border-b-[1px] border-gray-200 w-full p-2'> </span>

                <Link href="/">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block '>
                        <RxDashboard size={20} />
                    </div>
                </Link>
                

                <Link href="/customers">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <RxPerson size={20} />
                    </div>
                </Link>
                

                <Link href="/orders">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <HiOutlineShoppingBag size={20} />
                    </div>
                </Link>
                

                <Link href="/">
                    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                        <FiSettings size={20} />
                    </div>
                </Link>
                
            </div>
          </div>
        <main className='sm:ml-20 w-full bg-gray-100 min-h-screen'>{children}</main>
      </div>  
      
</div>
  );
}

export default SideNavbar;