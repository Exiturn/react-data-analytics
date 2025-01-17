const styles = {
    sectionStyle:
    "flex items-center justify-center mx-auto max-w-[100vw] h-full px-4 text-white",

    importantSpan:
    "before:block before:absolute before:-inset-y-0.5 before:-inset-x-0.5 before:-skew-y-1 before:bg-gradient-to-r from-[#774caf] to-[#84d1c9] relative inline-block",

    primaryButton:
    "w-[10.5rem] py-[1rem] px-[1.5rem] cursor-pointer bg-white text-black tracking-widest rounded-lg ml-2 font-medium text-[0.975rem] text-center hover:text-white hover:bg-gradient-to-r from-[#774caf] to-[#84d1c9] transition duration-500",

    secondaryButton:
    "w-[10.5rem] py-[1rem] px-[1.5rem] cursor-pointer bg-black text-white tracking-widest rounded-lg font-medium text-[0.975rem] hover:text-black hover:bg-gradient-to-r from-[#774caf] to-[#84d1c9] transition duration-500",
    
    tertiaryButton:
    "w-[10.5rem] py-[1rem] px-[1.5rem] cursor-pointer bg-black tracking-widest rounded-lg ml-2 font-medium text-[0.975rem] text-center hover:text-black hover:bg-white transition duration-500",

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
     * * ANALYTICS STYLES
     */

    analyticsSection:
    "flex items-center justify-center mx-auto mt-[2rem] md:mt-[8rem] px-4 max-w-[100vw] h-full text-black ",
    
    analyticsContainer:
    "flex flex-col lg:flex-row justify-center items-center my-6 md:my-10",

    analyticsEyebrow:
    "purple-text-gradient font-bold text-base sm:text-lg md:text-xl mt-2",

    analyticsHeader:
    "md:text-5xl text-4xl font-bold mt-2",

    analyticsButton:
    "w-[10.5rem] py-[1rem] px-[1.75rem] mt-4 cursor-pointer bg-black text-white tracking-widest rounded-lg font-medium text-[0.975rem] hover:text-black hover:bg-gradient-to-r from-[#774caf] to-[#84d1c9] transition duration-500",
        
    cloudLeftSize:
    "relative w-[35vw] md:w-[45vw] lg:w-[30vw]",

    cloudLeftPosition:
    "absolute left-[-10vw] top-[0vh] md:left-[-20vw] md:top-[-5vh] lg:left-[-10vw] lg:top-[1vw] xl:left-[-10vw] xl:top-[1vh] 2xl:left-[-4vw] 2xl:top-[4vh]",

    cloudRightSize:
    "relative w-[40vw] md:w-[45vw] lg:w-[35vw]",

    cloudRightPosition:
    "absolute left-[30vw] md:left-[30vw] md:top-[5vh] lg:left-[25vw] xl:left-[25vw] 2xl:left-[30vw]",

    /**
     * * NEWSLETTER STYLES
     */

    newsletterContainer:
    "flex flex-col md:flex-row w-full justify-center items-center gap-[3rem] md:gap-[4rem] my-10",

    newsletterHeader:
    "md:text-5xl text-2xl font-bold mt-2 lg:max-w-[50vw]",

    newsletterSubHeader:
    "md:text-lg text-sm font-bold purple-text-gradient",

    newsletterInput:
    "w-full md:w-[55%] rounded-md py-[0.75rem] px-3 mb-3 md:mb-0 text-black",

    newsletterButton:
    "w-full md:w-[40%] py-[0.85rem] px-3 cursor-pointer bg-gradient-to-r from-[#774caf] to-[#84d1c9] text-white tracking-widest rounded-lg font-medium text-[0.9rem] hover:text-black hover:bg-white transition duration-500",

    newsletterPolicy:
    "w-auto inline-block text-xs underline cursor-pointer italic hover:text-[#c9befa] transition-colors duration-300",

    /**
     * * PRICING STYLES
     */

    pricingSection:
    'flex flex-col items-center justify-center mx-auto max-w-[100vw] h-full px-4 text-black bg-white',

    pricingHeader:
    'md:text-5xl text-4xl font-bold mt-6 md:mt-10 text-black',

    pricingParagraph:
    'mb-6 md:mb-10 mt-2 md:text-lg text-xs font-bond text-gray-500 place-self-center text-start md:text-center max-w-full lg:max-w-[60vw]',

    pricingContainer:
    'flex lg:flex-wrap lg:flex-row flex-col gap-16 my-6 md:my-10 w-full justify-center',

    pricingCard:
    'flex flex-col justify-between items-center gap-6 w-full lg:w-[25rem] min-h-full p-5 my-3 lg:my-0 rounded-lg relative transition-transform duration-300 ease-in-out hover:scale-y-110 lg:hover:scale-105',

    pricingPopular:
    'flex flex-row justify-center items-center gap-2 min-w-full max-h-[100px] p-2 rounded-tr-md rounded-tl-md bg-black absolute top-[-4vh] text-white font-base text-base md:text-xl',

    pricingList:
    'border-y-[1px] border-gray-300 py-6 w-full flex flex-col items-center',

    /**
     * * FOOTER STYLES
     */

    footerContainer:
    'flex flex-col md:flex-row justify-between items-center w-[100vw]',

    footerContent:
    'w-full text-center md:text-start',

    footerHeader:
    'w-full md:w-[30%] text-[1.8rem] sm:text-[3vw] xl:text-[1.8rem] font-bold purple-text-gradient',

    footerParagraph:
    'w-[50%] hidden sm:inline-block text-xs',

    footerSocials:
    'flex flex-row justify-center items-center w-full md:w-[30%] gap-5 mt-2',
};

export default styles;
