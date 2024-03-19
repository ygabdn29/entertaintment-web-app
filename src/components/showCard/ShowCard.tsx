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

function ShowCard({ show }: ShowDetailProps) {
  return (
    <div className="relative">
      <div className="relative">
        <img
          src={`${show.thumbnail.regular.large.slice(2)}`}
          alt=""
          className="w-[17.5rem] h-[10.875rem] rounded-lg mb-2"
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

      <div className="grid place-content-center w-8 h-8 absolute top-4 right-4 bg-dark-blue text-white rounded-full transition-all duration-300 hover:bg-white hover:text-darker-blue">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-[14px] ">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="currentColor"
            stroke-width="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

export default ShowCard;
