import CompanyForm from '@/components/pages/company/CompanyForm';
import CompanyService from '@/services/companies';
import { useQuery } from '@tanstack/react-query';
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const EditCompany: NextPage = () => {
  const router = useRouter();
  const { company_id } = router.query
  
  const { data: company } = useQuery({
    enabled: !!company_id,
    queryFn: () => CompanyService.getOne(+(company_id ?? 1)),
    queryKey: ['company',+(company_id ?? 1)]
  })

  return (
    <CompanyForm defaultCompany={company} />
  )
}

export default EditCompany