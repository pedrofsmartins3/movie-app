import React from "react";
import Skeleton from "../../../components/skeleton/Skeleton";

function Banner({ item, loading }) {
  return (
    <div className="relative max-sm:h-[300px] h-[500px]">
      {loading ? (
        <>
          <Skeleton />
        </>
      ) : (
        <>
          <div
            className="h-full w-full"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${item?.backdrop_path}")`,
              backgroundPosition: "center center",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-t from-black to-transparent z-20" />
          <div className="absolute left-10 bottom-10 z-30">
            {loading ? (
              <Skeleton height="1.6rem" />
            ) : (
              <>
                <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold ">
                  {item?.title || item?.name || item?.original_name}
                </h1>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
