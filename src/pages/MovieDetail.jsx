import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showAllCast, setShowAllCast] = useState(false);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
       
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?language=sk-SK`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGNkNzFjNjI4ODEzZTI4MGQ0NTZhMWY4ZjUyMTkzZCIsInN1YiI6IjYzZTEwMzEwY2QyMDQ2MDA5ZDRmZThjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NWQ5ys9AWQsXfSp3jfK559ACJOE6F2Ubu7dlfoOSVL0",
            },
          }
        );

        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?language=sk-SK`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGNkNzFjNjI4ODEzZTI4MGQ0NTZhMWY4ZjUyMTkzZCIsInN1YiI6IjYzZTEwMzEwY2QyMDQ2MDA5ZDRmZThjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NWQ5ys9AWQsXfSp3jfK559ACJOE6F2Ubu7dlfoOSVL0",
            },
          }
        );
        const cast = castResponse.data.cast.map((actor) => actor.name);
        const releaseYear = response.data.release_date
          ? new Date(response.data.release_date).getFullYear()
          : null;

        setSelectedMovie((prevMovie) => ({
          ...prevMovie,
          ...response.data,
          releaseYear: releaseYear,
          cast: cast,
        }));
      } catch (error) {
        console.error("Chyba pri načítaní filmov", error);
      }
    };

    fetchMovieDetails();
  }, [id]); 

  const toggleShowAllCast = () => {
    setShowAllCast((prevShowAllCast) => !prevShowAllCast);
  };

  if (!selectedMovie) {
    return <div>Vyberte film pro zobrazenie detailov.</div>;
  }

  return (
    <>
      <div className="pt-10 px-6 lg:px-12 ">
        <Link
          to="/"
          className="bg-primary p-4 rounded-full border-2 border-primary text-black transition duration-500 ease-in-out hover:bg-transparent hover:text-white hover:border-2  max-w-xs"
        >
          &larr; Späť na všetky filmy
        </Link>
      </div>

      <section className="py-6 px-6 lg:p-12 grid md:grid-cols-2 md:gap-8">
        <article className="my-4">
          <h2 className="mb-4 text-2xl lg:text-3xl font-bold font-headings tracking-widest uppercase ">
            {selectedMovie.title}
          </h2>

          <img
            src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
            alt={selectedMovie.title}
            className="rounded"
          />
        </article>

        <article className="md:mt-20 ">
          <p className="mb-4 text-xl font-bold font-headings tracking-widest uppercase lg:mb-10">
            Rok vydania: {selectedMovie.releaseYear}
          </p>
          <p className="mb-4 text-xl lg:mb-10">{selectedMovie.overview}</p>

          <h3 className="text-xl font-bold font-headings tracking-widest uppercase">
            Hrajú:
          </h3>
          <ul className="mb-2">
            {showAllCast
              ? selectedMovie.cast.map((actor) => <li key={actor}>{actor}</li>)
              : selectedMovie.cast
                  .slice(0, 5)
                  .map((actor) => <li key={actor}>{actor}</li>)}
          </ul>
          {selectedMovie.cast.length > 5 && (
            <button
              onClick={toggleShowAllCast}
              className="border-2 border-primary rounded transition duration-500 ease-in-out hover:bg-primary hover:text-background p-2"
            >
              {showAllCast ? "Skryť hercov" : "Zobraziť viac hercov"}
            </button>
          )}
        </article>
      </section>
    </>
  );
};

export default MovieDetail;
