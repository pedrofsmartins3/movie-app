import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMovie, getSerie } from "../../api/use-cases";
import Banner from "./components/Banner";
import Details from "./components/Details";

function DetailsScreen() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const isSeries = pathname?.split("/").includes("serie");
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [video, setVideo] = useState(false);

  const videoRef = useRef(null);

  const showVideo = () => {
    setVideo((prev) => !prev);
  };

  const fecthData = async () => {
    let result = [];
    if (isSeries) {
      result = await getSerie(id);
    } else {
      result = await getMovie(id);
    }
    setItem(result);
    return setLoading(false);
  };

  useEffect(() => {
    if (id) {
      fecthData();
    }
  }, [id]);

  return (
    <div>
      <Banner item={item} loading={loading} />
      <div className="flex m-10 max-md:flex-col-reverse gap-4">
        <div className="my-6 ml-6 w-full max-w-screen-lg flex flex-col">
          <button
            className="py-2 px-10 border rounded-lg w-64 ml-4 hover:bg-white hover:text-black"
            onClick={showVideo}
          >
            {video
              ? "Fechar vídeo"
              : isSeries
                ? "Ver 1º episódio"
                : "Ver filme"}
          </button>
          <Details item={item} loading={loading || !item} isSerie={isSeries} />
        </div>
        {video && (
          <video
            ref={videoRef}
            controls
            width="100%"
            style={{ cursor: "pointer", maxHeight: "400px" }}
            autoPlay
          >
            <source src="/assets/video/big_buck_bunny.mp4" type="video/mp4" />O
            seu browser não suporta vídeo.
          </video>
        )}
      </div>
    </div>
  );
}

export default DetailsScreen;
