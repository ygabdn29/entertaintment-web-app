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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-10 md:gap-x-7 gap-y-8 md:gap-y-6 mb-10 md:mb-16">
        {bookmarkedMovies.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>

      <h2 className="text-white text-3.5xl mb-9">Bookmarked TV Series</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-10 md:gap-x-7 gap-y-8 md:gap-y-6">
        {bookmarkedTvSeries.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>
    </div>
  );
}

export default Bookmarked;
