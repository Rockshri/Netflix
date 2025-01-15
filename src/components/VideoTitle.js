import React from 'react'

const VideoTitle = (props) => {
   const { title, overview } = props;
  return (
    <div className='pt-32 px-11'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <h2 className='py-5 text-lg w-1/4'>{overview}</h2>
      <div className=''>
        <button className='bg-gray-500 text-white p-4 px-12 bg-opacity-50 rounded-lg text-xl'>▶️Play</button>
        <button className='bg-gray-500 mx-2 text-white p-4 px-12 bg-opacity-50 rounded-lg text-xl'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
