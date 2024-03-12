import { useParams } from "react-router-dom";

function SearchResult() {
  const { search } = useParams();
  return (
    <div>
      <h1 className="text-white">Search Result for {`${search}`}</h1>
    </div>
  );
}

export default SearchResult;
