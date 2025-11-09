import React from 'react'
import {Outlet} from "react-router-dom";
import Footer from '../components/Footer.jsx';

const MainLayout = () => {
  return (
    <div>
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout