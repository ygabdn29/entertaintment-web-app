function SearchInput({ search, setSearch }) {
  function handleSearch(searchTerms: string) {
    setSearch(searchTerms);
  }

  return (
    <div className="flex md:items-center gap-6 mt-6 md:mt-8 mb-6 md:mb-[2.125rem] mx-4">
      <div className="py-3.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
          <path
            d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
            fill="#FFF"
          />
        </svg>
      </div>

      <input
        type="search"
        name=""
        id="searchBar"
        aria-label="Search movies or TV series"
        placeholder="Search for movies or TV Series"
        className="w-full text-base md:text-2xl text-white py-3.5 outline-0 border border-t-transparent border-r-transparent border-l-transparent border-b-transparent bg-transparent transition-all duration-300 placeholder: opacity-50 focus:border-b-white"
        onChange={(e) => {
          e.preventDefault();
          handleSearch(e.target.value);
        }}
        value={search}
      />
    </div>
  );
}

export default SearchInput;
