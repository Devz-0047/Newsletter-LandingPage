function Herosection() {
    return (
        <div className="grid grid-cols-2 grid-rows-1 h-screen place-items-center gap-1">
            
            <div className="flex flex-col items-start justify-center text-left ml-[-5rem] gap-[4rem]">
                <img src='/images/logo.png' className="w-[15rem] h-auto"/>
                <h1 className="flex flex-col justify-start text-8xl font-bold font-secondary gap-4">
                    <span>The</span>
                    <span className="bg-gradient-to-r from-[#ff7a9a] via-[#ffc5e2] to-[#a8636f] text-transparent bg-clip-text">
                        Premium
                    </span>
                    <span>Pulse</span>
                </h1>
                <h2 className="text-4xl font-bold flex flex-col font-secondary">
                    <span>Issue 70 | Volume 3</span>
                    <span>May 17, 2025</span>
                </h2>
            </div>

            
            <div className="flex items-center justify-center border-[3rem] border-[#FFD4D0] mr-[4rem]">
                <img src="/images/image0.jpg" className="w-[46rem] h-[36rem] object-cover"/>
            </div>
        </div>
    );
}

export default Herosection;

