import React from "react";
import Picture from "./Picture";
import { useLoaderData } from "react-router-dom";

const Services = () => {
  const eduflex = useLoaderData();
  return (
    <div className="mb-32">
      <h1 className="font-bold text-5xl text-yellow-700 my-10">
        All <span className="text-orange-500">Services</span> Available Here
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 mt-16">
        {eduflex.map((picture) => (
          <Picture picture={picture}></Picture>
        ))}
      </div>
    </div>
  );
};

export default Services;
