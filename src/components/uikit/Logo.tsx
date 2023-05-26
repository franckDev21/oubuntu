import React, { FC } from 'react'

type LogoProps = {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => {
  return (
    <span className={`font-extrabold text-secondary text-xl ${className}`}>OUBUNTU</span>
  )
}

export default Logo