import { Link } from "react-router";

const BookCard = ({ book }) => {
  const {
    bookName,
    authorName,
    quantity,
    rating,
    category,
    imgUrl,
  } = book || {};

  return (
    <Link to="/bookdetails">
      <div className="w-[200px] h-[340px] mx-auto bg-base-100 shadow-md hover:shadow-xl transition duration-300 rounded-lg overflow-hidden flex flex-col">

        {/* IMAGE SECTION (FORCED SAME SIZE) */}
        <div className=" w-[180px] h-[250px] mx-auto">
          <img
            className="w-full h-full object-cover object-center"
            src={imgUrl}
            alt={bookName}
          />

          {/* BADGE */}
          <div className="h-10 w-10 bg-red-500 rounded-full absolute top-2 right-2 ring-2 ring-white flex flex-col items-center justify-center text-white text-[10px] shadow">
            <span className="w-4 border-t border-white"></span>
            <span className="font-bold leading-none">{quantity}</span>
            <span className="uppercase leading-none">pcs</span>
            <span className="w-4 border-t border-white"></span>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="flex-1 px-3 py-3 border-t border-dotted border-gray-300 flex flex-col justify-between">

          {/* TITLE + AUTHOR */}
          <div className="min-w-0">
            <h2 className="text-sm font-semibold leading-tight line-clamp-2">
              {bookName}
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Author: <span className="text-gray-700">{authorName}</span>
            </p>
          </div>

          {/* BOTTOM INFO */}
          <div className="flex justify-between items-center mt-2">

            {/* RATING */}
            <span className="text-yellow-500 text-sm font-semibold">
              {rating} ★
            </span>

            {/* CATEGORY */}
            <span className="text-[11px] px-2 py-[2px] bg-blue-200 text-blue-800 rounded">
              {category}
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
};

export default BookCard;