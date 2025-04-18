"use client";
import React from 'react';
import Link from 'next/link';
import Auth from '@/component/Auth';
import Image from 'next/image';
import Vector from "../../../public/images/vector.png";

export default function Login() {
  return (
    <React.Fragment>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white">
          <Auth />
          <div className='h-screen flex flex-col justify-center bg-white overflow-auto grid-item p-5 md:p-8'>
            <div className=''>
              <a href="/forgot-password" className="back flex items-center gap-1.5 pb-7">
                <Image src={Vector} alt="" />
                <p className="text-base font-normal text-black hover:text-[#1DAB61] transition duration-300">Back</p>
              </a>
              <h1 className='text-2xl text-black md:text-4xl font-bold text-left pb-1.5'>Enter OTP</h1>
              <p className='text-left text-[#A2A1A8] mb-5'>
                We have share a code of your registered email address
                robertallen@example.com
              </p>
              <div className="group flex justify-between gap-3 fields mb-5 mt-7">

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative text-black lg:h-[60px] md:h-[40px]  lg:w-[60px] md:w-[40px] h-[35px] w-[35px]  text-center rounded-lg border bg-white border-[#A2A1A833] p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61] "
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative text-black lg:h-[60px] md:h-[40px]  lg:w-[60px] md:w-[40px] h-[35px] w-[35px] text-center rounded-lg border bg-white border-[#A2A1A833] p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61] "
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative text-black lg:h-[60px] md:h-[40px]  lg:w-[60px] md:w-[40px] h-[35px] w-[35px]  text-center rounded-lg border bg-white border-[#A2A1A833] p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61] "
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative text-black lg:h-[60px] md:h-[40px]  lg:w-[60px] md:w-[40px] h-[35px] w-[35px]  text-center rounded-lg border bg-white border-[#A2A1A833] p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61] "
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative text-black lg:h-[60px] md:h-[40px]  lg:w-[60px] md:w-[40px] h-[35px] w-[35px]  text-center rounded-lg border bg-white border-[#A2A1A833] p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61] "
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative text-black lg:h-[60px] md:h-[40px]  lg:w-[60px] md:w-[40px] h-[35px] w-[35px]  text-center rounded-lg border bg-white border-[#A2A1A833] p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61] "
                  />
                </div>
              </div>

              <a
                href="/create-password"
                className="w-full bg-[#1DAB61] mt-7 mb-5 hover:bg-[#37c77d] transition duration-300 h-14 text-base font-bold rounded-[10px] p-2 uppercase text-white flex items-center justify-center"
              >
                Verify
              </a>

              {/* <div className='text-center text-black text-base py-5'>
                Didn’t receive code?
                <Link href={'/signup'} className='text-[#1DAB61] underline hover:text-[#37c77d] pl-1'>
                  Resend
                </Link>
              </div> */}

            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
