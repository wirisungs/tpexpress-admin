import React from "react";
import Search from "@/Svg/Search";

interface SearchInputProps {
  placeholder: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  return (
    <form className="flex gap-10 justify-between items-center px-4 py-3 text-xs bg-white rounded-md border border-solid border-stone-300 w-[443px] text-stone-300">
      <input
        type="text"
        id="searchInput"
        className="flex-grow self-stretch my-auto outline-none text-xs"
        placeholder={placeholder}
      />
      <button type="submit">
        <Search color={"#CBCBCB"} />
      </button>
    </form>
  );
};

export default SearchInput;
