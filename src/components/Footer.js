import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <footer style={{backgroundColor: "#F2F2F2"}}>
      <div className="container mx-auto grid grid-cols-4 py-8 gap-8">
        <div>
          <a href="/">
            <img alt="logo" src="../../images/logo.png" className="header-logo" />
          </a>
          <p className="text-base text-gray-tc py-4 pl-4">
            Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit, sed diam nonummy nibh 
            euismod tincidunt ut laoreet dolore magna 
            aliquam erat volutpat. Ut wisi enim ad 
            minim veniam,
          </p>
          <div className="flex">
            <div className="text-white bg-gray-tc rounded-full w-8 h-8 ml-4 justify-center items-center flex">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="text-white bg-gray-tc rounded-full w-8 h-8 ml-6 justify-center items-center flex">
              <FontAwesomeIcon icon={faInstagram} />
            </div>      
          </div>
        </div>
        <div className="pt-24">
          <div className="flex items-center">
            <div className="text-white bg-gray-tc rounded-full w-8 h-8 ml-6 justify-center items-center flex">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <label className="text-gray-tc text-base ml-4">info@tutorconnect.com</label>
          </div>
          <div className="flex items-center mt-4">
            <div className="text-white bg-gray-tc rounded-full w-8 h-8 ml-6 justify-center items-center flex">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <label className="text-gray-tc text-base ml-4">+ 1 (800) 123-4567</label>
          </div>
        </div>
      </div>
      <div className="text-center italic py-5 text-lg text-white font-semibold bg-gray-tc">
        All rights reserverd. Tutor Connect 2020.
      </div>
    </footer>
  )
}
