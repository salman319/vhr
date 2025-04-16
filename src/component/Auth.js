import React from 'react'

const Auth = () => {
    return (
        <div className='welcome-sec grid-item lg:flex md:flex hidden rounded-[10px] justify-start items-center pt-[95px] h-[92vh] w-[95%] mx-auto flex-col gap-5'>
            {/* <div className='flex justify-center'>
              <Image width={100} height={100} src='/images/logo.png' alt='Media' className='w-40' />
            </div> */}
            <div>
                <h1 className='lg:text-6xl md:3xl text-3xl font-bold text-white md:text-6xl text-center'>
                    Welcome to VHR
                </h1>
            </div>
            <div className='text-center lg:text-[24px] md:text-[18px] text-[16px] px-8 text-white'>
                Develop a web-based HR platform that automates employee onboarding, lead management, HR operations, finance, and compliance. </div>
        </div>
    )
}

export default Auth