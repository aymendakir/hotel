"use client";
import Logo from "./Logo";
import React, {useState} from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import {Link} from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";



export default function Navbar() {
  const [isactiv,setIsactiv]= useState(false)
  const [isactiv2,setIsactiv2]= useState(false)


  return (
    <>
      <nav className="w-[80%] flex justify-between items-center mt-5  pb-5 mx-auto">
        <Logo />
        <div className="flex space-x-10 md:space-x-14 items-center">

            <ul className="  md:hidden flex space-x-12 items-center  font_home  ">
                <li className=" capitalize text-black hover:text-gray-600 font-medium text-xl mr-2 relative after:absolute after:top-1 after:-right-7  after:w-[1.5px] after:rounded-full after:opacity-45 after:h-5 after:bg-gray-500">
                    <Link to="/">home</Link>
                </li>

                <li className=" capitalize text-black hover:text-gray-600 font-medium text-xl mr-2 relative after:absolute after:top-1 after:-right-7  after:w-0.5 after:rounded-full after:opacity-45 after:h-5 after:bg-gray-500">
                    <Link to="#">shop</Link>
                </li>

                <li className="  text-blue-400 font-medium px-3 py-1.5  rounded-md hover:bg-blue-300 hover:text-amber-50 cursor-pointer text-lg ">
                    Sign in
                </li>
                <li className="  capitalize px-3 py-2  text-blue-400 font-semibold border-2 border-blue-400 rounded-md hover:bg-blue-300 hover:text-black cursor-pointer">
                    creat account
                </li>
            </ul>
            <ul className="md:space-x-3  flex space-x-7 items-center -ml-14"
            >
                <li className="text-3xl cursor-pointer">
                    <Link to="/Cart">
                        <AiOutlineShoppingCart/>
                    </Link>
                </li>
            <li className="text-3xl cursor-pointer"  onClick={e => {
              if (window.innerWidth <= 980){
                setIsactiv(!isactiv)
                setIsactiv2(false)
              }
             else if (window.innerWidth >= 981) {
                setIsactiv2(!isactiv2)
                setIsactiv(false)

              }
              /*************************************nabscrol**************************************/


            }}>
              <RxHamburgerMenu />
            </li>

              {isactiv &&
                  /**************************nav parameter*****************************/

                  (
                    <div id="naviconmob"
                         className=" md:absolute md:w-full md:h-full md:top-0 md:right-0 md:border-2 md:bg-[#F9F8F8] z-20 md:flex flex-col  hidden   "

                         >
                      <div className="md:top-0 text-webkit-right md:mt-2 md:mr-2 md:text-5xl cursor-pointer md:block hidden " onClick={e =>
                          setIsactiv(false)
                      }>
                        <MdOutlineClose/>


                      </div>
                      <div className="flex flex-col justify-center items-center w-full ">
                        <span className="uppercase text-start py-1.5 bg-gray-300 w-full font-semibold pl-1.5 ">sign in</span>
                        <Link to="" className="font-medium border-2 borde_color my-8 px-24 py-1.5 rounded-lg bg-bg">Sign in</Link>
                        <Link to="" className="font-medium border-2 borde_color mb-8 px-24 py-1.5 rounded-lg text-white bg-bgr">Creat account</Link>
                        <span className="uppercase text-start py-1.5 bg-gray-300 w-full font-semibold pl-1.5">settings</span>

                      </div>
                    </div>)}

            {isactiv2 &&(<div id="profileshow"   className=" " >
                persson
              </div>)}

          </ul>
        </div>

      </nav>
    </>
  );
}
