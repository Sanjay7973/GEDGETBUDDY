import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div className='bg-slate-100 p-2 text-xl'>
      <NavLink to="/">Home</NavLink>/<span className='font-semibold text-xl'>{title}</span>
    </div>
  )
}

export default PageNavigation
