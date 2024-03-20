import { ReactNode, createContext } from "react";
import data from "../../data/data.json";

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

interface ShowsContext {
  getTrendingShows: () => any[]; // eslint-disable-line
  getRegularShows: () => any[]; // eslint-disable-line
  getMovieShows: () => any[]; // eslint-disable-line
  getTvSeries: () => any[]; // eslint-disable-line
  searchShows: (search: string) => any[]; // eslint-disable-line
  handleNewBookmark: (show: ShowDetail) => any; // eslint-disable-line
}

interface ShowProviderProps {
  children: ReactNode;
}

const ShowsContext = createContext<ShowsContext | null>(null);

function ShowsProvider({ children }: ShowProviderProps) {
  localStorage.setItem("shows", JSON.stringify(data));

  const shows: ShowDetail[] = JSON.parse(localStorage.getItem("shows") || "{}");

  function getTrendingShows() {
    const trendingMovies = shows.filter((currData) => currData.isTrending);

    return trendingMovies;
  }

  function getRegularShows() {
    const regularShows = shows.filter((currData) => !currData.isTrending);

    return regularShows;
  }

  function getMovieShows() {
    const movieShows = shows.filter(
      (currData) => currData.category === "Movie"
    );

    return movieShows;
  }

  function getTvSeries() {
    const tvSeries = shows.filter(
      (currData) => currData.category === "TV Series"
    );

    return tvSeries;
  }

  function searchShows(search: string = "") {
    const searchedShows = shows.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );

    return searchedShows;
  }

  function handleNewBookmark(show: ShowDetail) {
    console.log(show);
  }

  return (
    <ShowsContext.Provider
      value={{
        getTrendingShows,
        getRegularShows,
        getMovieShows,
        getTvSeries,
        searchShows,
        handleNewBookmark,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
}

export { ShowsProvider, ShowsContext };
