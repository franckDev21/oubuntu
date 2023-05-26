import React from "react";

type PencelBtnProps = {
  className?: string;
  onClick?: () => any;
}

const PencelBtn = ({ className = '', onClick = () => {} }:PencelBtnProps) => {
  return (
    <div onClick={onClick} className={`w-4 cursor-pointer mr-2 transform hover:text-purple-500 hover:scale-110 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    </div>
  );
};

export default PencelBtn;
