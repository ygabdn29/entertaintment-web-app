import TrendingCard from "../trendingCard/TrendingCard";

function Trending() {
  return (
    <>
      <h2 className="text-white mb-6 text-3.5xl">Trending</h2>

      <div className="mb-10 overflow-x-auto w-[77.5rem]">
        <div className="grid grid-cols-trending gap-10">
          <TrendingCard></TrendingCard>
          {/* <TrendingCard></TrendingCard>
          <TrendingCard></TrendingCard>
          <TrendingCard></TrendingCard>
          <TrendingCard></TrendingCard> */}
        </div>
      </div>
    </>
  );
}

export default Trending;
