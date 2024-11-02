import React from "react";
import Skeleton from "../../../components/skeleton/Skeleton";

function Details({ item = {}, loading = true, isSerie = false }) {
  //MOVIE
  const movieDate = item?.release_date || ""; //movie
  const releasedMovieYear = new Date(movieDate).getFullYear();

  //SERIE
  const episodesNumber = item?.number_of_episodes || 0;
  const seasons = item?.number_of_seasons || 0;
  const serieDate = item?.first_air_date || "";
  const releasedSerieYear = new Date(serieDate).getFullYear();

  //BOTH
  const description = item?.overview || "";
  const views = item?.popularity || 0;
  const imdb = item?.vote_average || 0;
  const genres = item?.genres || [];
  const originalContry =
    (item?.production_countries && item.production_countries[0].name) || "";

  const separator = <p className="text-gray-500">•</p>;

  if (loading) {
    return (
      <div>
        <Skeleton height={100} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>
    );
  }

  return (
    <div className="p-4 flex flex-col gap-4">
      <p className="text-justify">{description}</p>
      <div className="flex gap-2">
        <p>⭐ {imdb.toFixed(2)}</p>
        {separator}
        <p>👁️ {views}</p>
        {separator}
        <p>{isSerie ? releasedSerieYear : releasedMovieYear}</p>
      </div>
      {isSerie && (
        <div className="flex gap-2">
          <p>🎬 Temporadas: {seasons}</p>
          {separator}
          <p>🎥 Total de episódios: {episodesNumber}</p>
        </div>
      )}
      <div className="flex gap-2">
        <p>{originalContry}</p>
      </div>
      <div className="flex gap-2">
        {genres.length > 0 && genres.map((g) => <p>{g.name || ""}</p>)}
      </div>
    </div>
  );
}

export default Details;
