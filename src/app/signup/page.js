"use client";
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Auth from '@/component/Auth';
export default function Signup() {
  return (
    <React.Fragment>
      <main>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center bg-white'>
          <Auth />

          <div className='h-screen bg-white overflow-auto grid-item p-5 md:p-8'>
            <div className='rounded-[20px]  '>
              <h1 className='text-2xl text-black md:text-4xl font-bold text-center pb-8'>Sign Up</h1>
              <div className="group fields mb-5">
                <label
                  className="inline-block pb-2.5 text-black w-full text-base font-medium text-balck transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]"
                >
                  Name
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='Type your name'
                    className="relative h-14 text-black   w-full rounded-[10px] border bg-white border-[#A2A1A833] pl-10 pr-4 font-thin outline-none  transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61]"
                  />
                  <span className=" absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg className='w-5' viewBox="0 0 512 512">
                      <path d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="group fields mb-5">
                <label
                  className="inline-block pb-2.5 text-black w-full text-base font-medium text-balck transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]"
                >
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder='Type your email'
                    className="relative h-14 text-black w-full rounded-lg border bg-white border-[#A2A1A833] pl-10 pr-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61] "
                  />
                  <span className=" absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="group fields mb-5">
                <label
                  className="inline-block pb-2.5 text-black w-full text-base font-medium text-balck transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    placeholder='Type your password'
                    className="relative h-14 text-black w-full rounded-lg border bg-white border-[#A2A1A833] pl-10 pr-9 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61] "
                  />
                  <span className=" absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg
                      viewBox="0 0 512 512"
                    >
                      <path d="M86.4,480h339.2c12.3,0,22.4-9.9,22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4  C335.1,49.9,297.4,32,256.1,32c-0.1,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-41.3,0-79,17.9-105.3,45.6c-26.4,27.8-42.6,73.9-42.6,115.4V224  H89h-2.6C74,224,64,233.9,64,246v211.9C64,470.1,74,480,86.4,480z M161,193.1c0-27.3,9.9-61.1,28.1-80.3l0,0l0-0.3  C206.7,93.9,231,83,255.9,83h0.1h0.1c24.9,0,49.2,10.9,66.8,29.5l0,0.2l-0.1,0.1c18.3,19.2,28.1,53,28.1,80.3V224h-17.5h-155H161  V193.1z" />
                    </svg>
                  </span>
                  <span className=" absolute right-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="M256,128c-81.9,0-145.7,48.8-224,128c67.4,67.7,124,128,224,128c99.9,0,173.4-76.4,224-126.6   C428.2,198.6,354.8,128,256,128z M256,347.3c-49.4,0-89.6-41-89.6-91.3c0-50.4,40.2-91.3,89.6-91.3s89.6,41,89.6,91.3   C345.6,306.4,305.4,347.3,256,347.3z" />
                        <g>
                          <path d="M256,224c0-7.9,2.9-15.1,7.6-20.7c-2.5-0.4-5-0.6-7.6-0.6c-28.8,0-52.3,23.9-52.3,53.3c0,29.4,23.5,53.3,52.3,53.3    s52.3-23.9,52.3-53.3c0-2.3-0.2-4.6-0.4-6.9c-5.5,4.3-12.3,6.9-19.8,6.9C270.3,256,256,241.7,256,224z" />
                        </g>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="group fields mb-5">
                <label
                  className="inline-block text-black w-full pb-2.5 text-base font-medium text-balck transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]"
                >
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    placeholder='Confirm password'
                    className="relative h-14 text-black w-full rounded-lg border bg-white border-[#A2A1A833] pl-10 pr-9 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#1DAB61] "
                  />
                  <span className=" absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg
                      viewBox="0 0 512 512"
                    >
                      <path d="M86.4,480h339.2c12.3,0,22.4-9.9,22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4  C335.1,49.9,297.4,32,256.1,32c-0.1,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-41.3,0-79,17.9-105.3,45.6c-26.4,27.8-42.6,73.9-42.6,115.4V224  H89h-2.6C74,224,64,233.9,64,246v211.9C64,470.1,74,480,86.4,480z M161,193.1c0-27.3,9.9-61.1,28.1-80.3l0,0l0-0.3  C206.7,93.9,231,83,255.9,83h0.1h0.1c24.9,0,49.2,10.9,66.8,29.5l0,0.2l-0.1,0.1c18.3,19.2,28.1,53,28.1,80.3V224h-17.5h-155H161  V193.1z" />
                    </svg>
                  </span>
                  <span className=" absolute right-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="M256,128c-81.9,0-145.7,48.8-224,128c67.4,67.7,124,128,224,128c99.9,0,173.4-76.4,224-126.6   C428.2,198.6,354.8,128,256,128z M256,347.3c-49.4,0-89.6-41-89.6-91.3c0-50.4,40.2-91.3,89.6-91.3s89.6,41,89.6,91.3   C345.6,306.4,305.4,347.3,256,347.3z" />
                        <g>
                          <path d="M256,224c0-7.9,2.9-15.1,7.6-20.7c-2.5-0.4-5-0.6-7.6-0.6c-28.8,0-52.3,23.9-52.3,53.3c0,29.4,23.5,53.3,52.3,53.3    s52.3-23.9,52.3-53.3c0-2.3-0.2-4.6-0.4-6.9c-5.5,4.3-12.3,6.9-19.8,6.9C270.3,256,256,241.7,256,224z" />
                        </g>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <button className='bg-[#1DAB61] h-14  hover:bg-[#37c77d] transition duration-300 text-base font-bold rounded-[10px] p-2 w-full uppercase text-white'>
                Sign Up
              </button>
              <div className='text-base text-center relative lines text-black my-5'>Or continue</div>

              <div className='flex gap-5 items-center justify-center'>
                <button className='border-2 rounded-lg border-light w-[60px] h-[60px] flex justify-center items-center hover:border-[#1DAB61] transition duration-300'>
                  <Image width={100} height={100} src='/images/google.svg' alt='Media' className='w-10' />
                </button>

                <button className='border-2 rounded-lg border-light w-[60px] h-[60px] flex justify-center items-center hover:border-[#1DAB61] transition duration-300'>
                  <Image width={100} height={100} src='/images/apple.svg' alt='Media' className='w-8' />
                </button>

                <button className='border-2 rounded-lg border-light w-[60px] h-[60px] flex justify-center items-center hover:border-[#1DAB61] transition duration-300'>
                  <Image width={100} height={100} src='/images/fb.svg' alt='Media' className='w-6' />
                </button>
              </div>

              <div className='text-center text-base text-black py-5'>
                Already have an account?
                <Link href={'/'} className='text-[#1DAB61] underline hover:text-[#37c77d] pl-1'>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}
