function Footer() {
    return (
        <div className="h-[14rem] bg-primary w-full flex justify-around items-center px-10">
            {/* Title Section */}
            <h3 className="font-secondary text-6xl text-black font-bold flex flex-col gap-5">
                <span>GOT SUGGESTIONS</span>
                <span>OR QUESTIONS?</span>
            </h3>

            {/* Contact Section */}
            <p className="font-primary text-gray-800 text-3xl flex flex-col font-medium gap-2">
                <span>Reach out via email:</span>
                <span>hello@reallygreatsite.com</span>
            </p>
        </div>
    );
}

export default Footer;
