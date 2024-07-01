import React from 'react'
import { Link } from 'react-router-dom';

export default function Messages() {
  return (
    <div>
      <p>Ding Dong</p>
        <Link to ="/"></Link>
        <Link to ="/students"></Link>
        <Link to ="/grades"></Link>
        <Link to ="/calendar"></Link>
    </div>
  )
}
