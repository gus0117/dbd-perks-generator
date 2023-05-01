import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import '../../styles/NavBar.css';
import LogoDBD from '../../images/logo.png';

const NavBar = () => {
  return (
    <>
      <div className='navbar'>
        <ul>
          <li><img className='img-logo'src={LogoDBD}></img></li>
          <li><Link className='active' to='/'>Home</Link></li>
          <li><Link to='/showPerks'>Perks List</Link></li>
          <li><Link to='/perkGenerator'>Generate Build</Link></li>
        </ul>
      </div>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  )
}

export default NavBar