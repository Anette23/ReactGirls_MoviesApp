import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Movies from "../src/pages/Movies";
import MovieDetail from "../src/pages/MovieDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/ReactGirls_MoviesApp">
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  </BrowserRouter>
);
