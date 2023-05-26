import React, { ChangeEvent, FC, useState } from "react";

type CheckboxInputProps = {
  className?: string;
  label: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => any;
  checked?: boolean;
  onClick?: () => any;
  id: any;
};

const CheckboxInput: FC<CheckboxInputProps> = ({
  className = "",
  label,
  handleChange = () => {},
  checked,
  onClick = () => {},
  id,
}) => {
  const [check, setCheck] = useState(checked);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheck(!check);
    handleChange(e);
  };

  return (checked !== undefined) ? (
    <span
      onClick={onClick}
      className={`space-x-2 cursor-pointer text-sm inline-flex col-span-2 justify-start items-center ${className}`}
    >
      <input
        onChange={onChange}
        checked={checked}
        type="checkbox"
        className="capitalize w-5 h-5 border rounded-md  bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none"
      />
      <span className="text-gray-500 font-semibold">{label}</span>
    </span>
  ) : (
    <label
      onClick={onClick}
      htmlFor={`check-${id}`}
      className={`space-x-2 text-sm inline-flex col-span-2 justify-start items-center ${className}`}
    >
      <input
        onChange={onChange}
        checked={check}
        id={`check-${id}`}
        type="checkbox"
        className="capitalize w-5 h-5 border rounded-md  bg-slate-100 border-none ring-0 outline-none focus:ring-0 focus:border-none"
      />
      <span className="text-gray-500 font-semibold">{label}</span>
    </label>
  );
};

export default CheckboxInput;
