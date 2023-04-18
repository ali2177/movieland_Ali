import React from "react";
import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=8030c197";

const App = () => {
  const serchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };
  useEffect(() => {
    serchMovies("super");
  }, []);
  return <div>App</div>;
};

export default App;
