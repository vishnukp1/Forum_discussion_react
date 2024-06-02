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
                className="flex justify-between items-center p-4 border border-gray-200 rounded"
              >
                <div>
                  <h3 className="font-semibold">{question.title}</h3>
                  <p className="text-sm text-gray-500">
                    Posted by {question.user}
                  </p>
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
          <Button className="mt-4 w-32 h-10  text-customBlack border-customBlack border-2 py-2 rounded-full">
            Load More
          </Button>
        </div>
        <div className="space-y-4 lg:ml-10 md:ml-56 sm:ml-24">
          <div className="flex flex-col bg-[#FFEADE] items-center p-4 h-[36rem] w-[25rem] border pt-12 border-gray-200 rounded">
            <h3 className="font-meduim text-[1.6rem]">
              Top Contributor this week
            </h3>
            <div className="bg-[#B31942] text-white rounded-full flex items-center justify-center w-28 h-7">
              <p className="text-[.6rem] font-medium">100+ Responses</p>
            </div>

            <div className="bg-[#014751] text-white rounded-full flex items-center justify-center w-28 h-7">
              <p className="text-[.6rem]  font-medium">4.2 Postive rating</p>
            </div>

            <div className="mt-2">
              <img
                src={CONTRIBUTER}
                alt="Top Contributor"
                className="rounded-full mr-4"
              />
            </div>
            <div>
              <p className="font-medium text-[1.3rem]">Jishnu Ambadi</p>
              <p className="text-sm text-gray-500">
                You can be next one! Be a part of USA’s 1st CPT Program
                Directory!
              </p>
            </div>
            <Button className="mt-4 w-[20rem] h-[4.5rem] bg-gradient-to-r from-pink-500 to-purple-600 hover:bg-gradient-to-l text-white py-2 rounded-full">
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
            className="flex flex-col z-0 items-center h-[35.9rem] w-[25rem] text-white  border border-gray-200 rounded"
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

            <h3 className="font-meduim text-white">E-BOOK</h3>
            <div className="text-center">
              <p className="font-semibold">
                Charting Paths-Program Through a Student's Eyes
              </p>
            </div>
            <Button className="mt-4 w-[11.3rem] h-[3.06rem] border-white border-2 text-white py-2 rounded-full">
              Get the guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsScreen;
