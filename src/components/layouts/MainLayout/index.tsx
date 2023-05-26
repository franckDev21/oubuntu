import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from "@/context/AuthProvider";

type MainLayoutProps = {
  children: ReactNode;
  className?: string;
};

const index: FC<MainLayoutProps> = ({ children, className = '' }) => {
  return (
    <AuthProvider>
       <main className={` h-screen relative bg-secondary w-full flex`}>
        <Navbar />
        <Content className={`${className}`}>{children}</Content>
        <ToastContainer />
      </main>
   </AuthProvider>
  );
};

export default index;
