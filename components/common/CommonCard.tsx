import React from "react";

interface Props {
  className?: string;
}

const CommonCard = ({ className }) => {
  return (
    <div
      className={`w-full bg-[#191919] rounded-2xl h-60 grid md:grid-cols-[1fr,1fr] items-center justify-center ${className}`}
    >
      <div className="p-2">
        <div>Web</div>
        <div className="max-w-sm">
          Interested to build using React, Angular or Web Components this
          section covers everything you need to know for creating live video and
          voice solutions for web applications.
        </div>
      </div>
      <div className="h-60 bg-[#262626] rounded-2xl grid grid-cols-2 p-2">
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  );
};

export default CommonCard;
