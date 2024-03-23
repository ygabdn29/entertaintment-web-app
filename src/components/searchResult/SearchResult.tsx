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

      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-10 md:gap-x-7 gap-y-8 md:gap-y-6">
        {searchResult.map((show) => (
          <ShowCard show={show} key={show.title}></ShowCard>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
