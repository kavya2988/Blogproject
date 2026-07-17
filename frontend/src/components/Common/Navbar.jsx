import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">

            <div className="container mx-auto px-6 py-5 flex justify-between items-center">

                {/* Logo */}
                <h2 className="text-3xl font-bold text-orange-500 cursor-pointer hover:scale-105 transition duration-300">
                    Kavya's Blog
                </h2>


                {/* Menu */}
          
                  <div className="flex items-center space-x-8 text-gray-700 font-medium">

                    <Link
                        className="hover:text-orange-500 transition duration-300"
                        to="/home"
                    >
                        Home
                    </Link>


                    <Link
                        className="hover:text-orange-500 transition duration-300"
                        to="/blogs"
                    >
                        Blogs
                    </Link>


                    <Link
                        className="hover:text-orange-500 transition duration-300"
                        to="/about"
                    >
                        About
                    </Link>


                    <button
                        className="bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-orange-600 hover:shadow-lg transition duration-300"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>

                </div>

            </div>

        </nav>
    )
}

export default Navbar