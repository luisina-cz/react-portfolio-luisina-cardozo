import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/LuisinaProfile.jpg";
import { motion } from "framer-motion"

const container = (delay: number) => ({
    hidden: {x: -100, opacity: 0},
    visible:{
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
})


const Hero = () => {
    console.log("Hero rendering");
    return (
        <div className=" pt-20 border-neutral-900 pb-16 lg:mb-35">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4">
                <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="text-[#0d1445] text-4xl md:text-5xl lg:text-6xl tracking-tight uppercase">
                        <span className="block lg:inline">LUISINA</span>
                        <span className="block lg:inline ml-0 lg:ml-4">CARDOZO</span>
                    </motion.h1>
                    <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="whitespace-nowrap text-xl sm:text-3xl font-serif font-bold bg-gradient-to-r from-[#ad525e]  via-[#8fb2ad] to-[#ad525e] text-transparent bg-clip-text animated-gradient "> CREADORA DE CONTENIDO UGC </motion.span>
                    <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className=" text-[#292e52] text-lg my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                </div>
                <div className="w-full lg:w-1/2 px-4 sm:px-8">
                    <div className="flex justify-center relative">
                        <div className="w-full lg:w-1/2 px-4 sm:px-8">
                            <div className="flex justify-center">
                                <motion.img
                                    initial={{x:100, opacity:0}}  
                                    animate={{x:0, opacity:1}}
                                    transition={{duration:1 , delay:1.2  }}
                                    src={profilePic} alt="Luisina Cardozo" className=" max-w-sm rounded-full relative z-5 p-4 bg-[#8fb2ad]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;