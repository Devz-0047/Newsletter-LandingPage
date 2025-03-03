import {motion} from 'framer-motion';  // eslint-disable-line no-unused-vars
function Blog() {
    return (
        <div className="flex min-h-screen flex-col md:flex-row items-center justify-center md:items-start md:justify-around md:mx-[5rem] gap-4 md:gap-10 mt-26">
            <motion.div className="flex items-start flex-col justify-around flex-1/3 gap-6 pl-4 md:pl-14"
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: "easeOut" }} 
             viewport={{ once: true }}>
                <h2 className="font-secondary font-semibold text-6xl">
                    The Shortlist
                </h2>
                <p className="text-wrap text-left font-primary text-xl max-w-[22rem] leading-[2rem]">
                It’s very crucial to plan how your company newsletter will come to life. Will you be assigning the writing tasks to your employees who are good with words or hiring an off-site employee for the task? Who will provide the images? These are just some of the many questions you need to answer
                </p>

            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, ease: "easeOut" }} 
                 viewport={{ once: true }}>
                <div className="font-primary border-2 border-primary flex flex-col pl-3 pr-4 gap-4 md:gap-6 md:pl-8 md:pr-6 lg:gap-8 lg:pl-16 lg:pr-[10rem] py-16 items-center justify-center mb-4 "
                 >
                    <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff7a9a] via-[#ffc5e2] to-[#a8636f] text-transparent bg-clip-text">
                        Keep Break Time Sacred
                    </h2>
                    <p className="max-w-[22rem] leading-[2rem]">
                        Since a company newsletter can serve a variety of purposes, ensure the messages you will publish are aligned with your objective.
                    </p>
                    </div>
                    <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff7a9a] via-[#ffc5e2] to-[#a8636f] text-transparent bg-clip-text">
                        Reach out to your peers
                    </h2>
                    <p className="max-w-[22rem] leading-[2rem]">
                        Since a company newsletter can serve a variety of purposes, ensure the messages you will publish are aligned with your objective.
                    </p>
                    </div>
                    <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-[#ff7a9a] via-[#ffc5e2] to-[#a8636f] text-transparent bg-clip-text">
                    Connection is key
                    </h2>
                    <p className="max-w-[22rem] leading-[2rem]">
                    Since a company newsletter can serve a variety of purposes, ensure the messages you will publish are aligned with your objective.
                    </p>
                    </div>
                </div>

            </motion.div>
            
        </div>
    )
}

export default Blog