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
      <h2 className="text-white text-xl md:text-3.5xl mb-6 md:mb-9 mx-4 md:mx-0">
        Bookmarked Movies
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mx-4 md:mx-0 gap-x-4 lg:gap-x-10 md:gap-x-7 gap-y-4 lg:gap-y-8 md:gap-y-8 pb-14 md:pb-0">
        {bookmarkedMovies.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>

      <h2 className="text-white text-xl md:text-3.5xl mb-6 md:mb-9 mx-4 md:mx-0">
        Bookmarked TV Series
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mx-4 md:mx-0 gap-x-4 lg:gap-x-10 md:gap-x-7 gap-y-4 lg:gap-y-8 md:gap-y-8 pb-14 md:pb-0">
        {bookmarkedTvSeries.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>
    </div>
  );
}

export default Bookmarked;
