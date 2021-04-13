console.log(movies);

const addMoviesToDom = (movies) =>
  movies.forEach((movie) => {
    const newLi = document.createElement("li");
    const newA = document.createElement("a");
    const newIMG = document.createElement("img");
    filmList.appendChild(newLi);
    newLi.appendChild(newA);
    newA.appendChild(newIMG);
    newIMG.src = movie.Poster;
    newA.href = "https://www.imdb.com/title/" + movie.imdbID;
  });

addMoviesToDom(movies);

const filterMovies = (wordInMovieTitle) =>
  movies.filter((movies) =>
    movies.Title.toLocaleLowerCase().includes(
      wordInMovieTitle.toLocaleLowerCase()
    )
  );
const newestFilms = movies.filter((movies) => movies.Year >= 2014);

const radiobuttons = document.querySelectorAll("nav div input");

radiobuttons.forEach((i) =>
  i.addEventListener("change", () => {
    // console.log(i.value);
    switch (i.value) {
      case "nieuwe-films":
        filmList.innerHTML = "";
        addMoviesToDom(newestFilms);
        console.log("hey ik ben new");
        break;
      case "avengers":
        filmList.innerHTML = "";
        addMoviesToDom(filterMovies("Avengers"));
        console.log("hey ik ben Avengers");
        break;
      case "x-Men":
        filmList.innerHTML = "";
        addMoviesToDom(filterMovies("X-Men"));
        console.log("hey ik ben xman");
        break;
      case "princess":
        filmList.innerHTML = "";
        addMoviesToDom(filterMovies("Princess"));
        console.log("hey ik ben Princess");
        break;
      case "batman":
        filmList.innerHTML = "";
        addMoviesToDom(filterMovies("batman"));
        console.log("hey ik ben batman");
        break;
      default:
        addMoviesToDom(movies);
    }
  })
);
