import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen/DetailsScreen";
import MoviesScreen from "./screens/MoviesScreen/MoviesScreen";
import SeriesScreen from "./screens/SeriesScreen/SeriesScreen";
import ExploreScreen from "./screens/ExploreScreen/ExploreScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="/filmes" element={<MoviesScreen />} />
            <Route path="/series" element={<SeriesScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/filme/:id" element={<DetailsScreen />} />
            <Route path="/serie/:id" element={<DetailsScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
