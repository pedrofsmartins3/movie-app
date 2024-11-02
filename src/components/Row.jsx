import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
import Skeleton from "./skeleton/Skeleton";
import Poster from "./Poster";
import { getData } from "../api/use-cases";

function Row({ title, fetchUrl, isSerie = false, isLarge = false }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const fecthData = async () => {
    const results = await getData(fetchUrl);
    setMovies(results);
    return setLoading(false);
  };

  useEffect(() => {
    fecthData();
  }, []);

  const responsiveOptions = [
    {
      breakpoint: "1600px",
      numVisible: isLarge ? 5 : 8,
      numScroll: isLarge ? 1 : 6,
    },
    {
      breakpoint: "1400px",
      numVisible: isLarge ? 4 : 6,
      numScroll: isLarge ? 1 : 4,
    },
    {
      breakpoint: "1280px",
      numVisible: isLarge ? 2 : 5,
      numScroll: isLarge ? 1 : 3,
    },
    {
      breakpoint: "960px",
      numVisible: isLarge ? 2 : 4,
      numScroll: isLarge ? 1 : 3,
    },
    {
      breakpoint: "767px",
      numVisible: isLarge ? 1 : 3,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: isLarge ? 1 : 2,
      numScroll: 1,
    },
  ];

  return (
    <div className="card">
      <p className="text-4xl font-extrabold ml-6">
        {loading ? <Skeleton width="16rem" height="3rem" /> : title}
      </p>
      <Carousel
        value={movies}
        numVisible={isLarge ? 5 : 9}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        circular
        itemTemplate={(item) => (
          <Poster item={item} isLarge={isLarge} isSerie={isSerie} />
        )}
        className="min-h-[300px]"
      />
    </div>
  );
}

export default Row;
