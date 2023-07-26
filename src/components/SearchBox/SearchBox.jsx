import { FaSearch } from "react-icons/fa";

function SearchBox({ setSearchFilter }) {
  const handleSearch = (event) => {
    setSearchFilter(event.target.value);
  };
  return (
    <div className="mt-5 relative">
      <input
        placeholder="Enter a search term"
        className="px-5 py-3 border-gray-400 border rounded w-full"
        onChange={(event) => handleSearch(event)}
      />

      <FaSearch
        className="absolute top-3.5 right-3.5 text-gray-400"
        size={20}
      />
    </div>
  );
}

export default SearchBox;
