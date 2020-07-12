import React from "react"

export default function Hero() {
  return (
    <div className='bg-white relative'>
      <div className='flex container mx-auto'>
        <div className='w-full pt-40 pb-56 lg:w-1/2'>
          <h3 className='text-orange-tc font-bold text-4xl leading-none lg:max-w-sm'>
            Join our community and learn with us!
          </h3>
          <p className='text-purple-tc mt-4 font-bold lg:max-w-md'>
            Tutor Connect will build a learning community by 
            connecting students with culturally responsive 
            tutors who are able to meet their language and 
            specific academic needs
          </p>
          <div className='w-full flex py-4'>
            <img alt='app store' src='../../images/app-store.png' className='w-44' />
            <img alt='play store' src='../../images/play-store.png' className='w-44 ml-6' />    
          </div>
        </div>
      </div>
      <div className='w-1/2 h-full absolute right-0 top-0 pt-8'>
        <img alt='hero' src='../../images/hero.png' className='w-4/5 h-auto float-right lg:max-w-xl' />
      </div>
    </div>
  );
}