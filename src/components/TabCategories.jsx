import React from 'react';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from './BookCard';

const TabCategories = () => {
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
                        <Tab>Programming</Tab>
                        <Tab>Science</Tab>
                        <Tab>History</Tab>
                        <Tab>Novel</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                        <BookCard />
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <BookCard />
                        <BookCard />
                        <BookCard />
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <BookCard />
                        <BookCard />
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <BookCard />
                        <BookCard />
                        <BookCard />
                    </div>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default TabCategories;