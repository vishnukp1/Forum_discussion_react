import { LOGO, SEARCH_NORMAL } from "../../assets";
import { Button } from "../../components";
import { useState, useEffect } from "react";
import { FiAlignJustify } from "react-icons/fi";

const Header = () => {
  const [showSecondaryHeader, setShowSecondaryHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 80) {
        setShowSecondaryHeader(true);
      } else {
        setShowSecondaryHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pb-6 ">
      <header className="grid grid-cols-12 items-center   py-4 border-b h-[6rem] shadow-md border-gray-200 xs:pt-2">
        <img
          src={LOGO}
          alt="img"
          className="w-10 h-12 xs:ml-8 ml-4 sm:ml-8 md:ml-12 lg:ml-[3.8rem] "
        />
        <div className="col-span-12 xl:col-start-5 xl:col-span-4   lg:col-start-4 lg:col-span-5 md:col-start-4 md:col-span-6  flex justify-around mt-4 sm:mt-0">
          <a href="#learn" className="text-sm sm:text-base">
            Learn
          </a>
          <a href="#how" className="text-sm sm:text-base">
            How do I participate?
          </a>
          <a href="#universities" className="text-sm sm:text-base">
            Universities
          </a>
          <a href="#corporate" className="text-sm sm:text-base ">
            Corporate
          </a>
        </div>
        <div className="col-span-12 sm:col-start-11 sm:col-span-2 lg:ml-[-1rem] xs:mt-[-8rem] xs:ml-44 sm:ml-[2rem] md:col-start-10 md:col-span-3 md:mr-1 flex items-center justify-center sm:justify-end mt-4 sm:mt-0 lg:space-x-0 space-x-4">
          <button className="xl:w-10 xl:h-10 lg:w-12  md:w-24 lg:h-12 rounded-full md:hidden lg:flex lg:pl-[.4rem] xs:h-9 xs:pr-1 xl:block border-[0.3rem] border-solid border-black flex items-center justify-center pl-[0.4rem]">
            <img src={SEARCH_NORMAL} alt="img" className="w-4 h-4 " />
          </button>
          <Button className="bg-black text-white px-4 py-2 lg:w-[10rem] md:w-[15rem] rounded-full text-sm sm:text-base">
            Join Program
          </Button>
        </div>
      </header>

      {/* Render the second header conditionally */}


      {showSecondaryHeader && (
        <div className=" flex  fixed top-0 h-14 justify-center bg-white z-20 w-full ">
          <div className="flex h-16 w-[700px] bg-slate-700 justify-between items-center sm:gap-6 xs:gap-1 rounded-md px-4">
            <div className="flex items-center">
              <img className="h-10" src={LOGO} alt="Logo" />
            </div>
            <div className="flex gap-6 items-center">
              <div className="h-9 sm:w-24 xs:w-20 flex justify-center items-center bg-customBlack text-white text-sm rounded-full">
                <div className="pr-2">
                  <FiAlignJustify />
                </div>
                Menu
              </div>
              <div className="relative h-9 sm:w-32 xs:w-20 flex justify-center items-center bg-gradient-to-r from-purple-600 to-pink-500 text-black text-sm rounded-full">
                <div className="absolute inset-[2px] bg-white rounded-full flex justify-center items-center">
                  <span className="ml-2 xs:text-[11px] xs:font-meduim sm:text-[.8rem]">Discuss CPT</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="flex items-center">
                <div className="h-10 w-10 flex justify-center items-center border-[5px] border-customBlack bg-white rounded-full p-0">
                  <img src={SEARCH_NORMAL} alt="" />
                </div>
                <div className="h-10 w-36 flex justify-center items-center bg-customBlack text-white text-xs rounded-full p-0 ml-[-1px]">
                  Join Program
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
