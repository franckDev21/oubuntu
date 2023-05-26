/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react'

type StepperProps = {
  className?: string;
}

const Stepper:FC<StepperProps> = ({ className = '' }) => {
  return (
    <div className={`${className} bg-green-100 px-12 space-y-12 py-16`}>
      <h1 className='text-center font-bold text-text text-2xl uppercase'>Comment {"s'enregister"}</h1>

      <div className="container grid grid-cols-3 gap-8 relative">
        
        <span className='inline-block border-t-2 top-[42px] w-[70%] border-text border-dashed left-1/2 -translate-x-1/2 absolute '></span>

        <div className=' space-y-2 flex flex-col items-center justify-center text-center'>
          <span className=' relative overflow-hidden bg-green-100 w-20 border-2 h-20 flex justify-center items-center  rounded-full border-text text-text text-3xl font-bold'>
            1
          </span>
          <span className=' font-semibold text-text text-xl'>Entrez vos informations</span>
          <p>
            Entrer les informations liees a vous et a ce que vous faites
            pour{" qu'on"} puisse mieux vous connaîtres
          </p>
        </div>

        <div className=' space-y-2 flex flex-col items-center justify-center text-center'>
          <span className=' relative overflow-hidden bg-green-100 w-20 border-2 h-20 flex justify-center items-center  rounded-full border-text text-text text-3xl font-bold'>
            2
          </span>
          <span className=' font-semibold text-text text-xl'>Entrez vos informations</span>
          <p>
            Entrer les informations liees a vous et a ce que vous faites
            pour{" qu'on"} puisse mieux vous connaîtres
          </p>
        </div>

        <div className=' space-y-2 flex flex-col items-center justify-center text-center'>
          <span className=' relative overflow-hidden bg-green-100 w-20 border-2 h-20 flex justify-center items-center  rounded-full border-text text-text text-3xl font-bold'>
            3
          </span>
          <span className=' font-semibold text-text text-xl'>Entrez vos informations</span>
          <p>
            Entrer les informations liees a vous et a ce que vous faites
            pour{" qu'on"} puisse mieux vous connaîtres
          </p>
        </div>

      </div>

    </div>
  )
}

export default Stepper