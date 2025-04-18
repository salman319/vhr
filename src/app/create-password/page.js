"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Auth from '@/component/Auth';
import Image from 'next/image';
import Vector from "../../../public/images/vector.png";
import Welcome from "../../../public/images/welcome.png";

export default function Login() {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleResetPassword = () => {
    setShowPopup(true);
  };

  const handleBackToLogin = () => {
    router.push('/');
  };

  return (
    <React.Fragment>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white">
          <Auth />
          <div className='h-screen flex flex-col justify-center bg-white overflow-auto grid-item p-5 md:p-8'>
            <div className=''>
              <a href="/otp-verification" className="back flex items-center gap-1.5 pb-7">
                <Image src={Vector} alt="" />
                <p className="text-base font-normal text-black hover:text-[#1DAB61] transition duration-300">Back</p>
              </a>
              <h1 className='text-2xl text-black md:text-4xl font-bold text-left pb-1.5'>Reset Password</h1>
              <p className='text-left text-[#A2A1A8] mb-5'>
                Reset your new password
              </p>

              {/* New Password Field */}
              <div className="group fields">
                <label className="inline-block text-black w-full text-base font-medium transition-all duration-200 ease-in-out">
                  New Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    placeholder='New password'
                    className="relative h-14 w-full text-black rounded-lg border bg-white border-[#A2A1A833] pl-10 pr-9 font-thin outline-none focus:ring-2 focus:ring-[#1DAB61]"
                  />
                  <span className=" absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg
                      viewBox="0 0 512 512"
                    >
                      <path d="M86.4,480h339.2c12.3,0,22.4-9.9,22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4  C335.1,49.9,297.4,32,256.1,32c-0.1,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-41.3,0-79,17.9-105.3,45.6c-26.4,27.8-42.6,73.9-42.6,115.4V224  H89h-2.6C74,224,64,233.9,64,246v211.9C64,470.1,74,480,86.4,480z M161,193.1c0-27.3,9.9-61.1,28.1-80.3l0,0l0-0.3  C206.7,93.9,231,83,255.9,83h0.1h0.1c24.9,0,49.2,10.9,66.8,29.5l0,0.2l-0.1,0.1c18.3,19.2,28.1,53,28.1,80.3V224h-17.5h-155H161  V193.1z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div class="flex items-center justify-between w-full mt-[10px]">
                <span class="text-[#1DAB61] font-medium text-xs">Strong</span>
                <div class="flex gap-1">
                  <div class="h-1 w-10 rounded-full bg-[#1DAB61]"></div>
                  <div class="h-1 w-10 rounded-full bg-[#1DAB61]"></div>
                  <div class="h-1 w-10 rounded-full bg-[#A2A1A833]"></div>
                </div>
              </div>
              {/* Confirm Password Field */}
              <div className="group fields mb-5 mt-[30px]">
                <label className="inline-block text-black w-full text-base font-medium transition-all duration-200 ease-in-out">
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type="password"
                    placeholder='Confirm password'
                    className="relative h-14 w-full text-black rounded-lg border bg-white border-[#A2A1A833] pl-10 pr-9 font-thin outline-none focus:ring-2 focus:ring-[#1DAB61]"
                  />
                  <span className=" absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg
                      viewBox="0 0 512 512"
                    >
                      <path d="M86.4,480h339.2c12.3,0,22.4-9.9,22.4-22.1V246c0-12.2-10-22-22.4-22H404v-30.9c0-41.5-16.2-87.6-42.6-115.4  C335.1,49.9,297.4,32,256.1,32c-0.1,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-41.3,0-79,17.9-105.3,45.6c-26.4,27.8-42.6,73.9-42.6,115.4V224  H89h-2.6C74,224,64,233.9,64,246v211.9C64,470.1,74,480,86.4,480z M161,193.1c0-27.3,9.9-61.1,28.1-80.3l0,0l0-0.3  C206.7,93.9,231,83,255.9,83h0.1h0.1c24.9,0,49.2,10.9,66.8,29.5l0,0.2l-0.1,0.1c18.3,19.2,28.1,53,28.1,80.3V224h-17.5h-155H161  V193.1z" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Policy Info */}
              <label className="inline-block mt-[30px] text-black w-full text-base font-medium">
                Privacy Policy
              </label>
              <p className='text-left text-[#A2A1A8] mt-[10px]'>
                Password must contain at least - 1 lowercase character, 1 number, 1 uppercase character, 1 special symbol, minimum 8 characters.
              </p>

              {/* Reset Password Button */}
              <button
                onClick={handleResetPassword}
                className="w-full bg-[#1DAB61] mt-7 mb-5 hover:bg-[#37c77d] transition duration-300 h-14 text-base font-bold rounded-[10px] p-2 uppercase text-white flex items-center justify-center"
              >
                Reset Password
              </button>

              {/* Popup */}
              {showPopup && (
                <div className="fixed inset-0 bg-[#000000b0] backdrop-blur-lg flex items-center justify-center z-50">
                  <div className="welcome w-96 h-[360px] flex flex-col items-center border bg-white border-[#A2A1A84D] rounded-[30px] px-4 py-4">
                    <Image src={Welcome} alt="Welcome" className="mt-3.5" />
                    <h3 className="text-2xl text-black font-semibold text-center pt-3.5">
                      Password Updated Successfully
                    </h3>
                    <p className="text-xs  font-light pt-1 text-center text-black">
                      Your password has been updated successfully
                    </p>
                    <button
                      onClick={handleBackToLogin}
                      className="border border-[#1DAB61] bg-[#1DAB61] hover:bg-[#33c77a] mt-10 p-4 h-[55px] w-full flex items-center justify-center text-base font-bold rounded-md transition duration-300"
                    >
                      <span className="text-white">Back to Login</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
