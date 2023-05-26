import PublicLayout from '@/components/layouts/PublicLayout'
import FAQBlock from '@/components/pages/home/FAQBlock'
import Session from '@/components/pages/home/Session'
import Stepper from '@/components/pages/home/Stepper'
import StepperMarket from '@/components/pages/home/StepperMarket'
import { NextPage } from 'next'
import React from 'react'

const HomePage: NextPage = () => {
  return (
    <PublicLayout>
      
      {/* Stepper */}
      <Stepper />

      <StepperMarket />

      <Session />

      <FAQBlock />

      
    </PublicLayout>
  )
}

export default HomePage