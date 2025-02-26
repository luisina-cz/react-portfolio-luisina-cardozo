// Importar todos los videos
import project1 from "../assets/projects/project-1.mp4";
import project2 from "../assets/projects/project-2.mp4";
import project3 from "../assets/projects/project-3.mp4";
import project4 from "../assets/projects/project-4.mp4";
import project5 from "../assets/projects/project-5.mp4";
import project6 from "../assets/projects/project-6.mp4";

export interface Project {
    title: string;
    description: string;
    link: string;  // Cambiado de { default: string }
    video: string; // Cambiado de { default: string }
}

export const PROJECTS: Project[] = [
    {
        title: "FIESTA DE LA FRUTILLA",
        video: "/assets/projects/project-1.mp4",
        description:
        "Este proyecto consto en una serie de reels promocionaless para la fiesta, variando entre lo informativo y lo atractivo y dinamico, generando interes en la audiencia.",
        link: "/assets/projects/project-1.mp4"
    },
    {
        title: "FESTIVAL DEL PESCADOR",
        video: "/assets/projects/project-2.mp4",
        description:
        "Lanzamos un video piloto para el festival regional del pescador, adaptando la escenografía a la tematica.",
        link: "/assets/projects/project-2.mp4"
    },  
    {
        title: "BIGASHOP URUGUAY",
        video: "/assets/projects/project-3.mp4",
        description:
        "Realice videos comerciales para dicha empresa de materiales de construcción sustentables, para informar al cliente sobre el producto y sus beneficios",
        link: "/assets/projects/project-3.mp4"
    },
    {
        title: "I.S.P.6",
        video: "/assets/projects/project-4.mp4",
        description:
        "Para la muestra anual de carreras en el ISP6, realice junto a profesores y alumnos, un video corporativo para enseñar acerca del edificio y la carrera",
        link: "/assets/projects/project-4.mp4"
    },
    {
        title: "M.M SAN JUAN",
        video: "/assets/projects/project-5.mp4",
        description:
        "Para la promocion de un boliche, realizamos videos invitando a la comunidad, teniendo en cuenta y adaptandonos a la edad del sector de cliente.",
        link: "/assets/projects/project-5.mp4"
    },
    {
        title: "PARIS BOUTIQUE",
        video: "/assets/projects/project-6.mp4",
        description:
        "Junto a un local de ropa, salimos a las calles a interactuar con la gente, haciéndoles preguntas divertidas y premiándolos con regalos. Una estrategia creativa para conectar con el público.",
        link: "/assets/projects/project-6.mp4"  
    }
    ];
export const HERO_CONTENT = `¡Hola! Soy una creadora de contenido  digital con ganas de aprender, crecer y sumar experiencias. Cada proyecto es una oportunidad para dejar una huella creativa y conectar con audiencias.`;

export const ABOUT_TEXT = `Disfruto adaptarme a cada desafío, entender las necesidades del cliente y su audiencia, y crear contenido que destaque e inspire.
A lo largo de mi trayectoria, he trabajado en proyectos súper variados, lo que me enseñó a ser flexible y encontrar la mejor manera de comunicar ideas de manera efectiva. ¡Siempre estoy lista para nuevos retos que me permitan seguir aprendiendo y creciendo!`;

export const CONTACT = {
    address: "Coronda, Santa Fe - Argentina ",
    email: "luisiicardozo123@gmail.com",
    phoneNo: "+54 342 4301079",
    };