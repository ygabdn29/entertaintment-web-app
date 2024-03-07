function TrendingCard() {
  return (
    <div className="relative">
      <img
        src="src\assets\thumbnails\beyond-earth\trending\large.jpg"
        alt=""
        className="w-full rounded-lg"
      />
      <div className="flex flex-col absolute bottom-6 left-6">
        <div className="flex gap-1">
          <p className="text-white opacity-75 font-light text-[13px]">2019</p>
          <span className="text-white opacity-75 font-light text-[13px]">
            ·
          </span>
          <p className="text-white opacity-75 font-light text-[13px]">Movie</p>
          <span className="text-white opacity-75 font-light text-[13px]">
            ·
          </span>
          <p className="text-white opacity-75 font-light text-[13px]">PG</p>
        </div>

        <p className="text-white font-medium text-lg">Beyond Earth</p>
      </div>
      <div className="grid place-content-center w-8 h-8 absolute top-4 right-6 bg-dark-blue rounded-full">
        <img src="src\assets\icon-bookmark-empty.svg" alt="" className="" />
      </div>
    </div>
  );
}

export default TrendingCard;
