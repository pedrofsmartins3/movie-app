import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import SeeMoreButton from "./button/SeeMoreButton";
import { useNavigate } from "react-router-dom";
import { getData } from "../api/use-cases";
import Skeleton from "./skeleton/Skeleton";

function Banner({ fetchUrl, isSerie }) {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({
    poster_path: "",
    title: "",
    popularity: 0,
    vote_average: 0,
    release_date: 0,
  });

  const navigate = useNavigate();

  const fecthData = async () => {
    const results = await getData(fetchUrl);
    const randomIndex = Math.floor(Math.random() * results.length);
    setMovie(results[randomIndex]);
    return setLoading(false);
  };

  useEffect(() => {
    fecthData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <div className="relative max-sm:h-[300px] h-[600px] w-full">
      {loading ? (
        <>
          <Skeleton />
        </>
      ) : (
        <>
          {/* Gradiente do lado esquerdo */}
          <div className="absolute inset-0  bg-gradient-to-r from-black to-transparent z-10" />
          {/* Imagem de fundo */}
          <div
            className="h-full w-full"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "center center",
            }}
          />
          {/* Gradiente de baixo */}
          <div className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-t from-black to-transparent z-20" />
        </>
      )}

      <div className="absolute bottom-12 sm:bottom-40 left-4 sm:left-10 z-30 max-w-[90%] flex flex-col gap-2">
        <p
          className="text-4xl font-extrabold sm:text-6xl shadow"
          style={{ textShadow: "0px 10px 20px rgba(100, 100, 100, 0.7)" }}
        >
          {loading ? (
            <Skeleton height="4rem" />
          ) : (
            movie?.title || movie?.name || movie?.original_name
          )}
        </p>
        <p className="banner_description">
          {loading ? (
            <Skeleton height="1.6rem" />
          ) : (
            truncate(movie?.overview, 100)
          )}
        </p>
        <div className="flex items-center gap-6 opacity-80 text-sm sm:text-lg">
          <span className="flex items-center gap-2">
            {loading ? (
              <Skeleton width="4rem" height="1.6rem" />
            ) : (
              <>
                <i className="pi pi-star-fill" />
                {movie?.vote_average.toFixed(2)}
              </>
            )}
          </span>
          <span className="flex items-center gap-2">
            {loading ? (
              <Skeleton width="8rem" height="1.6rem" />
            ) : (
              <>
                <i className="pi pi-eye" />
                {movie?.popularity}
              </>
            )}
          </span>
        </div>
        <div className="max-sm:hidden">
          {loading ? (
            <Skeleton height="4rem" />
          ) : (
            <SeeMoreButton
              onClick={() =>
                navigate(`/${isSerie ? "serie" : "filme"}/${movie?.id}`)
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
