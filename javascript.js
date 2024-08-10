// NASA APOD API Key
const apiKey = 'YOUR_API_KEY_HERE';

// Elements
const dateInput = document.querySelector('#dateInput');
const apodImage = document.querySelector('#apodImage');
const apodTitle = document.querySelector('#apodTitle');
const apodDate = document.querySelector('#apodDate');
const apodExplanation = document.querySelector('#apodExplanation');
const favoritesSection = document.getElementById('favoritesSection');
const favoritesGallery = document.getElementById('favoritesGallery');
const currentDateTime = document.getElementById('currentDateTime');
const toggleButton = document.getElementById('toggleFavorites');

// Display current date and time
function updateDateTime() {
    const now = new Date();
    currentDateTime.textContent = now.toLocaleString();
}

// Fetch APOD data from NASA API
function fetchAPOD(date) {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.media_type === 'image') {
                apodImage.src = data.url;
                apodImage.alt = data.title;
                apodImage.onclick = () => window.open(data.hdurl, '_blank');
            } else {
                apodImage.src = '';
                apodImage.alt = 'APOD is a video today.';
            }
            apodTitle.textContent = data.title;
            apodDate.textContent = data.date;
            apodExplanation.textContent = data.explanation;
        })
        .catch(error => console.error('Error fetching APOD:', error));
}

// Save APOD to favorites
function saveToFavorites() {
    const favorite = {
        title: apodTitle.textContent,
        date: apodDate.textContent,
        explanation: apodExplanation.textContent,
        url: apodImage.src,
        hdurl: apodImage.src // assuming this is the HD image URL
    };
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(favorite);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

// Display favorite images in the gallery
function displayFavorites() {
    favoritesGallery.innerHTML = ''; // Clear existing content
    const imagePaths = [
        'images/2024 August 7.jpg',
        'images/2024 August 6.jpg',
        'images/2024 August 5.jpg',
        'images/2024 August 2.jpg',
        'images/2024 August 1.jpg',
        'images/2024 August 10.jpg'
    ];
    imagePaths.forEach(path => {
        const favoriteLink = document.createElement('a');
        favoriteLink.href = path;
        favoriteLink.target = '_blank';
        favoriteLink.innerHTML = `
            <img src="${path}" alt="${path.split('/').pop()}" />
        `;
        favoritesGallery.appendChild(favoriteLink);
    });
}

// Function to toggle the display of the favorites section
function toggleFavorites() {
    if (favoritesSection.style.display === 'none' || favoritesSection.style.display === '') {
        favoritesSection.style.display = 'block';
        toggleButton.textContent = 'Hide Favourites';
        displayFavorites(); // Ensure favorites are displayed when the section is shown
    } else {
        favoritesSection.style.display = 'none';
        toggleButton.textContent = 'Show Favourites';
    }
}

// Event listener for date form submission
document.querySelector('#dateForm').addEventListener('submit', event => {
    event.preventDefault();
    const date = dateInput.value;
    fetchAPOD(date);
});

// Initial setup
updateDateTime();
setInterval(updateDateTime, 60000); // Update date and time every minute
toggleButton.addEventListener('click', toggleFavorites);
