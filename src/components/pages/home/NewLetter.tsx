import Input from '@/components/uikit/Input';
import Image from 'next/image';
import React, { FC } from 'react'

type NewLetterProps = {
  className?: string;
}

const NewLetter:FC<NewLetterProps> = ({ className = '' }) => {
  return (
    <div className={`${className} bg-green-100 px-40 space-y-12 py-16`}>
      <div className="container flex justify-between items-start space-x-20">
        <div className=' w-1/2'>
          <h1 className='font-bold text-2xl mb-10'>Abonnez vous a notre newletter pour être a jour concernant nos informations</h1>
          <form className='space-y-4'>
            <Input 
              placeholder='Adresse e-mail' 
              className='border rounded-md col-span-2 w-full  px-3 py-3 focus:ring-primary focus:ring-1' 
              containerClassName='col-span-2'
            />
            <button className='px-4 w-full uppercase bg-primary py-3 col-span-2 text-white font-semibold rounded-md'>
              Souscrire
            </button>
          </form>
        </div>
        <div className='relative w-1/2 h-[300px] overflow-hidden rounded-3xl'>
          <Image 
            src='/newletter.jpg' 
            width={1280} 
            height={853} 
            alt='newletter' 
            className=' absolute top-0 left-0 w-full h-full object-cover' 
          />
        </div>
      </div>
    </div>
  )
}


export default NewLetter 
