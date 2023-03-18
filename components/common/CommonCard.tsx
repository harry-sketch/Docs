import React from "react";
import { cn } from "../../helpers/utils";

interface Props {
  type: string;
  desc: string;
  className?: string;
}

const CommonCard: React.FC<Props> = ({ className, type, desc }) => {
  return (
    <div
      className={cn(
        "w-full bg-[#191919] rounded-2xl h-60 grid md:grid-cols-[1fr,1fr] items-center justify-center my-6",
        className
      )}
    >
      <div className="p-2">
        <div className="mb-2 font-semibold text-2xl">{type}</div>
        <div className="max-w-sm text-sm text-slate-50">{desc}</div>
      </div>
      <div className="h-60 bg-[#262626] rounded-2xl grid grid-cols-2 p-2">
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  );
};

export default CommonCard;
