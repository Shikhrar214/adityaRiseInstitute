import React from 'react'
import { Outlet } from 'react-router'
import {Footer, Header} from '../index'



function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout
