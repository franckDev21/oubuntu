/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React, { FC } from 'react'

type StepperMarketProps = {
  className?: string;
}

const StepperMarket:FC<StepperMarketProps> = ({ className = '' }) => {
  return (
    <div className={`${className} bg-primary text-center text-white py-14 px-14 space-y-6`}>
      <h1 className='text-center font-bold text-2xl uppercase'>Comment vendre sur Oubuntu Marché ?</h1>

      <div className="container grid grid-cols-3 gap-8 relative items-start py-10">
        
        <div className=' space-y-2 flex flex-col items-center justify-center text-center'>
          <Image className=' rounded-md' src={'/photo1.jpg'} width={1280} height={853}  alt='image'/>
          <p className=' font-bold mt-3 text-xl'>
            Mettez en vente vos produit juste a {"l'aide"} des photos
          </p>
        </div>

        <div className=' space-y-2 flex flex-col items-center justify-center text-center'>
          <Image className=' rounded-md' src={'/photo2.jpg'} width={1280} height={853}  alt='image'/>
          <p className=' font-bold mt-3 text-xl'>
           Gérer vos commendes depuis chez vous, accepter ou refuser {"c'est "}comme vous voulez 
          </p>
        </div>
        
        <div className=' space-y-2 flex flex-col items-center justify-center text-center'>
          <Image className=' rounded-md' src={'/photo3.jpg'} width={1280} height={853}  alt='image'/>
          <p className=' font-bold mt-3 text-xl'>
            Vous recevez votre argent 24h après {"qu'une"} commande ai été éfféctue
          </p>
        </div>

      </div>

      <button className='px-6 py-3 font-semibold border-2 border-primary border-opacity-50 bg-secondary text-primary rounded-full'>Rejoignez nous et commencer a gagner de l'argent</button>
    </div>
  )
}

export default StepperMarket