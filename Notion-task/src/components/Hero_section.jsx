import React, { useState, useEffect } from 'react';
import logo from '../assets/notion-seeklogo.svg';
import back from '../assets/hero.png';

export default function HeroSection({onlogin,onRegisterClick}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="home" className="bg-white/40 bg-blend-overlay bg-cover bg-center h-screen w-full bg-[url('/abstract-extruded-voronoi-blocks-background-minimal-light-clean-corporate-wall-3d-geometric-surface-illustration-polygonal-elements-displacement.jpg')]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Notion</span>
              <img className="h-28 w-auto" src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setIsOpen(true)} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#home" className="text-lg font-extrabold text-gray-800 hover:text-opacity-70">Home</a>
            <a href="#about" className="text-lg font-extrabold text-gray-800 hover:text-opacity-70">About</a>
            <a href="#events" className="text-lg font-extrabold text-gray-800 hover:text-opacity-70">Events</a>
            <a href="#contact" className="text-lg font-extrabold text-gray-800 hover:text-opacity-70 transition">Contact Us</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" onClick={onlogin} className="text-lg font-extrabold text-gray-900 hover:text-opacity-70">Log in <span aria-hidden="true">&rarr;</span></a>
          </div>
        </nav>

        <div className={`${isOpen ? '' : 'hidden'} lg:hidden`} role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/20" onClick={() => setIsOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs h-screen overflow-hidden px-6 py-6 sm:ring-1 sm:ring-white/20 ">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-md pointer-events-none"></div>
            <div className="relative z-10 flex flex-col w-full h-full justify-start items-stretch">
              <div className="flex items-center justify-between pb-4 border-b border-gray-900/10">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Notion</span>
                  <img className="h-24 w-auto" src={logo} alt="logo" />
                </a>
                <button type="button" onClick={() => setIsOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-800">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-8 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
            </div>
            <div className="mt-6 flex-1 overflow-y-auto">
              <div className="flex flex-col gap-y-4">
                <a href="#home" className="block rounded-lg py-2.5 text-xl font-bold text-gray-900 hover:bg-gray-900/5">Home</a>
                <a href="#about" className="block rounded-lg py-2 text-lg font-bold text-gray-950 hover:bg-gray-900/5">About</a>
                <a href="#events" className="block rounded-lg py-2 text-lg font-bold text-gray-950 hover:bg-gray-900/5">Events</a>
                <a href="#contact" className="block rounded-lg py-2 text-lg font-bold text-gray-950 hover:bg-gray-900/5">Contact Us</a>
                <hr className='border-gray-900/10 my-2' />
                <a href="#" onClick={onlogin} className="block rounded-lg py-2 text-lg font-bold text-gray-950 hover:bg-gray-900/5">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
          <div className="text-center">
            <h1 className="font-blk text-5xl font-semibold tracking-tight text-balance text-gray-800 sm:text-7xl">Where Logic Meets Innovation</h1>
            <p className="mt-10 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Connect, collaborate, and compete with the brightest minds in the community.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" onClick={onRegisterClick} className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600">Register now</a>
              <a href="#about" className="text-sm font-semibold text-gray-900">Learn more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </div>
    </div>
  );
}