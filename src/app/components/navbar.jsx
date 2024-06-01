import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md-12 lg:px-20 xl:px-48'>
      {/* {NAME AS LOGO} */}
      <div className=''>
        <Link
          href='/'
          className='text-sn bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mr-1 w-15'>ANJANA</span>
          <span className='flex items-center justify-center w-20 h-8 rounded bg-white text-black'>PASINDU</span>
        </Link>
      </div>
      <div>2</div>
    </div>
  )
}

export default NavBar