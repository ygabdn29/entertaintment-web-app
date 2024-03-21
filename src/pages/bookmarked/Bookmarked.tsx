import ShowCard from "../../components/showCard/ShowCard";
import { useShows } from "../../utilities/UseShows";

function Bookmarked() {
  const { getBookmarked } = useShows();
  const bookmarkedShows = getBookmarked();
  const bookmarkedMovies = bookmarkedShows.filter(
    (show) => show.category === "Movie"
  );
  const bookmarkedTvSeries = bookmarkedShows.filter(
    (show) => show.category === "TV Series"
  );

  return (
    <div className="mb-16">
      <h2 className="text-white text-3.5xl mb-9">Bookmarked Movies</h2>
      <div className="grid grid-cols-4 gap-x-10 gap-y-8 mb-10">
        {bookmarkedMovies.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>

      <h2 className="text-white text-3.5xl mb-9">Bookmarked TV Series</h2>
      <div className="grid grid-cols-4 gap-x-10 gap-y-8">
        {bookmarkedTvSeries.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>
    </div>
  );
}

export default Bookmarked;
