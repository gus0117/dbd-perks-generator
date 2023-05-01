import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import '../../styles/NavBar.css';
import LogoDBD from '../../images/logo.png';

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className="logo">
          <img className='img-logo'src={LogoDBD} alt='Logo'/>
        </div>
        <ul>
          <li><NavLink className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""} to='/'>Inicio</NavLink></li>
          <li><NavLink className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""} to='/showPerks'>Survi Perks</NavLink></li>
          <li><NavLink className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""} to='/perkGenerator'>Generar Build</NavLink></li>
        </ul>
      </nav>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  )
}

export default NavBar