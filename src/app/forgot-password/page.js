"use client";
import React from 'react';
import Link from 'next/link';
import Auth from '@/component/Auth';
import Image from 'next/image';
import Vector from "../../../public/images/vector.png";

export default function Landing() {
  return (
    <React.Fragment>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white">
          <Auth />
          <div className="h-screen flex flex-col justify-center bg-white overflow-auto grid-item p-5 md:p-8">
            <div>
              <a href="/" className="back flex items-center gap-1.5 pb-7">
                <Image src={Vector} alt="" />
                <p className="text-base font-normal text-black hover:text-[#1DAB61] transition duration-300">Back</p>
              </a>
              <h1 className="text-2xl text-black md:text-4xl font-bold text-left pb-1.5">
                Forgot Password
              </h1>
              <p className="text-left text-[#A2A1A8] mb-5">
                Don’t worry! Please enter the email address linked with your account for setting your password.
              </p>
              <div className="group fields mb-5">
                <label className="inline-block pb-2.5 text-black w-full text-base font-medium transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Type your email"
                    className="relative h-14 w-full rounded-lg border text-black bg-white border-[#A2A1A833] pl-10 pr-4 font-thin outline-none transition-all duration-200 ease-in-out focus:ring-2 focus:ring-[#1DAB61]"
                  />
                  <span className="absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-[#1DAB61]">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z" />
                    </svg>
                  </span>
                </div>
              </div>

              <a
                href="/otp-verification"
                className="w-full bg-[#1DAB61] mt-2 mb-5 hover:bg-[#37c77d] transition duration-300 h-14 text-base font-bold rounded-[10px] p-2 uppercase text-white flex items-center justify-center"
              >
                Send OTP
              </a>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
