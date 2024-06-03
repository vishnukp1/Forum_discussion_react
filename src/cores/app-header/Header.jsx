import { LOGO, SEARCH_NORMAL } from "../../assets";
import { Button } from "../../components";

const Header = () => {
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
    </div>
  );
};

export default Header;
