import { LOGO, SEARCH_NORMAL } from "../../assets";
import { Button } from "../../components";

const Header = () => {
  return (
    <div>
      <header className="grid grid-cols-12 items-center py-6 border-b h-[6rem] border-gray-200">
      <img src={LOGO} alt="facebook" className="w-10 h-12 ml-[3.8rem]" />
        <div className="col-start-5 col-span-4 flex justify-around">
          <a href="#learn">Learn</a>
          <a href="#how">How do I participate?</a>
          <a href="#universities">Universities</a>
          <a href="#corporate">Corporate</a>
        </div>
        <div className="col-start-11 col-span-2 flex items-center">
        <button className="w-8 h-8 rounded-full border-4 border-solid border-black flex items-center justify-center">
                <img src={SEARCH_NORMAL} alt="facebook" className="w-4 h-4" />
              </button>
        <Button className=" bg-black text-white px-4 py-2 rounded-full">
          Join Program
        </Button>
        </div>
      </header>
    </div>
  );
};

export default Header;
