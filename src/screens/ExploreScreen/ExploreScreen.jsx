import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { getData, requests, searchContent } from "../../api/use-cases";
import Skeleton from "../../components/skeleton/Skeleton";
import ExploreRow from "../../components/ExploreRow";

const genres = [
  { label: "Ação", value: "action" },
  { label: "Comédia", value: "comedy" },
  { label: "Drama", value: "drama" },
  { label: "Horror", value: "horror" },
  { label: "Romance", value: "romance" },
  { label: "Fixão Científica", value: "scienceFiction" },
  { label: "Desenhos animados", value: "animated" },
  { label: "Família", value: "family" },
];

function ExploreScreen() {
  const [text, setText] = useState("");
  const [data, setData] = useState({ movies: [], series: [] });
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleInputSearch = async () => {
    setLoading(true);
    setIsSearching(true);
    try {
      const result = await searchContent(text);
      setData(result);
    } catch (error) {
      setError("Sem conteúdo encontrado.");
      return { series: [], movies: [] };
    } finally {
      setLoading(false);
    }
  };

  const handleGenreSearch = async (genre) => {
    setLoading(true);
    setIsSearching(true);
    if (text) onChangeText("");
    try {
      const [seriesResponse, moviesResponse] = await Promise.all([
        getData(requests[`${genre}Movies`]),
        getData(requests[`${genre}Series`]),
      ]);
      return setData({
        series: seriesResponse,
        movies: moviesResponse,
      });
    } catch (error) {
      setError("Sem conteúdo encontrado.");
      return { series: [], movies: [] };
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (genre) handleGenreSearch(genre);
  }, [genre]);

  const renderAnswer = () => {
    if (!isSearching) {
      return (
        <p className="text-2xl  font-bold">
          Pesquise por nome ou escolha umas das categorias!
        </p>
      );
    }

    if (loading || !data) {
      return (
        <div className="flex flex-col gap-2">
          <Skeleton height={30} />
          <Skeleton height={300} />
          <Skeleton height={30} />
          <Skeleton height={300} />
        </div>
      );
    }

    if (error) {
      return <p>{error}</p>;
    }

    if (data?.movies.length === 0 && data?.series.length === 0) {
      return (
        <p className="text-2xl text-red-700 font-bold">
          Nenhuma informação encontrada
        </p>
      );
    }

    return (
      <>
        {data?.movies.length > 0 && (
          <>
            <p className="text-2xl font-bold">Filmes</p>
            <ExploreRow
              movies={data?.movies}
              loading={loading || !data}
              isSeries={false}
            />
          </>
        )}
        {data?.series.length > 0 && (
          <>
            <p className="text-2xl font-bold">Séries</p>
            <ExploreRow
              movies={data?.series}
              loading={loading || !data}
              isSeries={true}
            />
          </>
        )}
      </>
    );
  };

  return (
    <div className="w-full space-y-4 mt-24 px-10">
      <div className="w-full max-w-[600px] flex gap-1">
        <InputText
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border text-white h-10 w-full rounded-md px-4"
        />
        <button
          onClick={handleInputSearch}
          className="h-10 border px-4 rounded-md bg-white text-black font-bold"
        >
          Pesquisar
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
        {genres.map((g) => (
          <button
            onClick={() => setGenre(g.value)}
            className="h-10 px-2 rounded-lg bg-gray-700 text-sm text-white font-bold hover:scale-105"
          >
            {g.label}
          </button>
        ))}
      </div>
      {renderAnswer()}
    </div>
  );
}

export default ExploreScreen;
