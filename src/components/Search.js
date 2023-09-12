import { MdSearch } from "react-icons/md";
const Search = ({ search, setSearch }) => {
  return (
    <div>
      <form className="search-bar">
        <MdSearch size="1.3em" />
        <input
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search Notes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
