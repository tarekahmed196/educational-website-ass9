import React from "react";

const Picture = ({ picture }) => {
  console.log(picture);
  return (
    
    <div className=" border border-gray-200  dark:bg-gray-800 dark:border-gray-700 max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          
            <img class="w-80 h-80 mx-auto rounded-lg" src={picture.picture} alt="" />
          
          <div class="p-5">
            
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {picture.name}
              </h5>
            
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400  line-clamp-3 truncate">
              {picture.about}
            </p>
            
          </div>
        </div>
    </div>
  );
};

export default Picture;
