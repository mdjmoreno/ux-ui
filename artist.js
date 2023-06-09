// Inicializacion de la lista de albums
const albums = [
  {
    name: "Definitely Maybe",
    year: 1994,
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/OasisDefinitelyMaybealbumcover.jpg",
  },
  {
    name: "(What's the Story) Morning Glory?",
    year: 1995,
    image: "https://i.scdn.co/image/ab67616d0000b27385e5dcc05cc216a10f141480",
  },
  {
    name: "Be Here Now",
    year: 1997,
    image: "https://upload.wikimedia.org/wikipedia/en/0/08/BeHereNowcover.jpg",
  },
];

// Buscamos y almacenamos el elemento que contenga la clase ".albums" en el HTML
const albumsElement = document.querySelector(".albums");

const renderHTML = () => {
  const albumsHTML = albums
    .map(
      ({ image, name, year }) =>
        `<div class="album"> 
        <img src="${image}" class="album-image">
        <p class="album-name">${name}</p>
        <p class="album-year">${year}</p>
    </div>`
    )
    .join("");

  albumsElement.innerHTML = albumsHTML;
};

renderHTML();

const generateAlbum = () => {
  albums.push({
    name: "Standing on the Shoulder of Giants",
    year: 2000,
    image:
      "https://lastfm.freetls.fastly.net/i/u/ar0/870cd08073b245f1a3912d8282aa900c.jpg",
  });
};
