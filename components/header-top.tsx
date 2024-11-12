import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function HeaderTop() {
  return (
    <div className='border-b border-gray-200 hidden sm:block '>
        <div className='container py-4'>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex gap-1'>
                    <div className="header_top__icon_wrapper">
                        <BsFacebook/>
                    </div>
                    <div className="header_top__icon_wrapper">
                    <FaSquareXTwitter />
                    </div>
                    <div className="header_top__icon_wrapper">
                    <FaLinkedin />
                    </div>
                    <div className="header_top__icon_wrapper">
                    <FaSquareInstagram />
                    </div>
                </div>

                <div className='text-gray-500 text-[12px]'>
                    <b>FREE SHIPPING</b>: THIS WEEK ORDER OVER - $55
                </div>

                <div className='flex gap-4'>
                    <select className='text-gray-500 text-[12px] w-[70px]'
                     name="currency" 
                     id="currency">
                        <option value="USD $">USD $</option>
                        <option value="EUR €">EUR €</option>
                        <option value="PKR">PKR</option>
                     </select>

                     <select className='text-gray-500 text-[12px] w-[80px]'
                     name="language" 
                     id="language">
                        <option value="english">English</option>
                        <option value="french">French</option>
                     </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop
