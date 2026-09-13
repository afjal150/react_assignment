import React from 'react';
import logo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div className=' container mx-auto mt-15 flex gap-4 justify-between border-[#F1F5F9]'>
            <div className='ml-9'>
                <img src={logo}></img>
                <p className='mt-3  text-[#8a8c91]'>Curated tools,Technologies and resources for developers building<br></br> modern software.</p>
                <div className='flex gap-5 mt-5'>
                    <button className='text-[18px]'>Github</button>
                    <button>Twitter</button>
                    <button>Linkedin</button>
                </div>
            </div>
            <div className=''><h5 className='font-bold mb-2 '> PRODUCT </h5>
                <ul>
                <li  className=' text-[#8a8c91]'>Home
                </li>
                <li  className=' text-[#8a8c91]'>Technologies
                </li>
                <li  className=' text-[#8a8c91]'>Projects
                </li>
                </ul></div>
            <div className='mr-5'><h5 className='font-bold mb-2'> COMPANY </h5><ul>
                <li className=' text-[#8a8c91]'>About
                </li>
                <li  className=' text-[#8a8c91]'>Contact
                </li>
                <li  className=' text-[#8a8c91]'>Careers
                </li>
                </ul></div>
            <div className='mr-40'><h5 className='font-bold mb-2'> LEGAL </h5><ul>
                <li  className=' text-[#8a8c91]'>Privacy Policy
                </li>
                <li  className=' text-[#8a8c91]'>
                    Terms of Service
                </li>
                </ul></div>

        </div>
    );
};

export default Footer;