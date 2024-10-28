"use client";
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
export default function Login() {
  return (
    <React.Fragment>
      <main>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='welcome-sec grid-item flex justify-center items-center flex-col gap-5'>
            <div className='flex justify-center'>
              <Image width={100} height={100} src='/images/logo.png' alt='Media' className='w-40' />
            </div>
            <div>
              <h1 className='text-3xl font-bold text-white md:text-6xl text-center'>
                Welcome to VHR
              </h1>
            </div>
            <div className='text-center text-[18px] px-8 text-white'>
              Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
            </div>
            <div className='flex justify-center'>
              <button className='rounded-full py-2 px-2 md:px-5 bg-green hover:bg-primary text-white text-base'>
                www.virtuallegaloffice.ai
              </button>
            </div>
          </div>

          <div className='h-screen bg-white overflow-auto grid-item p-5 md:p-8'>
            <div className='bg-white shadow-custom rounded-[60px] p-4 md:p-6'>
              <h1 className='text-2xl text-black md:text-4xl font-bold text-center pb-8'>OTP Verification</h1>
              <p className='text-center mb-5'>
                Enter the verification code we just sent on your email address for setting your password.
              </p>
              <div className="group fields mb-5">

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative h-10 w-10 text-center rounded-lg border bg-white border-gray p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-primary focus:drop-shadow-lg"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative h-10 w-10 text-center rounded-lg border bg-white border-gray p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-primary focus:drop-shadow-lg"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative h-10 w-10 text-center rounded-lg border bg-white border-gray p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-primary focus:drop-shadow-lg"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative h-10 w-10 text-center rounded-lg border bg-white border-gray p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-primary focus:drop-shadow-lg"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative h-10 w-10 text-center rounded-lg border bg-white border-gray p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-primary focus:drop-shadow-lg"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='-'
                    className="relative h-10 w-10 text-center rounded-lg border bg-white border-gray p-1 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-primary focus:drop-shadow-lg"
                  />
                </div>
              </div>

              <button className='bg-green-gradient mt-2 hover:bg-hover-gradient text-base font-bold rounded-full p-2 w-full uppercase text-white'>
                Verify
              </button>

              <div className='text-center text-base py-5'>
                Didn’t receive code?
                <Link href={'/signup'} className='text-primary underline hover:text-green pl-1'>
                  Resend
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}
