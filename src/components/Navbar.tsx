import React from 'react'
import { NavLink } from 'react-router-dom'

export function Navbar() {


  return (
    <div >
      <div className=' navbar bg-slate-500'>
        <div className="flex-1">
          <button className='btn btn-ghost normal-case text-xl '>MUSIC LIBRARY</button>
        </div>
      <div className="flex-none">
      <ul className='flex menu menu-horizontal p-0'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/add'>Add new song</NavLink>
        </li>
      </ul>
      </div>
      </div>

      {/* <ul className='flex'>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/add'>Add new song</NavLink>
        </li>
      </ul> */}
    </div>
  )
}
