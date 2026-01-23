import React from "react"
import logo from "../assets/Library_logo.png"
import { Menu, X, Bell, MessageCircle, Sun, User, Settings, LogOut } from "lucide-react"
import { Link } from "react-router"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4  sticky top-0 z-50">

            {/* ================= MOBILE DRAWER ================= */}
            <div className="drawer md:hidden">
                <input id="mobile-drawer" type="checkbox" className="drawer-toggle" />

                {/* Hamburger icon */}
                <div className="drawer-content">
                    <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle">
                        <Menu />
                    </label>
                </div>

                {/* Drawer sidebar */}
                <div className="drawer-side z-50">
                    <label htmlFor="mobile-drawer" className="drawer-overlay"></label>

                    {/* Sidebar content (80%) */}
                    <div className="w-[70%] min-h-full bg-white p-4">

                        {/* Top: Logo + Close */}
                        <div className="flex items-center justify-between mb-6">
                            <img src={logo} alt="logo" className="h-10 object-contain" />
                            <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle">
                                <X />
                            </label>
                        </div>

                        {/* Menu */}
                        <ul className="menu w-full text-base font-medium gap-1">
                            <Link><a className="active">Dashboard</a></Link>
                            <Link><a>Home</a></Link>
                            <Link><a>My Courses</a></Link>
                        </ul>
                    </div>
                </div>
            </div>

            {/* DESKTOP LEFT */}
            <div className="hidden md:flex items-center gap-6 flex-1">
                <img src={logo} alt="logo" className="w-40 h-12 object-contain" />

                <ul className="flex gap-4 font-medium">
                    <Link to='/' className="hover:text-primary cursor-pointer">Home</Link>
                    <Link to='/allbook' className="hover:text-primary cursor-pointer">All Book</Link>
                    <Link className="hover:text-primary cursor-pointer">Books</Link>
                    <Link className="hover:text-primary cursor-pointer">About</Link>
                </ul>
            </div>

            {/*  RIGHT SECTION */}
            <div className="flex items-center gap-2">

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-24 sm:w-40 md:w-48"
                />

                {/* Notification */}
                <Link className="btn btn-ghost btn-circle">
                    <Bell size={20} />
                </Link>

                {/* Chat */}
                <Link className="btn btn-ghost btn-circle">
                    <MessageCircle size={20} />
                </Link>

                {/* Profile */}
                <div className="dropdown dropdown-end gap-2  ">
                    <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 w-52 bg-base-100 rounded-box shadow"
                    >
                        <Link>
                            <a className="flex items-center py-3 ">
                                <User size={18} />
                                Profile
                            </a>
                        </Link>

                        <Link>
                            <a className="flex items-center py-3 ">
                                <Settings size={18} />
                                Settings
                            </a>
                        </Link>

                        <Link>
                            <a className="flex items-center  text-red-500">
                                <LogOut size={18} />
                                Logout
                            </a>
                        </Link>

                    </ul>
                </div>

                {/* Dark / Linkght */}
                <Link className="btn btn-ghost btn-circle">
                    <Sun size={20} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
