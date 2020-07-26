import React from "react"

export default function Tutors() {
  return (
    <div className='py-12'>
      <div className='flex container mx-auto'>
        <div className='w-full text-center'>
          <h3 className='text-orange-tc font-bold text-3xl text-center'>
            About our tutors
          </h3>
          <h5 className='leading-tight font-semibold text-purple-tc-900 text-xl lg:max-w-lg mx-auto'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
            sed diam nonummy nibh euismod.
          </h5>
        </div>
      </div>
      <div className='flex flex-wrap container mx-auto pt-8'>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white border border-orange-tc py-8 rounded-8 text-center h-80 px-3'>
            <div className='h-32 flex items-center'>
              <img alt='certified tutors' src='../../images/certified-tutors.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Certified tutors
            </h5>
            <p className='text-sm text-purple'>
              Learn specific languages and academic needs with
              culturally receptive tutors in a simple way in an app
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 border border-orange-tc rounded-8 text-center h-80 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='backgroud-check' src='../../images/background-check.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Background check and validate knowledge
            </h5>
            <p className='text-sm text-purple'>
              Fill with your personal information and select the  
              preference payment method
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 border border-orange-tc rounded-8 text-center h-80 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='observation mode' src='../../images/observation-mode.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Effective observation mode
            </h5>
            <p className='text-sm text-purple'>
              Fill out the form for the learning preferences and the 
              suggested tutor you prefer
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 border border-orange-tc rounded-8 text-center h-80 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='committed' src='../../images/committed.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Committed and receptive tutors
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