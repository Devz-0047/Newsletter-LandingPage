import {motion} from 'framer-motion';  // eslint-disable-line no-unused-vars
function Description() {
    return (
        <div className="min-h-screen mt-18 flex items-center gap-4 justify-evenly mb-[-3rem] flex-col md:flex-row flex-wrap md:items-center md:justify-center">
            <motion.div className="flex flex-col gap-16 " initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            viewport={{ once: true }} >
                <h3 className="text-primary text-2xl md:text-3xl font-bold max-w-[36rem] leading-[2.5rem] mx-2 md:mx-0">
                "Company newsletters are essential in building relationships with your employees, customers or even prospective clients."
                </h3>
                <div className="flex gap-2 md:gap-4 flex-wrap items-center justify-center">
                    <img src="/images/image3.jpg" alt="image3" className="w-[18rem] h-[25rem] rounded-md"/>
                    <img  src="/images/image2.jpg" alt="image3" className="w-[18rem] h-[25rem] rounded-md"/>
                </div>

            </motion.div>
            <div>
                <motion.div className="flex flex-col md:gap-10 gap-8 items-center justify-center" initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            viewport={{ once: true }}>
                    <img src="/images/image1.jpg" alt="image1" className="w-[24rem] md:w-[36rem]"/>
                    <p className="max-w-[36rem] leading-[2rem] font-primary  text-lg md:text-xl font-medium mx-4 md:mx-0">Make your newsletter a beautiful representation of your company by inserting your logo, infusing it with your brand colours and including official images from your files! Do you want to send out newsletters for Holi or Christmas? Do you want to show the fun side of your company for a change? Or do you want to use your company newsletter to advertise your new products or services to new and existing leads? The options are endless!</p>
                </motion.div>

            </div>
            
        </div>
    )
}

export default Description