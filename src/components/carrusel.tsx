import { useState } from "react";
import { motion } from "framer-motion";

const VideoCarousel = () => {
    const videos = [
        "https://www.youtube.com/embed/3a4zzgYIRk4?si=YUJYjQOiZK9qwRsG", 
        "https://www.youtube.com/embed/OkDv2XHpkqE?si=ETEtyRNnpU2lY0pQ",
        "https://www.youtube.com/embed/yCoZJW_s4Ng?si=30_By8e2ZWa8x0Ki",
        "https://www.youtube.com/embed/B-c9N7r-hWc?si=hYp5UvrAcSs6l8tZ",
        "https://www.youtube.com/embed/B4r9TQALX4A?si=ggFJj9EFUxlfsT-0",
        "https://www.youtube.com/embed/zlgBfWe_JDE?si=liBzl87kEyuTPLLm",
        "https://www.youtube.com/embed/GFOTJnGZ-eM?si=StBWjW4TXCpi6kQs",
        "https://www.youtube.com/embed/17kLbcpCouA?si=yQq6SGGbBUWgrFgn",
        "https://www.youtube.com/embed/cdWBrbE5otI?si=CamC9K8BgyOsM3Ar",
    ];
    const [index, setIndex] = useState(0);

    const nextVideo = () => setIndex((prev) => (prev + 1) % videos.length);
    const prevVideo = () => setIndex((prev) => (prev - 1 + videos.length) % videos.length);

    return (
        <div className= "w-full flex flex-col items-center">
            <h2 className="text-center gap-2 mt-4 bg-[#13abd9] text-white text-sm px-3 py-1 rounded-md animate-bounce shadow-lg">VER MAS</h2>

        <div className="mt-8 relative flex items-center justify-center w-full">
            <button 
                onClick={prevVideo} 
                className="text-white absolute left-10 p-4 bg-[#fd3765] rounded-full hover:bg-[#fd3765]/80 transition-colors outline-none focus:outline-none"
                style={{ color: 'white', WebkitTapHighlightColor: 'transparent' }}
            >
            {"<"}
            </button>
            <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg"
            >
                <iframe
                    src={videos[index]}
                    className="w-full h-64 rounded-lg"
                    allowFullScreen
                ></iframe>
            </motion.div>
            <button 
                onClick={nextVideo} 
                className="text-white absolute right-10 p-4 bg-[#fd3765] rounded-full hover:bg-[#fd3765]/80 transition-colors outline-none focus:outline-none"
                style={{ color: 'white', WebkitTapHighlightColor: 'transparent' }}
            >
                {">"}
            </button>
        </div>
        </div>
    );
};

export default VideoCarousel;
