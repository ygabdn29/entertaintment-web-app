import MovieCard from "../../components/movieCard/MovieCard";
import { useShows } from "../../utilities/UseShows";

function Movies() {
  const { getMovieShows } = useShows();
  const movieShows = getMovieShows();

  return (
    <div>
      <h2 className="text-white text-3.5xl mb-[2.375rem] mt-[2.125rem]">
        Movies
      </h2>
      <div className="grid grid-cols-4 gap-x-10 gap-y-8 pb-14">
        {movieShows.map((show, i) => (
          <MovieCard show={show} key={i}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Movies;
