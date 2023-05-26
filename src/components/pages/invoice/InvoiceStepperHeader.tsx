import React, { FC, useEffect, useState } from "react";

type InvoiceStepperHeaderProps = {
  className?: string;
  onClick?: (stepNumber: number) => any; 
  step?: number;
}

type StepStateType = "ACTIVE"|"CONPLETE"|"INACTIVE";

interface StepType {
  num: number;
  state: StepStateType;
  label: string;
}

const defaultStepData: StepType[] = [
  { num: 1, state: 'ACTIVE', label: 'Type de formulaire' },
  { num: 2, state: 'INACTIVE', label: 'Entreprise' },
  { num: 3, state: 'INACTIVE', label: 'Model' },
  { num: 4, state: 'INACTIVE', label: 'Facture' },
]

const InvoiceStepperHeader:FC<InvoiceStepperHeaderProps> = ({ className = '', onClick = () => {}, step = 1 }) => {
  const [steps,setSteps] = useState<StepType[]>(defaultStepData);

  const hancleActiveStep = (num: number) => {
    onClick(num);
    updateStepTab(num)
  }

  const updateStepTab = (value: number) => {
    setSteps(steps.map((step,i) => {
      let stepValue: StepStateType = 'INACTIVE'
      if(step.num === value){
        stepValue = 'ACTIVE'
      }
      if(i <= steps.findIndex(s => s.num === value)-1){
        stepValue = 'CONPLETE'
      }
      return {
        ...step,
        state: stepValue
      }
    }))
  }

  useEffect(() => {
    updateStepTab(step)
  }, [step])

  return (
    <header className={`${className} py-2 px-3 rounded-md bg-slate-100 flex items-center space-x-4`}>
      {steps.map((step,i) => (
        <div onClick={() => hancleActiveStep(step.num)} key={i} className="space-x-2 justify-start cursor-pointer flex items-center">
          <span className={`w-10 h-10 font-bold 
            ${step.state === 'CONPLETE' && 'bg-green-400 text-white'} 
            ${step.state === 'ACTIVE' && 'bg-primary text-white'} 
            ${step.state === 'INACTIVE' && 'text-primary bg-white'} 
            rounded-full inline-flex justify-center items-center`}>
            {step.num}
          </span>
          <span className={`
            ${step.state === 'CONPLETE' && 'text-green-400'} 
            ${step.state === 'ACTIVE' && 'text-primary'} 
            ${step.state === 'INACTIVE' && 'text-gray-500'} 
            font-semibold`}>{step.label}</span>
          {((defaultStepData.length - 1) !== i) && <span className={`w-14 border-[1.5px] translate-y-[2px] rounded-lg inline-block 
            ${step.state === 'CONPLETE' ? 'border-green-400':`border-dashed ${step.state === 'ACTIVE' ? 'border-primary':'border-gray-400'}`}`}></span>}
        </div>
      ))}
    </header>
  );
};

export default InvoiceStepperHeader;
