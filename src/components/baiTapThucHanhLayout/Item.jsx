import React from "react";

const Item = () => {
  return (
    <div className="container mx-auto py-16">
      <ul className="flex flex-wrap gap-x-5">
        <li className=" flex-1 w-full md:w-1/2 lg:w-1/3   h-[250px] bg-gray-100 relative text-center flex flex-col justify-center items-center rounded-md">
          <i className="fa-solid fa-binoculars absolute p-7 bg-blue-500 -top-8 text-3xl text-white rounded-md"></i>
          <h3 className="font-bold text-2xl">Fresh new layout</h3>
          <p className="text-base w-[280px] mt-3">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </li>

        <li className="  flex-1 w-full md:w-1/2 lg:w-1/3   h-[250px] bg-gray-100 relative text-center flex flex-col justify-center items-center rounded-md">
          <i className="fa-solid fa-download absolute p-7 bg-blue-500 -top-8 text-3xl text-white rounded-md"></i>
          <h3 className="font-bold text-2xl">Free to download</h3>
          <p className="text-base w-[280px] mt-3">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </li>
        <li className=" flex-1 w-full md:w-1/2 lg:w-1/3   h-[250px] bg-gray-100 relative text-center flex flex-col justify-center items-center rounded-md">
          <i className="fa-solid fa-mask absolute p-7 bg-blue-500 -top-8 text-3xl text-white rounded-md"></i>
          <h3 className="font-bold text-2xl">Jumbotron hero header</h3>
          <p className="text-base w-[280px] mt-3">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </li>
      </ul>
      <ul className="flex flex-wrap gap-x-5 mt-16  ">
        <li className=" flex-1 w-full md:w-1/2 lg:w-1/3   h-[250px] bg-gray-100 relative text-center flex flex-col justify-center items-center rounded-md">
          <i className="fa-solid fa-box-archive absolute p-7 bg-blue-500 -top-8 text-3xl text-white rounded-md"></i>
          <h3 className="font-bold text-2xl">Feature boxes</h3>
          <p className="text-base w-[280px] mt-3">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </li>

        <li className="  flex-1 w-full md:w-1/2 lg:w-1/3  h-[250px] bg-gray-100 relative text-center flex flex-col justify-center items-center rounded-md">
          <i className="fa-solid fa-code absolute p-7 bg-blue-500 -top-8 text-3xl text-white rounded-md"></i>
          <h3 className="font-bold text-2xl">Simple clean code</h3>
          <p className="text-base w-[280px] mt-3">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </li>

        <li className=" flex-1 w-full md:w-1/2 lg:w-1/3   h-[250px] bg-gray-100 relative text-center flex flex-col justify-center items-center rounded-md">
          <i className="fa-regular fa-circle-check absolute p-7 bg-blue-500 -top-8 text-3xl text-white rounded-md"></i>
          <h3 className="font-bold text-2xl">A name you trust</h3>
          <p className="text-base w-[280px] mt-3">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Item;
