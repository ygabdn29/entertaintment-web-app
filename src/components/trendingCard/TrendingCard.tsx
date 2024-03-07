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
      <img
        src={`src/${show.thumbnail.trending?.large.slice(2)}`}
        alt=""
        className="w-full rounded-lg"
      />
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
