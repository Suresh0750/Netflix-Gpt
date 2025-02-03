
import React from 'react'

const VideoTitle = ({original_title,overview}) => {
  return (
    <div className='pt-[20%] px-20 absolute z-10 text-white bg-gradient-to-r from-black overflow-hidden object-fit w-screen h-screen aspect-video'>
        <h1 className='text-6xl font-bold'>{original_title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 font-bold rounded-lg hover:bg-opacity-30 hover:text-white'>
                <span className='w-36 h-36 '>⏵</span>
                 Play
            </button>
            <button className='bg-slate-500 p-4 px-12 bg-opacity-50 font-bold rounded-lg mx-2'>
              ❗More Info
             </button>
        </div>
    </div>
  )
}

export default VideoTitle;
  