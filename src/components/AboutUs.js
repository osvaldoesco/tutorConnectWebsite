import React from "react"

export default function AboutUs() {
  return (
    <div className='bg-white relative'>
      <div className='flex container mx-auto'>
        <div className='hidden lg:block lg:w-1/2'>
        </div>
        <div className='w-full pt-20 lg:pt-32 pb-8 lg:pb-56 lg:w-1/2 px-4 lg:ml-24'>
          <h3 className='text-orange-tc font-bold text-4xl leading-none lg:max-w-sm'>
            About us
          </h3>
          <p className='text-purple-tc mt-4 font-bold lg:max-w-sm'>
            Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit, sed diam nonummy nibh
          </p>
          <p className='text-sm text-purple mt-4 lg:max-w-md'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  
            culturally receptive tutors in a simple way in an app lorem way over.
          </p>
          <a
            href='/contact-us'
            className='inline-block block font-bold bg-orange-tc text-sm px-20 py-3 leading-none rounded-full text-white hover:opacity-75 mt-4'
          >
            Contact
          </a>
        </div>
      </div>
      <div className='w-full pb-20 lg:w-1/2 lg:h-full lg:absolute lg:left-0 lg:top-0 pt-8 lg:pb-4'>
        <img alt='about' src='../../images/about-us.png' className='w-5/6 lg:h-auto lg:float-right lg:max-w-xl' />
      </div>
    </div>
  );
}