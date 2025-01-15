import React from 'react'

const VideoTitle = (props) => {
   const { title, overview } = props;
  return (
    <div className='pt-[15%] px-11 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <h2 className='py-8 text-lg w-1/3'>{overview}</h2>
      <div className=''>
        <button className='bg-white text-black p-4 px-12 rounded-lg text-xl hover:bg-opacity-80'>▶️Play</button>
        <button className='bg-gray-500 mx-2 text-white p-4 px-12 bg-opacity-50 rounded-lg text-xl'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
