import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

export type Option = { value: string; label: string };

type DropdownProps = {
  options: Option[];
  selectedOption: Option;
  onSelect: (option: Option) => void;
};
const Dropdown = ({ options, selectedOption, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative min-w-[200px]">
      <button
        className="flex items-center justify-end w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption.label}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 ml-2 -mr-1" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" />
        )}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-5 bg-white border-t rounded-xl shadow-purple ">
          {options.map((option) => (
            <button
              key={option.value}
              className={` w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                option.value === selectedOption.value
                  ? "bg-gray-100 text-gray-900"
                  : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
