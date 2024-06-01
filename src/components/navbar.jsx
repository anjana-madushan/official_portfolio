"use client"

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { NavLink } from './navLink'

// NavBar list
const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' }
]

const NavBar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md-12 lg:px-20 xl:px-48 text-xl'>
      <div className='hidden md:flex gap-8 w-1/3'>
        <NavLink links={links} />
      </div>
      {/* {NAME AS LOGO} */}
      <div className='md:hidden lg:flex xl:w-1/3 justify-center'>
        <Link
          href='/'
          className='text-sn bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mr-1 w-15'>ANJANA</span>
          <span className='flex items-center justify-center w-21 h-8 rounded bg-white text-black'>PASINDU</span>
        </Link>
      </div>
      {/* Icons */}
      <div className='hidden md:flex gap-5 w-1/3'>
        <Link href='https://github.com/anjana-madushan'>
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href='https://www.linkedin.com/in/anjana-madushan-01b499259/'>
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href='https://medium.com/@anjana_madushan'>
          <Image src="/medium.png" alt="" width={24} height={24} />
        </Link>
        <Link href='https://www.facebook.com/anjana.pasindu.338?mibextid=kFxxJD'>
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className='md:hidden'>
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative'
          onClick={() => setOpen((prev) => !prev)}>
          <div className='w-10 h-1 bg-white rounded'></div>
          <div className='w-10 h-1 bg-white rounded'></div>
          <div className='w-10 h-1 bg-white rounded'></div>
        </button>
        {/* MENU LIST */}
        {open && <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>}
      </div>
    </div>
  )
}

export default NavBar