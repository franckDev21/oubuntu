import Logo from '@/components/uikit/Logo'
import React from 'react'
import { TbWorld } from 'react-icons/tb'

const Header = () => {
  return (
    <div className='flex justify-between items-center relative z-10'>
      <Logo  />

      <div className='flex items-center space-x-3 font-semibold text-white  '>
        <span className='flex items-center space-x-2'>
          <span>Fr</span>
          <TbWorld />
        </span>
        <span>|</span>
        <span>Aide</span>
        <button className='bg-primary  rounded-md px-6 py-1.5 '>Connexion</button>
      </div>
    </div>
  )
}

export default Header