import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { MdOutlineAddBox } from "react-icons/md";
import AuthContext from '../Context/AuthContext';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router';
const Addbook = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const formRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        } else {
            setImagePreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent default form submission

        const form = formRef.current;
        const email = user?.email;
        const bookName = form.bookName.value;
        const authorName = form.authorName.value;
        const description = form.description.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const content = form.content.value;
        const category = form.category.value;
        const imageFile = form.image.files[0] || null;
        if (!imageFile) return

        const data = new FormData()
        data.append('file', imageFile)
        data.append("upload_preset", "adddd_it")
        data.append("cloud_name", "dvqec4cx5")
        const res = await axios.post(`https://api.cloudinary.com/v1_1/dvqec4cx5/image/upload`, data)
        const uploadedImage = res.data;
        const imgUrl = uploadedImage?.secure_url;
        const formData = {

            bookName,
            authorName,
            description,
            quantity,
            rating,
            content,
            category,
            imgUrl,
            owner: {
                email

            },


        }
        console.log(formData)
        // console.log("Image File:", imageFile);
        //   here we use post method
        //    make a post request 
        try {
            axios.post(`${import.meta.env.VITE_API_URL}/add-job`, formData)
            form.reset()
            toast.success('Book added Succesfully');
           
        } catch (err) {
            console.log(err)
            toast.error('Something went wrong')
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className='container mx-auto px-2 my-5 lg:my-8'>

            {/* Header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2 font-semibold text-sm lg:text-2xl text-gray-800'>
                    <MdOutlineAddBox className='text-lg lg:text-2xl text-blue-600' />
                    <p>Add New Books</p>
                </div>

                <div className='flex items-center gap-2'>
                    <button type="button" className='text-xs border border-gray-300 px-3 py-1 rounded  hover:bg-gray-100 transition'>
                        Save As Draft
                    </button>

                    <button type="submit" className='text-xs bg-[#1E4E8C] hover:bg-blue-700 text-white px-3 py-1 rounded transition'>
                        Add Books
                    </button>
                </div>
            </div>

            {/* Section 1 */}
            <div className='grid grid-cols-8 items-start lg:items-stretch gap-4 my-5 bg-[#F0F6FF] border border-[#2F6FB2]/20 p-4 rounded-xl'>
                {/* Left */}
                <div className='col-span-5 border border-gray-200 rounded-xl p-4 shadow-sm bg-white'>
                    <h2 className='text-lg font-semibold mb-3'>General Information</h2>

                    <label htmlFor="bookName" className='text-sm text-gray-600 mb-1 block'>Book Name</label>
                    <input id="bookName" name="bookName" type="text" placeholder="Enter book name" className="input" />

                    <label htmlFor="authorName" className='text-sm text-gray-600 mt-4 mb-1 block'>Author Name</label>
                    <input id="authorName" name="authorName" type="text" placeholder="Enter author name" className="input" />

                    <label htmlFor="description" className='text-sm text-gray-600 mt-4 mb-1 block'>Short Description</label>
                    <textarea id="description" name="description" placeholder="Add more about this book" className="textarea" />
                </div>

                {/* Right */}
                <div className='col-span-3 border border-gray-200 rounded-xl p-4 shadow-sm bg-white flex flex-col items-center'>
                    <label htmlFor='image' className='block mb-2 text-sm text-gray-600 text-center'>Upload Image</label>

                    <div className='w-24 h-36 md:w-48 md:h-72 border shadow-2xl border-gray-300 rounded-md overflow-hidden flex items-center justify-center mb-2'>
                        {imagePreview ? (
                            <img src={imagePreview} alt="Thumbnail Preview" className='max-w-full max-h-full object-cover' />
                        ) : null}
                    </div>

                    <input
                        id='image'
                        name='image'
                        accept='image/*'
                        type="file"
                        className="w-full text-sm md:text-[16px] text-[12px]"
                        onChange={handleImageChange}
                    />
                </div>
            </div>

            {/* Section 2 */}
            <div className='grid grid-cols-8 items-start lg:items-stretch gap-4 bg-[#F0F6FF] border border-[#2F6FB2]/20 p-4 rounded-xl'>
                {/* Left */}
                <div className='col-span-5 border border-gray-200 rounded-xl p-4 shadow-sm bg-white'>
                    <h2 className='text-lg font-semibold mb-3'>Rating And Quantity</h2>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label htmlFor="quantity" className='text-sm text-gray-600 mb-1 block'>Quantity</label>
                            <input id="quantity" name="quantity" type="number" min='1' placeholder="Enter quantity" className="input" />
                        </div>

                        <div>
                            <label htmlFor="rating" className='text-sm text-gray-600 mb-1 block'>Rating</label>
                            <input id="rating" name="rating" type="number" min="1" max="5" placeholder="1-5" className="input" />
                        </div>
                    </div>

                    <label htmlFor="content" className='text-sm text-gray-600 mt-4 mb-1 block'>Book Content</label>
                    <textarea id="content" name="content" placeholder="Write book content..." className="textarea" />
                </div>

                {/* Right */}
                <div className='col-span-3 border border-gray-200 rounded-xl p-4 shadow-sm bg-white'>
                    <h2 className='text-lg font-semibold mb-3'>Category</h2>

                    <label htmlFor="category" className='text-sm text-gray-600 mb-1 block'>Select Category</label>
                    <select id="category" name="category" className="input">
                        <option>Select category</option>
                        <option>Novel</option>
                        <option>Thriller</option>
                        <option>History</option>
                        <option>Science</option>
                    </select>

                    <button type="submit" className='mt-4 w-full bg-[#1E4E8C] text-white py-2 rounded text-sm'>
                        Add Category
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Addbook;