import { ReactNode, createContext } from "react";
import data from "../../data/data.json";

interface ShowsContext {
  getTrendingShows: () => any[]; // eslint-disable-line
  getRegularShows: () => any[]; // eslint-disable-line
  getMovieShows: () => any[]; // eslint-disable-line
  getTvSeries: () => any[]; // eslint-disable-line
  searchShows: (search: string) => any[]; // eslint-disable-line
}

const ShowsContext = createContext<ShowsContext | null>(null);

interface ShowProviderProps {
  children: ReactNode;
}

function ShowsProvider({ children }: ShowProviderProps) {
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

  function searchShows(search: string) {
    const searchedShows = data.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );

    return searchedShows;
  }

  return (
    <ShowsContext.Provider
      value={{
        getTrendingShows,
        getRegularShows,
        getMovieShows,
        getTvSeries,
        searchShows,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
}

export { ShowsProvider, ShowsContext };
