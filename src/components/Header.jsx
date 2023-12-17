import { Link } from "react-router-dom";
import MovieIconSvg from "./MovieIconSvg";
import SearchIconSvg from "./SearchIconSvg";

const Header = ({ searchMovie, handleInputChange }) => {
  return (
    <header className="flex justify-between items-center gap-4 p-4 md:p-8 lg:p-12 bg-header">
      <div className="flex items-center gap-1">
        <div>
          <Link to="/">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-headings">Movies</h1>
          </Link>
        </div>

        <div>
          <MovieIconSvg />
        </div>
      </div>

      <div className="relative flex items-center max-w-xs">
        <span className="absolute inset-y-0 left-0 pl-1 flex items-center">
          <SearchIconSvg/>
        </span>
        <input
          type="text"
          placeholder="Hľadať film..."
          value={searchMovie}
          onChange={handleInputChange}
          className="flex-1 pl-10 lg:pl-12 py-2 w-full max-w-md focus:outline-none rounded-md text-sm md:text-base text-black"
        />
      </div>
    </header>
  );
};

export default Header;
