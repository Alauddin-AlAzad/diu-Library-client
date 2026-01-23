import React from "react"
import logo from "../assets/Library_logo.png"
import { Menu, X, Bell, MessageCircle, Sun, User, Settings, LogOut } from "lucide-react"
import { Link } from "react-router"

const Navbar = () => {
    const links=<>
    <Link to='/' className="hover:text-primary cursor-pointer">Home</Link>
                    <Link to='/allbook' className="hover:text-primary cursor-pointer">All Book</Link>
                    <Link className="hover:text-primary cursor-pointer"> Add Books</Link>
                    <Link className="hover:text-primary cursor-pointer">Borrowed Book</Link>
    </>
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
                          {links}
                        </ul>
                    </div>
                </div>
            </div>

            {/* DESKTOP LEFT */}
            <div className="hidden md:flex items-center gap-6 flex-1">
                <img src={logo} alt="logo" className="lg:w-40 lg:h-12 md:w-20 md:h-6 object-contain" />

                <ul className="flex md:text-[10px] lg:text-[14px] gap-4 font-medium">
                    {links}
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
                    
    
                        <Link to='register'>Register</Link>
        
                    
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
