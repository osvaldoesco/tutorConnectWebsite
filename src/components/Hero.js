import React from "react"

export default function Hero() {
  return (
    <div className='bg-white relative'>
      <div className='flex container mx-auto'>
        <div className='w-full px-4 pt-16 lg:pt-40 lg:pb-56 lg:w-1/2'>
          <h3 className='text-orange-tc font-bold text-4xl leading-none lg:max-w-sm'>
            Join our community and learn with us!
          </h3>
          <p className='text-purple-tc mt-4 mb-4 font-bold lg:max-w-md'>
            Tutor Connect will build a learning community by 
            connecting students with culturally responsive 
            tutors who are able to meet their language and 
            specific academic needs
          </p>
          <div className='w-full flex flex-wrap py-4'>
            <img alt='app store' src='../../images/app-store.png' className='w-44 mr-6 mb-4' />
            <img alt='play store' src='../../images/play-store.png' className='w-44 mb-4' />    
          </div>
        </div>
      </div>
      <div className='w-full flex justify-end lg:w-1/2 lg:h-full lg:absolute lg:right-0 lg:top-0 lg:pt-8'>
        <img alt='hero' src='../../images/hero.png' className='w-5/6 mx-0 lg:w-4/5 lg:h-auto lg:float-right lg:max-w-xl' />
      </div>
    </div>
  );
}