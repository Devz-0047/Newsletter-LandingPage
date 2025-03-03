import '../App.css';
function Herosection() {
    return (
        <div className="grid md:grid-cols-2 md:grid-rows-1 min-h-screen place-items-center gap-1 ">
            
            <div className="flex flex-col items-start justify-center text-left md:ml-[-5rem] gap-[4rem] mt-3 md:mt-5 sm:mt-4">
                <img src='/images/logo.png' className="w-[15rem] h-auto mx-auto md:mx-0 "/>
                <h1 className="flex flex-col justify-start text-7xl sm:text-8xl font-bold font-secondary md:gap-4 gap-2 items-center md:items-start mt-[-1rem] animate__main">
                    <span>The</span>
                    <span className="bg-gradient-to-r from-[#ff7a9a] via-[#ffc5e2] to-[#a8636f] text-transparent bg-clip-text">
                        Premium
                    </span>
                    <span>Pulse</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold flex flex-col font-secondary items-center md:items-start mx-auto md:mx-0 mt-[-1rem] animate__sub">
                    <span>Issue 70 | Volume 3</span>
                    <span>May 17, 2025</span>
                </h2>
            </div>

            
            <div className="flex items-center justify-center lg:border-[3rem] border-4 sm:border-6 border-[#FFD4D0] md:mr-[4rem] md:border-[1rem] mt-4">
                <img src="/images/image0.jpg" className="w-[28rem] h-[28rem] md:w-[38rem] md:h-[32rem] lg:w-[46rem] lg:h-[36rem] object-cover mx-auto md:mx-0 animate__img"/>
            </div>
        </div>
    );
}

export default Herosection;

