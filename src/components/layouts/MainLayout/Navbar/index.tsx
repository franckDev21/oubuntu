import Image from 'next/image';
import React, { FC } from 'react'
import { RxDashboard } from 'react-icons/rx'
import { RiFileList3Line } from 'react-icons/ri'
import { HiUserGroup, HiOutlineOfficeBuilding } from 'react-icons/hi'
import { AiTwotoneSetting } from 'react-icons/ai'
import NavLink from './NavLink';
import { useRouter } from "next/router";

type NavbarProps = {
  className?: string;
}

const Navbar:FC<NavbarProps> = ({ className = '' }) => {
  const router = useRouter();
  return (
    <div className={`${className} my-2 space-y-8 w-[250px] pt-5 px-4 rounded-tr-md rounded-br-md bg-white bg-opacity-40 border max-h-full flex-shrink-0`}>
      <header>
        <Image src={'/LOGO-ADAA-CERTIF.png'} className='w-24' width={200} height={100} alt='logo' />
      </header>

      <nav className='space-y-4 flex flex-col  py-2 px-4 rounded-md'>
        <NavLink href='/' label='Dashboard' className={`${router.pathname === '/' && 'active'}`} icon={<RxDashboard />} />
        <NavLink href='/invoices' label='Factures' className={`${router.pathname.includes('/invoices') && 'active'}`} icon={<RiFileList3Line />} />
        <NavLink href='/users' label='Utilisateurs' className={`${router.pathname.includes('/users') && 'active'}`} icon={<HiUserGroup />} />
        <NavLink href='/company' label='Entreprises' className={`${router.pathname.includes('/company') && 'active'}`} icon={<HiOutlineOfficeBuilding />} />
        <NavLink href='/config' label='Configurations' className={`${router.pathname.includes('/config') && 'active'}`} icon={<AiTwotoneSetting />} />
      </nav>
    </div>
  )
}

export default Navbar