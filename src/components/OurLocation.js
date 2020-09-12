import React from 'react';

export default function OurLocation(){
    return(
			<div className='bg-orange-tc py-12 relative'>
				<div className='flex flex-wrap container mx-auto'>
					<div className='w-full lg:w-1/2'>
						<h3 className='text-white font-bold text-4xl leading-none lg:max-w-sm'>
								Our Location
						</h3>
						<p className='text-purple-tc mt-4 mb-4 font-bold lg:max-w-md'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
							sed diam nonummy nibh euismod
						</p>
						<p className='text-sm text-white mt-4 lg:max-w-md'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
							volutpat. Ut wisi enim ad minim veniam,.
							Lorem ipsum dolor sit amet, consectetuer.
          	</p>
					</div>
					<div className='flex flex-wrap w-auto lg:w-1/2'>
						<div className='w-auto lg:w-1/2'>
							<img alt='hero' src='../../images/map.png' className='sm:object-center' />
						</div>
						<div className='w-auto lg:w-1/2'>
							<p className='text-white mt-4 mb-4 font-bold lg:max-w-md'>
								San francisco, California, United States
							</p>
							<p className='text-sm text-white mt-4 lg:max-w-md'>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
								sed diam nonummy nibh euismod
							</p>
						</div>
					</div>		
				</div>
			</div>
    )
}