import React, { useState, useEffect } from 'react';

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
    <div className='welcome-sec bg-gradient-to-r from-blue-600 to-purple-600 lg:flex md:flex hidden rounded-[10px] flex-col justify-between h-[92vh] w-[95%] mx-auto pt-[95px] pb-[30px] px-6'>

      {/* Slide Content Centered */}
      <div className='flex-1 relative flex flex-col justify-center items-center text-center'>
        {/* Headings */}
        {slides.map((slide, index) => (
          <div
            key={`heading-${index}`}
            className={`absolute top-0 left-0 right-0 flex items-center justify-center transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white'>
              {slide.heading}
            </h1>
          </div>
        ))}

        {/* Content Paragraphs */}
        {slides.map((slide, index) => (
          <div
            key={`content-${index}`}
            className={`absolute top-[70px] left-0 right-0 flex items-center justify-center transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <p className='text-lg sm:text-xl md:text-xl px-4 sm:px-8 text-white'>
              {slide.content}
            </p>
          </div>
        ))}
      </div>

      {/* Dots Navigation with 30px bottom spacing */}
      <div className='hidden md:flex items-center gap-3 justify-center mt-auto pb-[30px]'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#1DAB61] w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Auth;
