import React from "react";

export const RoundedCard = ({ imageSrc, heading, description }) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4 max-h-76 flex flex-col justify-between align-center">
      <div className="flex items-center align-center gap-5 ">
        <img
          className="w-24 h-24 rounded-full mr-4"
          src={imageSrc}
          alt="Profile"
        />

        <div className="text-center p-4">
          <h3 className="text-2xl font-medium">{heading}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      <hr className="border-b" />
    </div>
  );
};
