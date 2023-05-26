import React, { FC, ReactNode } from 'react'

type StepContentBlockProps = {
  className?: string;
  children: ReactNode;
  title: string;
}

const StepContentBlock: FC<StepContentBlockProps> = ({ children, title = '', className = '' }) => {
  return (
    <div className={`rounded-md p-2 space-y-4 ${className}`}>
      <h1 className='font-semibold text-gray-500'>{title}</h1>
      {children}
    </div>
  )
}

export default StepContentBlock