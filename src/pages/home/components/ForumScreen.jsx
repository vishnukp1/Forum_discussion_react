import {
  AVATAR_EIGHT,
  AVATAR_FIVE,
  AVATAR_FOUR,
  AVATAR_ONE,
  AVATAR_SEVEN,
  AVATAR_SIX,
  AVATAR_THREE,
  AVATAR_TWO,
  BULB,
  COMMENT,
  LONG_DOWN_ARROW,
  SEARCH_WHITE,
} from "../../../assets";
import { AVATAR, Button, InputBar } from "../../../components";
import { topics } from "../../../data/data";

const ForumScreen = () => {
  return (
    <div className="min-h-screen  bg-white">
      <main className=" py-12">
        <div className="text-center mb-6 xs:mx-8 ">
          <span className="">forum</span>
          <h1 className="text-4xl font-bold font-serif">Discuss & Evolve</h1>
          <p className="mt-4 text-gray-600">
            Engage with Fellow Professionals: Join the Program Forum Discussion!
          </p>
        </div>
        <div className="max-w-[29.3rem] mx-auto sm:mb-12 xs:mb-[-10rem] xs:mx-8 sm:mx-auto">
          <div className="relative">
            <InputBar
              type="text"
              className="w-full border h-14 border-gray-300 rounded-full pl-6 text-black"
              placeholder="Search Topics"
            />
            <Button className="absolute  top-[.8rem] right-3 bg-[#0A090E] rounded-full p-1 text-gray-500">
              <img src={SEARCH_WHITE} alt="search" />
            </Button>
          </div>
          <div className="flex justify-between items-center mt-14">
            <div className="flex items-center gap-2">
              <Button className=" bg-[#FFF2F6] rounded-full p-1 text-gray-500">
                <img src={COMMENT} alt="search" />
              </Button>
              <span>Start Discussing</span>
            </div>
            <div className="flex  items-center gap-2">
              <Button className=" bg-[#BEDFFF] px-4 py-2 rounded-full p-1 text-gray-500">
                <img src={BULB} alt="search" />
              </Button>
              <span>View Topics</span>
            </div>
          </div>
          <div className="flex justify-center text-black text-5xl">
            <img src={LONG_DOWN_ARROW} alt="arrow" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap mb-10 lg:mt-[-3rem]">
          <AVATAR
            src={AVATAR_ONE}
            alt="AVATAR"
            aos="fade-right"
            containerClassName="ml-[-2rem] mt-72"
            imgClassName="bg-pink-100 pl-4 pr-3 pt-2"
          />
          <AVATAR
            src={AVATAR_TWO}
            alt="AVATAR"
            aos="fade-down"
            containerClassName="ml-[-4rem] mt-32"
            imgClassName="bg-sky-200 pl-1 pr-1 pt-2 border-[10px] border-white"
          />
          <AVATAR
            src={AVATAR_THREE}
            alt="AVATAR"
            aos="fade-up"
            containerClassName="ml-14 mb-44"
            imgClassName="bg-purple-400 pl-2 pr-2 pt-5"
          />
          <AVATAR
            src={AVATAR_FOUR}
            alt="AVATAR"
            aos="fade-down"
            containerClassName="ml-[-35px] mt-52 mr-20 lg:mt-[15rem]"
            imgClassName="bg-yellow-100"
          />
          <AVATAR
            src={AVATAR_FIVE}
            alt="AVATAR"
            aos="fade-left"
            containerClassName="m-4 lg:mt-[15rem]"
            imgClassName="bg-violet-300 lg:mt-[-3rem]"
          />
          <AVATAR
            src={AVATAR_SIX}
            alt="AVATAR"
            aos="fade-right"
            containerClassName="ml-[-50px] mt-28"
            imgClassName="bg-amber-400 p-5 pb-0 pt-6 border-[10px] border-white"
          />
          <AVATAR
            src={AVATAR_SEVEN}
            alt="AVATAR"
            aos="fade-down"
            containerClassName="mb-44"
            imgClassName="bg-lime-200 p-3 pt-7 pl-4 pr-4 pb-0"
          />
          <AVATAR
            src={AVATAR_EIGHT}
            alt="AVATAR"
            aos="fade-right"
            containerClassName="m-4"
            imgClassName="bg-sky-300 pr-3"
          />
        </div>

        <div>
          <div className="bg-gray-100  flex flex-col items-center pt-20 pb-28 p-4">
            <span className="text-xl">Topics</span>
            <h2 className="text-3xl font-meduim font-georgia mb-6">
              Most Searched <span className="italic ">Ones</span>
            </h2>
            <div className="grid grid-cols-12 w-full ">
              <div className="col-start-3 col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-[-2rem]">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className=" hover:bg-gradient-to-r from-red-900 via-violet-950 to-blue-950 bg-black text-white p-6 flex items-center justify-center h-36 text-center rounded shadow-lg"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 text-lg">
              <a href="#" className="text-black">
                Didn't find your topic?{" "}
                <span className=" font-georgia">Start discussing</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForumScreen;
