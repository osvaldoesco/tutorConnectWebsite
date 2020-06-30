import React from "react"


export default function Header() {
  return (
    <header>
      <nav className="flex container items-center justify-between flex-wrap p-1 mx-auto">
        <div className="flex items-center flex-shrink-0 mr-6">
          <a href="/">
            <img alt="logo" src="../../images/logo.png" className="header-logo" />
          </a>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-purple-tc-900 border-purple-tc-900 hover:text-orange-tc hover:border-orange-tc">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <a href="/schedule" className="block font-semibold px-5 mt-4 lg:inline-block lg:mt-0 text-gray-tc hover:text-orange-tc">
              Schedule Appoinment
            </a>
            <a href="/contact-us" className="block font-semibold px-5 mt-4 lg:inline-block lg:mt-0 text-gray-tc hover:text-orange-tc">
              Contact Us
            </a>
            <a href="#" className="inline-block font-bold bg-orange-tc text-sm px-4 py-3 leading-none rounded-full text-white hover:opacity-75 ml-5 mt-4 lg:mt-0">Sign Up</a>
          </div>
        </div>
      </nav>
    </header>
  )
}
