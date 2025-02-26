import React from 'react';

/* Framer motion para agregarle animaciones a la pagina */
import { motion } from 'framer-motion';

/* Imagen about */
import aboutImg from "../assets/about.jpg";

/* Import de las constantes para el about y la info */
import { ABOUT_TEXT } from "../constants";

const About = () => {
    return (
        <div className="w-full px-4">
            <h1 className="text-[#574535] text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#9b650d]  via-[#f0ba12] to-[#f1da61] text-transparent bg-clip-text animated-gradient text-center mb-12">
                SOBRE MI
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto px-4">
                <motion.div 
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <img className="w-64 h-64 lg:w-80 lg:h-80 rounded-full p-4 bg-[#8e4b0d]" src={aboutImg} alt="yo" />
                </motion.div>

                <motion.div
                    whileInView={{opacity: 1, x:0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 0.5}}
                    className="w-full lg:w-1/2">
                    <div className= "flex justify-center lg:justify-start">
                        <p className=" mt-20 text-[#9b650d] text-lg my-2 max-w-xl py-6 font-light tracking-tighter leading-relaxed" dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;