import { useShows } from "../../utilities/UseShows";
import ShowCard from "../showCard/ShowCard";

function SearchResult({ searchTerms }) {
  const { searchShows } = useShows();
  const searchResult = searchShows(searchTerms);

  return (
    <div>
      <h2 className="text-white text-3.5xl mb-8">
        Search Result for {`"${searchTerms}"`}
      </h2>

      <div className="grid grid-cols-4 gap-x-10 gap-y-8">
        {searchResult.map((show) => (
          <ShowCard show={show} key={show.title}></ShowCard>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
