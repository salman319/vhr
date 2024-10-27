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

          <div className='h-screen overflow-auto grid-item p-5 md:p-8'>
            <div className='bg-white shadow-custom rounded-[60px] p-4 md:p-6'>
              <h1 className='text-2xl md:text-4xl font-bold text-center pb-8'>Forgot Password</h1>
              <p className='text-center mb-5'>
                Don’t worry! Please enter the email address linked with your account for setting your password.
              </p>
              <div className="group fields mb-5">
                <label
                  className="inline-block w-full text-base font-medium text-balck transition-all duration-200 ease-in-out group-focus-within:text-primary"
                >
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='Type your email'
                    className="relative h-10 w-full rounded-lg border bg-white border-gray pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-primary focus:drop-shadow-lg"
                  />
                  <span className=" absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-primary">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
                    </svg>
                  </span>
                </div>
              </div>

              <button className='bg-green-gradient mt-2 mb-5 hover:bg-hover-gradient text-base font-bold rounded-full p-2 w-full uppercase text-white'>
                Send OTP
              </button>

            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}
