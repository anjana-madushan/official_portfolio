"use client"

import React from 'react'
import { motion } from 'framer-motion'

const Page = () => {

  const varinat = {}

  return (
    <div className='h-full flex items-center justify-center'>
      <motion.div className='w-96 h-96 bg-red-400 rounded' initial={{ x: -100 }} animate={{ x: 500 }}></motion.div>
    </div>
  )
}

export default Page