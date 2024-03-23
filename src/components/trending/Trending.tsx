import { memo } from "react";
import { useShows } from "../../utilities/UseShows";
import TrendingCard from "../trendingCard/TrendingCard";

const Trending = memo(function Trending() {
  const { getTrendingShows } = useShows();
  const trendingShows = getTrendingShows();

  return (
    <>
      <h2 className="text-white mb-4 md:mb-6 text-xl mx-4 md:mx-0 md:text-3.5xl">
        Trending
      </h2>

      <div className="mb-6 md:mb-10 mx-4 md:mx-0 overflow-x-auto w-[21.5rem] lg:w-[77.5rem] md:w-[45rem]">
        <div className="grid grid-cols-trendingMobile md:grid-cols-trending gap-4 md:gap-10">
          {trendingShows.map((show, i) => (
            <TrendingCard show={show} key={i}></TrendingCard>
          ))}
        </div>
      </div>
    </>
  );
});

export default Trending;
