import React from "react";
import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";
import logo from "../assets/luisinaLogo.png";
const Navbar = () => {
    return (
    <nav className="bg-[#a3b18a] mb-20 flex items-center justify-between py-2 px-4 sm:px-8">
        <div className="flex flex-shrink-0 items-center">
        <img
            className="rounded-md w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 mx-2"
            src={logo}
            alt="Luisina Logo"
        />
        </div>
        <div className="absolute right-[190px] flex items-center">
        <div className="bg-[#e67e22] text-white text-sm px-3 py-1 rounded-md animate-bounce shadow-lg">
            Contáctame
        </div>
        </div>

        <div className="flex items-center justify-center gap-4 text-2xl">
        <a
            href="https://www.linkedin.com/in/luisinacardozo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6aafe6] transition duration-300"
        >
            <FaLinkedin className="text-[#274c77] hover:text-[#6aafe6]  transition duration-300 text-4xl" />
        </a>
        <a
            href="https://www.tiktok.com/@luisina.cardozo.ugc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6aafe6] transition duration-300"
        >
            <FaTiktok className="text-[#274c77] hover:text-[#6aafe6] transition duration-300 text-4xl" />
        </a>
        <a
            href="https://www.instagram.com/luisina.cardozo.ugc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6aafe6] transition duration-300"
        >
            <FaInstagram className="text-[#274c77] hover:text-[#6aafe6] transition duration-300 text-4xl" />
        </a>
        </div>
    </nav>
    );
};

export default Navbar;
