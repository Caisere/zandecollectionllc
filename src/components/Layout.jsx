import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <main>
            <Outlet/>
        </main>
        <div className='text-white'>
          <Footer/>
        </div>
    </div>
  )
}

export default Layout