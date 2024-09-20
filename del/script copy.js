const tabelaFilmes = document.getElementById('tabela-filmes');
const paginação = document.querySelector('.pagination');

// API
async function buscarFilmes() {
    // const pagina = 1;
    const apiKey = 'b3904bfb3f89cb18c2456466a94bdcd5';
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=1`);
    const data = await response.json();
    console.log(data);

    tabelaFilmes.innerHTML = '';

    // Linhas na tabela de cada filme
    data.results.forEach(filme => {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td><img src="https://image.tmdb.org/t/p/w500/${filme.poster_path}" alt="${filme.title}" height="60"></td>
            <td>${filme.title}</td>
            <td>${filme.director || 'Não informado'}</td>
            <td>${filme.adult ? 'Adulto' : 'Livre'}</td>
            <td></td>
            <td><a href="detalhes.html?id=${filme.id}">Detalhes</a></td>
        `;
        tabelaFilmes.appendChild(novaLinha);
    });

}

/* <td>${filme.genre_ids.map(id => Buscar nome do gênero pela ID).join(', ')}</td> */
buscarFilmes();