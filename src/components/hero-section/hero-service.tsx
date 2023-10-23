const Hero = () => {
    return (
        <main>
            <div className=" w-full bg-black lg:min-w-full   md:p-[50px] ">
        <div className="flex  items-start  lg:pl-[100px] w-full sm:mx-auto lg:mt-8">
        <h1 className="font-unisans font-bold text-white text-3xl ml-4 lg:text-6xl mt-0 text-start sm:text-5xl">
            A full-service digital 
            <br />
            innovation partner
        </h1>
        </div>
        
        <div className="lg:p-[30px] lg:pl-[100px]">
            <span className="font-unisans text-white text-lg ml-4 lg:text-3xl mt-0 text-start sm:text-5xl">
            Our rich design and technology <span className="ml-4  lg:ml-0">expertise </span>
            <br  /> <span className="ml-4"> delivers top brands  and <span className="hidden">digital</span> </span>  <br className="sm:block lg:hidden" />
            <span className="ml-4 lg:ml-0 sm:inline"> experiences.
            </span>
            </span>
        </div>
        </div>
        
        </main>
    )
}
export default Hero