import React, { FC, ReactNode } from 'react'
import Header from './Header';
import CardLogin from '@/components/pages/_/CardLogin';

type HeroBanerProps = {
  className?: string;
  children?: ReactNode;
}

const HeroBaner:FC<HeroBanerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className} pt-4 pb-10`} style={{ backgroundImage: 'url(/hero.jpg)' }}>
      <div className='mx-auto container-two'>
        <Header />
        <CardLogin className=' mt-4' />

        {children}
      </div>
    </div>
  )
}

export default HeroBaner