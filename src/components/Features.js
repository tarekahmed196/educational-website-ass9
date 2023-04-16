import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="">
        <h1 className="text-5xl mt-16">Best Features Available</h1>
        <p className="text-1xl mt-5">
          ReactJS is a popular JavaScript library used for building user
          interfaces. <br />
          It allows developers to create reusable UI components and provides
          efficient rendering performance.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-3 my-10 container mx-auto px-32">
        <div
          class="border border-gray-200  dark:bg-gray-800 dark:border-gray-700 max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
        >
          
          <div class="p-5">
            <a href="..">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              How to build reusable UI components with React
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Introduction to the React library and its fundamental concepts (components, props, state, etc.)
            </p>
            <a
              href=".."
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
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
            </a>
          </div>
        </div>
        <div class="border border-gray-200  dark:bg-gray-800 dark:border-gray-700 max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
          
          <div class="p-5">
            <a href="..">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Using Next.js for dynamic page routing and dynamic imports
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Integrating React with other libraries and frameworks (e.g., React Router, Axios)
            </p>
            <a
              href=".."
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
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
            </a>
          </div>
        </div>
        <div class="border border-gray-200  dark:bg-gray-800 dark:border-gray-700 max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
          
          <div class="p-5">
            <a href="..">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Testing React components with Jest and Enzyme
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Of course, each course can have a unique set of features based on the instructor's preferences and the needs of the target audience.
            </p>
            <a
              href=".."
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
