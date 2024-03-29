import { useShows } from "../../utilities/UseShows";

interface Type {
  small?: string;
  medium?: string;
  large: string;
}

interface Thumbnail {
  trending?: Type;
  regular: Type;
}

interface ShowDetail {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface ShowDetailProps {
  show: ShowDetail;
}

function TrendingCard({ show }: ShowDetailProps) {
  const { handleNewBookmark } = useShows();

  return (
    <div className="relative">
      <div className="relative">
        <img
          src={`${show.thumbnail.trending?.large.slice(2)}`}
          alt=""
          className="rounded-lg w-[270px] lg:w-full md:w-[470px] h-[140px] md:h-[230px]"
        />
        <div className="absolute grid place-content-center gap-5 w-full h-full top-0 opacity-0 bg-darker-blue/50 transition-all duration-300 hover:opacity-100">
          <button className="flex gap-5 items-center justify-center md:w-[120px] md:h-12 text-white bg-white/40 rounded-full ">
            <img
              src=".\assets\icon-play.svg"
              alt=""
              className="h-[30px] w-[30px]"
            />
            <span className="">Play</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col absolute bottom-6 left-6">
        <div className="flex gap-1">
          <p className="text-white opacity-75 font-light text-xs md:text-[13px]">
            {show.year}
          </p>
          <span className="text-white opacity-75 font-light text-xs md:text-[13px]">
            ·
          </span>

          <p className="text-white opacity-75 font-light text-xs md:text-[13px]">
            {show.category}
          </p>
          <span className="text-white opacity-75 font-light text-xs md:text-[13px]">
            ·
          </span>

          <p className="text-white opacity-75 font-light text-xs md:text-[13px]">
            {show.rating}
          </p>
        </div>

        <p className="text-white font-medium text-[15px] md:text-lg">
          {" "}
          {show.title}
        </p>
      </div>

      <button
        className={`grid place-content-center w-8 h-8 absolute top-2 md:top-4 right-2 md:right-6 bg-dark-blue text-white ${
          show.isBookmarked ? "fill-white" : "fill-none"
        } rounded-full transition-all duration-300 hover:bg-white hover:text-darker-blue`}
        onClick={() => handleNewBookmark(show)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-[14px] ">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="currentFill"
          />
        </svg>
      </button>
    </div>
  );
}

export default TrendingCard;
