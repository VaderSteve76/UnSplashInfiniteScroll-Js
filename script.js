// Unsplash API
const count = 30;
const apiKey = `SOZT1EnKzEkhWlf7K9b0cs3FQBsRI-3kUdUyKIaNiY4`;
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}


// On Load
getPhotos();