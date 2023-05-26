/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react'

type SessionProps = {
  className?: string;
}

const Session:FC<SessionProps> = ({ className = '' }) => {
  return (
    <div className={`${className} bg-tertiary bg-opacity-50 px-12 space-y-6 py-20`}>
      <h1 className='text-center font-bold text-text text-2xl uppercase'>Pourquoi les producteurs choisisse t'il Oubuntu ?</h1>

      <div className="container grid grid-cols-4 gap-8 relative">
        

        <div className=' bg-tertiary p-4 rounded-md space-y-2 flex flex-col items-start justify-start'>
          <span className=' text-text text-sm text-left inline-block uppercase font-light'>Gains</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium velit accusamus sunt earum corrupti . Lorem, ipsum dolor.
          </p>
        </div>

        <div className=' bg-secondary bg-opacity-20 p-4 rounded-md space-y-2 flex flex-col items-start justify-start'>
          <span className=' text-text text-sm text-left inline-block uppercase font-light'>Support 24h</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium velit accusamus sunt earum corrupti . Lorem, ipsum dolor.
          </p>
        </div>

        <div className=' bg-tertiary p-4 rounded-md space-y-2 flex flex-col items-start justify-start'>
          <span className=' text-text text-sm text-left inline-block uppercase font-light'>Communauté</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium velit accusamus sunt earum corrupti . Lorem, ipsum dolor.
          </p>
        </div>


        <div className=' bg-secondary bg-opacity-20 p-4 rounded-md space-y-2 flex flex-col items-start justify-start'>
          <span className=' text-text text-sm text-left inline-block uppercase font-light'>Reconnaissance</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum praesentium velit accusamus sunt earum corrupti . Lorem, ipsum dolor.
          </p>
        </div>


      </div>
      
    </div>
  )
}

export default Session