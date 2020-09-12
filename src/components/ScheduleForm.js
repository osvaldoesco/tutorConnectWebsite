import React from "react"

export default function ScheduleForm(){
    return(
			<div className='bg-white relative'> 
				<div className='flex flex-wrap container mx-auto'>
					<div className='w-full px-4 pt-16 lg:pt-40 lg:pb-56 lg:w-1/2 sm:w-full'>
						<h3 className='text-orange-tc font-bold text-4xl leading-none lg:max-w-sm'>
							Start scheduling your appointment
						</h3>
						<p className='text-purple-tc mt-4 mb-4 font-bold lg:max-w-md'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
							sed diam nonummy nibh euismod
						</p>
						<p className='text-sm text-purple mt-4 lg:max-w-md text-gray-600'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam 
							nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat 
							volutpat. Ut wisi enim ad minim veniam,.
							Lorem ipsum dolor sit amet, consectetuer.
          	</p>
						<div className='w-full flex flex-wrap py-4'>
						</div>
					</div>
					<div className='flex w-full px-4  lg:pt-40 lg:pb-56 lg:w-1/2 md:w-full sm:pt-0'>
						<form className="w-full ">
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 sm:w-full">
									<input className="appearance-none block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name*">
									</input>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<div className="relative">
										<select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
											<option>Type of user</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<input className="appearance-none block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="E-mail address*">
									</input>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<div className="relative">
										<select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
											<option>Schedule*</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<input className="appearance-none block w-full bg-white text-gray-700 border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Phone number*">
									</input>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<div className="relative">
										<select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
											<option>Schedule*</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
										</div>
									</div>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3">
									<textarea className="appearance-none block w-full h-32 bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" type="text" placeholder="Message">
									</textarea>
									<div className="flex">
										<input className="w-8 h-4" id="grid-city" type="checkbox" ></input>
										<p className="px-1 text-gray-600 text-xs italic w-full">I accept the terms and conditions</p>
										<div className="flex flex-row-reverse w-full">
											<a
												href=''
												className='inline-block block font-bold bg-orange-tc text-sm px-8 lg:px-15 py-3 leading-none rounded-full text-white hover:opacity-75 mt-4 justify-items-end'
											>
												Submit
											</a>
										</div>
									</div>
								</div>
							</div>
							
						</form>
      		</div>
				</div>
			</div>
    )
}