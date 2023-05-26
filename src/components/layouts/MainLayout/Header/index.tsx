import { useAuth } from '@/context/AuthProvider';
import Image from 'next/image';
import React, { FC } from 'react'
import { GoSearch } from 'react-icons/go'
import { HiOutlineLogout } from 'react-icons/hi'

type HeaderProps = {
  className?: string;
}

const Header:FC<HeaderProps> = ({ className = '' }) => {

  const { logout } = useAuth();

  return (
    <div className={`${className} rounded-md flex items-center justify-between py-2 px-2 border my-2 bg-white`}>
      <form className=' relative w-[45%]'>
        <input type="text" placeholder=' Rechercher ici...' className='px-4 text-gray-500 outline-none border-none ring-0 focus:ring-0 pr-10 rounded-md w-full py-2 bg-slate-100' />
        <span className=' text-gray-400 text-lg absolute right-4 top-1/2 -translate-y-1/2'>
          <GoSearch />
        </span>
      </form>

      <div className='flex items-center space-x-3'>
        <div className='w-10 h-10 border-dashed overflow-hidden border-2 border-primary border-opacity-70 rounded-full bg-slate-100 relative'>
          <Image src={'/default-user-image.png'} width={100} height={200} alt='ima' className='absolute opacity-40 w-full h-full object-cover left-0 top-0' />
        </div>
        <button onClick={logout} className='px-4 py-1 inline-flex items-center space-x-2 text-sm rounded-lg bg-primary text-white font-semibold'>
          <span>Se déconnecter </span>
          <HiOutlineLogout className=' text-lg' />
        </button>
      </div>
    </div>
  )
}

export default Header