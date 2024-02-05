import React from 'react'

function Header() {
  return (
    <div>
      <div className='bg-red-400 flex justify-between'>
        <nav className='flex text-white'>
           <span className='p-3'>Kalvium</span>
           <span className='p-3'>About Us</span>
           <span className='p-3'>Contacts</span>
           <span className='p-3'>Courses</span>
        </nav>
        <div>
          <button className=' border-2 border-white text-white m-2 p-2'>login</button>
        </div>
      </div>
    </div>
  )
}

export default Header
