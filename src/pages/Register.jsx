import React from 'react'
import bg from '../assets/library-bg.jpg'
import logo from '../assets/library_logo.png'
import { Link } from 'react-router'

const Register = () => {
    return (
        <div>
            {/* BACKGROUND WRAPPER */}
            <div
                className="
          min-h-screen bg-center bg-no-repeat bg-cover px-5 py-8  md:px-0 md:py-0 flex md:justify-end  "
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="  w-full bg-white md:w-[20%] min-h-screen lg:w-[20%]" >
                    <div className="flex flex-col">

                        <div className="flex flex-col pt-10 pl-6">
                            <img className="h-6 w-16" src={logo} alt="logo" />
                            <div className="py-10">
                                <h2 className="text-[24px] font-bold text-center">
                                    Create a new account
                                </h2>
                            </div>
                        </div>


                        <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">

                                    <div className='flex flex-row gap-2 items-center'>
                                        <label className="label">Email</label>
                                        <span className="text-red-500">*</span>
                                    </div>
                                    <input
                                        type="email"
                                        className="input input-bordered"
                                        placeholder="Email"
                                    />
                                      <div className='flex flex-row gap-2 items-center'>
                                        <label className="label">Student ID</label>
                                        <span className="text-red-500">*</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="input input-bordered"
                                        placeholder="Student ID"
                                    />

                                    <div className='flex flex-row gap-2 items-center'>
                                        <label className="label">Password</label>
                                        <span className="text-red-500">*</span>
                                    </div>
                                    <input
                                        type="password"
                                        className="input input-bordered"
                                        placeholder="Password"
                                    />

                                    <p className="text-xs text-gray-500">
                                        The password must have at least 8 characters,
                                        1 digit, 1 lowercase, 1 uppercase &
                                        1 special character.
                                    </p>

                                    <div className='flex flex-row gap-2 items-center'>
                                        <label className="label">First name</label>
                                        <span className="text-red-500">*</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="input input-bordered"
                                        placeholder="First name"
                                    />
                                    <div className='flex flex-row gap-2 items-center'>
                                        <label className="label">Last name</label>
                                        <span className="text-red-500">*</span>
                                    </div>
                                    <input
                                        type="text"
                                        className="input input-bordered"
                                        placeholder="Last name"
                                    />

                                    <label className="label">Photo URL</label>
                                    <input
                                        type="text"
                                        className="input input-bordered"
                                        placeholder="Photo URL"
                                    />

                                    <div>
                                        <a className="link link-hover">Forgot password?</a>
                                    </div>

                                    {/* BUTTONS */}
                                    <div className="flex flex-row gap-2 justify-between mt-4">
                                        <button className="btn text-white bg-[#0051f9] ">
                                            Create my account
                                        </button>

                                        <Link
                                            to="/"
                                            className="btn bg-white border-2 border-[#0051f9] text-[#0051f9] "
                                        >
                                            Cancel
                                        </Link>
                                    </div>

                                    <p className='text-[16px] text-right mt-6' > <span className='text-red-500 text-center'>*</span><span className='pl-4'>Required</span></p>


                                </fieldset>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
