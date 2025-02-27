import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from "src/assets/aboutImages.jpg";
import { ABOUT_TEXT } from "../constants";
import { useState, useEffect } from "react";

const aboutImages = [
    "/src/assets/aboutImages/about-1.jpg",
    "/src/assets/aboutImages/about-2.jpg",   
    "/src/assets/aboutImages/about-3.jpg"
];

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % aboutImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full px-4">
            <h1 className="text-[#274c77] text-3xl md:text-4xl lg:text-5xl text-center mb-12">
                SOBRE MI
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto px-4">
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex justify-center"
        >
            <img
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full p-4 bg-[#6aafe6] object-cover"
                src={aboutImages[currentImage]}
                alt="yo"
            />
        </motion.div>

                <motion.div
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2">
                    <div className= "flex justify-center lg:justify-start">
                        <p className=" mt-20 text-[#88946b] text-lg my-2 max-w-xl py-6 font-light tracking-tighter leading-relaxed" dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;                   