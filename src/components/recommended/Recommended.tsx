import { useShows } from "../../utilities/UseShows";
import MovieCard from "../movieCard/MovieCard";

function Recommended() {
  const { getRegularShows } = useShows();
  const regularShow = getRegularShows();

  return (
    <div>
      <h2 className="text-white text-3.5xl mb-8">Recommended for you</h2>
      <div className="grid grid-cols-4 gap-x-10 gap-y-8">
        {regularShow.map((show, i) => (
          <MovieCard show={show} key={i}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
