import React, { useEffect, useState } from 'react';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from './BookCard';
import axios from 'axios';

const TabCategories = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetchAllBook();
    },

        [])

    const fetchAllBook = async () => {

        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/books`)
        setBooks(data)
    }
    return (
        <div className="container mx-auto px-6 pt-10">

            <h2 className='text-2xl font-semibold text-center text-gray-800 lg:text-3xl'>
                Browse Books By Categories
            </h2>

            <p className='text-sm text-center text-gray-500 mx-auto max-w-2xl my-6'>
                Four categories available for the time being. They are Programming, Science,
                History and Novel. Browse them by clicking on the tabs below.
            </p>

            <Tabs>

                <div className='flex justify-center mb-6'>
                    <TabList>
                        <Tab>Novel</Tab>
                        <Tab>Thriller</Tab>
                        <Tab>History</Tab>
                        <Tab>Science</Tab>
                    </TabList>
                </div>

                <TabPanel>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 place-items-center">
                        {books.filter(book => book.category === 'Novel')
                            .map(book => (
                                <BookCard key={book._id} book={book}></BookCard>
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {books.filter(book => book.category === 'Thriller')
                            .map(book => (
                                <BookCard key={book._id} book={book}></BookCard>
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {books.filter(book => book.category === 'History')
                            .map(book => (
                                <BookCard key={book._id} book={book}></BookCard>
                            ))}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {books.filter(book => book.category === 'Science')
                            .map(book => (
                                <BookCard key={book._id} book={book}></BookCard>
                            ))}
                    </div>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default TabCategories;