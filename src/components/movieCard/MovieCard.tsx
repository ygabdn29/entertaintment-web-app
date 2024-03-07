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

function MovieCard({ show }: ShowDetailProps) {
  return (
    <div>
      <img
        src={`src/${show.thumbnail.regular.large.slice(2)}`}
        alt=""
        className="w-[17.5rem] h-[10.875rem] rounded-lg mb-2"
      />

      <div className="flex gap-1 mb-1">
        <p className="text-white opacity-75 font-light text-[13px]">
          {show.year}
        </p>
        <span className="text-white opacity-75 font-light text-[13px]">·</span>

        <p className="text-white opacity-75 font-light text-[13px]">
          {show.category}
        </p>
        <span className="text-white opacity-75 font-light text-[13px]">·</span>

        <p className="text-white opacity-75 font-light text-[13px]">
          {show.rating}
        </p>
      </div>

      <p className="text-white font-medium text-lg">{show.title}</p>
    </div>
  );
}

export default MovieCard;
