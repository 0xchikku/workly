import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components';

function RootLayout() {
  return (
    <>
      <nav>
        <NavBar/>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout