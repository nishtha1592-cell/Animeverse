import React, { useState } from 'react';

export default function Contact() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await fetch('https://notion-jfmx.onrender.com/api/get-in-touch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) 
      });

      const result = await response.json();

      if (result.success) {
        setAlertMessage(result.message);
        setShowAlert(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        alert("error: " + result.message);
      }
    } catch (error) {
      console.error("Backend connect nahi ho pa raha hai:", error);
      alert("Server chalu nahi hai! Pehle 'node server.js' chalao.");
    }
  };
  return (
    <div id="contact" className="relative isolate bg-zinc-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">

        {/* Left Side: Contact Information & Grid Pattern Background */}
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">

            {/* Background Grid Accent Pattern */}
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="grid-pattern"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="transparent" width="100%" height="100%" />
                <rect fill="url(#grid-pattern)" width="100%" height="100%" strokeWidth={0} />
              </svg>
            </div>

            {/* Content Text */}
            <h2 className="font-blk text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              Have questions about our events or want to join the club? Drop us a message and we'll get back to you as soon as possible!
            </p>

            {/* Contact Details List */}
            <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
              {/* Address */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <svg className="size-7 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18v3H3V3Z" />
                  </svg>
                </dt>
                <dd>VIT Bhopal<br />Sehore, Madhya pradesh</dd>
              </div>

              {/* Phone */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <svg className="size-7 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.84c0-1.18.913-2.164 2.09-2.201a51.964 51.964 0 0 1 9.918 0c1.178.037 2.09.101 2.09 2.201v.09c0 1.16-.913 2.147-2.09 2.184a51.18 51.18 0 0 1-9.918 0C3.163 9.117 2.25 8.13 2.25 6.97v-.09ZM2.25 11.24c0-1.18.913-2.164 2.09-2.201a51.964 51.964 0 0 1 9.918 0c1.178.037 2.09.101 2.09 2.201v.09c0 1.16-.913 2.147-2.09 2.184a51.18 51.18 0 0 1-9.918 0C3.163 13.517 2.25 12.53 2.25 11.37v-.09Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.64c0-1.18.913-2.164 2.09-2.201a51.964 51.964 0 0 1 9.918 0c1.178.037 2.09.101 2.09 2.201v.09c0 1.16-.913 2.147-2.09 2.184a51.18 51.18 0 0 1-9.918 0C3.163 17.917 2.25 16.93 2.25 15.77v-.09Z" />
                  </svg>
                </dt>
                <dd><a className="hover:text-white" href="tel:+916263226011">+91 6263226011</a></dd>
              </div>

              {/* Email */}
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg className="size-7 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </dt>
                <dd><a className="hover:text-white" href="mailto:hello@example.com">bhatibhumi747@gmail.com</a></dd>
              </div>
            </dl>

          </div>
        </div>

        {/* Right Side: Form Layout */}
        <form onSubmit={handleSubmit} method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">First name</label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">Last name</label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">Phone number</label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>

            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition"
              >
                Send message
              </button>
            </div>

          </div>
        </form>

      </div>
      {showAlert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-800 text-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">
            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 text-2xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              ✓
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed px-4">
              {alertMessage}
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="mt-6 w-full bg-white hover:bg-zinc-200 text-black font-semibold py-2.5 rounded-xl transition duration-200 tracking-wide text-sm"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>

  );
}