"use client";
import React from 'react';
import Link from 'next/link';
import Auth from '@/component/Auth';
import Image from 'next/image';
import Logo from "../../../public/images/logo.png"

export default function Landing() {
  return (
    <React.Fragment>
      <main>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center  bg-white'>
          <Auth />
          <div className='h-screen flex flex-col justify-center bg-white overflow-auto p-5 md:p-8'>
            <div className=''>
              {/* Image before heading */}
              <div className="flex justify-center mb-8">
                <Image
                  src={Logo}
                  alt="Landing Image"
                  width={240}
                  height={180}
                />
              </div>

              <h1 className='text-xl text-black md:text-4xl font-bold text-left pb-8'>
                Welcome to ABC Solicitors
              </h1>

              {/* Email input field */}
              <div className="group fields mb-5">
                <label className="inline-block text-black pb-2.5 w-full text-base font-medium transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='Type your email'
                    className="relative h-14 text-black w-full rounded-lg border bg-white border-[#A2A1A833] pl-10 pr-4 font-thin outline-none transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61]"
                  />
                  <span className="absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Password input field */}
              <div className="group fields mb-2">
                <label className="inline-block text-black pb-2.5 w-full text-base font-medium transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    placeholder='Type your password'
                    className="relative h-14 text-black w-full rounded-lg border bg-white border-[#A2A1A833] pl-10 pr-4 font-thin outline-none transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61]"
                  />
                  <span className="absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M86.4,480h339.2c12.3,0,22.4-9.9,22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4C335.1,49.9,297.4,32,256.1,32c-0.1,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-41.3,0-79,17.9-105.3,45.6c-26.4,27.8-42.6,73.9-42.6,115.4V224H89h-2.6C74,224,64,233.9,64,246v211.9C64,470.1,74,480,86.4,480z M161,193.1c0-27.3,9.9-61.1,28.1-80.3l0,0l0-0.3C206.7,93.9,231,83,255.9,83h0.1h0.1c24.9,0,49.2,10.9,66.8,29.5l0,0.2l-0.1,0.1c18.3,19.2,28.1,53,28.1,80.3V224h-17.5h-155H161V193.1z" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Remember Me Checkbox & Forgot Password Link */}
              <div className="flex items-center justify-between w-full mb-4 mt-5">
                <label className="inline-flex items-center text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[#1DAB61] rounded text-white bg-[#1DAB61] checked:bg-[#1DAB61] checked:text-white"
                  />
                  <span className="ml-2 text-black font-inter">Remember Me</span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-black hover:text-[#37c77d] font-medium text-sm"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button className='bg-[#1DAB61] mt-5 hover:bg-[#37c77d] h-14 text-base font-bold rounded-[10px] transition duration-300 p-2 w-full uppercase text-white'>
                Login
              </button>

              {/* Sign Up Link */}
              <div className='text-center text-black text-base py-5'>
                Don't have an account?
                <Link href={'/signup'} className='text-[#1DAB61] underline hover:text-[#37c77d] transition duration-300 pl-1'>
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
