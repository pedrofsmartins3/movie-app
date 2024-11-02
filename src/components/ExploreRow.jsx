import { Carousel } from "primereact/carousel";
import React from "react";
import Poster from "./Poster";

function ExploreRow({ movies = [], isSerie = false }) {
  const responsiveOptions = [
    {
      breakpoint: "1600px",
      numVisible: 8,
      numScroll: 6,
    },
    {
      breakpoint: "1400px",
      numVisible: 6,
      numScroll: 4,
    },
    {
      breakpoint: "1280px",
      numVisible: 5,
      numScroll: 3,
    },
    {
      breakpoint: "960px",
      numVisible: 4,
      numScroll: 3,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: 2,
      numScroll: 1,
    },
  ];

  return (
    <div className="card">
      <Carousel
        value={movies}
        numVisible={9}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        circular
        itemTemplate={(item) => <Poster item={item} isSerie={isSerie} />}
        className="min-h-[300px]"
      />
    </div>
  );
}

export default ExploreRow;
