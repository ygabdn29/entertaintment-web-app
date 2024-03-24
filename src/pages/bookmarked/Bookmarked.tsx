import ShowCard from "../../components/showCard/ShowCard";
import { useShows } from "../../utilities/UseShows";

interface Type {
  small?: string;
  medium?: string;
  large: string;
}

interface Thumbnail {
  trending?: Type;
  regular: Type;
}

interface ShowDetail {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

function Bookmarked() {
  const { getBookmarkedMovies, getBookmarkedTvSeries } = useShows();

  const bookmarkedMovies = getBookmarkedMovies();
  const bookmarkedTvSeries = getBookmarkedTvSeries();

  return (
    <div className="mb-16">
      <h2 className="text-white text-xl md:text-3.5xl mb-6 md:mb-9 mx-4 md:mx-0">
        Bookmarked Movies
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mx-4 md:mx-0 mb-6 md:mb-12 lg:mb-10 gap-x-4 lg:gap-x-10 md:gap-x-7 gap-y-4 lg:gap-y-8 md:gap-y-8 ">
        {bookmarkedMovies.map((show: ShowDetail, i: number) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>

      <h2 className="text-white text-xl md:text-3.5xl mb-6 md:mb-9 mx-4 md:mx-0">
        Bookmarked TV Series
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mx-4 md:mx-0 gap-x-4 lg:gap-x-10 md:gap-x-7 gap-y-4 lg:gap-y-8 md:gap-y-8 pb-14 md:pb-0">
        {bookmarkedTvSeries.map((show: ShowDetail, i: number) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>
    </div>
  );
}

export default Bookmarked;
