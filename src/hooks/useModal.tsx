import { useState } from "react";

const useModal = () => {
  const [show, setShow] = useState(false);
  const [showTrue, setShowTrue] = useState(true);
  const [value, setValue] = useState<any>(0)

  const closeModal = () => setShow(false);
  const closeModalTrue = () => setShowTrue(false);
  const openModal = () => setShow(true);

  const doAction = (val: any, callback: (val: any) => void) => {
    callback(value);
    setValue(val)
  };

  return {
    show,
    showTrue,
    openModal,
    closeModal,
    closeModalTrue,
    doAction,
    value
  }
};

export default useModal;
