import React from "react";
import Banner from "../../components/Banner";
import { requests } from "../../api/use-cases";
import Row from "../../components/Row";

function SeriesScreen() {
  return (
    <div className="w-full space-y-4">
      <Banner fetchUrl={requests.topRatedSeries} isSerie />
      <Row
        title="Séries mais votadas"
        fetchUrl={requests.topRatedSeries}
        isSerie
      />
      <Row title="Séries Populares" fetchUrl={requests.popularSeries} isSerie />
      <Row title="Séries de Ação" fetchUrl={requests.actionSeries} isSerie />
      <Row title="Séries de Drana" fetchUrl={requests.dramaSeries} isSerie />
      <Row title="Séries de Comédia" fetchUrl={requests.comedySeries} isSerie />
      <Row
        title="Files para ver em Família"
        fetchUrl={requests.familySeries}
        isSerie
      />
      <Row title="Séries de Horror" fetchUrl={requests.horrorSeries} isSerie />
      <Row
        title="Séries de Romance"
        fetchUrl={requests.romanceSeries}
        isSerie
      />
      <Row
        title="Fixão Científica"
        fetchUrl={requests.scienceFictionSeries}
        isSerie
      />
      <Row
        title="Desenhos Animados"
        fetchUrl={requests.animatedMovies}
        isSerie
      />
    </div>
  );
}

export default SeriesScreen;
