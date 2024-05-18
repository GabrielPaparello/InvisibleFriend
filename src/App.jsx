import { Nav } from './utils/Nav'; 
import React from 'react';
// import imagen from './assets/invisibleApp.png';

export const App = () => {
  return (
    <>
      <Nav />
      <div>
        <h2>Invisible Friends</h2>
        {/* {imagen && <img src={imagen} alt="" />} */}
      </div>
    </>
  );
};
