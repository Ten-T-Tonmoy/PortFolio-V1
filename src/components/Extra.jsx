import React from "react";

const Cards2 = () => {
  return (
    <>
      <div
        className=" flex justify-center mt-10
       "
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-screen w-[80vw]">
          {/* inner grid will contain 4*/}
          <div className="grid grid-rows-2 h-[100vh]">
            <div
              className="bg-white flex items-center
        justify-center  rounded-3xl col-span-1 h-1/2"
            >
              <h1>Grid 1</h1>
            </div>
            <div
              className="bg-white flex items-center
        justify-center  rounded-3xl col-span-2 h-1/2"
            >
              <h1>Grid 2</h1>
            </div>
          </div>
          {/* outer grid for the projects*/}
          <div
            className="bg-white flex items-center
        justify-center  rounded-3xl col-span-1 h-screen"
          >
            <h1>Grid 3</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards2;
