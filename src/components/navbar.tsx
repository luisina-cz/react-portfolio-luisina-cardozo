import React from "react";
import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";
import logo from "../assets/luisinaLogo.png";
const Navbar = () => {
    return (
    <nav className="bg-[#f1da61] mb-20 flex items-center justify-between py-2 px-4 sm:px-8">
        <div className="flex flex-shrink-0 items-center">
        <img
            className="rounded-md w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 mx-2"
            src={logo}
            alt="Luisina Logo"
        />
        </div>
        <div className="absolute right-[190px] flex items-center">
        <div className="bg-[#574535] text-white text-sm px-3 py-1 rounded-md animate-bounce shadow-lg">
            Contáctame
        </div>
        </div>

        <div className="flex items-center justify-center gap-4 text-2xl">
        <a
            href="https://www.linkedin.com/in/luisinacardozo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffffff] transition duration-300"
        >
            <FaLinkedin className="text-[#574535] hover:text-[#ffffff]  transition duration-300 text-4xl" />
        </a>
        <a
            href="https://www.tiktok.com/@luisiiicardozo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffffff] transition duration-300"
        >
            <FaTiktok className="text-[#574535] hover:text-[#ffffff] transition duration-300 text-4xl" />
        </a>
        <a
            href="https://www.instagram.com/luisina.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffffff] transition duration-300"
        >
            <FaInstagram className="text-[#574535] hover:text-[#ffffff] transition duration-300 text-4xl" />
        </a>
        </div>
    </nav>
    );
};

export default Navbar;
