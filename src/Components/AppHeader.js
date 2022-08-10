import React from 'react';
import Navigation from './Navigation';
function AppHeader () {
  return (
    <header className='border-b p-3 flex justify-between items-center'>
      <span className='font-bold text-xl'>
                Showcase
      </span>
      <Navigation/>
    </header>
  );
}
export default AppHeader;