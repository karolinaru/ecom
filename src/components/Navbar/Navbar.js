import React, {useState} from 'react';
import './Navbar.scss';

const Navbar = () => {

  const [hamburgerActive, setHamburgerActive] = useState(false)
  const [sidebarActive, setSidebarActive] = useState(false)
    
  const toggleClass = () => {
    setHamburgerActive(!hamburgerActive)
    setSidebarActive(!sidebarActive)
  };
  
  const hamburgerClicked = hamburgerActive ? 'hamburger--active' : '';
  const sidebarClicked =  sidebarActive ? 'sidebar--active' : ''
      
  return (
    <>
      <nav className='navbar'>
        <button className={hamburgerClicked + ' hamburger'} onClick={toggleClass}>
          <span className='hamburger__box'>
            <span className='hamburger__inner'></span>
          </span>
        </button>
      </nav>
      <nav className={sidebarClicked + ' sidebar'} onClick={toggleClass}>
        <ul className='sidebar__list'>
          <li className='sidebar__item'>Tu bedzie moze jakas wishlista</li>
        </ul>
      </nav>
    </>
    )
  }
  
export default Navbar;
  