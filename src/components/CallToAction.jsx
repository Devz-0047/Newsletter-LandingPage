function CallToAction() {
    return (
        <div className="grid grid-cols-2 grid-rows-1 h-screen place-items-center gap-4 mt-[-5rem]">
            
        <div className="flex flex-col items-start justify-center text-left pl-10 gap-[3rem]">
            
            <h1 className="flex flex-col justify-start text-7xl font-bold font-secondary gap-4">
                <span>Mental Health</span>
                
                <span>Matters</span>
            </h1>
            <h2 className="text-3xl font-bold flex flex-col font-primary bg-gradient-to-r from-[#ff7a9a] via-[#ffc5e2] to-[#a8636f] text-transparent bg-clip-text">
                <span>written by Aditi Rao</span>
               
            </h2>
        </div>

        
        <div className="flex items-center justify-center border-[2rem] border-[#FFD4D0] mr-[4rem]">
            <img src="/images/image6.jpg" className="w-[40rem] h-[32rem] object-cover"/>
        </div>
    </div>
    )
}

export default CallToAction