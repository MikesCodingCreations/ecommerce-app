'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {CiShoppingCart} from "react-icons/ci"
import {BsChevronCompactUp} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'


import SearchBar from './SearchBar'

type Props = {}

const Navbar = (props: Props) => {
    const [showProfile, setShowProfile] = useState<boolean>(false)
    const [showNav, setShowNav] = useState<boolean>(false)
    return (
        <div>
            <div className='flex item-center justify-between py-4 relative'>
                <div className='flex item-center md:space-x-10 lg:space-x-20'>
                    <div className='font-semibold text-2xl'><a href='/'>Sweatsense</a></div>
                    <nav className='max-md:hidden'>
                        <ul className='flex item-center lg:space-x-10 space-x-7 opacity-70 text-[15px]'>
                            <li><a href='/' className='py-3 inline-block w-full'>Shop</a></li>
                            <li><a href='filters' className='py-3 inline-block w-full'>Filters</a></li>
                            <li><a href='pyproducts' className='py-3 inline-block w-full'>My Products</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='flex item-center space-x-4'>
                    <SearchBar />
                    <div onClick={() => setShowProfile(!showProfile)} className='relative cursor-pointer'>
                        <img src="user.png" className='w-[35px h-[35px] rounded-full object-cover' alt="user" />
                        <div  className={`absolute bg-white z-[2] rounded-lg shadow-lg ${showProfile ? "":"hidden"}`}>
                            <Link href="/sign">SignIn</Link>
                        </div>
                    </div>
                        <Link href='/cart'>
                            <div className='p-2 bg-gray-100 rounded-full'><CiShoppingCart size={20} /></div>
                        </Link>
                        <span onClick={() => setShowNav(!showNav)} className='p-[9px] bg-gray-100 rounded-full md:hidden'>
                            <BsChevronCompactUp className={`transition ease-in duration-150 ${showNav ? "rotate-180":"0"}`} />
                        </span>
                </div>
            </div>
            <div className={`md:hidden ${showNav ? "pb-4 px-5": "h-0 invisible opacity-0"}`}>
                <ul className='flex flex-col text-[15px] opacity-75 px-2'>
                    <li><a href="/shop" className='py-3 inline-block w-full'></a>Shop</li>
                    <li><a href="/filters" className='py-3 inline-block w-full'></a>Filters</li>
                    <li><a href="/myproducts" className='py-3 inline-block w-full'></a>My Product</li>
                </ul>
                <div className='flex items-center bg-gray-100 p-2 rounded-lg my-4 py-3'>
                    <input 
                    type="text" 
                    className='outline-none w-full bg-transparent ml-2 caret-green-500 placeholder: font-light placeholder: text-gray-600 text-[15px]'
                    placeholder='Search'
                    autoComplete='false'
                    />
                    <button><BiSearch size={20} className='opacity-50' /></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar