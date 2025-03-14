import {motion} from 'framer-motion';  // eslint-disable-line no-unused-vars
function Newsletter() {
    return (
        <div className="min-h-screen flex items-center justify-center md:justify-evenly flex-wrap ">
            <motion.div className="flex gap-4" 
                 initial={{ opacity: 0, y: -50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, ease: "easeOut" }} 
                 viewport={{ once: true }}>
                <div >
                    <img src="/images/image8.jpg" alt="yoga person" className="w-[17rem] h-[22rem] rounded-md"/>
                

                </div>
                <div >
                <img src="/images/image7.jpg" alt="yoga person" className="w-[17rem] h-[22rem] rounded-md"/>

                </div>

            </motion.div>
            <motion.div className="font-primary flex flex-col gap-4 md:gap-8 items-center justify-center pl-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }} 
            viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-bold text-primary max-w-[36rem] leading-[2rem]">
                "Company newsletters are essential in building relationships with your employees and customers."
                </h2>
                <p className="max-w-[36rem] leading-[2rem] font-medium text-lg md:text-xl">
                Make your newsletter a beautiful representation of your company by inserting your logo, infusing it with your brand colours, and including official images from your files! Do you want to send out newsletters for Holi or Christmas? Do you want to show the fun side of your company for a change? Or do you want to use your company newsletter to advertise your new products or services to new and existing leads? The options are endless!
                </p>
                <p className="max-w-[36rem] leading-[2rem] font-medium text-lg md:text-xl">
                When sending out a company newsletter, keep in mind these three things. First, send out your newsletter regularly. Stick to your promise if it’s going to be weekly, monthly or quarterly. The second is to have a proper layout. Make your newsletter is interesting and easy to read. Lastly, ensure the quality of the content and images you will share.
                </p>

            </motion.div>
            
        </div>
    )
}

export default Newsletter