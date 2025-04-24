document.addEventListener("DOMContentLoaded", function () {
  const movieGrid = document.getElementById("movie-grid");
  const loginNotice = document.getElementById("login-notice");

  if (!localStorage.getItem("token")) {
    localStorage.setItem("token", "demo-token-for-testing");
  }

  const token = localStorage.getItem("token");

  if (token) {
    if (loginNotice) {
      loginNotice.style.display = "none";
    }

    fetchMoviesFromAPI(token, movieGrid);
  } else {
    if (movieGrid) {
      movieGrid.style.display = "none";
    }
  }
});

function fetchMoviesFromAPI(token, movieGrid) {
  fetch("https://movieapp-api-lms1.onrender.com/movies/getMovies", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Movies data:", data);
      displayMovies(data.movies, movieGrid);
    })
    .catch((error) => {
      console.error("Error fetching movies:", error);
      console.log(data);
      displayMockMovies(movieGrid);
    });
}

function displayMovies(movies, movieGrid) {
  movieGrid.innerHTML = "";

  if (Array.isArray(movies) && movies.length > 0) {
    movies.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      movieGrid.appendChild(movieCard);
    });
  } else {
    movieGrid.innerHTML = "<p>No movies available.</p>";
  }
}

function createMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.className = "movie-card";

  const title = movie.title || "Untitled Movie";
  const genre = movie.genre || "Unknown Genre";

  const movieIconSVG = `
  <img src="images/clapperboard.svg" alt="Clapperboard icon" width="150" height="150">`;

  movieCard.innerHTML = `
        <div class="movie-image">
            ${movieIconSVG}
        </div>
        <div class="movie-details">
            <div class="movie-title">${title}</div>
            <div class="movie-genre">${genre}</div>
        </div>
        `;

  return movieCard;
}

// waa
function displayMockMovies(movieGrid) {
  console.log("Displaying mock movies...");
  console.log("api movies data:", data);
  const mockMovies = [
    { title: "Dwayne: The Rock", genre: "Action/Comedy" },
    { title: "Queen Gong", genre: "romance" },
    { title: "The Minecraft Movie", genre: "Minecraft" },
    { title: "Echoes of the Horizon", genre: "Sci-Fi/Drama" },
    { title: "Shadow Realm", genre: "Fantasy" },
    { title: "Speed Demon", genre: "Action" },
    { title: "The Last Journey", genre: "Adventure" },
    { title: "Code Red", genre: "Thriller" },
  ];

  displayMovies(mockMovies, movieGrid);
}
