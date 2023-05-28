/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {  } from 'react-icons'
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="py-20 px-20 bg-primary text-white">
      <div className="container space-y-5">
        <h2 className="uppercase font-bold text-2xl">Oubuntu</h2>
        <div className=" flex items-start justify-between ">
          <div>
            <p>Police de confidentialité</p>
            <div className=" space-x-4 flex py-6">
              <FaFacebookF />
              <BsInstagram />
              <BsTwitter />
              <FaLinkedinIn />
            </div>
          </div>
          <div>
            <h4 className=" uppercase space-y-4 pb-6 font-semibold text-xl">Obuntu</h4>
            <ul className="space-y-2">
              <li>Qui somme nous ?</li>
              <li>Centre d'aide</li>
              <li>Nouvelles recentes</li>
            </ul>
          </div>
          <div>
            <h4 className=" uppercase space-y-4 pb-6 font-semibold text-xl">Producteurs</h4>
            <ul className="space-y-2">
              <li>Qui somme nous ?</li>
              <li>Centre d'aide</li>
              <li>Nouvelles recentes</li>
            </ul>
          </div>
          <div>
            <h4 className=" uppercase space-y-4 pb-6 font-semibold text-xl">Resources</h4>
            <ul className="space-y-2">
              <li>Qui somme nous ?</li>
              <li>Centre d'aide</li>
              <li>Nouvelles recentes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
