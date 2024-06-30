import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
           <p>Dashboard</p><Link to ="/students" className='underline'>go to students</Link>
        </div>
    )
}
