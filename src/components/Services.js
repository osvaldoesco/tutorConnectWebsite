import React from "react"

export default function Services() {
  return (
    <div className='bg-white relative py-16 lg:py-32'>
      <div className='flex flex-wrap-reverse lg:flex-wrap container mx-auto'>
        <div className='w-full lg:w-1/2 flex flex-wrap text-center mt-16 lg:mt-0'>
          <div className='w-full lg:w-1/2 lg:pt-4 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='students' src='../../images/student.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Available for students
            </h5>
            <p className='text-sm text-purple'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  
              culturally receptive tutors in a simple way in an app.
            </p>
          </div>
          <div className='w-full lg:w-1/2 pt-4 px-4'>
            <div className='h-32 flex items-center'>
              <img alt='tutors' src='../../images/tutor.png' className='w-24 mx-auto' />
            </div>
            <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
              Available for tutors
            </h5>
            <p className='text-sm text-purple'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  
              culturally receptive tutors in a simple way in an app.
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 px-4 lg:pl-24'>
          <h3 className='text-orange-tc font-bold text-4xl leading-none lg:max-w-sm'>
            Services
          </h3>
          <p className='text-purple-tc mt-4 font-bold lg:max-w-sm'>
            Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit, sed diam nonummy nibh euismod
          </p>
          <p className='text-sm text-purple mt-4 lg:max-w-md'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
            volutpat. Ut wisi enim ad minim veniam,.
            Lorem ipsum dolor sit amet, consectetuer.
          </p>
          <a
            href='/schedule'
            className='inline-block block font-bold bg-orange-tc text-sm px-8 lg:px-20 py-3 leading-none rounded-full text-white hover:opacity-75 mt-4'
          >
            Make an appointment
          </a>
        </div>
      </div>
    </div>
  );
}