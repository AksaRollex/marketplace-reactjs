import React from "react";
import { Search as SearchIcon } from "lucide-react";

export default function Search({ onSearch, placeholder = "Search..." }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        onChange={handleChange}
        className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent sm:text-sm transition-all duration-300"
        placeholder={placeholder}
      />
    </div>
  );
}
