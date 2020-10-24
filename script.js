const imageContainer = document.getElementById('image-conatiner');
const loader = document.getElementById('loader');

let photosArray = [];

// UnSplash API
const count = 10;
const apiKey = '37F0GBLGnk2tiRUIga9f19xNEQ7TT7Ijh39FiJBhdfg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create elements for links & photos
function displayImages() {
  // run function for each object
  photosArray.forEach((photo) => {
    // create <> to link to unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    // create <img> for image
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    // put <img> inside <a>,  then put both inside imageContainer element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get images from API
async function getImages() {
  try {
    const res = await fetch(apiUrl);
    photosArray = await res.json();
    displayImages();
  } catch (err) {
    // Catch error
  }
}

// On Load
getImages();