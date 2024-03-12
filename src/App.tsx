import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ShowsProvider } from "./context/ShowsContext";
import Dashboard from "./layout/Dashboard";
import Movies from "./pages/movies/Movies";
import Homepage from "./pages/homepage/Homepage";
import TvSeries from "./pages/tv-series/TvSeries";
import Bookmarked from "./pages/bookmarked/Bookmarked";
import Search from "./pages/search/Search";
import SearchResult from "./components/searchResult/SearchResult";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard></Dashboard>}>
      <Route index element={<Navigate replace to="/home"></Navigate>}></Route>
      <Route path="home" element={<Homepage />}></Route>
      <Route path="movies" element={<Movies />}></Route>
      <Route path="tv-series" element={<TvSeries />}></Route>
      <Route path="bookmarks" element={<Bookmarked />}></Route>

      <Route path="search">
        <Route index element={<Search></Search>}></Route>
        <Route path=":search" element={<SearchResult></SearchResult>}></Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="flex justify-center my-0 mx-auto">
      <div className="max-w-[90rem] w-full">
        <ShowsProvider>
          <RouterProvider router={router}></RouterProvider>
        </ShowsProvider>
      </div>
    </div>
  );
}

export default App;
