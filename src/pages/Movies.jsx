import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrendingMovies, searchMovies } from "../data";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (searchMovie === "") {
        const trending = await fetchTrendingMovies();
        setTrendingMovies(trending);
      } else {
        const searchResult = await searchMovies(searchMovie);
        setTrendingMovies(searchResult);
      }
    };

    fetchData();
  }, [searchMovie]);

  const handleInputChange = (e) => {
    setSearchMovie(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const searchResult = await searchMovies(searchMovie);
      setTrendingMovies(searchResult);
    } catch (error) {
      console.error("Chyba pri vyhľadávaní filmov", error);
    }
  };

  const showMovieDetails = (selectedMovie) => {
    setSelectedMovie(selectedMovie);
  };

  return (
    <>
      <Header
        searchMovie={searchMovie}
        handleInputChange={handleInputChange}
        handleSearch={handleSearch}
      />
      <main>
        <section className="p-6 md:lg-8 lg:p-12 grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {trendingMovies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard
                title={movie.title}
                posterPath={movie.poster_path}
                overview={movie.overview}
                id={movie.id}
              />
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default Movies;
