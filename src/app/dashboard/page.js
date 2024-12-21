"use client";
import React, { useRef, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import AdminHeader from '@/component/AdminHeader/AdminHeader';
import AdminSidebar from '@/component/AdminSidebar/AdminSidebar';
import { ExportIcon } from '@/assets';
export default function Dashboard() {
  return (
    <React.Fragment>
      <AdminHeader />
      <main className='pt-[63px] overflow-x-hidden'>
        <AdminSidebar />
        <div className='content'>

          <div className='welcome-note text-white p-5 rounded-bl-[32px] rounded-br-[32px]'>
            <h1 className='text-xl md:text-2xl font-bold mb-3'>Welcome Admin,</h1>
            <p className='text-sm'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>

          <div className='px-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-5'>
              <div className='grid-item rounded-[20px] bg-white shadow-cards p-5'>
                <div className='grid grid-cols-[56px_2px_auto] gap-5'>
                  <div className='bg-greenC rounded-full h-14 flex justify-center items-center'>
                    <Image width={100} height={100} src='/images/company1.svg' className='w-7' alt='Media' />
                  </div>
                  <div className='bg-dark'></div>
                  <div>
                    <h1 className='text-sm font-semibold text-dark'>Total Companies</h1>
                    <p className='text-primary font-bold text-xl md:text-[28px] mt-3'>86</p>
                  </div>
                </div>

                <button className='bg-primary hover:bg-hover-gradient w-full mt-6 rounded-lg p-2 justify-center text-white text-base font-semibold flex gap-3'>
                  <ExportIcon />
                  Export
                </button>
              </div>

              <div className='grid-item rounded-[20px] bg-white shadow-cards p-5'>
                <div className='grid grid-cols-[56px_2px_auto] gap-5'>
                  <div className='bg-blueC rounded-full h-14 flex justify-center items-center'>
                    <Image width={100} height={100} src='/images/company2.svg' className='w-7' alt='Media' />
                  </div>
                  <div className='bg-dark'></div>
                  <div>
                    <h1 className='text-sm font-semibold text-dark'>Active Companies</h1>
                    <p className='text-blueD font-bold text-xl md:text-[28px] mt-3'>77</p>
                  </div>
                </div>

                <button className='bg-primary hover:bg-hover-gradient w-full mt-6 rounded-lg p-2 justify-center text-white text-base font-semibold flex gap-3'>
                  <ExportIcon />
                  Export
                </button>
              </div>

              <div className='grid-item rounded-[20px] bg-white shadow-cards p-5'>
                <div className='grid grid-cols-[56px_2px_auto] gap-5'>
                  <div className='bg-yellowC rounded-full h-14 flex justify-center items-center'>
                    <Image width={100} height={100} src='/images/company3.svg' className='w-7' alt='Media' />
                  </div>
                  <div className='bg-dark'></div>
                  <div>
                    <h1 className='text-sm font-semibold text-dark'>Inactive Companies</h1>
                    <p className='text-yellowD font-bold text-xl md:text-[28px] mt-3'>0</p>
                  </div>
                </div>

                <button className='bg-primary hover:bg-hover-gradient w-full mt-6 rounded-lg p-2 justify-center text-white text-base font-semibold flex gap-3'>
                  <ExportIcon />
                  Export
                </button>
              </div>

              <div className='grid-item rounded-[20px] bg-white shadow-cards p-5'>
                <div className='grid grid-cols-[56px_2px_auto] gap-5'>
                  <div className='bg-redC rounded-full h-14 flex justify-center items-center'>
                    <Image width={100} height={100} src='/images/license.svg' className='w-7' alt='Media' />
                  </div>
                  <div className='bg-dark'></div>
                  <div>
                    <h1 className='text-sm font-semibold text-dark'>License Expired</h1>
                    <p className='text-redD font-bold text-xl md:text-[28px] mt-3'>09</p>
                  </div>
                </div>

                <button className='bg-primary hover:bg-hover-gradient w-full mt-6 rounded-lg p-2 justify-center text-white text-base font-semibold flex gap-3'>
                  <ExportIcon />
                  Export
                </button>
              </div>

              <div className='grid-item rounded-[20px] bg-white shadow-cards p-5'>
                <div className='grid grid-cols-[56px_2px_auto] gap-5'>
                  <div className='bg-purpleC rounded-full h-14 flex justify-center items-center'>
                    <Image width={100} height={100} src='/images/pkgs.svg' className='w-7' alt='Media' />
                  </div>
                  <div className='bg-dark'></div>
                  <div>
                    <h1 className='text-sm font-semibold text-dark'>Total Packages</h1>
                    <p className='text-purpleD font-bold text-xl md:text-[28px] mt-3'>07</p>
                  </div>
                </div>

                <button className='bg-primary hover:bg-hover-gradient w-full mt-6 rounded-lg p-2 justify-center text-white text-base font-semibold flex gap-3'>
                  <ExportIcon />
                  Export
                </button>
              </div>

              <div className='grid-item rounded-[20px] bg-white shadow-cards p-5'>
                <div className='grid grid-cols-[56px_2px_auto] gap-5'>
                  <div className='bg-parrotC rounded-full h-14 flex justify-center items-center'>
                    <Image width={100} height={100} src='/images/subscription.svg' className='w-7' alt='Media' />
                  </div>
                  <div className='bg-dark'></div>
                  <div>
                    <h1 className='text-sm font-semibold text-dark'>Recent Paid Subscription</h1>
                    <p className='text-parrotD font-bold text-xl md:text-[28px] mt-3'>11</p>
                  </div>
                </div>

                <button className='bg-primary hover:bg-hover-gradient w-full mt-6 rounded-lg p-2 justify-center text-white text-base font-semibold flex gap-3'>
                  <ExportIcon />
                  Export
                </button>
              </div>

            </div>

            <div className='grid grid-cols-[66.66%_33.33%] gap-5'>
              <div className='p-5 rounded-[26px] bg-white shadow-cards'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-xl md:text-[22px] font-semibold'>Companies Details</h1>
                  <div className="">
                    {/* <div className="flex items-center space-x-2 border border-dark rounded-full pl-2 pr-1 py-1"> */}
                    {/* <span className="text-base">Company Details</span> */}
                    <div className="relative">
                      <select
                        className="bg-primary text-white border-0 rounded-full px-2 py-1 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-green transition ease-in-out duration-150"
                        id="product"
                      >
                        <option value="product-1">New Registered Companies</option>
                        <option value="product-2">New Registered Companies</option>
                      </select>
                    </div>
                  </div>

                </div>

                <div classname="overflow-x-auto">
                  <table classname="min-w-full w-full border border-gray-200 text-left text-sm">
                    <thead classname="bg-gray-100">
                      <tr>
                        <th classname="px-4 py-3 border-b font-medium text-gray-700">Sr. No</th>
                        <th classname="px-4 py-3 border-b font-medium text-gray-700">Name</th>
                        <th classname="px-4 py-3 border-b font-medium text-gray-700">
                          Package
                        </th>
                        <th classname="px-4 py-3 border-b font-medium text-gray-700">Date</th>
                        <th classname="px-4 py-3 border-b font-medium text-gray-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd:bg-white even:bg-gray-50">
                        <td className="px-4 py-3 border-b text-gray-600">1</td>
                        <td className="px-4 py-3 border-b text-gray-600 flex items-center gap-3">
                          <div className='flex items-center gap-2'>
                            <Image width={100} height={100} src='/images/nexus.svg' className='w-10' alt='Media' />
                            <div>
                              <p className="font-medium text-xs">Nexus Co.</p>
                              <p className="text-[10px] text-dark">www.nexus.co</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 border-b text-gray-600">
                          <div className='flex items-center gap-2'>
                            <Image width={100} height={100} src='/images/trial.svg' className='w-10' alt='Media' />
                            <div>
                              <p className="font-medium text-xs">Trial</p>
                              <p className="text-[10px] text-dark">Monthly</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 border-b text-gray-600">
                          <p className="font-medium text-xs">18-11-2024 <span className='text-dark'>(2 days ago)</span></p>
                        </td>
                        <td className="px-4 py-3 border-b text-gray-600">
                          <button className="bg-primary hover:bg-hover-gradient text-white px-4 py-1 rounded">
                            View
                          </button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}
