import React from "react";
import CrossIcon from "@public/images/icons/cross.svg";

type TagsProps = {
  tagsList: string[];
};

function Tags({ tagsList }: TagsProps) {
  return (
    <div className="flex items-center gap-4 p-2 pl-6 bg-white border">
      {tagsList.length >= 1 ? (
        <span className="p-1 text-xs rounded-lg h-fit shadow-purple-small hover:cursor-pointer">
          {<CrossIcon />}
        </span>
      ) : (
        ""
      )}
      {tagsList.map((tag, i) => (
        <span
          key={i}
          className="p-2 text-xs rounded-lg shadow-purple-small hover:cursor-pointer"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
