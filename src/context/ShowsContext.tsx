import { ReactNode, createContext, useEffect, useState } from "react";
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
  getBookmarked: () => any; // eslint-disable-line
}

interface ShowProviderProps {
  children: ReactNode;
}

const ShowsContext = createContext<ShowsContext | null>(null);

function ShowsProvider({ children }: ShowProviderProps) {
  const [shows, setShows] = useState(function () {
    const storedValue =
      localStorage.getItem("shows") ??
      localStorage.setItem("shows", JSON.stringify(data)) ??
      "";
    return JSON.parse(storedValue) || [];
  });

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
    show.isBookmarked = !show.isBookmarked;
    setShows((shows) => [...shows]);
    localStorage.setItem("shows", JSON.stringify(shows));
  }

  function getBookmarked() {
    const bookmarkedShows = shows.filter((show) => show.isBookmarked);

    return bookmarkedShows;
  }

  useEffect(
    function () {
      localStorage.setItem("shows", JSON.stringify(shows));
    },
    [shows]
  );

  return (
    <ShowsContext.Provider
      value={{
        getTrendingShows,
        getRegularShows,
        getMovieShows,
        getTvSeries,
        searchShows,
        handleNewBookmark,
        getBookmarked,
      }}
    >
      {children}
    </ShowsContext.Provider>
  );
}

export { ShowsProvider, ShowsContext };
