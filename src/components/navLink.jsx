"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavLink = ({ links }) => {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => (
        <div className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} key={link.title}>
          <Link href={link.url} >{link.title}</Link>
        </div>
      ))}
    </>
  )
}
