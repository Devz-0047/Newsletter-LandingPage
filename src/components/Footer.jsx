import {motion} from 'framer-motion';  // eslint-disable-line no-unused-vars
function Footer() {
    return (
        <div className="min-h-[14rem] bg-primary w-full flex justify-around items-center flex-wrap gap-4 md:gap-0 py-8 md:px-0">
            {/* Title Section */}
            <motion.h3 className="font-secondary text-5xl md:text-6xl text-black font-bold flex flex-col gap-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }} 
            viewport={{ once: true }}>
                <span>GOT SUGGESTIONS</span>
                <span>OR QUESTIONS?</span>
            </motion.h3>

            {/* Contact Section */}
            <motion.p className="font-primary text-gray-800 text-2xl md:text-3xl flex flex-col font-medium gap-2" 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }} 
            viewport={{ once: true }}>
                <span>Reach out via email:</span>
                <span>hello@reallygreatsite.com</span>
            </motion.p>
        </div>
    );
}

export default Footer;
