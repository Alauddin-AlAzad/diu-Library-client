import { Link } from "react-router";

const BookCard = () => {
    return (
        <Link to='/bookdetails'>
            <div className="w-full">
                <div className="card w-full bg-base-100 shadow-xl h-full">

                    {/* Image */}
                    <div className="relative w-[70%] h-[80%] mx-auto mt-3">
                        <img
                            className="lg:w-full  h-[90%] lg:h-50   object-cover rounded-md shadow-md"
                            src="https://th.bing.com/th/id/OIP.PoJkOCVEIeVPuLPCFpZliwHaLG?w=118&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
                            alt=""
                        />

                        {/* Badge */}
                        <div className="
            h-10 w-10
            bg-red-500
            rounded-full
            absolute top-0 right-0 translate-x-1/2
            ring-2 ring-white
            flex flex-col items-center justify-center
            text-white text-[10px]
            shadow
          ">
                            <span className="w-4 border-t border-white"></span>
                            <span className="font-bold leading-none">30</span>
                            <span className="uppercase leading-none">pcs</span>
                            <span className="w-4 border-t border-white "></span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="
          flex justify-between items-start
          px-3 py-3
          border-t border-dotted  border-gray-300
        ">
                        <div className="min-w-0">
                            <h2 className="
              text-sm font-semibold
              leading-tight
              line-clamp-2
            ">
                                Fortress of Blood
                            </h2>
                            <p className="text-xs text-gray-500">
                                Author: <span className="text-gray-700">History</span>
                            </p>
                        </div>

                        <div className="flex flex-col items-end space-y-1 shrink-0">
                            <span className="text-yellow-500 text-sm leading-none">
                                ★★★★★
                            </span>
                            <span className="text-[11px] px-2 py-[2px] bg-blue-200 text-blue-800 rounded">
                                Category
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </Link>
    );
};
export default BookCard