import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black' >
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='py-6 text-md w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-2 px-10 mx-2 text-lg  rounded-lg hover:opacity-80'>▶ Play</button>
            <button className='bg-gray-600 text-white p-2 mx-2 px-10 text-lg bg-opacity-50 rounded-lg'>More Info</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
