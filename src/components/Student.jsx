import React from 'react';
import { Link } from 'react-router-dom';

export default function Student() {
    return (
        <div>
           <p>Student</p><Link to ="/" className='underline'>go to dashboard</Link>
        </div>
    )
}
