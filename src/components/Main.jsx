import React from 'react'

function Main() {
  return (
    <div>
    <div className='mt-10 flex '>
      <button className='bg-sky-600 text-white border-2 rounded-3'>Button one</button>
    </div>
    <div className=' bg-red-200'>
    <h5 className='text-red-600	py-2 px-10'>Alert! New Courses arrived</h5>
    </div>
       <img src="../src/assets/download.png" className='h-10 w-20px flex shadow shadow-gray-400 p-1 m-10'/>
    </div>
    
  )
}

export default Main
