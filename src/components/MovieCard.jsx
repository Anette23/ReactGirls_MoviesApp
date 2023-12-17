import { Link } from "react-router-dom";
const MovieCard = ({ title, posterPath, id }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;

  return (
    <div className="movie-card mb-6">
      <img
        src={imageUrl}
        alt={title}
        width={200}
        height={200}
        className="mb-1 rounded hover:shadow-lg hover:shadow-orange-500"
      />
      <h1 className="font-headings mb-6">{title}</h1>
      <Link to={`/movie/${id}`} className="bg-primary py-2 px-3 rounded-full border-2 border-primary text-black transition duration-500 ease-in-out hover:bg-transparent hover:text-white hover:border-2 max-w-xs">
        Zobraziť viac
      </Link>
    </div>
  );
};

export default MovieCard;
