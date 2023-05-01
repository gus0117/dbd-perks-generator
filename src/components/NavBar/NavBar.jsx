import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import '../../styles/NavBar.css';
import LogoDBD from '../../images/logo.png';

const NavBar = () => {
  return (
    <>
      <div className='navbar'>
        <ul>
          <li><img className='img-logo'src={LogoDBD}></img></li>
          <li><NavLink className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""} to='/'>Home</NavLink></li>
          <li><NavLink className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""} to='/showPerks'>Perks List</NavLink></li>
          <li><NavLink className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""} to='/perkGenerator'>Generate Build</NavLink></li>
        </ul>
      </div>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  )
}

export default NavBar