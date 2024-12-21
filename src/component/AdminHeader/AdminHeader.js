import React, { useRef, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
export default function AdminHeader() {
  return (
    <React.Fragment>
      <header className="admin-header fixed top-0 w-full z-10">
        <div className='flex justify-between items-center px-4 md:px-10 py-3 shadow-lg bg-white'>
          <div>
            <Link href={''}>
              <Image width={100} height={100} src='/images/logo.png' className='w-full' alt='Media' />
            </Link>
          </div>

          <div className='flex gap-2 items-center'>
            <Link href={''} className='bg-primary hover:bg-hover-gradient rounded-lg w-8 h-8 hidden md:flex justify-center items-center'>
              <Image width={100} height={100} src='/images/email.svg' className='w-5' alt='Media' />
            </Link>

            <Link href={''} className='bg-primary hover:bg-hover-gradient rounded-lg w-8 h-8 hidden md:flex justify-center items-center'>
              <Image width={100} height={100} src='/images/phone.svg' className='w-4' alt='Media' />
            </Link>

            <Link href={''} className='bg-primary hover:bg-hover-gradient rounded-lg w-8 h-8 hidden md:flex justify-center items-center'>
              <Image width={100} height={100} src='/images/search.svg' className='w-4' alt='Media' />
            </Link>

            <Link href={''} className='bg-primary hover:bg-hover-gradient rounded-lg w-8 h-8 flex justify-center items-center'>
              <Image width={100} height={100} src='/images/notification.svg' className='w-4' alt='Media' />
            </Link>

            <Link href={''} className='bg-primary hover:bg-hover-gradient rounded-lg w-8 h-8 hidden md:flex justify-center items-center'>
              <Image width={100} height={100} src='/images/settings.svg' className='w-4' alt='Media' />
            </Link>

            <Link href={''} className='bg-primary hover:bg-hover-gradient rounded-lg w-8 h-8 flex justify-center items-center'>
              <Image width={100} height={100} src='/images/logout.svg' className='w-4' alt='Media' />
            </Link>

            <Link href={''} className='relative rounded-full w-8 hidden md:flex justify-center items-center'>
              <div className='absolute w-2 h-2 bg-online rounded-full right-0 bottom-[2px]'></div>
              <Image width={100} height={100} src='/images/avatar.svg' className='w-full' alt='Media' />
            </Link>

            <Link href={''} className='block md:hidden relative rounded-full w-8'>
              <Image width={100} height={100} src='/images/menu.svg' className='w-full' alt='Media' />
            </Link>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}
