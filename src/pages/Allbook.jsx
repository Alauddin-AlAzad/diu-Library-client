import React from 'react';
import BookCard from '../components/BookCard';

const Allbook = () => {
  return (
    <div >

      {/* Search Section */}
      <div className="flex justify-center py-10 w-full bg-gray-100">

        <div className="flex flex-col">

          <h2 className="md:text-2xl text-base font-semibold mb-5">
            EXPLORE BOOKS
          </h2>

          <div className="flex flex-nowrap items-center gap-2 md:gap-5">

            <select className="border p-1 md:p-2 rounded text-xs md:text-sm">
              <option>Category</option>
              <option>Novel</option>
              <option>History</option>
            </select>

            <div className="flex text-xs md:text-sm">
              <input
                type="text"
                name="search"
                placeholder="Book"
                className="border p-1 md:p-2 rounded-l w-24 md:w-auto"
              />

              <button className="bg-blue-500 text-white px-2 md:px-4 rounded-r">
                Search
              </button>
            </div>

            <button className="border border-blue-500 px-2 md:px-4 py-1 md:py-2 rounded text-blue-500 text-xs md:text-sm">
              Reset
            </button>

          </div>

        </div>

      </div>


      {/* Book Cards */}
      <div className="container mx-auto my-8 px-4 " >

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

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

    </div>
  );
};

export default Allbook;