import MovieCard from "../../components/showCard/ShowCard";
import { useShows } from "../../utilities/UseShows";

function Movies() {
  const { getMovieShows } = useShows();
  const movieShows = getMovieShows();

  return (
    <div>
      <h2 className="text-white text-3.5xl mb-[2.375rem]">Movies</h2>
      <div className="grid grid-cols-4 md:grid-cols-3 gap-x-10 md:gap-x-7 gap-y-8 md:gap-y-8 pb-14 md:pb-0">
        {movieShows.map((show, i) => (
          <MovieCard show={show} key={i}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Movies;
