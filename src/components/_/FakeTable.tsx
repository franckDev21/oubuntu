import React from "react";

const FakeTable = () => {
  return (
    <div className="w-full animate-pulse  items-start justify-start grid grid-cols-4 gap-4 px-6 mt-6">
      <span className="py-4 rounded-md bg-slate-300"></span>
      <span className="py-4 rounded-md bg-slate-300"></span>
      <span className="py-4 rounded-md bg-slate-300"></span>
      <span className="py-4 rounded-md bg-slate-300"></span>
      <span className="py-4 rounded-md bg-slate-300 col-span-4"></span>
      <span className="py-4 rounded-md bg-slate-300 col-span-4"></span>
      <span className="py-4 rounded-md bg-slate-300 col-span-4"></span>
      <span className="py-4 rounded-md bg-slate-300 col-span-4"></span>
      <span className="py-4 rounded-md bg-slate-300 col-span-4"></span>

      <span className="py-4 rounded-md  col-span-2"></span>
      <span className="py-4 rounded-md bg-slate-300 col-span-1"></span>
      <span className="py-4 rounded-md bg-slate-300 col-span-1"></span>
    </div>
  );
};

export default FakeTable;
