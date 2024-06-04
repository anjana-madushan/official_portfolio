import { ExperienceList } from '@/components/experinceList'
import React from 'react'

const Page = () => {
  return (
    <div className='h-full overflow-scroll'>
      <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flax flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
        <div className='flex flex-col gap-12 justify-center'>
          <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
          <p className='text-lg'>I am a fourth-year undergraduate student pursuing a BSc (Hons) in Information Technology with
            a specialization in Software Engineering at SLIIT. Concurrently, I am engaged as an intern
            software engineer at Enlear while progressing through my fourth year of studies at SLIIT.</p>
        </div>
        <div className='flex flex-col gap-12 justify-center'>
          <h1 className='font-bold text-2xl'>SKILLS</h1>
          <div className='flex gap-4 flex-wrap'>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>TypeScript</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JAVA</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>React</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Node JS</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Next JS</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>MERN</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>SQL</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>AWS</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Git & GitHub</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>TailWind CSS</div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Bit</div>
          </div>
        </div>
        <div className='flex flex-col gap-12 justify-center pd-48'>
          <h1 className='font-bold text-2xl'>EXPERIENCE</h1>
          {/* List */}
          <div>
            <ExperienceList />
          </div>
        </div >
      </div >
    </div>
  )
}

export default Page