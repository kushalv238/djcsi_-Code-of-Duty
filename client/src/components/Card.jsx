import React from "react";

const Card = () => {
  return (
    <div className="wrapper flex flex-col w-[200px]">
      <div className="employee w-full flex flex-row ">
        <div className="-translate-y-10">
          <img src="/images/icon1.png" alt="" />
        </div>
        <div className="ml-2 flex flex-col">
          <div>Active Employee</div>
          <div>1081</div>
        </div>
      </div>
      <hr className="h-1 my-4 px-0 bg-gray-200 border-0 dark:bg-black"></hr>
      <div className="date w-full">
        <span>8th April 2023</span>
      </div>
    </div>
  );
};

export default Card;
