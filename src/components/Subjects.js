import React from "react"

export default function Subjects() {
  return (
    <div className='bg-white relative pb-16 lg:pb-32'>
      <div className='flex flex-wrap container mx-auto'>
        <div className='w-full lg:w-1/2 px-4 lg:pr-16'>
          <h3 className='text-orange-tc font-bold text-4xl leading-none lg:max-w-sm'>
            Our available subjects
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
            href='/contact-us'
            className='inline-block block font-bold bg-orange-tc text-sm px-20 py-3 leading-none rounded-full text-white hover:opacity-75 mt-4'
          >
            Contact
          </a>
        </div>
        <div className='w-full lg:w-1/2 flex flex-wrap justify-center px-4 lg:px-0 pt-16'>
          <div className='w-full lg:w-1/3 px-3'>
            <div className='border-gray-tc border border-gray-tc rounded-8 text-center h-64 py-3 px-3 mt-4'>
              <div className='h-24 flex items-center'>
                <img alt='math' src='../../images/math.png' className='w-24 mx-auto' />
              </div>
              <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
                Math
              </h5>
              <p className='text-xs text-purple'>
                Learn specific languages and academic needs with
                culturally receptive tutors.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 px-3'>
            <div className='border-gray-tc border border-gray-tc rounded-8 text-center lg:h-64 py-5 lg:py-3 px-3 mt-4'>
              <div className='h-24 flex items-center'>
                <img alt='english' src='../../images/english.png' className='w-24 mx-auto' />
              </div>
              <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
                English
              </h5>
              <p className='text-xs text-purple'>
                Learn specific languages and academic needs with
                culturally receptive tutors.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 px-3'>
            <div className='border-gray-tc border border-gray-tc rounded-8 text-center lg:h-64 py-5 lg:py-3 px-3 mt-4'>
              <div className='h-24 flex items-center'>
                <img alt='spanish' src='../../images/spanish.png' className='w-24 mx-auto' />
              </div>
              <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
                Spanish
              </h5>
              <p className='text-xs text-purple'>
                Learn specific languages and academic needs with
                culturally receptive tutors.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 px-3'>
            <div className='border-gray-tc border border-gray-tc rounded-8 text-center lg:h-64 py-5 lg:py-3 px-3 mt-4'>
              <div className='h-24 flex items-center'>
                <img alt='history' src='../../images/history.png' className='w-24 mx-auto' />
              </div>
              <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
                History
              </h5>
              <p className='text-xs text-purple'>
                Learn specific languages and academic needs with
                culturally receptive tutors.
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/3 px-3'>
            <div className='border-gray-tc border border-gray-tc rounded-8 text-center h-auto lg:h-64 py-5 lg:py-3 px-3 mt-4'>
              <div className='h-24 flex items-center'>
                <img alt='french' src='../../images/french.png' className='w-24 mx-auto' />
              </div>
              <h5 className='text-sm text-purple font-bold mt-4 mb-2'>
                French
              </h5>
              <p className='text-xs text-purple'>
                Learn specific languages and academic needs with
                culturally receptive tutors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}