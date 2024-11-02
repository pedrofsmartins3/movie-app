import React from "react";
import { requests } from "../../api/use-cases";
import Banner from "../../components/Banner";
import Row from "../../components/Row";

function HomeScreen() {
  return (
    <div className="w-full space-y-4">
      <Banner fetchUrl={requests.popularMovies} />
      <Row title="Filmes Populares" fetchUrl={requests.popularMovies} />
      <Row title="Séries Populares" fetchUrl={requests.popularSeries} isSerie />
      <Row title="Melhores filmes" fetchUrl={requests.topRatedMovies} isLarge />
      <Row title="Filmes de Ação" fetchUrl={requests.actionMovies} />
      <Row title="Filmes de Comédia" fetchUrl={requests.comedyMovies} />
      <Row title="Filmes de Romance" fetchUrl={requests.romanceMovies} />
      <Row title="Documentários" fetchUrl={requests.documentaries} isLarge />
    </div>
  );
}

export default HomeScreen;
