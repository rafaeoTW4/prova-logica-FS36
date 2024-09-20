const apiKey = 'b3904bfb3f89cb18c2456466a94bdcd5';
const movieId = getParameterByName('movieId');

async function fetchMovieDetails() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=pt-BR`);
  const data = await response.json();

  const moviePoster = document.getElementById('moviePoster');
  const movieTitle = document.getElementById('movieTitle');
  const movieOverview = document.getElementById('movieOverview');

  moviePoster.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  movieTitle.textContent = data.title;
  movieOverview.textContent = data.overview;
}

fetchMovieDetails();

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}