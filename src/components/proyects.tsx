import { PROJECTS, Project } from "../constants";
import { motion } from "framer-motion";

const Proyects = () => {
    return (
    <div className="mt-20 w-full px-4 lg:px-8">
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-[#274c77] text-3xl md:text-4xl lg:text-5xl tracking-tight text-center"
        >
        PROYECTOS{" "}
        </motion.h2>
        <div className="max-w-6xl mx-auto">
        {PROJECTS.map((project: Project, index: number) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8 my-12">
                <motion.div className="w-full lg:w-1/3">
                    {project.video && (
                        <video
                            width={1000}
                            height={1000}
                            className="w-52 h-52 md:w-56 md:h-56 lg:w-60 lg:h-60  mx-auto rounded-full object-cover border-8 border-[#6aafe6]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={project.video} type="video/mp4" />
                            Tu navegador no soporta el video.
                        </video>
                    )}
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="p-10 w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-[#d88c64] hover:text-[#e67e22] transition duration-300 flex items-center gap-2 -mt-2 text-lg sm:text-2xl font-serif">
                        {project.title}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                        </svg>
                    </a>
                    </h6>
                    <p className=" text-[#88946b] text-base my-2 max-w-xl py-2 font-light tracking-tighter">
                    {project.description}
                    </p>
                </motion.div>
                {index === 0 && (
                    <div className="absolute lg:right-[300px] right-4 flex items-center">
                        <div className="-mt-16 bg-[#e67e22] text-white text-sm px-3 py-1 rounded-md animate-bounce shadow-lg">
                            Ver video completo  
                        </div>
                    </div>
                )}
            </div>
        ))}
        </div>
    </div>
    );
};

export default Proyects;
