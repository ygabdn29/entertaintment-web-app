import { useShows } from "../../utilities/UseShows";
import ShowCard from "../showCard/ShowCard";

function SearchResult({ searchTerms }: { searchTerms: string }) {
  const { searchShows } = useShows();
  const searchResult = searchShows(searchTerms);

  return (
    <div>
      <h2 className="text-white text-xl md:text-3.5xl mb-6 md:mb-8 mx-4 md:mx-0">
        Search Result for {`"${searchTerms}"`}
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mx-4 md:mx-0 gap-x-4 lg:gap-x-10 md:gap-x-7 gap-y-4 lg:gap-y-8 md:gap-y-8 pb-14 md:pb-0">
        {searchResult.map((show) => (
          <ShowCard show={show} key={show.title}></ShowCard>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
