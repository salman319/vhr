import React, { useState, useEffect } from 'react'

const Auth = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            heading: "Welcome to VHR",
            content: "90% faster onboarding with our automated system"
        },
        {
            heading: "Welcome to VR",
            content: "Track employee performance with precision"
        },
        {
            heading: "Welcome to VH",
            content: "Reduce attrition with our engagement tools"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='welcome-sec bg-gradient-to-r from-blue-600 to-purple-600 lg:flex md:flex hidden rounded-[10px] justify-start pt-[95px] items-center h-[92vh] w-[95%] mx-auto flex-col'>
            {/* Logo section - uncomment when ready */}
            {/* <div className='flex justify-center mb-8'>
              <Image width={120} height={120} src='/images/logo.png' alt='Logo' className='w-32 md:w-40' />
            </div> */}

            {/* Main content container */}
            <div className='relative w-[98%] px-6 text-center'>
                {/* Sliding Heading */}
                {slides.map((slide, index) => (
                    <div
                        key={`heading-${index}`}
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white'>
                            {slide.heading}
                        </h1>
                    </div>
                ))}

                {/* Sliding Content */}
                {slides.map((slide, index) => (
                    <div
                        key={`content-${index}`}
                        className={`absolute inset-0 flex pt-[70px] items-center justify-center transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <p className='text-lg sm:text-xl md:text-xl px-4 sm:px-8 text-white'>
                            {slide.content}
                        </p>
                    </div>
                ))}
                {/* <div className='hidden md:flex gap-3 justify-center mt-8'>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Auth