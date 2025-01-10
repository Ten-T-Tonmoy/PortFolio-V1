import React from "react";

const Navbar = () => {
  const [active, setActive] = React.useState("Home");

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <div>
      <ul className="flex flex-row justify-between">
        <div
          className="w-12 h-12 bg-black text-white flex 
                    items-center justify-center rounded-full m-2 font-bold"
        >
          M
        </div>
        <div
          className="flex flex-row m-3 bg-white rounded-full shadow-md
                items-center"
        >
          {["Home", "Blogs", "Projects", "Contact"].map((item, index) => (
            <li
              key={index}
              className={` cursor-pointer relative px-3 h-full flex
                 items-center rounded-full transition-all duration-300  ${
                   active === item ? "bg-black text-white" : ""
                 }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </li>
          ))}
        </div>
        <a href="" className="m-4 font-bold">
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
