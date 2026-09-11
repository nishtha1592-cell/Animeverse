import React, { useState } from 'react';

export default function StackedFormLayout({ onCancelClick }) {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        registration: '',
        year: '',
        contact: '',
        question: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://notion-jfmx.onrender.com/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (result.success) {
                setIsSuccess(true);
                setAlertMessage(result.message || "Registration Successful!");
                setShowAlert(true);
                setFormData({ firstName: '', lastName: '', email: '', registration: '', year: '', contact: '', question: '' });
                setTimeout(() => {
                    setShowAlert(false);
                    onCancelClick();
                }, 3000);
            } else {
                setIsSuccess(false);
                setAlertMessage(result.message);
                setShowAlert(true);
            }
        } catch (error) {
            console.error(error);
            setIsSuccess(false);
            setAlertMessage("Server is not connected! Please try again later.");
            setShowAlert(true);
        }
    };
    return (
       
        <div className="fixed inset-0 z-[100] w-screen h-screen flex flex-col justify-center px-6 py-12 lg:px-8 bg-white/20 backdrop-blur-md overflow-y-auto">
            <div className="absolute inset-0 -z-10" onClick={onCancelClick}></div>
           
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <form onSubmit={handleSubmit} method="POST" className="bg-white/40 backdrop-blur-md px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-12 border border-white/20">
                    <div className="border-b border-gray-900/10 pb-6">
                        <div className='mb-6 text-left'>
                            <h2 className="font-blk text-3xl font-semibold leading-5 text-gray-900 tracking-tight">Personal Information</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-800">Use a permanent address where you can receive mail.</p>
                        </div>
                        <div>
                            <div className="sm:col-span-full">
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required value={formData.firstName}
                                        onChange={handleChange}
                                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-full">
                                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required value={formData.lastName}
                                        onChange={handleChange}
                                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-full">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required value={formData.email}
                                        onChange={handleChange}
                                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-full">
                                <label htmlFor="registration" className="block text-sm font-medium leading-6 text-gray-900">
                                    Registration number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="registration"
                                        name="registration"
                                        type="registration"
                                        required value={formData.registration}
                                        onChange={handleChange}
                                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-full">
                                <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                                    Year
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="year"
                                        name="year"
                                        type="year"
                                        required value={formData.year}
                                        onChange={handleChange}
                                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-full">
                                <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                                    Contact number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="contact"
                                        name="contact"
                                        type="contact"
                                        required value={formData.contact}
                                        onChange={handleChange}
                                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-full">
                                <label htmlFor="question" className="block text-sm font-medium leading-6 text-gray-900">
                                    Why do you want to attend?
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="question"
                                        name="question"
                                        type="question"
                                        required value={formData.question}
                                        onChange={handleChange}
                                        className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" onClick={onCancelClick} className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
            {showAlert && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[200] p-4">
                    <div className="bg-zinc-900 border border-zinc-800 text-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center">

                        {isSuccess ? (
                            <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 text-2xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                ✓
                            </div>
                        ) : (
                            <div className="w-14 h-14 bg-rose-500/10 text-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-rose-500/30 text-2xl shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                                ✕
                            </div>
                        )}

                        <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                            {isSuccess ? 'Success!' : 'Registration Error'}
                        </h3>

                        <p className="text-zinc-400 text-sm leading-relaxed px-4">
                            {alertMessage}
                        </p>

                        <button
                            onClick={() => {
                                setShowAlert(false);
                                if (isSuccess) onCancelClick();
                            }}
                            className="mt-6 w-full bg-white hover:bg-zinc-200 text-black font-semibold py-2.5 rounded-xl transition duration-200 tracking-wide text-sm"
                        >
                            {isSuccess ? 'Awesome' : 'Try Again'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}