import MovieCard from "../../components/movieCard/MovieCard";
import { useShows } from "../../utilities/UseShows";

function TvSeries() {
  const { getTvSeries } = useShows();
  const tvSeries = getTvSeries();

  return (
    <div>
      <h2 className="text-white text-3.5xl mb-[2.375rem] mt-[2.125rem]">
        TV Series
      </h2>
      <div className="grid grid-cols-4 gap-x-10 gap-y-8 pb-14">
        {tvSeries.map((show, i) => (
          <MovieCard show={show} key={i}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default TvSeries;
