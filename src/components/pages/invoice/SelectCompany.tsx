import Company from '@/Models/Company';
import CompanyService from '@/services/companies';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { ChangeEvent, FC, useState } from 'react'
import StepContentBlock from './StepContentBlock';
import { useInvoice } from '@/context/InvoiceContext';

type SelectCompanyProps = {
  className?: string;
}

const SelectCompany: FC<SelectCompanyProps> = ({ className = ''}) => {

  const { setCompany } = useInvoice();

  const [selectedCompany,setSelectedCompany] = useState<Company|undefined>();

  const { data: companies, isLoading } = useQuery({
    queryFn: CompanyService.getAll, 
    queryKey: ["companies"],
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let select = e.target as HTMLSelectElement;
    if(select.options[select.selectedIndex].dataset.company){
      setSelectedCompany(JSON.parse(select.options[select.selectedIndex].dataset.company as any));
      
      // on met a jour le store
      setCompany(JSON.parse(select.options[select.selectedIndex].dataset.company as any));
    } else {
      setSelectedCompany(undefined);
      
      // on met a jour le store
      setCompany(undefined)
    }
  }
  
  return (
    <StepContentBlock className={`${className}`}  title="Chosissez l'Entreprise">
      {!isLoading && 
        <div className='space-x-2 flex '>
          <span className='w-10 rounded-md overflow-hidden border bg-slate-100 relative'>
            <Image src={selectedCompany?.logo ? selectedCompany?.logo:'/favicon.ico'} width={50} height={50} alt='company' className=' absolute top-0 left-0 w-full h-full object-cover' />
          </span>
          <select onChange={handleChange} className='py-2 rounded-md min-w-[35%] bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none'>
            <option value="">--- Selectionner une entreprise ---</option>
            {companies?.map(company => (
              <option data-company={JSON.stringify(company)} key={company.id}>{company.title}</option>
            ))}
          </select>
        </div>
      }
      {isLoading && <div className='animate-pulse w-[300px] py-5 rounded-md bg-slate-100'></div>}
    </StepContentBlock>
  )
}

export default SelectCompany