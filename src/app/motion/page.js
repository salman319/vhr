"use client";
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
export default function Motion() {
  return (
    <React.Fragment>
      <main>
        <header className="header">
          <div className="shell max-w-[1100px] md:max-w-[1380px] m-auto px-[50px] py-0">
            <div className="header-inner">
              <a href="https://motion-software.com" className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.99 143.24">
                  {" "}
                  <g>
                    {" "}
                    <polygon points="46.72 101.94 52.54 78.29 22.02 77.04 71.56 34.63 62.86 33.31 71.77 0 99.63 0 119.04 23.01 153.35 0 187.53 0 183.25 20.66 211.99 21.59 161.32 65.44 169.72 66.9 162.47 101.94 129.64 101.94 137.42 66.08 107.18 88.12 89.04 66.08 80.4 101.94 46.72 101.94" />{" "}
                    <g>
                      {" "}
                      <path d="M3.67,129.32H6.79l2,5.78,5.1-5.78h3.48L13.67,143h-3L13,134.07l-5.35,5.84H7.58l-2.19-5.78L3,143H0Z" />{" "}
                      <path d="M18.27,137.17a8.16,8.16,0,0,1,8.22-8.08,5.91,5.91,0,0,1,6.25,6.05,8.17,8.17,0,0,1-8.22,8.09A5.91,5.91,0,0,1,18.27,137.17Zm11.34-1.84a3.23,3.23,0,0,0-3.48-3.47c-2.87,0-4.75,2.75-4.75,5.12a3.23,3.23,0,0,0,3.48,3.48C27.74,140.45,29.61,137.7,29.61,135.33Z" />{" "}
                      <path d="M38.41,132.09H34.25l.74-2.77H46.32l-.75,2.77H41.42L38.49,143h-3Z" />{" "}
                      <path d="M48.77,129.32h3L48.1,143h-3Z" />{" "}
                      <path d="M52.84,137.17a8.16,8.16,0,0,1,8.22-8.08,5.91,5.91,0,0,1,6.25,6.05,8.17,8.17,0,0,1-8.22,8.09A5.91,5.91,0,0,1,52.84,137.17Zm11.34-1.84a3.23,3.23,0,0,0-3.48-3.47c-2.87,0-4.74,2.75-4.74,5.12a3.23,3.23,0,0,0,3.47,3.48C62.31,140.45,64.19,137.7,64.19,135.33Z" />{" "}
                      <path d="M71.93,129.32H74.7l4,8.69L81,129.32h3L80.33,143H77.77l-4.14-9-2.4,9h-3Z" />{" "}
                      <path d="M86.27,140.59l1.17-.92A5.36,5.36,0,0,0,92,141.8c2,0,3.46-1.07,3.46-2.56,0-1.05-.7-1.68-2.81-2.5-2.52-1-3.75-1.88-3.75-3.65,0-2.26,2.09-4,5-4a6.26,6.26,0,0,1,4.85,2.07l-1.13,1a5,5,0,0,0-3.85-1.7c-2.05,0-3.28,1.15-3.28,2.4s.88,1.68,3,2.52c2.34.9,3.54,1.86,3.54,3.61,0,2.4-2.27,4.14-5.18,4.14A6.58,6.58,0,0,1,86.27,140.59Z" />{" "}
                      <path d="M100.88,137.31a8.23,8.23,0,0,1,8-8.22,5.79,5.79,0,0,1,6,5.92,8.24,8.24,0,0,1-8,8.24A5.79,5.79,0,0,1,100.88,137.31Zm12.34-2.24a4.31,4.31,0,0,0-4.47-4.55c-3.57,0-6.25,3.36-6.25,6.76a4.32,4.32,0,0,0,4.47,4.55C110.54,141.82,113.22,138.46,113.22,135.06Z" />{" "}
                      <path d="M120.83,129.32h9.82l-.37,1.42H122l-1.31,4.88h7.42L127.7,137h-7.4l-1.6,6h-1.54Z" />{" "}
                      <path d="M137.5,130.75h-4.61l.39-1.42H144l-.39,1.42H139L135.76,143h-1.54Z" />{" "}
                      <path d="M146.22,129.32h1.6l.86,11.38,6.78-11.42h1.27l.72,11.42,7-11.38h1.74l-8.57,13.77h-1.34l-.78-11-6.7,11h-1.33Z" />{" "}
                      <polygon points="174.86 129.22 173.38 129.22 163.46 142.99 165.15 142.99 173.71 130.98 175.82 142.99 177.4 142.99 174.86 129.22" />{" "}
                      <path d="M194,132.93a3.33,3.33,0,0,0-.9-2.36,5.33,5.33,0,0,0-3.85-1.25h-4.92L180.65,143h1.54l3.3-12.24h3.67a3.64,3.64,0,0,1,2.67.82,2.06,2.06,0,0,1,.57,1.49,2.76,2.76,0,0,1-.82,2,5.43,5.43,0,0,1-3.89,1.25h-2.34l-.36,1.39h2.33L190,143h1.78L189,137.52a6.63,6.63,0,0,0,3.79-1.62A4.13,4.13,0,0,0,194,132.93Z" />{" "}
                      <path d="M199.3,129.32h9.78l-.39,1.4h-8.24l-1.25,4.67h7.36l-.39,1.4h-7.34l-1.29,4.78h8.34l-.37,1.41h-9.88Z" />{" "}
                    </g>{" "}
                  </g>{" "}
                </svg>
              </a>
              <div className="btn-burger">
                <span />
                <span />
                <span />
              </div>
              <div className="navigation">
                <ul id="menu-top" className="nav">
                  <li
                    id="menu-item-2608"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2608"
                  >
                    <a href="https://motion-software.com/platform">Platform</a>
                  </li>
                  <li
                    id="menu-item-2772"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2772"
                  >
                    <a href="https://motion-software.com/work-remotely">
                      Work Remotely
                    </a>
                  </li>
                  <li
                    id="menu-item-2527"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2527"
                  >
                    <a href="https://motion-software.com/community">Community</a>
                  </li>
                  <li
                    id="menu-item-2523"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2523"
                  >
                    <a href="https://motion-software.com/blog">Insights</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <section
          className="section-hero"
        >
          <div className="section-overlay" />
          <div className="section-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              id="video-hero"
              data-poster="https://motion-software.com/wp-content/uploads/2022/03/ezgif-frame-001-1-1024x576.jpg"
            >
              <source
                src="https://motion-software.com/wp-content/uploads/2022/03/Motion-Final-Site-Video_1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="shell">
            <div className="section-hero-inner">
              <div>
                <h1 className="section-title">SEAMLESS REMOTE EMPLOYMENT </h1>
                <p className="text-under-title">MOTION SOFTWARE IS NOW EXADEL</p>
                <button
                  class="text-xl w-44 mt-11 h-12 rounded bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
                >
                  <span
                    class="absolute bg-emerald-600 w-44 h-44 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
                  ></span>
                  <span
                    class="absolute uppercase bg-emerald-800 w-44 h-44 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
                  ></span>
                  Open Positions
                </button>



              </div>
            </div>
          </div>
          <div className='company-logo w-[95%] md:w-[80%] mx-auto absolute z-10 bottom-2 flex'>
            <div className='grid grid-cols-5'>
              <Image width={100} height={100} src='/images/h1.png' className='w-full h-full object-contain aspect-[4/1]' alt='Media' />
              <Image width={100} height={100} src='/images/h2.png' className='w-full h-full object-contain aspect-[4/1]' alt='Media' />
              <Image width={100} height={100} src='/images/h3.svg' className='w-full h-full object-contain aspect-[4/1]' alt='Media' />
              <Image width={100} height={100} src='/images/h4.svg' className='w-full h-full object-contain aspect-[4/1]' alt='Media' />
              <Image width={100} height={100} src='/images/h5.svg' className='w-full h-full object-contain aspect-[4/1]' alt='Media' />
            </div>
          </div>
        </section>

        <div className='main-container w-[90%] md:w-[80%] mx-auto mt-11 md:mt-16'>
          <section className='remote-work'>
            <h1 className='uppercase text-[22px] text-black'>Join the world of <br /> <span className='font-bold text-[34px] gradient'>Remote Work</span></h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-11'>
              <div className='grid-item bg-white shadow-pump rounded-2xl p-5'>
                <div className='flex justify-center'>
                  <div className='w-32 h-32 p-5 rounded-full bg-[#a6ddce]'>
                    <Image width={100} height={100} src='images/c1.svg' className='w-28' alt='Media' />
                  </div>
                </div>
                <h1 className='text-green font-bold uppercase text-2xl my-4 text-center'>REMOTE TECH TALENT</h1>
                <p className='text-base text-black text-center'>
                  A vibrant community of remote tech specialists thriving in a work environment that nurtures flexibility, well-being and growth.
                </p>
              </div>

              <div className='grid-item bg-white shadow-pump rounded-2xl p-5'>
                <div className='flex justify-center'>
                  <div className='w-32 h-32 p-5 rounded-full bg-[#a6ddce]'>
                    <Image width={100} height={100} src='images/c2.svg' className='w-28' alt='Media' />
                  </div>
                </div>
                <h1 className='text-green font-bold uppercase text-2xl my-4 text-center'>DEDICATED TEAM MANAGER</h1>
                <p className='text-base text-black text-center'>
                  Every tech-enabled process needs the human touch. A dedicated remote team manager is there every step of the way to facilitate all processes for you.
                </p>
              </div>

              <div className='grid-item bg-white shadow-pump rounded-2xl p-5'>
                <div className='flex justify-center'>
                  <div className='w-32 h-32 p-5 rounded-full bg-[#a6ddce]'>
                    <Image width={100} height={100} src='images/c3.svg' className='w-28' alt='Media' />
                  </div>
                </div>
                <h1 className='text-green font-bold uppercase text-2xl my-4 text-center'>LEADING TECH COMPANIES</h1>
                <p className='text-base text-black text-center'>
                  Global businesses trust Motion Software to hire, on-board and retain high-performing remote development teams.
                </p>
              </div>
            </div>
          </section>

          <section className='tabs-section my-16'>
            <div className="wrapper">
              <input className="radio" id="one" name="group" type="radio" />
              <input className="radio" id="two" name="group" type="radio" />
              <div className="tabs kong-tabs flex gap-6">
                <label className="tab mini-tab w-1/2" id='one-tab' htmlFor='one'>HUBS & TALENT</label>
                <label className="tab mini-tab w-1/2" id='two-tab' htmlFor='two'>CLIENTS</label>
              </div>
              <div className='panels'>
                <div className='panel' id='one-panel'>
                  <div className='grid grid-cols-2 gap-6'>
                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/hub1.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>BULGARIA</h1>
                      </div>
                      <p className='uppercase text-base text-black'>Sofia</p>
                    </div>

                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/hub2.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>UKRAINE</h1>
                      </div>
                      <p className='uppercase text-base text-black'>KIEV</p>
                    </div>

                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/hub3.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>ROMANIA</h1>
                      </div>
                      <p className='uppercase text-base text-black'>BUCHAREST</p>
                    </div>

                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/hub4.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>Turkey</h1>
                      </div>
                      <p className='uppercase text-base text-black'>ISTANBUL</p>
                    </div>
                  </div>
                </div>

                <div className='panel' id='two-panel'>
                  <div className='grid grid-cols-2 gap-6'>
                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/t1.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>usa</h1>
                      </div>
                      <p className='uppercase text-base text-black'>NEW YORK, MIAMI, SAN FRANCISCO</p>
                    </div>

                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/t2.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>UK</h1>
                      </div>
                      <p className='uppercase text-base text-black'>LONDON</p>
                    </div>

                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/t3.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>germany</h1>
                      </div>
                      <p className='uppercase text-base text-black'>Hamburg, BERLIN</p>
                    </div>

                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/t4.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>Canada</h1>
                      </div>
                      <p className='uppercase text-base text-black'>Toronto</p>
                    </div>

                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/t5.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>france</h1>
                      </div>
                      <p className='uppercase text-base text-black'>paris</p>
                    </div>

                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/t6.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>spain</h1>
                      </div>
                      <p className='uppercase text-base text-black'>madrid</p>
                    </div>

                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/t7.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>switzerland</h1>
                      </div>
                      <p className='uppercase text-base text-black'>zurich</p>
                    </div>

                    <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                      <Image width={100} height={100} src='/images/t8.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                      <div>
                        <h1 className='text-[28px] font-bold gradient uppercase mt-2'>BULGARIA</h1>
                      </div>
                      <p className='uppercase text-base text-black'>SOFIA</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>

      </main>
    </React.Fragment>
  )
}
