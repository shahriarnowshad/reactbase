import React from 'react';
import { Link } from 'react-router-dom';
function NavigationMenu (props) {
  return (
    <div>
      <span className='font-bold'>Menu</span>
      <ul className='p-3'>
        <li><Link className='text-blue-500 py-1 border-b' to="/" onClick={props.closeMenu}>Home</Link></li>   
        <li><Link className='text-blue-500 py-1 border-b' to="/about" onClick={props.closeMenu}>About</Link></li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
