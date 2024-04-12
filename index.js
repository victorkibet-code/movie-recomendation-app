const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

//Inserted my db.json on my javascript code so as to fetch data directly
const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]


//database to store user information
let users = [];

// Function to register a new user
function registerUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if the email is already registered
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("Email already exists. Please login instead.");
        return;
    }

    // Create a new user object
    const newUser = {
        email: email,
        password: password,
        loggedIn: false
    };

    // Add the new user to the database
    users.push(newUser);
    alert("Registration successful. You can now login.");
}

// Function to login a user
function loginUser() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Find the user with the provided email
    const user = users.find(user => user.email === email);

    // If user not found or password is incorrect, show error message
    if (!user || user.password !== password) {
        alert("Invalid email or password. Please try again.");
        return;
    }

    // Set the loggedIn status to true
    user.loggedIn = true;
    alert("Login successful. Welcome back!");
}