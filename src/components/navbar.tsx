import React from "react";
import { FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";
import logo from "../assets/luisinaLogo.png";
import { useState, useEffect } from "react";
const Navbar = () => {
    const [visible, setVisible] = useState(true);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setVisible(false); // Oculta la navbar al bajar
            } else {
                setVisible(true); // Muestra la navbar al subir
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <nav className={`bg-[#e0d6d9] fixed inset-x-0 top-0 w-full z-50 flex items-center justify-between py-2 px-4 sm:px-8 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex flex-shrink-0 items-center">
        <img
            className="rounded-md w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24 mx-2"
            src={logo}
            alt="Luisina Logo"
        />
        </div>
        <div className="absolute right-[190px] flex items-center">
        <div className="bg-[#ad525e] text-[#e0d6d9] text-sm px-3 py-1 rounded-md animate-bounce shadow-lg ">
            Contactame
        </div>
        </div>

        <div className="flex items-center justify-center gap-4 text-2xl">
        <a
            href="https://www.linkedin.com/in/luisinacardozo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8fb2ad] transition duration-300"
        >
            <FaLinkedin className="text-[#0d1445] hover:text-[#8fb2ad]  transition duration-300 text-4xl" />
        </a>
        <a
            href="https://www.tiktok.com/@luisina.cardozo.ugc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6aafe6] transition duration-300"
        >
            <FaTiktok className="text-[#0d1445] hover:text-[#8fb2ad] transition duration-300 text-4xl" />
        </a>
        <a
            href="https://www.instagram.com/luisina.cardozo.ugc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6aafe6] transition duration-300"
        >
            <FaInstagram className="text-[#0d1445] hover:text-[#8fb2ad] transition duration-300 text-4xl" />
        </a>
        </div>
    </nav>
    );
};

export default Navbar;
