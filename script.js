let movies = [];

const movieContainer = document.getElementById("movieContainer");


// Load Movies From JSON

fetch("movies.json")
    .then(response => response.json())
    .then(data => {

        movies = data;

        displayMovies(movies);
        setFeaturedMovie();

    });


// Display Movies

function displayMovies(movieList) {

    movieContainer.innerHTML = "";

    movieList.forEach(movie => {

        const card = document.createElement("div");

        card.className = "movie";

        card.innerHTML = `
            <img src="${movie.cover}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.year}</p>
        `;

        movieContainer.appendChild(card);

    });

}


// Search System

const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", () => {

    const search = searchBar.value.toLowerCase();

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(search) ||
        movie.year.includes(search)
    );

    displayMovies(filteredMovies);

});


// Random Featured Movie

function setFeaturedMovie() {

    const featured = movies[Math.floor(Math.random() * movies.length)];

    document.getElementById("featured").style.backgroundImage =
        `url("${featured.cover}")`;

    document.getElementById("featuredTitle").textContent =
        featured.title;

    document.getElementById("featuredInfo").textContent =
        `Movie • ${featured.year}`;

}


// Intro Video Fade

const intro = document.getElementById("intro");
const introVideo = document.getElementById("introVideo");
const website = document.getElementById("website");


introVideo.addEventListener("ended", () => {

    intro.classList.add("fadeOut");

    website.classList.add("show");

    setTimeout(() => {
        intro.remove();
    }, 800);

});