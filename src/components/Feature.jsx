import {motion} from 'framer-motion';  // eslint-disable-line no-unused-vars
function Feature() {
    return (
        <div className="min-h-screen flex items-center justify-center min-w-screen mt-[8rem] smth:mt-0">
            <div className="">
                <motion.h2 className="text-6xl md:text-7xl font-secondary font-bold max-w-[36rem] leading-[4rem] md:max-w-[46rem] md:leading-[6rem] text-center" initial={{ opacity: 0, scale:0 }}
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            viewport={{ once: true }}>
                    "MAKE YOUR <span className="bg-gradient-to-r from-[#ff7a9a] via-[#ffc5e2] to-[#a8636f] text-transparent bg-clip-text">NEWSLETTER</span> A BEAUTIFUL REPRESENTATION OF YOUR COMPANY."
                </motion.h2>
                <motion.p className="font-primary text-xl max-w-[46rem] leading-[2rem] text-center mt-10" initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }} 
            viewport={{ once: true }}>
                    Company newsletters are essential in building relationships with your employees, customers, or even prospective clients. Since a company newsletter can serve a variety of purposes, ensure the messages you will publish are aligned with your objective
                </motion.p>
            </div>
            
        </div>
    )
}

export default Feature