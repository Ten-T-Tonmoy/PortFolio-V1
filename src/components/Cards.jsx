import React from "react";
import {
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";
const Cards = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4 w-[80vw] gap-8">
          <div
            className="bg-white flex items-center 
        justify-center h-96 rounded-3xl col-span-1"
          >
            <h1>Grid 1</h1>
          </div>
          <div
            className="bg-white flex items-center 
        justify-center h-96 rounded-3xl col-span-2"
          >
            <h1>Grid 2</h1>
          </div>
          <div className="flex flex-col ">
            <div className="h-40  my-auto grid grid-cols-2  gap-2">
              <div className="bg-white  rounded-2xl  justify-center items-center flex">
                <FaTwitter
                  className="text-blue-500 text-[2rem] transform hover:scale-125 
               hover:text-blue-700"
                />
              </div>
              <div className="bg-white rounded-2xl justify-center items-center flex">
                <FaGithub
                  className="text-gray-800 text-[2rem] 
              transform hover:scale-125 hover:text-gray-600"
                />
              </div>
              <div className="bg-white rounded-2xl justify-center items-center flex">
                <FaDiscord className="text-gray-800 text-[2rem] transform hover:scale-125 hover:text-gray-600" />
              </div>
              <div className="bg-white rounded-2xl justify-center items-center flex">
                <FaLinkedin className="text-blue-700 text-[2rem] transform hover:scale-125 hover:text-blue-900" />
              </div>
            </div>
            <div
              className="bg-white flex items-center
         justify-center h-48 rounded-3xl col-span-1"
            >
              Photo will Do
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
