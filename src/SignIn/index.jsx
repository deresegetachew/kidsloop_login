import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../logo_min.svg'


export const SignIn = () => {

    const [dropDownOpen, setDropDownOpen] = useState(false);

    const toggleDropDown = () => {
        setDropDownOpen(!dropDownOpen);
    }

    const handleEscapeKey = (e) => {
        if (e.key === 'Esc' || e.key === 'Escape') {
            toggleDropDown();
        }
    }

    const submitForm = () => {

    }

    return (<>
        {/* header */}
        {/* form */}
        {/* footer */}

        <div className="flex items-center justify-center h-screen w-screen ">
            <div className="relative flex flex-col items-center justify-center">
                {/* card */}
                <div className="shadow-loginCard p-5 pb-12 rounded-xl border-2  h-auto bg-white">
                    <>
                        <div className="flex-1  mb-8" >
                            <Logo className="h-10" alt="kids loop logo" />
                        </div>
                        <div className="flex-1 mb-8">
                            <p className="text-2xl font-normal"> Sign In</p>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <input className=" w-full block placeholder-gray-500 rounded-xl py-3 px-4 border  border-gray-500 outline-none focus:shadow-outline focus:border-transparent" type="text" placeholder="Email or Phone *" />
                            <input className="w-full block placeholder-gray-500 rounded-xl py-3 px-4 border border-gray-500 outline-none focus:shadow-outline focus:border-transparent" type="password" placeholder="Password *" />
                        </div>
                        <div className="flex justify-between items-center mt-4 w-auto">
                            <a className="text-navy-blue-500 text-sm font-normal">Forgot Password?</a>
                            <button type="button" className="ml-10 md:ml-40 bg-kl-blue-500 hover:bg-kl-blue-300 focus:outline-none focus:border-kl-blue-700 focus:shadow-outline transition eas-in-out text-base text-white font-normal inline-block items-center px-8 py-1 border border-transparent rounded-xl ">
                                {/* <svg class=" inline-block animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg> */}
                                Sign In
                            </button>
                        </div>
                        <div className="flex justify-start mt-10">
                            <a className="text-navy-blue-500 text-sm font-normal">Create an account</a>
                        </div>
                    </>
                </div>
                <div className="mt-4 flex justify-between text-xs font-normal w-full">
                    <div className="flex justify-start items-center">
                        {/* <svg className="h-5 w-5 fill-current text-kl-blue-900 stroke-0 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                        </svg> */}
                        <svg className="h-4 w-4 fill-current text-navy-blue-500 stroke-0 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                            <path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                        </svg>

                        <div className="relative">
                            <button className="relative z-10 border-b focus:border-b focus:outline-none border-black inline-block ml-4 cursor-pointer " onClick={() => toggleDropDown()}>
                                <a className="inline-block"> Select Language</a>
                            </button>
                            <svg className="h-4 w-4 fill-current text-black inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                            </svg>
                            {
                                dropDownOpen ? (
                                    <>
                                        <button className="fixed inset-0 h-full w-full bg-black opacity-25" tabIndex="-1" onClick={() => toggleDropDown()} />

                                        <div className="mt-2 bg-white rounded-xl flow-root py-2 shadow-loginCard w-32 absolute right-0">
                                            <a href="#" className="block px-4 py-2 hover:bg-kl-blue-300 hover:text-white">Amharic</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-kl-blue-300 hover:text-white">English</a>
                                            <a href="#" className="block px-4 py-2 hover:bg-kl-blue-300 hover:text-white">French</a>
                                        </div>
                                    </>) : (<></>)
                            }

                        </div>

                    </div>
                    <div className="ml-10 md:ml-40 flex flex-auto justify-between items-center">
                        <a>Help</a>
                        <a>Privacy</a>
                        <a>Terms</a>
                    </div>
                </div>
            </div>
        </div>

    </>);

}
