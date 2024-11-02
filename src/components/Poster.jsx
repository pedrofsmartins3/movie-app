import React, { useState } from "react";
import Skeleton from "./skeleton/Skeleton";
import { useNavigate } from "react-router-dom";
import SeeMoreButton from "./button/SeeMoreButton";

function Poster({ item, isLarge, isSerie }) {
  const [showInfo, setShowInfo] = useState(false); // estado para mostrar informações
  const base_url = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();

  if (!item?.poster_path) {
    return (
      <div className="py-4 px-2">
        <Skeleton height="300px" />
      </div>
    );
  }

  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <div
      className="relative py-4 px-2 hover:scale-110 transition-transform duration-500 hover:opacity-100"
      onMouseEnter={() => setShowInfo(true)} // Mostrar informações no hover
      onMouseLeave={() => setShowInfo(false)} // Esconder informações quando o hover sair
      onClick={() => navigate(`/${isSerie ? "serie" : "filme"}/${item?.id}`)}
    >
      <img
        className={`${isLarge ? "h-auto" : "max-h-[300px]"} bg-contain rounded-lg hover:cursor-pointer`}
        key={item?.id}
        src={`${base_url}${isLarge ? item?.backdrop_path : item?.poster_path}`}
        alt={item?.name}
      />

      {/* Se for grande, exibir o título abaixo da imagem */}
      {isLarge && (
        <p className="font-bold pt-1">
          {item?.title || item?.name || item?.original_name}
        </p>
      )}

      {/* Exibir informações adicionais sobre o filme/série no hover */}
      {showInfo && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white p-4 rounded-lg flex flex-col justify-center items-center gap-3">
          <h3 className="text-xl font-bold mb-2 text-center">
            {item?.title || item?.name || item?.original_name}
          </h3>
          <p className="text-sm text-center">{truncate(item?.overview, 75)}</p>

          <p className="flex items-center gap-2">
            <i className="pi pi-star-fill" />
            {item?.vote_average.toFixed(2)}
          </p>
          <SeeMoreButton variant="small" />
        </div>
      )}
    </div>
  );
}

export default Poster;
