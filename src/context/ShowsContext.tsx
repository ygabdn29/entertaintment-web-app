import { ReactNode, createContext } from "react";
import data from "../../data/data.json";

// interface Type {
//   small?: string;
//   medium?: string;
//   large: string;
// }

// interface Thumbnail {
//   trending?: Type;
//   regular: Type;
// }

// interface ShowDetails {
//   title: string;
//   year: number;
//   category: string;

//   thumbnail: Thumbnail;
//   rating: string;
// }

// interface ShowDetail {
//   show: ShowDetail;
// }

interface ShowsContext {
  getTrendingShows: () => any[]; // eslint-disable-line
  getRegularShows: () => any[]; // eslint-disable-line
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

  return (
    <ShowsContext.Provider value={{ getTrendingShows, getRegularShows }}>
      {children}
    </ShowsContext.Provider>
  );
}

export { ShowsProvider, ShowsContext };
