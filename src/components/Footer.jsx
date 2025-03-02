function Footer() {
    return (
        <div className="min-h-[14rem] bg-primary w-full flex justify-around items-center flex-wrap gap-4 md:gap-0 py-8 md:px-0">
            {/* Title Section */}
            <h3 className="font-secondary text-5xl md:text-6xl text-black font-bold flex flex-col gap-5">
                <span>GOT SUGGESTIONS</span>
                <span>OR QUESTIONS?</span>
            </h3>

            {/* Contact Section */}
            <p className="font-primary text-gray-800 text-2xl md:text-3xl flex flex-col font-medium gap-2">
                <span>Reach out via email:</span>
                <span>hello@reallygreatsite.com</span>
            </p>
        </div>
    );
}

export default Footer;
