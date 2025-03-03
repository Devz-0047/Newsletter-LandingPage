import {motion} from 'framer-motion';  // eslint-disable-line no-unused-vars
function CallToAction() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 min-h-screen place-items-center gap-2 md:mt-[-5rem]">
            
        <motion.div className="flex flex-col items-start justify-center text-left md:pl-10 gap-4  md:gap-[3rem]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} 
        viewport={{ once: true }}>
            
            <h1 className="flex flex-col justify-start text-6xl md:text-7xl font-bold font-secondary gap-4">
                <span>Mental Health</span>
                
                <span>Matters</span>
            </h1>
            <h2 className="text-3xl font-bold flex flex-col font-primary bg-gradient-to-r from-[#ff7a9a] via-[#ffc5e2] to-[#a8636f] text-transparent bg-clip-text">
                <span>written by Aditi Rao</span>
               
            </h2>
        </motion.div>

        
        <motion.div className="flex items-center justify-center border-4 md:border-[2rem] border-[#FFD4D0] mx-4 md:mr-[4rem]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} 
        viewport={{ once: true }}>
            <img src="/images/image6.jpg" className="h-[24rem] w-[22rem] md:w-[40rem] md:h-[32rem] object-cover"/>
        </motion.div>
    </div>
    )
}

export default CallToAction