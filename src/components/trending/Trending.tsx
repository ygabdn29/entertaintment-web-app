import { memo } from "react";
import { useShows } from "../../utilities/UseShows";
import TrendingCard from "../trendingCard/TrendingCard";

const Trending = memo(function Trending() {
  const { getTrendingShows } = useShows();
  const trendingShows = getTrendingShows();

  return (
    <>
      <h2 className="text-white mb-6 text-3.5xl">Trending</h2>

      <div className="mb-10 overflow-x-auto w-[77.5rem] md:w-[45rem]">
        <div className="grid grid-cols-trending gap-10">
          {trendingShows.map((show, i) => (
            <TrendingCard show={show} key={i}></TrendingCard>
          ))}
        </div>
      </div>
    </>
  );
});

export default Trending;
