import React from 'react';
import { MdOutlineAddBox } from "react-icons/md";

const Addbook = () => {
    return (
        <div className='container mx-auto px-2 my-5 lg:my-8'>

            {/* Header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 font-semibold text-sm lg:text-2xl text-gray-800'>
                    <MdOutlineAddBox className='text-lg lg:text-2xl text-blue-600' />
                    <p>Add New Books</p>
                </div>

                <div className='flex items-center gap-2'>
                    <button className='text-xs border border-gray-300 px-3 py-1 rounded hover:bg-gray-100 transition'>
                        Save As Draft
                    </button>

                    <button className='text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition'>
                        Add Books
                    </button>
                </div>
            </div>

            {/* Section 1 */}
            <div className='grid grid-cols-8 items-start lg:items-stretch gap-4 my-5 bg-[#F7F9FC] p-4 rounded-xl'>

                {/* Left */}
                <div className='col-span-5 border border-gray-200 rounded-xl p-4 shadow-sm bg-white'>
                    <h2 className='text-lg font-semibold mb-3'>General Information</h2>

                    {/* Book Name */}
                    <p className='text-sm text-gray-600 mb-1'>Book Name</p>
                    <input type="text" placeholder="Enter book name" className="input" />

                    {/* Author */}
                    <p className='text-sm text-gray-600 mt-4 mb-1'>Author Name</p>
                    <input type="text" placeholder="Enter author name" className="input" />

                    {/* Description */}
                    <p className='text-sm text-gray-600 mt-4 mb-1'>Short Description</p>
                    <textarea placeholder="Add more about this book" className="textarea" />
                </div>

                {/* Right */}
                <div className='col-span-3 border border-gray-200 rounded-xl p-4 shadow-sm bg-white'>
                    <p className='text-gray-600 text-sm mb-2'>Image</p>
                    <input type="file" className="w-full text-sm" />
                </div>
            </div>

            {/* Section 2 */}
            <div className='grid grid-cols-8 items-start lg:items-stretch gap-4 bg-[#F7F9FC] p-4 rounded-xl'>

                {/* Left */}
                <div className='col-span-5 border border-gray-200 rounded-xl p-4 shadow-sm bg-white'>
                    <h2 className='text-lg font-semibold mb-3'>Rating And Quantity</h2>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <p className='text-sm text-gray-600 mb-1'>Quantity</p>
                            <input type="number" min='1' placeholder="Enter quantity" className="input" />
                        </div>

                        <div>
                            <p className='text-sm text-gray-600 mb-1'>Rating</p>
                            <input type="number" min="1" max="5" placeholder="1-5" className="input" />
                        </div>
                    </div>

                    {/* Book Content */}
                    <p className='text-sm text-gray-600 mt-4 mb-1'>Book Content</p>
                    <textarea placeholder="Write book content..." className="textarea" />
                </div>

                {/* Right */}
                <div className='col-span-3 border border-gray-200 rounded-xl p-4 shadow-sm bg-white'>
                    <h2 className='text-lg font-semibold mb-3'>Category</h2>

                    <select className="input">
                        <option>Select category</option>
                        <option>Novel</option>
                        <option>Thriller</option>
                        <option>History</option>
                        <option>Drama</option>
                        <option>Sci-Fi</option>
                    </select>

                    <button className='mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm'>
                        Add Category
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Addbook;