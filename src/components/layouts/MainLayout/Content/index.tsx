import React, { FC, ReactNode } from 'react'
import Header from '@/components/layouts/MainLayout/Header'
import Footer from '@/components/layouts/PublicLayout/Footer';


type ContentProps = {
  className?: string;
  children: ReactNode;
}

const Content:FC<ContentProps> = ({ className = '', children }) => {
  return (
    <div className={`${className} flex-grow px-2 break-all min-h-screen overflow-x-hidden overflow-y-scroll`}>
      <Header />
      {children}

      <Footer />
    </div>
  )
}

export default Content