import { AVATAR_EIGHT, AVATAR_FIVE, AVATAR_FOUR, AVATAR_ONE, AVATAR_SEVEN, AVATAR_SIX, AVATAR_THREE, AVATAR_TWO, BULB, COMMENT, SEARCH_WHITE } from "../../../assets";
import { Button, InputBar } from "../../../components";
import { topics } from "../../../data/data";

const ForumScreen = () => {
 

  return (
    <div className="min-h-screen bg-white">
      <main className="px-6 py-12">
        <div className="text-center mb-6">
          <span className="">forum</span>
          <h1 className="text-4xl font-bold font-serif">Discuss & Evolve</h1>
          <p className="mt-4 text-gray-600">
            Engage with Fellow Professionals: Join the Program Forum Discussion!
          </p>
        </div>
        <div className="max-w-[29.3rem] mx-auto mb-12">
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
        </div>

        <div className="w-screen relative grid grid-cols-12 gap-4 md:grid-cols-6 sm:grid-cols-3 xs:grid-cols-3 md:gap-2 lg:gap-4 lg:grid-cols-12 xl:grid-cols-12 xl:gap-4">
          <div className="child rounded-full bg-green-900 w-32 h-32 col-span-1">
            <img
              src={AVATAR_ONE}
              alt="Avatar 4"
              className="w-32 h-32  rounded-full object-cover"
            />
          </div>
          <div className="child rounded-full bg-blue-500 w-32 h-32 pt-[-5rem] col-span-2">
           
            <img
              src={AVATAR_TWO}
              alt="Avatar 4"
              className="w-32 h-32  rounded-full object-cover"
            />
          </div>
          <div className="child rounded-full bg-green-500 w-32 h-32 pt-[-5rem] col-span-1 mt-6 md:mt-0 lg:mt-6 lg:col-span-2">
           
            <img
              src={AVATAR_THREE}
              alt="Avatar 4"
              className="w-32 h-32  rounded-full object-cover"
            />
          </div>
          <div className="child rounded-full bg-yellow-900 w-32 h-32 pt-[-5rem] col-span-2">
           
            <img
              src={AVATAR_FOUR}
              alt="Avatar 4"
              className="w-32 h-32  rounded-full object-cover"
            />
          </div>
          <div className="child rounded-full bg-red-900 w-32 h-32 pt-[-5rem] col-span-2">
           
            <img
              src={AVATAR_FIVE}
              alt="Avatar 4"
              className="w-32 h-32  rounded-full object-cover"
            />
          </div>
          <div className="child rounded-full bg-purple-500 w-32 h-32 pt-[-5rem] col-span-1">
           
            <img
              src={AVATAR_SIX}
              alt="Avatar 4"
              className="w-32 h-32  rounded-full object-cover"
            />
          </div>
          <div className="child rounded-full bg-pink-500 w-32 h-32 pt-[-5rem] col-span-1">
           
            <img
              src={AVATAR_SEVEN}
              alt="Avatar 4"
              className="w-32 h-32  rounded-full object-cover"
            />
          </div>
          <div className="child rounded-full bg-indigo-500 w-32 h-32 pt-[-5rem] col-span-2">
           
            <img
              src={AVATAR_EIGHT}
              alt="Avatar 4"
              className="w-32 h-32  rounded-full object-cover"
            />
          </div>
        </div>

        <div>
          <div className="bg-gray-100  flex flex-col items-center pt-24 pb-28 p-4">
            <h2 className="text-3xl font-semibold mb-6">
              Most Searched <span className="italic">Ones</span>
            </h2>
            <div className="grid grid-cols-12 w-full ">
              <div className="col-start-3 col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mx-[-2rem]">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="bg-black text-white p-6 flex items-center justify-center h-36 text-center rounded shadow-lg"
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <a href="#" className="text-red-500">
                Didn't find your topic?{" "}
                <span className="underline">Start discussing</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForumScreen;
