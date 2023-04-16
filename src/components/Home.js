import React from "react";
import Slider from "./Slider";
import Features from "./Features";
import Footer from "./Footer";
import { Link, useLoaderData } from "react-router-dom";
import Picture from "./Picture";

const Home = () => {
  const eduflex = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <Features></Features>
      <h1 className="text-5xl mt-16 font-bold mb-16">Pages For All Uses</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-6">
        
        {eduflex
          .map((picture) => <Picture picture={picture}></Picture>)
          .slice(0, 3)}
        
      </div>
      <div className="mt-6 mb-16 ">
              <Link to="/services">
                  <button
                    type="button"
                    className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mb-8  "
                  >
                    Show More
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
              </Link>
          </div>
    </div>
  );
};

export default Home;
