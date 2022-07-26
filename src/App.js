import React, { useEffect, useState } from "react";
import logo from "./queeery-logo.png";
import "./App.css";
import Card from "./Components/Card/Card";
import { movies$ } from "./movies";

function App() {
  const [movieList, setMovieList] = useState([]);

  // Fetching the Movies and seting it to movie list state.
  // This use effect runs on initial page load.
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movies$;
      setMovieList(data);
    };

    fetchMovies();
  }, []);

  /** 
  This function handles the button click events of likes and dislike.

  different actions are selected with switch case and is matched with "click_type" parameter.

  @param {[string]} id Id of the movie.
  @param {[string]} click_type define either "like" or "dislike" as click type in your buttons.
  */

  const handleButtonClick = (id, click_type) => {
    let updatedMovieList = [...movieList];
    const movieidx = updatedMovieList.findIndex((x) => x.id === id);

    if (movieidx !== undefined || movieidx !== -1) {
      switch (click_type) {
        case "dislike":
          updatedMovieList[movieidx].dislikes += 1;
          break;

        case "like":
          updatedMovieList[movieidx].likes += 1;
          break;

        default:
          console.log("please set correct option (like / dislike)");
      }
      setMovieList(updatedMovieList);
    }
  };

  if (movieList.length === 0) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Loading Movie List ...</p>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="movie-list--header">
        <img src={logo} id="logo" alt="logo" />
        <h2>Queeery Movie List</h2>
      </div>
      <div className="movie-list--grid">
        {movieList.map((movie) => (
          <Card
            id={movie.id}
            key={movie.id}
            title={movie.title}
            category={movie.category}
            url={movie.url}
            likes={movie.likes}
            dislikes={movie.dislikes}
            disLikeClick={handleButtonClick}
            likeClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
