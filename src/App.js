import React from "react";
import "./styles.css";
import { ApplicationRoutes } from "./ApplicationRoutes";

// import { MoviesList } from "./components/MoviesList";

export default function App() {
  return (
    <div className="App">
      <h1>Melhores Filmes</h1>
      <ApplicationRoutes />
    </div>
  );
}
