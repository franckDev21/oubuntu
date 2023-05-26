import Input from '@/components/uikit/Input';
import React, { FC, useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Select from '@/components/uikit/Select';

type CardLoginProps = {
  className?: string;
}

const CardLogin:FC<CardLoginProps> = ({ className = '' }) => {
  const [value, setValue] = useState<any>(null)
  return (
    <div className={`${className} bg-white rounded-md p-4 w-[430px] relative z-10`}>
      <h1 className=' text-text font-semibold text-xl'>Inscrivez vous et commencer a vendre</h1>

      <div className="grid grid-cols-2 gap-3 mt-3">
        <Input 
          placeholder='Nom' 
          className='border rounded-md ring-0 focus:right-0 outline-none focus:outline-none px-3 py-2' 
        />
        <Input 
          placeholder='Prénom' 
          className='border rounded-md ring-0 focus:right-0 outline-none focus:outline-none px-3 py-2' 
        />
        <PhoneInput
          defaultCountry='CM'
          className='border flex-none s react-select col-span-2 rounded-md ring-0 focus:right-0 outline-none focus:outline-none px-3 py-0.5'
          placeholder="Numéro de téléphone"
          value={value}
          onChange={setValue}
        />
        <Input 
          placeholder='Adresse e-mail' 
          className='border rounded-md col-span-2 w-full ring-0 focus:right-0 outline-none focus:outline-none px-3 py-2' 
          containerClassName='col-span-2'
        />
        <Select 
          className='border rounded-md text-text border-gray-200 col-span-2 w-full ring-0 focus:right-0 outline-none focus:outline-none px-3 py-2' 
          containerClassName='col-span-2'
          options={['Que souhaitez vous vendre']}
        />
         <Input 
          placeholder='Ville' 
          className='border rounded-md col-span-2 w-full ring-0 focus:right-0 outline-none focus:outline-none px-3 py-2' 
          containerClassName='col-span-2'
        />
        <div className='text-xs font-semibold text-center text-text col-span-2'>
          Vous devez avoir au moins <span className=' text-secondary'>21 ans</span> pour commencer a vendre sur Oubuntu en vous insrivant , vous acceptez notre <span className=' text-secondary'>politique de confidentialité</span>
        </div>
        <button className='px-4 bg-primary py-2 col-span-2 text-white font-semibold rounded-md'>
          Créer un compte
        </button>
      </div>
    </div>
  )
}

export default CardLogin