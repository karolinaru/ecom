import React, {useState} from 'react';
import './Navbar.scss';

const Navbar = () => {

  const [isActive, setActive] = useState(false)
    
  const toggleClass = () => {
    setActive(!isActive)
  };
  
  const hamburgerClicked = isActive ? 'hamburger--active' : '';
  const sidebarClicked =  isActive ? 'sidebar--active' : ''
      
  return (
    <>
      <nav className='navbar'>
        <button className={`hamburger ${hamburgerClicked}`} onClick={toggleClass}>
          <span className='hamburger__box'>
            <span className='hamburger__inner'></span>
          </span>
        </button>
      </nav>
      <nav className={`sidebar ${sidebarClicked}`} onClick={toggleClass}>
        <ul className='sidebar__list'>
          <li className='sidebar__item'>Tu bedzie moze jakas wishlista</li>
        </ul>
      </nav>
    </>
    )
  }
  
export default Navbar;
  