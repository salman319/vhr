import React, { useRef, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
export default function AdminSidebar() {
  return (
    <React.Fragment>
      <div className="admin-sidebar fixed top-[63px] w-[260px] z-[5] left-[-260px] md:left-0 transition-all overflow-y-auto h-[calc(100vh-137px)]">
        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/home.svg' className='w-5' alt='Media' />
          Dashboard
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/leads.svg' className='w-5' alt='Media' />
          Leads
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/onboard.svg' className='w-5' alt='Media' />
          Onboarding
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/packages.svg' className='w-5' alt='Media' />
          Packages
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/hr.svg' className='w-5' alt='Media' />
          HR
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/customers.svg' className='w-5' alt='Media' />
          Customers
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/helpdesk.svg' className='w-5' alt='Media' />
          Help Desk
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/request.svg' className='w-5' alt='Media' />
          Offline Request
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/contactbook.svg' className='w-5' alt='Media' />
          Contact Book
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/events.svg' className='w-5' alt='Media' />
          Events
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/tasks.svg' className='w-5' alt='Media' />
          Tasks
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/reports.svg' className='w-5' alt='Media' />
          Reports
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/billing.svg' className='w-5' alt='Media' />
          Billing
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/adminfAQ.svg' className='w-5' alt='Media' />
          Admin FAQ
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/customization.svg' className='w-5' alt='Media' />
          Customization
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/Compliance.svg' className='w-5' alt='Media' />
          Compliance
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/Finance.svg' className='w-5' alt='Media' />
          Finance
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/adminfaq.svg' className='w-5' alt='Media' />
          Super Admin
        </Link>

        <Link href={''} className='flex items-center gap-3 hover:bg-sidebar-gradient text-white rounded-tr-full rounded-br-full p-3 text-base'>
          <Image width={100} height={100} src='/images/frontdesk.svg' className='w-5' alt='Media' />
          Front Desk
        </Link>

      </div>
    </React.Fragment>
  )
}
