const movies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "Pulp Fiction", "Schindler's List"];

const p = document.querySelector(".titles")

movies.forEach((movie) => p.innerHTML += `${movie} <br>` )

