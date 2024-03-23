import { memo } from "react";
import { useShows } from "../../utilities/UseShows";
import ShowCard from "../showCard/ShowCard";

const Recommended = memo(function Recommended() {
  const { getRegularShows } = useShows();
  const regularShow = getRegularShows();

  return (
    <div>
      <h2 className="text-white text-3.5xl mb-8">Recommended for you</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-x-10 md:gap-x-7 lg:gap-y-8 md:gap-y-6">
        {regularShow.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>
    </div>
  );
});

export default Recommended;
