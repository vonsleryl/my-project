import React from 'react';
import { Link } from 'react-router-dom';

export default function Student() {
    return (
        <div>
           <p>Student</p>
           <Link to ="/"></Link>
           <Link to ="/grades"></Link>
           <Link to ="/calendar"></Link>
           <Link to ="/messages"></Link>
        </div>
    )
}
