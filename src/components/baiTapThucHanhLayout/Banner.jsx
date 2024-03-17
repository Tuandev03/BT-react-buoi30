import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="p-4 bg-gray-100 rounded text-center h-[400px] flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">A warm welcome!</h2>
        <p className="text-2xl w-auto text-center mx-auto my-4 lg:w-[800px]">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <button className="py-2 px-4 bg-blue-600 rounded text-white hover:opacity-80 ">
          Call to action
        </button>
      </div>
    </div>
  );
};

export default Banner;
