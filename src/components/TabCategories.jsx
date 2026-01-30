import React from 'react';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from './BookCard';
const TabCategories = () => {
    return (
        <div >
            <Tabs>
                <div className='container px-6 pt-10 mx-auto '>
                    <h2 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '> Browse Books By Categories</h2>
                    <p className='text-sm text-center text-gray-500 mx-auto max-w-2xl my-6'> Four categories available for the time being. They are Programming,Science,History and Novel. Browse them by clicking on the tabs below.</p>
                </div>
                <div className='flex items-center justify-center lg:pb-4 pb-2'>

                    <TabList>
                       
                        <Tab>Programming</Tab>
                        <Tab>Science</Tab>
                        <Tab>History</Tab>
                        <Tab>Novel</Tab>
                        
                    </TabList>
                </div>

                <TabPanel className='w-full'>
                    <div className="flex items-center justify-center  ">
                        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8">
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8">
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8">
                            <BookCard />
                            <BookCard />
                            <BookCard />

                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8">
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />
                            <BookCard />

                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCategories;