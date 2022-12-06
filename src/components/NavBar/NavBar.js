import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <div className="container">
          <Link to={'/'} className='navbar-brand'>
            <i className='fa fa-mobile mx-2' /> Contact App</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
