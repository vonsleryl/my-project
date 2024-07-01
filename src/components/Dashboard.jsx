import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div>
           <p>Dashboard</p>
           <Link to ="/students"></Link>
           <Link to ="/grades"></Link>
           <Link to ="/calendar"></Link>
           <Link to ="/messages"></Link>
        </div>
    )
}
