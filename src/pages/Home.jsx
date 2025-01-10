import React from "react";
import Cards from "../components/Cards";
import Cards2 from "../components/Cards2";

const Home = () => {
  return (
    <>
      <div>
        <Cards />
        <div className="flex justify-center">
          <Cards2 />
        </div>
      </div>
    </>
  );
};

export default Home;
