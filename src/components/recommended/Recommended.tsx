import { useShows } from "../../utilities/UseShows";
import ShowCard from "../showCard/ShowCard";

function Recommended() {
  const { getRegularShows } = useShows();
  const regularShow = getRegularShows();

  return (
    <div>
      <h2 className="text-white text-3.5xl mb-8">Recommended for you</h2>
      <div className="grid grid-cols-4 gap-x-10 gap-y-8">
        {regularShow.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>
    </div>
  );
}

export default Recommended;
