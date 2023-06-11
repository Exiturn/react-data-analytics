const styles = {
    sectionStyle:
    "flex items-center justify-center mx-auto max-w-[1240px] h-full px-4 text-white",

    importantSpan:
    "before:block before:absolute before:-inset-y-0.5 before:-inset-x-0.5 before:-skew-y-1 before:bg-gradient-to-r from-[#774caf] to-[#84d1c9] relative inline-block",

    /**
     * * NAVBAR STYLES 84d1c9 c9befa
     */

    mobileNav:
    "fixed overflow-x-hidden left-0 right-0 top-0 w-[14rem] h-full border-r border-r-gray-900 bg-[#000300] transform transition-all duration-500 z-30",

    navButton:
    "w-[9.5rem] py-[0.75rem] px-[1.25rem] cursor-pointer bg-white text-black rounded-lg ml-2 font-medium text-[0.975rem] text-center hover:text-white hover:bg-gradient-to-r from-[#774caf] to-[#84d1c9] transition duration-500",

    navLink:
    "p-3 text-center cursor-pointer w-[7rem] hover:text-[#c9befa] transition-all duration-300 inline-block",

    navSpan:
    "w-min-content relative transition-all before:absolute before:top-[1.5rem] before:right-0 before:h-[0.1rem] before:w-0 before:bg-gradient-to-r before:from-purple-800 before:via-indigo-500 before:to-[#84d1c9] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full",

    /**
     * * HERO STYLES
     */

    heroButton:
    "w-[10.5rem] py-[1rem] px-[1.75rem] cursor-pointer bg-white text-black tracking-widest rounded-lg font-medium text-[0.975rem] hover:text-white hover:bg-gradient-to-r from-[#774caf] to-[#84d1c9] transition duration-500",

    heroContainer:
    "max-w-[800px] w-[100%] h-full text-center flex flex-col justify-center",

    heroEyebrow:
    "purple-text-gradient font-bold p-2 text-base sm:text-lg md:text-xl",

    heroHeader:
    "md:text-7xl sm:text-6xl text-4xl font-bold md:py-6",

    heroSubHeader:
    "md:text-2xl sm:text-xl text-sm font-bold py-4",

    heroParagraph:
    "md:text-lg text-xs font-bond text-gray-400 w-[75%] lg:w-full place-self-center",

    /**
     * ANALYTICS STYLES
     */

    analyticsSection:
    "flex items-center justify-center mx-auto max-w-[100vw] h-full px-4 text-white mt-[2rem] md:my-[8rem]",
    
    analyticsContainer:
    "flex flex-col md:flex-row justify-center items-center my-6 md:my-10",

    analyticsEyebrow:
    "purple-text-gradient font-bold text-base sm:text-lg md:text-xl mt-2",

    analyticsHeader:
    "md:text-5xl text-4xl font-bold text-center mt-2",
        
    analyticsButton:
    "w-[10.5rem] py-[1rem] px-[1.75rem] mt-4 cursor-pointer bg-black text-white tracking-widest rounded-lg font-medium text-[0.975rem] hover:text-black hover:bg-gradient-to-r from-[#774caf] to-[#84d1c9] transition duration-500",

};

export default styles;
