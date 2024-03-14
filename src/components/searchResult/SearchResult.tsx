import { useParams } from "react-router-dom";
import { useShows } from "../../utilities/UseShows";
import ShowCard from "../showCard/ShowCard";

function SearchResult() {
  const { search } = useParams();
  const { searchShows } = useShows();
  const searchedShows = searchShows(search);

  return (
    <div>
      <h2 className="text-white text-3.5xl mb-8">
        Search Result for {`"${search}"`}
      </h2>

      <div className="grid grid-cols-4 gap-x-10 gap-y-8">
        {searchedShows.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
