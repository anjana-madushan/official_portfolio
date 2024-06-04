"use client"
import React from 'react';
import data from '../../public/json-data/experience.json'

export const ExperienceList = () => {

  console.log(data)

  return (
    <div>
      {data.map((exp, index) => (
        // List Item
        <div className='flex justify-between h-48'>
          {/* item */}
          <div className='w-1/3' key={index}>
            <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>{exp.title}</div>
            <div className='p-3 text-sm italic'>{exp.description}</div>
            <div className='p-3 text-red-400 text-sm font-semibold'>{exp.time_period}</div>
            <div className='p-3 rounded bg-white text-sm font-semibold w-fit'>{exp.company}</div>
          </div>
          {/* center */}
          <div className='w-1/6' >
            {/* circle and line */}
            <div className='w-1 h-full bg-gray-600 rounded relative' >
              <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'>
              </div>
            </div>
          </div>
        </div >
      ))}
    </div >
  )
}
