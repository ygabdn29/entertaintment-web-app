import { ReactNode, createContext } from "react";
import data from "../../data/data.json";
import { useLocalStorage } from "../hooks/UseLocalStorage";

interface ShowsContext {
  getTrendingShows: () => any[]; // eslint-disable-line
  getRegularShows: () => any[]; // eslint-disable-line
  getMovieShows: () => any[]; // eslint-disable-line
  getTvSeries: () => any[]; // eslint-disable-line
  searchShows: (search: string) => any[]; // eslint-disable-line
  bookmarked: any; // eslint-disable-line
  setBookmarked: () => any[]; // eslint-disable-line
}

interface ShowProviderProps {
  children: ReactNode;
}

const ShowsContext = createContext<ShowsContext | null>(null);

function ShowsProvider({ children }: ShowProviderProps) {
  const [bookmarked, setBookmarked] = useLocalStorage([], "bookmarked");

  function getTrendingShows() {
    const trendingMovies = data.filter((currData) => currData.isTrending);

    return trendingMovies;
  }

  function getRegularShows() {
    const regularShows = data.filter((currData) => !currData.isTrending);

    return regularShows;
  }

  function getMovieShows() {
    const movieShows = data.filter((currData) => currData.category === "Movie");

    return movieShows;
  }

  function getTvSeries() {
    const tvSeries = data.filter(
      (currData) => currData.category === "TV Series"
    );

    return tvSeries;
  }

  function searchShows(search: string = "") {
    const searchedShows = data.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );

    return searchedShows;
  }

  function handleNewBookmark(show) {
    setBookmarked((bookmarked) => [...bookmarked, show]);
  }

  return (
    <ShowsContext.Provider
      value={{
        getTrendingShows,
        getRegularShows,
        getMovieShows,
        getTvSeries,
        searchShows,
        bookmarked,
        setBookmarked,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
}

export { ShowsProvider, ShowsContext };
