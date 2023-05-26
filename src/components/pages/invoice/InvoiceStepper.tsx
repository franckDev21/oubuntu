import React, { FC, useState } from "react";
import InvoiceStepperHeader from "./InvoiceStepperHeader";
import SelectInvoiceType from "./SelectInvoiceType";
import SelectCompany from "./SelectCompany";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import SelectInvoiceModule from "./SelectInvoiceModule";
import Invoice from "./Invoice";
import { InvoiceProvider } from "@/context/InvoiceContext";

type InvoiceStepperProps = {
  className?: string;
};

const INVISIBLE_CLASSES = "opacity-0 scale-0 w-0 h-0 absolute";

const InvoiceStepper: FC<InvoiceStepperProps> = ({ className = "" }) => {
  const [stepNumber, setStepNumber] = useState(1);

  const prev = () => setStepNumber((step) => step - 1);
  const next = () => setStepNumber((step) => step + 1);

  return (
    <InvoiceProvider>
      <div className={`${className} py-3 border px-6 mt-4 rounded-lg`}>
        {/* HEADER - Stepper */}
        <InvoiceStepperHeader
          className="mb-5"
          step={stepNumber}
          onClick={(step) => setStepNumber(step)}
        />

        {/* CONTENT - Stepper */}
        <SelectInvoiceType
          className={`${stepNumber !== 1 && INVISIBLE_CLASSES}`}
        />

        <SelectCompany className={`${stepNumber !== 2 && INVISIBLE_CLASSES}`} />

        <SelectInvoiceModule
          className={`mt-4 ${stepNumber !== 3 && INVISIBLE_CLASSES}`}
        />

        <Invoice
          className={`${stepNumber !== 4 && "opacity-0 scale-0 w-0 h-0"}`}
        />

        {/* FOOTER - Stepper */}
        <div className="space-x-2 mt-6">
          <button
            onClick={prev}
            className={`px-4 py-1 ${
              stepNumber === 1 && "opacity-40 select-none pointer-events-none"
            } bg-primary text-white font-bold rounded-lg inline-flex items-center space-x-2`}
          >
            <span className="translate-y-[1.5px]">
              <MdOutlineNavigateBefore />{" "}
            </span>
            <span>Etape précédente</span>
          </button>

          <button
            onClick={next}
            className={`px-4 py-1 ${
              stepNumber === 4 && "opacity-40 select-none pointer-events-none"
            } bg-primary text-white font-bold rounded-lg inline-flex items-center space-x-2`}
          >
            <span>Etape suivante</span>
            <span className="translate-y-[1.5px]">
              <MdOutlineNavigateNext />
            </span>
          </button>
        </div>
      </div>
    </InvoiceProvider>
  );
};

export default InvoiceStepper;
