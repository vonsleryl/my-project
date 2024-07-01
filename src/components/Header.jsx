import React from 'react';
import { HiOutlineBell, HiOutlineSearch } from 'react-icons/hi';
import profile from '../assets/images/profile.jpg';

export default function Header() {
  return (
    <div className='flex items-center justify-between p-4 bg-white shadow-md'>
      <div className='flex items-center w-full md:w-2/3 lg:w-1/2 relative'>
        <HiOutlineSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        <input 
          type='text' 
          placeholder='Search...'
          className='w-full pl-10 pr-4 py-2 focus:outline-none focus:ring-0'
        />
      </div>
      <div className='flex items-center ml-4 space-x-4'>
        <button className='relative'>
          <HiOutlineBell className='text-xl' />
          <span className='absolute top-0 right-0 block h-2 w-2 bg-red-600 rounded-full ring-2 ring-white'></span>
        </button>
        <div className='hidden md:flex items-center space-x-2'>
          <div className='w-8 h-8 rounded-full overflow-hidden'>
            <img 
              src={profile} // Replace with actual profile image URL
              alt='Profile'
              className='w-full h-full object-cover'
            />
          </div>
          <span className='hidden md:inline-block text-ellipsis overflow-hidden whitespace-nowrap'>
            Vonsleryl Igot
          </span>
        </div>
      </div>
    </div>
  );
}
