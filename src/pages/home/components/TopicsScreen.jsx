import {
  BULB,
  CARD_BG,
  CHAT,
  CONTRIBUTER,
  DOWN_ARROW,
  ELLIPSE,
  ELLIPSE_TWO,
  MODEL,
  SEARCH_VOILET,
} from "../../../assets";
import { Button, InputBar } from "../../../components";
import questions from "../../../data/data";
import "./topicscreen.css";

const TopicsScreen = () => {
  return (
    <div className="mx-14 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="md:col-span-2 xl:w-[50rem] md:mb-10">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-[0.7rem] font-semibold">
                LATEST DISCUSSIONS AS OF
              </h2>
              <div className="flex items-center gap-2">
                <div className="bg-[#B31942] w-4 h-3 border rounded-[2px]"></div>
                <p className="text-[0.7rem]">MARCH 12 2024</p>
              </div>
            </div>
            <Button className="bg-[#BEDFFF] flex items-center gap-2 text-customBlack text-center text-[0.7rem] px-4 py-2 w-36 h-9 rounded-full">
              <img src={BULB} alt="search" />
              ALL TOPICS
              <img src={DOWN_ARROW} alt="search" />
            </Button>
          </div>
          <div className="mb-4 relative">
            <InputBar
              type="text"
              placeholder="Search Topics"
              className="w-full h-12 p-2  border-customBlack border-2 rounded-full"
            />
            <Button className="absolute  top-[.6rem] right-3  rounded-full p-1 text-gray-500">
              <img src={SEARCH_VOILET} alt="search" />
            </Button>
          </div>
          <div className="space-y-4">
            {questions.map((question, i) => (
              <div
                key={i}
                className="flex justify-between xs:flex-col xs:gap-5 xs:mx-[-3rem] sm:mx-auto sm:flex-row items-center p-4 border-b border-gray-500"
              >
                <div className="flex gap-2">
                  <img
                    src={question.image}
                    alt="AVATAR"
                    className=" rounded-full w-10 h-10 "
                  />
                  <div>
                    <h3 className="font-semibold text-[1rem]">
                      {question.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Posted by {question.user}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button className="bg-[#F2EFFF] flex  items-center text-[.8rem] text-customBlack px-2 gap-1 w-[8.3rem] mr-4 h-10 py-2 rounded-full">
                    <img src={CHAT} alt="chat" />
                    View Answer
                  </Button>
                  <Button className="bg-customBlack text-white h-10 w-[9.4rem] px-4 py-2 rounded">
                    View Answer
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-4 w-32 h-10 xs:mb-8 text-customBlack border-customBlack border-2 py-2 rounded-full">
            Load More
          </Button>
        </div>
        <div className="space-y-4 lg:ml-16 md:ml-46   sm:ml-24 ">
          <div className="flex flex-col bg-[#FFEADE] items-center p-4 h-[36rem]  xl:w-[25rem] xs:w-[18rem] md:w-[30rem] xs:ml-[-2rem] border pt-12 border-gray-200 rounded">
            <h3 className="font-meduim text-[1.6rem] text-center font-georgia px-20">
              Top Contributor this week
            </h3>
            <div className="flex ">
              <div className="bg-[#B31942] text-white rounded-full flex items-center z-20 justify-center mt-10 mr-[-2rem] w-28 h-7">
                <p className="text-[.6rem] font-medium">100+ Responses</p>
              </div>

              <div className="mt-2">
                <img
                  src={CONTRIBUTER}
                  alt="Top Contributor"
                  className="rounded-full mr-4"
                />
              </div>
              <div className="bg-[#014751] text-white rounded-full flex items-center  mt-20 z-20  ml-[-2rem] justify-center w-28 h-7">
                <p className="text-[.6rem]  font-medium">4.2 Postive rating</p>
              </div>
            </div>
            <p className="font-medium text-[1.3rem]">Jishnu Ambadi</p>
            <div className="flex flex-col items-center border-[1px] mt-8 pt-8 border-t-black w-full">
              <p className="text-sm text-gray-800">
                You can be next one! Be a part of USA’s 1st CPT Program
                Directory!
              </p>
            </div>
            <Button className="mt-4 xl:w-[20rem] xs:w-[15rem] h-[4.5rem] bg-gradient-to-r from-pink-500 to-purple-600 hover:bg-gradient-to-l text-white py-2 rounded-full">
              Join Community & Ask
            </Button>
          </div>
          <div
            style={{
              backgroundImage: `url(${CARD_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="flex flex-col z-0 items-center h-[35.9rem]  xl:w-[25rem] xs:w-[18rem] xs:ml-[-2rem] md:w-[30rem] text-white pt-[-2rem]  rounded"
          >
            <div className="contain top-16 left-14">
              <img
                className="absolute top-0 left-5"
                src={ELLIPSE}
                alt="Image 1"
              />
              <img
                className="absolute top-14 left-0"
                src={ELLIPSE_TWO}
                alt="Image 2"
              />
              <img
                className="relative top-0 left-0"
                src={MODEL}
                alt="Image 3"
              />
            </div>

            <h3 className="font-meduim mt-8 text-white">E-BOOK</h3>
            <div className="text-center  mt-8">
              <p className="font-meduim text-xl mx-8 font-georgia">
                Charting Paths-Program Through a Student's Eyes
              </p>
            </div>
            <Button className="mt-8 w-[11.3rem] xs:w-[15rem] h-[3.06rem] border-white border-2 text-white py-2 hover:bg-[#20011B] rounded-full">
              Get the guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsScreen;
