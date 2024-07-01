import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from '../Header'; // Import your Header component here

export default function Layout() {
    return (
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
            <Sidebar />
            <div className='flex flex-col flex-grow p-4'>
                <Header />
                <div className='mt-4 flex-grow'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
