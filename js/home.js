
const apiKey = 'b3904bfb3f89cb18c2456466a94bdcd5';
const cardContainer = document.getElementById('card-container');

async function fetchMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=3`);
    const data = await response.json();
    const movies = data.results;

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('col-md-2');
        card.innerHTML = `
            <div class="card">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h6 class="card-title">${movie.title}</h6>
                    <a class="navbar-brand" href="sobre.html?movieId=${movie.id}">Saiba mais</a>
                </div>
            </div><p>
        `;
        cardContainer.appendChild(card);
    });
}

fetchMovies();