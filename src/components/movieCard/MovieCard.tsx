import { FC } from "react";

interface MovieDetail {
  title: string;
  year: number;
  category: string;
  thumbnail: object;
  rating: string;
}

interface MovieDetailProps {
  movie: MovieDetail;
}

function MovieCard({ movie }: MovieDetailProps) {
  return (
    <div>
      <img
        src={`src/${movie.thumbnail.regular.large.slice(2)}`}
        alt=""
        className="w-[17.5rem] h-[10.875rem] rounded-lg mb-2"
      />

      <div className="flex gap-1 mb-1">
        <p className="text-white opacity-75 font-light text-[13px]">
          {movie.year}
        </p>
        <span className="text-white opacity-75 font-light text-[13px]">·</span>

        <p className="text-white opacity-75 font-light text-[13px]">
          {movie.category}
        </p>
        <span className="text-white opacity-75 font-light text-[13px]">·</span>

        <p className="text-white opacity-75 font-light text-[13px]">
          {movie.rating}
        </p>
      </div>

      <p className="text-white font-medium text-lg">{movie.title}</p>
    </div>
  );
}

export default MovieCard;
