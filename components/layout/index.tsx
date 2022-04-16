import React from 'react';
import type { NextPage } from 'next'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer';

const Layout: NextPage = (props) => {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
