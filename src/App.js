import { useState, useEffect } from "react";
import './App.css';
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  //variable w/ api key
  const API_KEY = "98e3fb1f";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to get movies
  const getMovie = async (searchTerm) => {
    //make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
    );
    //Parse JSON response into a JavaScript object
    const data = await response.json();
    //Set movie state to the movie
    setMovie(data);
  };

  //This will run on the first render but not on subsequent renders
  useEffect(() => {
    getMovie("Natural Born Killers");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
