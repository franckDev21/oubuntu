import React, { FC, useEffect, useState } from 'react'
import StepContentBlock from './StepContentBlock';
import { useAuth } from '@/context/AuthProvider';
import Select from "react-select";
import useDataModule from '@/hooks/useDataModule';
import InvoiceItemList from './InvoiceItemList';
import { useInvoice } from '@/context/InvoiceContext';
import { formatDate, getDateForInputDate, getNameModelInvoice } from '@/utils/helper';
import Input from '@/components/uikit/Input';
import InvoiceHeader from './InvoiceHeader';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CheckboxInput from '@/components/uikit/CheckboxInput';
import Image from 'next/image';
import { InvoiceSchema, InvoiceSchemaType } from '@/utils/validation';
import Invoice, { InvoicePostData } from '@/Models/Invoice';
import InvoiceService from '@/services/invoices';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

type InvoiceProps = { className?: string; invoice?: Invoice; }

const Invoice: FC<InvoiceProps> = ({ className = '', invoice }) => {

  const router = useRouter();

  const { user } = useAuth();

  const { company, model, isInter, setIsInter, invoiceItems, setCompany } = useInvoice();

  const [clientId,setClientId] = useState<number|undefined>(undefined);

  const { 
    users,
    trainings, 
    sessions, 
    isLoading, 
    isSessionLoading, 
    setCurrentTraingId,
    setCurrentSessionId,
    currentSession,
    currentTraining,
    companies
  } = useDataModule({company: company});

  const { setCurrentSession, setCurrentTraining } = useInvoice();

  useEffect(() => {
    setCurrentSession(currentSession)
  },[currentSession,setCurrentSession]);

  useEffect(() => {
    setCurrentTraining(currentTraining)
  },[currentTraining,setCurrentTraining]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<InvoiceSchemaType>({
    resolver: yupResolver(InvoiceSchema),
  });

  const onSubmit = async (data: InvoiceSchemaType) => {
    
    let newData: InvoicePostData = {
      title: data.title,
      deadline: data.date_end,
      client_id: clientId ?? 1 ,
      module_ext_id: currentTraining?.id ?? 1,
      company_id: +(company?.id ?? 1),
      user_id: +(user?.id ?? 1),
      invoice_number: "FAC-0001",
      description: data.description ?? '',
      total_amount: invoiceItems.reduce((accumulator, item) => accumulator + (item.total_price ?? 0), 0),
      total_amount_ttc: invoiceItems.reduce((accumulator, item) => accumulator + (item.total_price ?? 0), 0),
      discount: 0,
      total_product_or_service: invoiceItems.length,
      items: invoiceItems.map(item => {
        delete item.state
        delete item.total_price
        return item
      })
    }

    let dataResp = await InvoiceService.create(newData);
    if(dataResp.message){
      toast.success(dataResp.message)
      router.push('/invoices')
    }

  };

  useEffect(() => {
    setValue('date_start',getDateForInputDate());
    setValue('date_end',getDateForInputDate());
    setValue('title',getNameModelInvoice(model ?? 'GENERAL'));
  },[model,user,setValue])


  // s'il y'a une default value on met a jour le state avec ça
  useEffect(() => {
    if(invoice && (companies?.length || 0) > 0){
      setCompany(companies?.find(c => +c.id === +invoice.company_id));

      setValue('title',invoice.title);
      setValue('description',invoice.description);
      setValue('date_start',formatDate(invoice.created_at ?? ''));
      setValue('date_end',invoice.deadline);
    }
  },[invoice,companies,setCompany,setValue]);

  return (
    <StepContentBlock title="Création d'une nouvelle facture" className={`${className} p-4 border-2 border-dashed rounded-md`}>
      <form onSubmit={handleSubmit(onSubmit)} className={` p-2`}>
        <InvoiceHeader />
        
        <div className='mt-5'>
          <h4 className=' font-semibold text-gray-500 pb-5'>Details</h4>

          <div className="grid pb-3 grid-cols-2 gap-3">
            <Input 
              label='Autheur'
              containerClassName='text-gray-500 space-y-2' 
              defaultValue={`${user?.firstname} ${user?.lastname}`}  
              type='text' 
              disabled
              register={register('user_id')}
              isInvalid={!!errors.user_id?.message}
              errorMessage={errors.user_id?.message ?? ""}
              className=' select-none pointer-events-none capitalize rounded-md w-full bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none' 
            />

            <div className='space-y-3 text-sm flex flex-col justify-start items-start w-full'>
              <span className='text-gray-500 font-semibold'>Client</span>
              <Select className='react-select  capitalize rounded-md !w-full bg-slate-100 !border-none ring-0 !outline-none !focus:ring-0 !focus:border-none' options={users?.map(user => {
                return {
                  id: user.id,
                  value: `${user.firstname} ${user.lastname}`,
                  label: `${user.firstname} ${user.lastname}`,
                }
              })} onChange={val => setClientId(+(val?.id || 1))} />
            </div>

            <Input 
              label='Titre/Nom de la facture'
              containerClassName='col-span-2 text-gray-500 space-y-2' 
              defaultValue={getNameModelInvoice(model ?? 'GENERAL')}  
              register={register('title')}
              isInvalid={!!errors.title?.message}
              errorMessage={errors.title?.message ?? ""}
              type='text' 
              disabled={model !== 'GENERAL'}
              className={` ${model !== 'GENERAL' && ' select-none pointer-events-none'} capitalize rounded-md w-full bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none`} 
            />

            <Input 
              label='Date de création'
              containerClassName='text-gray-500 space-y-2' 
              defaultValue={getDateForInputDate()}  
              type='date' 
              disabled
              register={register('date_start')}
              isInvalid={!!errors.date_start?.message}
              errorMessage={errors.date_start?.message ?? ""}
              className='capitalize rounded-md w-full bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none' 
            />

            <Input 
              label='Date delais'
              containerClassName='text-gray-500 space-y-2' 
              defaultValue={getDateForInputDate()}  
              type='date' 
              register={register('date_end')}
              isInvalid={!!errors.date_end?.message}
              errorMessage={errors.date_end?.message ?? ""}
              className='capitalize rounded-md w-full bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none' 
            />

            <CheckboxInput id={'date-delais'} label='Date delais' />

          </div>

        </div>

        <div className='mt-4 pt-5 border-t'>
          <h4 className=' font-semibold text-gray-500 pb-5'>Entreprise</h4>

          <header className='flex justify-between items-start space-x-2 w-full'>
            <div className=' flex flex-col justify-center items-start space-y-2'>
              <span className=' overflow-hidden w-16 h-16 bg-slate-100 rounded-full inline-block relative'>
                <Image className=' absolute w-full h-full left-0 top-0 object-cover' src={company?.logo ? company?.logo: '/favicon.ico' } alt='logo' width={60} height={60} />
              </span>
              <span className=' items-start flex-col space-y-[0.5px] inline-flex'>
                <span className=' text-xs font-semibold text-gray-500'>{company?.title}</span>
                <span className=' text-xs font-semibold text-gray-500'>{company?.email}</span>
              </span>
            </div>

            <div className='items-start justify-end space-x-2 flex flex-grow'>
              <h3 className='text-lg font-semibold text-gray-500'>#Pour : </h3>
              <div className='relative flex flex-col space-y-2 overflow-hidden'>
                <select onChange={e => setCurrentTraingId((e.target.value ? +e.target.value : undefined))} className='py-2 rounded-md w-full bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none'>
                  <option value="">--- Séléctionnez une formation ---</option>
                  {trainings?.map((training,i) => (
                    <option key={i} value={training.id}>{training.title}</option>
                  ))}
                </select>

                {!isSessionLoading && 
                  <select onChange={e => setCurrentSessionId((e.target.value ? +e.target.value : undefined))} className='py-2 rounded-md w-full bg-primary text-white border-none ring-0 outline-none focus:ring-0 focus:border-none'>
                    <option value="">--- Séléctionnez une session ---</option>
                    {sessions?.map((session,i) => (
                      <option key={i} value={session.id}>{session.city} | {session.start} - {session.end}</option>
                    ))}
                  </select>
                }
                {(isLoading || isSessionLoading) && <div className='py-5 mt-3 rounded-md bg-slate-100'></div>}
                <CheckboxInput id={'is-inter'} checked={isInter} onClick={() =>setIsInter(!isInter)} label='En externe' />
              </div>
            </div>
          </header>

          {/* items */}
          <InvoiceItemList />

          <div className='space-y-2 mt-6 text-sm flex flex-col justify-start items-start w-full'>
            <span className='text-gray-500 font-semibold'>Description</span>
            <textarea {...register('description')} rows={4} placeholder='Entrer une description...' className='capitalize rounded-md !w-full bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none'></textarea>
            {!!errors.description?.message && <span className=' text-red-500 pt-1'>{errors.description?.message}</span>}
          </div>
          
          <div className="flex justify-end pt-10">
            <button type='submit' disabled={invoiceItems.length === 0 || !clientId} className={`px-4 py-2 bg-green-500 font-semibold rounded-lg text-white ${(invoiceItems.length === 0 || !clientId) && 'opacity-40 select-none pointer-events-none'}`}>
             {isSubmitting ? "Enregistrement...":" Crée la facture"}
            </button>
          </div>

        </div>
      </form>
    </StepContentBlock>
  )
}

export default Invoice;