// 2. Створіть два обєкти з даних для фільму з попереднього завдання. Придумайте свої назви властивостей.
const first_movie = {
  title: "Red Notice",
  rating: 6.8,
  posterUrl: "https://image.tmdb.org/t/p/w1280/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
  isMovieRecomendedByMe: false
};
const second_movie = {
  title: "Venom: Let There Be Carnage",
  year: 2021,
  rating: 7.2,
  contentRating: "PG-13",
  ticketCost: 140,
  posterUrl: "https://image.tmdb.org/t/p/w1280//rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
  isMovieRecomendedByMe: true,
  isTechnology3D: true
};
const third_movie = {
  title: "Clifford the Big Red Dog",
  year: 2021,
  rating: 7.5,
  contentRating: "PG",
  ticketCost: 120,
  posterUrl: "https://image.tmdb.org/t/p/w1280//ygPTrycbMSFDc5zUpy4K5ZZtQSC.jpg",
  isMovieRecomendedByMe: false,
  isTechnology3D: true
};
const movies = [first_movie, second_movie, third_movie];

// 1. Замініть відповідні змінні значеннями для наступних фільмів по черзі.
let movieNumber = 0;
document.onclick = function () {
    movieNumber = movieNumber + 1;
    if (movieNumber==3) {
        movieNumber=0;
    }
    const movieCardEl = document.getElementById("movieCardId");
    console.log(movieCardEl);
    const moviePosterEl = movieCardEl.querySelector("img");
    console.log(moviePosterEl);
    const movieTitleEl = movieCardEl.querySelector(".movie-info h3");
    const movieRatingEl = movieCardEl.querySelector(".movie-info span");
    moviePosterEl.setAttribute("src", movies[movieNumber].posterUrl);
    moviePosterEl.setAttribute("alt", movies[movieNumber].title);
    movieTitleEl.innerText = movies[movieNumber].title;
    movieRatingEl.innerText = movies[movieNumber].rating; 
};

// 3. Виведіть в консоль назву фільму з створеного обєкту.
console.log(second_movie.title);
console.log(movies[1].title);

// 4. Створіть масив моделей машин. Виведіть в консоль довжина масиву і останній елемент цього масиву.
const carModels = ["Tesla", "Toyota", "Audi","Ford", "Kia", "Volkswagen","Skoda", "Renault"];
console.log(carModels.length);
console.log(carModels[carModels.length-1]);

// 5. Створіть обєкт про себе. Обєкт має містити мінімум три властивості.
// Використайте всі типи даних: String, Number, Boolean.
const human = {
    firstName: "Oleksandr",
    age: 34,
    email:"alexdko.mail@gmail.com",
    likeLearningNew: true
};

// 6. Створіть обєкт про своє місто. Обєкт має містити мінімум три властивості.
// Використайте всі типи даних: String, Number, Boolean.
const city = {
    name: "Sumy",
    area: 95.40,
    distanceToKyiv: 340,
    siteUrl:"https://visit.sumy.ua",
    isCapital: false
};
