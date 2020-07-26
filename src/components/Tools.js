import React from "react"

export default function Tools() {
  return (
    <div className='bg-orange-tc py-12'>
      <div className='flex container mx-auto px-4'>
        <div className='w-full text-center'>
          <h3 className='text-white font-bold text-3xl text-center'>
            Our tools and pillars
          </h3>
          <h5 className='leading-tight font-bold text-purple-tc text-xl lg:max-w-lg mx-auto'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod
          </h5>
        </div>
      </div>
      <div className='flex flex-wrap container mx-auto pt-8'>
        <div className='w-full w-1/2 lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 rounded-8 text-center h-80 px-3'>
            <div className='h-32 flex items-center'>
              <img alt='specific topic' src='../../images/specific-topic.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Learn specific academic needs
            </h5>
            <p className='text-sm text-purple'>
              Learn specific languages and academic needs with 
              culturally receptive tutors in a simple way in an app.
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 rounded-8 text-center h-80 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='classes' src='../../images/online-classes.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Online and presencial classes.
            </h5>
            <p className='text-sm text-purple'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  
              culturally receptive tutors in a simple way in an app.
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 rounded-8 text-center h-80 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='community' src='../../images/community.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Join in a learning community 
            </h5>
            <p className='text-sm text-purple'>
              Learn specific languages and academic needs with 
              culturally receptive tutors in a simple way in an app.
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 px-4 mb-4'>
          <div className='bg-white py-8 rounded-8 text-center h-80 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='payment' src='../../images/certified.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Certified payment method
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