import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import NavigationMenu from './NavigationMenu';
function Navigation () {
  const [showMenu, setshowMenu] = useState(false);
  const maskTransitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });
  return (
    <nav>
      <span className='text-xl'>
        <FontAwesomeIcon icon={faBars} onClick={()=>setshowMenu(!showMenu)}/>
      </span>
      {
        maskTransitions((styles, item) => item && 
        <animated.div 
          style={styles}
          className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'
          onClick={()=>setshowMenu(false)}>
        </animated.div>)
      }
      {
        menuTransitions((styles, item) => item && 
        <animated.div 
          style={styles}
          className='bg-white fixed top-0 left-0 w-4/5 h-full z-50 shadow p-3'>
          <NavigationMenu 
            closeMenu = {()=>setshowMenu(false)}>
          </NavigationMenu>
        </animated.div>)
      }
    </nav>
  );
}
export default Navigation;
