import React from "react"

export default function HowWorks() {
  return (
    <div className='bg-purple-tc-100 py-12'>
      <div className='flex container mx-auto'>
        <div className='w-full text-center'>
          <h3 className='text-purple-tc-900 font-bold text-3xl text-center'>
            How it works?
          </h3>
          <h5 className='leading-tight font-semibold text-orange-tc text-xl lg:max-w-lg mx-auto'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
            sed diam nonummy nibh euismod
          </h5>
        </div>
      </div>
      <div className='flex flex-wrap container mx-auto pt-8'>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 rounded-8 text-center h-80 px-3'>
            <div className='h-32 flex items-center'>
              <img alt='download app' src='../../images/download-app.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Download the app
            </h5>
            <p className='text-sm text-purple'>
              Learn specific languages and academic needs with
              culturally receptive tutors in a simple way in an app
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 rounded-8 text-center h-80 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='sign up' src='../../images/specific-topic.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Sign up
            </h5>
            <p className='text-sm text-purple'>
              Fill with your personal information and select the  
              preference payment method
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 rounded-8 text-center h-80 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='fill form' src='../../images/fill-form.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Fill out your preferences
            </h5>
            <p className='text-sm text-purple'>
              Fill out the form for the learning preferences and the 
              suggested tutor you prefer
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 rounded-8 text-center h-80 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='appointment' src='../../images/appointment.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Start learning!
            </h5>
            <p className='text-sm text-purple'>
              Learn specific languages and academic needs with 
              culturally receptive tutors in a simple way in an app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}