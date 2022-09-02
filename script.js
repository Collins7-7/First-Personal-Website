const getMovie = async () => {
    const fetchMovies = await fetch("https://api.tvmaze.com/shows");
    const fetchedMovies = await fetchMovies.json();
    console.log(fetchedMovies);
    fetchedMovies.forEach((fetchedMovie) => {
      document.querySelector(".display-movies").innerHTML += `
              <div class="each-displayed-movie">
              <h2>${fetchedMovie.name}</h2>
            <img src=${fetchedMovie.image.medium}>
            <p>${fetchedMovie.genres}</p>
        
  
          </div>
              
              
              `;
    });
  };