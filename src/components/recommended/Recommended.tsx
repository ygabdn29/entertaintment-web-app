import { memo } from "react";
import { useShows } from "../../utilities/UseShows";
import ShowCard from "../showCard/ShowCard";

const Recommended = memo(function Recommended() {
  const { getRegularShows } = useShows();
  const regularShow = getRegularShows();

  return (
    <div>
      <h2 className="text-white text-base md:text-3.5xl mx-4 md:mx-0 mb-4 md:mb-8">
        Recommended for you
      </h2>
      <div className="grid grid-cols-2 px-4 md:px-0 pb-16 md:pb-0 lg:grid-cols-4 md:grid-cols-3 gap-4 lg:gap-x-10 md:gap-x-7 lg:gap-y-8 md:gap-y-6 ">
        {regularShow.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>
    </div>
  );
});

export default Recommended;
