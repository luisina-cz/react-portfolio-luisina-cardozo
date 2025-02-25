import { CONTACT } from "../constants";
import {
    motion


} from "framer-motion";
const Contact = () => {
    return (

        <div className="mt-20 flex flex-col items-center justify-center border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="mt-8 text-[#574535] text-4xl sm:text-3xl tracking-tight bg-gradient-to-r from-[#b4a08c]  via-[#f1da61] to-[#f1da61] text-transparent bg-clip-text animated-gradient  ">¿QUERES QUE TRABAJEMOS JUNTOS? 
                CONTACTAME!</motion.h1>


            <div
                className="mt-5 text-center text-[#b4a08c] text-lg my-2 max-w-xl py-6 font-light tracking-tighter">

                <a href={`mailto:${CONTACT.email}`} className="border-b">
                    {CONTACT.email}
                </a>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="my-4">{CONTACT.address}</motion.p>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1 }}
                    className="my-4">{CONTACT.phoneNo}</motion.p>


            </div>



        </div>
    );
};
export default Contact