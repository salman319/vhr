"use client";
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/component/header/header';
import Footer from '@/component/footer/footer';
export default function Motion() {
  return (
    <React.Fragment>
      <main>
        <Header />

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
                  class="text-xl w-56 uppercase mt-11 h-12 font-bold rounded bg-primary text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
                >
                  <span
                    class="absolute bg-emerald-600 w-52 h-52 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
                  ></span>
                  <span
                    class="absolute uppercase bg-emerald-800 w-52 h-52 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
                  ></span>
                  Open Positions
                </button>

              </div>
            </div>
          </div>
          <div className='company-logo w-[85%] md:w-[80%] mx-auto absolute z-[2] bottom-14 md:bottom-2 flex'>
            <div className='grid grid-cols-3 gap-5 md:gap-0 md:grid-cols-5'>
              <Image width={100} height={100} src='/images/h1.png' className='w-full h-full object-contain aspect-[4/1]' alt='Media' />
              <Image width={100} height={100} src='/images/h2.png' className='w-full h-full object-contain aspect-[4/1]' alt='Media' />
              <Image width={100} height={100} src='/images/h3.svg' className='w-full h-full object-contain aspect-[4/1]' alt='Media' />
              <Image width={100} height={100} src='/images/h4.svg' className='hidden md:block w-full h-full object-contain aspect-[4/1]' alt='Media' />
              <Image width={100} height={100} src='/images/h5.svg' className='hidden md:block w-full h-full object-contain aspect-[4/1]' alt='Media' />
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
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/hub1.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>BULGARIA</h1>
                        </div>
                        <p className='uppercase text-base text-black'>Sofia</p>
                      </div>
                    </div>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/hub2.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>UKRAINE</h1>
                        </div>
                        <p className='uppercase text-base text-black'>KIEV</p>
                      </div>
                    </div>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/hub3.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>ROMANIA</h1>
                        </div>
                        <p className='uppercase text-base text-black'>BUCHAREST</p>
                      </div>
                    </div>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/hub4.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>Turkey</h1>
                        </div>
                        <p className='uppercase text-base text-black'>ISTANBUL</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='panel' id='two-panel'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/t1.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>usa</h1>
                        </div>
                        <p className='uppercase text-base text-black'>NEW YORK, MIAMI, SAN FRANCISCO</p>
                      </div>
                    </div>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/t2.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>UK</h1>
                        </div>
                        <p className='uppercase text-base text-black'>LONDON</p>
                      </div>
                    </div>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/t3.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>germany</h1>
                        </div>
                        <p className='uppercase text-base text-black'>Hamburg, BERLIN</p>
                      </div>
                    </div>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/t4.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>Canada</h1>
                        </div>
                        <p className='uppercase text-base text-black'>Toronto</p>
                      </div>
                    </div>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/t5.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>france</h1>
                        </div>
                        <p className='uppercase text-base text-black'>paris</p>
                      </div>
                    </div>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/t6.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>spain</h1>
                        </div>
                        <p className='uppercase text-base text-black'>madrid</p>
                      </div>
                    </div>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
                      <div className='grid-item rounded-2xl bg-[#EFFEFA] p-5 md:p-7 flex justify-center items-center gap-2 flex-col'>
                        <Image width={100} height={100} src='/images/t7.svg' className='w-44 aspect-[4/2] object-contain' alt='Media' />
                        <div>
                          <h1 className='text-[28px] font-bold gradient uppercase mt-2'>switzerland</h1>
                        </div>
                        <p className='uppercase text-base text-black'>zurich</p>
                      </div>
                    </div>

                    <div className='bg-primary-gradient rounded-2xl p-2'>
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

            </div>
          </section>

          <section className='blog-section'>
            <h1 className="uppercase text-[22px] text-black">MOTION SOFTWARE <br />
              <span class="font-bold text-[34px] gradient">INSIGHTS</span>
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>

              <div className='grid-item bg-white rounded-2xl shadow-xl border-2 border-transparent cursor-pointer hover:border-primary'>
                <Image width={100} height={100} src='/images/girl.jpg' className='w-full rounded-t-2xl aspect-video' />
                <div className='blog-content p-4 pb-0'>
                  <h1 className='text-green text-[18px] font-bold mb-2'>Motion Software is now Exadel</h1>
                  <p className='text-base text-black'>
                    On July 15, we will bid farewell to Motion Software and officially start operating as part of our parent company, […]
                  </p>
                </div>
                <div className='p-4'>
                  <button className='w-full mt-4 rounded-lg p-3 border-2 border-primary hover:bg-primary text-base text-black hover:text-white font-bold group-hover:duration-500 duration-700 transition-all uppercase'>
                    Read More
                  </button>
                </div>

              </div>

              <div className='grid-item bg-white rounded-2xl shadow-xl border-2 border-transparent cursor-pointer hover:border-primary'>
                <Image width={100} height={100} src='/images/group.jpg' className='w-full rounded-t-2xl aspect-video' />
                <div className='blog-content p-4 pb-0'>
                  <h1 className='text-green text-[18px] font-bold mb-2'>
                    Spring #lifeinmotion Outpost & Team Building at Kardzhali Dam
                  </h1>
                  <p className='text-base text-black'>
                    It had only been 2 months since our last outpost, but we were all itching for another episode of everyone&#39;s […]
                  </p>
                </div>
                <div className='p-4'>
                  <button className='w-full mt-4 rounded-lg p-3 border-2 border-primary hover:bg-primary text-base text-black hover:text-white font-bold group-hover:duration-500 duration-700 transition-all uppercase'>
                    Read More
                  </button>
                </div>
              </div>

              <div className='grid-item bg-white rounded-2xl shadow-xl border-2 border-transparent cursor-pointer hover:border-primary'>
                <Image width={100} height={100} src='/images/chart.jpg' className='w-full rounded-t-2xl aspect-video' />
                <div className='blog-content p-4 pb-0'>
                  <h1 className='text-green text-[18px] font-bold mb-2'>
                    Motion Software&#39;s client Control Now keeps growing strong
                  </h1>
                  <p className='text-base text-black'>
                    Witnessing growth and real results means a job well done. And our partnership with Control Now is the perfect example […]
                  </p>
                </div>
                <div className='p-4'>
                  <button className='w-full mt-4 rounded-lg p-3 border-2 border-primary hover:bg-primary text-base text-black hover:text-white font-bold group-hover:duration-500 duration-700 transition-all uppercase'>
                    Read More
                  </button>
                </div>
              </div>

            </div>

            <div className='flex justify-center my-16'>
              <button className='w-full md:w-52 mt-4 rounded-lg p-3 bg-green hover:bg-primary text-base text-white  font-bold group-hover:duration-500 duration-700 transition-all'>
                More
              </button>
            </div>
          </section>

          <section className='blog-section'>
            <h1 className="uppercase text-[22px] text-black mb-9">Life in<br />
              <span class="font-bold text-[34px] gradient">MOTION</span>
            </h1>

            <div className="relative w-full overflow-hidden rounded-lg pb-[35%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src='https://www.youtube.com/embed/t4SYpWuM_tA'
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </section>


        </div>

        <section className='community-section mt-16'>
          <div class="section-overlay"></div>
          <div className='w-[90%] md:w-[80%] mx-auto'>
            <div className='w-full md:w-1/2 relative z-10'>
              <h1 className='text-[34px] font-bold text-white uppercase'>it&#39;s a COMMUNITY</h1>
              <p className='text-base text-white mt-8 mb-10'>
                We are proud to have a large and active global network of like-minded digital experts. Our community is all about sharing meaningful relationships and life-changing opportunities.
              </p>
              <div className=''>
                <button className='w-full md:w-52 rounded-lg p-3 bg-green hover:bg-primary text-base text-white uppercase font-bold group-hover:duration-500 duration-700 transition-all'>
                  Learn More
                </button>
              </div></div>
          </div>
        </section>

        <Footer />
      </main>
    </React.Fragment>
  )
}
