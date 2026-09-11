import React from 'react';

export default function About({onRegisterClick}) {
  return (
    <div id="about" className="relative bg-[#19191d]">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        
        {/* Image Column */}
        <div className="relative h-80 sm:h-96 lg:col-span-5 lg:h-full lg:w-full">
          {/* A duotone/tint overlay applied to match the purple styling */}
          <div className="absolute inset-0 bg-indigo-600/30 mix-blend-multiply" aria-hidden="true" />
          <img
            className="h-full w-full object-cover bg-indigo-900"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" // Replace with your actual asset path
            alt="Support team working together"
          />
        </div> 

        {/* Content Column */}
        <div className="px-6 py-16 sm:px-8 sm:py-24 lg:col-span-7 lg:px-12 lg:py-32 xl:col-span-6 xl:col-start-7">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="font-blk mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              About Us
            </p>
            <p className="mt-6 text-lg text-gray-300 leading-8">
              Welcome to Notion, a premier technical club dedicated to fostering innovation, logic, and collaborative learning. Our mission is to bridge the gap between academic concepts and real-world technology. Through hands-on workshops, technical bootcamps, and community-driven events, we empower tech enthusiasts to build, innovate, and compete. Whether you are looking to master a new skill, collaborate on cutting-edge projects, or network with fellow bright minds, Notion provides the ultimate platform to elevate your technical journey.
            </p>
            <div onClick={onRegisterClick} className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-black shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
              >
                join us now
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}