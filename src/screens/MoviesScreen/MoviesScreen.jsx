import React from "react";
import Banner from "../../components/Banner";
import { requests } from "../../api/use-cases";
import Row from "../../components/Row";

function MoviesScreen() {
  return (
    <div className="w-full space-y-4">
      <Banner fetchUrl={requests.topRatedMovies} />
      <Row title="Filmes mais votados" fetchUrl={requests.topRatedMovies} />
      <Row title="Filmes Populares" fetchUrl={requests.popularMovies} isSerie />
      <Row title="Filmes de Ação" fetchUrl={requests.actionMovies} />
      <Row title="Files para ver em Família" fetchUrl={requests.familyMovies} />
      <Row title="Filmes de Comédia" fetchUrl={requests.comedyMovies} />
      <Row title="Filmes de Horror" fetchUrl={requests.horrorMovies} />
      <Row title="Filmes de Romance" fetchUrl={requests.romanceMovies} />
      <Row title="Documentários" fetchUrl={requests.documentaries} />
      <Row title="Fixão Científica" fetchUrl={requests.scienceFictionMovies} />
      <Row title="Desenhos Animados" fetchUrl={requests.animatedMovies} />
    </div>
  );
}

export default MoviesScreen;
