function Testimonials() {
    return (
        <div className="min-h-screen flex mt-20 font-primary justify-evenly items-center mb-[-9rem]">
            <div className="flex flex-col gap-8">
                <p className="max-w-[36rem] leading-[2rem]  text-xl font-medium">
                Company newsletters are essential in building relationships with your employees, customers or even prospective clients. Engaging and professionally-made company newsletters have the power to inspire loyalty and repeat business. Get in touch with the people who matter to your business by making company newsletters one of your priorities.
                </p>
                <p className="max-w-[36rem] leading-[2rem] text-xl font-medium">
                When sending out a company newsletter, keep in mind these three things. First, send out your newsletter regularly. Stick to your promise if it’s going to be weekly, monthly or quarterly. The second is to have a proper layout. Make your newsletter is interesting and easy to read. Lastly, ensure the quality of the content and images you will share.
                </p>

            </div>
            <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                    <img src="/images/image5.jpg" alt="image5" className="w-[17rem] h-[22rem] rounded-md"/>
                    <img src="/images/image4.jpg" alt="image4" className="w-[17rem] h-[22rem] rounded-md"/>
                </div>
                <h2 className="max-w-[36rem] leading-[2.5rem] text-primary text-3xl font-semibold">
                "Engaging and professionally-made company newsletters have the power to inspire loyalty and repeat business."
                </h2>

            </div>
            
        </div>
    )
}

export default Testimonials