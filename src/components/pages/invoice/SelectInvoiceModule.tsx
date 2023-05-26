import React, { ChangeEvent, FC, useState } from 'react'
import StepContentBlock from './StepContentBlock';
import { InvoiceModuleType } from '@/Models/Invoice';
import useDataModule from '@/hooks/useDataModule';
import { useInvoice } from '@/context/InvoiceContext';

type SelectInvoiceModuleProps = {
  className?: string;
}

const SelectInvoiceModule: FC<SelectInvoiceModuleProps> = ({ className = '' }) => {
  
  const { setModel, company } = useInvoice();

  const [show,setShow] = useState(false);  

  const { 
    trainings, 
    sessions, 
    isLoading, 
    isSessionLoading, 
    setCurrentTraingId 
  } = useDataModule({company: company});

  const onchange = (e: ChangeEvent<HTMLSelectElement>) => {

    // on met a jour le store
    setModel((e.target.value ? (e.target.value as any):undefined));

    if(e.target.value){
      setShow((e.target.value as InvoiceModuleType) !== 'GENERAL');
    }else{
      setShow(false);
    }

  }

  return (
    <StepContentBlock className={`${className}`} title='Module de facturation'>
      {show && company && 
        <div className='border border-dashed border-gray-400 p-2 rounded-md w-[50%]'>
          {!isLoading && 
            <div className='space-y-3'>
              <select onChange={e => setCurrentTraingId((e.target.value ? +e.target.value : undefined))} className='py-2 rounded-md w-full bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none'>
                <option value="">--- Séléctionnez une formation ---</option>
                {trainings?.map((training,i) => (
                  <option key={i} value={training.id}>{training.title}</option>
                ))}
              </select>

              {!isSessionLoading && 
                <select className='py-2 rounded-md w-full bg-primary text-white border-none ring-0 outline-none focus:ring-0 focus:border-none'>
                  <option value="">--- Séléctionnez une session ---</option>
                  {sessions?.map((session,i) => (
                    <option key={i} value={session.id}>{session.start} - {session.end}</option>
                  ))}
                </select>
              }
            </div>
          }
          {(isLoading || isSessionLoading) && <div className='py-5 mt-3 rounded-md bg-slate-100'></div>}
        </div>
      }
      <select onChange={onchange} className='py-2 rounded-md min-w-[35%] bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none'>
        <option value="">--- Choisissez le type de model de facture ---</option>
        <option value="SUBSCRIPTION">Nouvelle inscription</option>
        <option value="TRAINING_PAYMENT">Payment des frais de formation</option>
        <option value="EXAM_PAYMENT">Paiment des frais {"d'examen"}</option>
        <option value="GENERAL">Formulaire général</option>
      </select>
    </StepContentBlock>
  )
}

export default SelectInvoiceModule