import { useParams } from "react-router-dom";
import { useShows } from "../../utilities/UseShows";
import ShowCard from "../showCard/ShowCard";
import { useEffect, useState } from "react";

function SearchResult() {
  const { search } = useParams();
  const { searchShows } = useShows();
  const searchResult = searchShows(search);

  return (
    <div>
      <h2 className="text-white text-3.5xl mb-8">
        Search Result for {`"${search}"`}
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
