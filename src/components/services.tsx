import { Video, Camera, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const iconVariants = (duration: number, delay: number) => ({
    initial: { y: 0, opacity: 0.5 },
    animate: {
    y: [0, -10, 0], // Movimiento vertical
    opacity: [0.5, 1, 0.5], // Cambio de opacidad
    transition: {
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        delay, // Para hacer que no se muevan todos a la vez
    },
    },
}); // Importamos los íconos

const services = [
    { title: "EDICION DE VIDEO", description: "Edición profesional de videos llamativos para redes sociales.", icon: <Video size={32} className="text-[#d88c64]" /> },
    { title: "CONTENIDO UGC", description: "Producción y creacion de contenido organico para marcas y eventos.", icon: <Camera size={32} className="text-[#d88c64]" /> },
    { title: "GESTION DE RRSS", description: "Planificación y publicación estratégica en redes sociales.", icon: <Megaphone size={32} className="text-[#d88c64]" /> },
];

const Services = () => {
    return (
    <div className="-mt-8 px-4 lg:mt-20 text-center">
        <h2 className=" text-[#274c77] text-3xl md:text-4xl lg:text-5xl tracking-tight">
            SERVICIOS
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 lg:gap-8 mt-8">
            {services.map((service, index) => (
                <motion.div 
                    key={index}
                    variants={iconVariants(3, index * 0.2)}
                    initial="initial"
                    animate="animate"
                    className="w-full md:w-60 h-auto md:h-60 py-8 md:py-4 font-serif bg-transparent rounded-full shadow-lg flex flex-col items-center justify-center p-4 text-center border-2 border-[#e67e22]"
                >
                    {service.icon} {/* Icono */}
                    <h3 className="text-lg font-semibold text-[#d88c64] mt-2">{service.title}</h3>
                    <p className=" text-[#88946b] text-base my-2 max-w-xl py-2 font-light tracking-tighter">{service.description}</p>
                </motion.div>
            ))}
        </div>
    </div>
    );
};

export default Services;
