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
  const searchMovie = () => {
    document.getElementById("getmovie").addEventListener("click", async (e) => {
      e.preventDefault();
      const inputValue = document.querySelector("#search-movies").value;
      const searchMovie = await fetch(
        `https://api.tvmaze.com/search/shows?q=${inputValue}`
      );
      const searchedMovies = await searchMovie.json();
      console.log(searchedMovies);
      document.querySelector(".display-movies").innerHTML = "";
      searchedMovies.forEach((searchMovie) => {
        if (searchMovie.show.image !== null) {
          document.querySelector(".display-movies").innerHTML += `
                      <div class="each-displayed-movie">
                      <h2>${searchMovie.show.name}</h2>
                    <img src=${searchMovie.show.image.medium}>
                    <p>${searchMovie.show.genres}</p>
                
          
                  </div>
                      
                      
                      `;
        }
      });
  
      document.querySelector(".show-all-movies").innerHTML = `
            <button class="show-all-btn">SHOW ALL MOVIES</button>
            
            `;
      document
        .querySelector(".show-all-movies")
        .addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(".display-movies").innerHTML = "";
          document.querySelector("#search-movies").value = "search a movie..";
          getMovie();
        });
    });
  };
  searchMovie();
  getMovie();