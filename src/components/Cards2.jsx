import React from "react";

const Cards2 = () => {
  return (
    <>
      <div className="grid grid-cols-3 w-[86vw] gap-4 p-6 bg-gray-100 min-h-screen">
        {/* Left Section */}
        <div className="grid grid-rows-2 gap-4">
          <div className="bg-white p-4 rounded-xl">
            <div className="bg-green-500 p-4 rounded-xl flex justify-between">
              <span>Offline</span>
              <span>🎧</span>
            </div>
          </div>

          {/* Get in Touch Form (2 Columns) */}
          <div className="bg-white p-4 rounded-xl">
            <h2 className="font-bold text-xl mb-4">Get in Touch</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-2 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-2 border rounded-md"
                />
                <button className="bg-gray-300 p-2 rounded-md flex items-center justify-center">
                  Send ➤
                </button>
              </div>
              <textarea
                placeholder="Message"
                className="p-2 border rounded-md resize-none h-full"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="grid grid-rows-2 gap-4">
          {/* Typing Box */}
          <div className="bg-white p-4 rounded-xl">
            <textarea
              className="w-full h-24 border-none resize-none"
              placeholder="Start typing..."
            ></textarea>
            <div className="flex justify-center gap-2 mt-2">
              <button className="px-4 py-2 bg-gray-300 rounded">←</button>
              <button className="px-4 py-2 bg-gray-300 rounded">
                Slide Up
              </button>
              <button className="px-4 py-2 bg-gray-300 rounded">→</button>
            </div>
          </div>

          {/* Toggle & Last Visited (Stacked Grid) */}
          <div className="grid grid-rows-2 gap-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center">
              🌞 Toggle
            </div>
            <div className="bg-white p-4 rounded-xl flex flex-col items-center">
              <span className="text-lg font-bold">Last Visited</span>
              <p>from Naogaon, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-4 rounded-xl flex flex-col">
          <div className="flex justify-center">🎟️</div>
          <h2 className="font-bold text-xl">Recent Project</h2>
          <p className="text-lg">Movie Ticketing Microservice</p>
          <p className="text-sm">
            This system securely allows users to view movies, check showtimes,
            and book tickets...
          </p>
          <div className="mt-auto text-right">➡️</div>
        </div>
      </div>
    </>
  );
};

export default Cards2;
