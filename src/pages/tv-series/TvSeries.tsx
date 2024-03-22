import ShowCard from "../../components/showCard/ShowCard";
import { useShows } from "../../utilities/UseShows";

function TvSeries() {
  const { getTvSeries } = useShows();
  const tvSeries = getTvSeries();

  return (
    <div>
      <h2 className="text-white text-3.5xl mb-[2.375rem]">TV Series</h2>
      <div className="grid grid-cols-4 md:grid-cols-3 gap-x-10 md:gap-x-7 gap-y-8 md:gap-y-8 pb-14 md:pb-0">
        {tvSeries.map((show, i) => (
          <ShowCard show={show} key={i}></ShowCard>
        ))}
      </div>
    </div>
  );
}

export default TvSeries;
