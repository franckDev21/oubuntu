import React, { FC, ReactNode } from 'react'
import HeroBaner from './HeroBaner';
import Footer from './Footer';

type PublicLayoutProps = {
  children: ReactNode;
}

const PublicLayout:FC<PublicLayoutProps> = ({ children }) => {
  return (
    <>
      {/* BANNER AND HEADER */}
      <HeroBaner />

      {/* CONTENT */}
      {children}

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default PublicLayout