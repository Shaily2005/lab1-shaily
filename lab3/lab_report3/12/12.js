const mockMovies = [
    {
        id: 1,
        title: "Inception",
        poster: "https://via.placeholder.com/50",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        director: "Christopher Nolan",
        country: "USA",
        language: "English",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    },
    {
        id: 2,
        title: "The Dark Knight",
        poster: "https://via.placeholder.com/50",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        director: "Christopher Nolan",
        country: "USA",
        language: "English",
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    },
    {
        id: 3,
        title: "Parasite",
        poster: "https://via.placeholder.com/50",
        year: 2019,
        genre: "Thriller",
        rating: 8.6,
        director: "Bong Joon-ho",
        country: "South Korea",
        language: "Korean",
        actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
    },
    {
        id: 4,
        title: "Interstellar",
        poster: "https://via.placeholder.com/50",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.6,
        director: "Christopher Nolan",
        country: "USA",
        language: "English",
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
];
function loadMovies() {
    const tbody = document.getElementById('movieTableBody');
    tbody.innerHTML = ''; 

    mockMovies.forEach(movie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.id}</td>
            <td>${movie.title}</td>
            <td><img src="${movie.poster}" alt="Poster for ${movie.title}" /></td>
            <td>${movie.year}</td>
            <td>${movie.genre}</td>
            <td>${movie.rating}</td>
            <td>${movie.director}</td>
            <td>${movie.country}</td>
            <td>${movie.language}</td>
            <td>${movie.actors.join(', ')}</td>
        `;
        tbody.appendChild(row);
    });
}
window.onload = loadMovies;