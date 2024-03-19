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
  year: number;
  category: string;

  thumbnail: Thumbnail;
  rating: string;
}

interface ShowDetailProps {
  show: ShowDetail;
}

function TrendingCard({ show }: ShowDetailProps) {
  return (
    <div className="relative">
      <div className="relative">
        <img
          src={`${show.thumbnail.trending?.large.slice(2)}`}
          alt=""
          className="w-full rounded-lg"
        />
        <div className="absolute grid place-content-center gap-5 w-full h-full top-0 opacity-0 bg-darker-blue/50 transition-all duration-300 hover:opacity-100">
          <button className="flex gap-5 items-center justify-center w-[120px] h-12 text-white bg-white/40 rounded-full ">
            <img
              src="src\assets\icon-play.svg"
              alt=""
              className="h-[30px] w-[30px]"
            />
            <span className="">Play</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col absolute bottom-6 left-6">
        <div className="flex gap-1">
          <p className="text-white opacity-75 font-light text-[13px]">
            {show.year}
          </p>
          <span className="text-white opacity-75 font-light text-[13px]">
            ·
          </span>

          <p className="text-white opacity-75 font-light text-[13px]">
            {show.category}
          </p>
          <span className="text-white opacity-75 font-light text-[13px]">
            ·
          </span>

          <p className="text-white opacity-75 font-light text-[13px]">
            {show.rating}
          </p>
        </div>

        <p className="text-white font-medium text-lg"> {show.title}</p>
      </div>

      <div className="grid place-content-center w-8 h-8 absolute top-4 right-6 bg-dark-blue rounded-full">
        <img src="src\assets\icon-bookmark-empty.svg" alt="" className="" />
      </div>
    </div>
  );
}

export default TrendingCard;
