"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavLink = ({ links }) => {
  const pathName = usePathname();

  return (
    <>
      {links.map((link) => (
        <div className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`}>
          <Link href={link.url} key={link.title}>{link.title}</Link>
        </div>
      ))}
    </>
  )
}
