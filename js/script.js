//Pour éviter de remettre l'url à chaque fois
const apiUrl = "https://rickandmortyapi.com/api/";

let currentPage = 1;
let currentPageLocation = 1;

//Fonction fetch
function fetchData(url) {
    return fetch(url).then(response => response.json());
}

//Fonction rechercheS des persos
function displayCharacters(characters) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    characters.forEach(character => {
        const characterDiv = document.createElement("div");
        characterDiv.innerHTML = `<p>${character.name}</p><img src="${character.image}" alt="${character.name}">`;
        outputDiv.appendChild(characterDiv);
    });
}

//Fonction recherche des lieux
function displayLocations(locations) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    locations.forEach(location => {
        const locationDiv = document.createElement("div");
        const residents = location.residents.map(resident => `<li>${resident}</li>`).join("");
        locationDiv.innerHTML = `<p>${location.name}</p><p>Dimension: ${location.dimension}</p><ul>${residents}</ul>`;
        outputDiv.appendChild(locationDiv);
    });
}

//Fonction recherche des épisodes
function displayEpisodes(episodes) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    episodes.forEach(episode => {
        const episodeDiv = document.createElement("div");
        episodeDiv.innerHTML = `<p>${episode.name}</p><p>Épisode: ${episode.episode}</p><p>Date de sortie: ${episode.air_date}</p>`;
        outputDiv.appendChild(episodeDiv);
    });
}

//Affichage des fonctions

//premier bouton
function loadCharacters(page) {
    const charactersUrl = apiUrl + "character?page=" + page;
    fetchData(charactersUrl).then(data => {
        displayCharacters(data.results);
        // Tu peux également mettre à jour la page courante ici si besoin
        // currentPage = data.info.page;
    });
}
//second bouton
function loadLocations(page2) {
    const locationsUrl = apiUrl + "location?page=" + page2;
    fetchData(locationsUrl).then(data => {
        displayLocations(data.results);
    });
}

//troisième bouton
function loadEpisodes(page3) {
    const episodesUrl = apiUrl + "episode?page=" + page3;
    fetchData(episodesUrl).then(data => {
        displayEpisodes(data.results);
    });
}

// bouttons next / prec
//persos
function loadNextPage() {
    currentPage++;
    loadCharacters(currentPage);
}

function loadPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        loadCharacters(currentPage);
    }
}

//Lieux
function loadNextPage2() {
    currentPage++;
    loadLocations(currentPage);
}

function loadPreviousPage3() {
    if (currentPage > 1) {
        currentPage--;
        loadLocations(currentPage);
    }
}

//Episodes
function loadNextPage3() {
    currentPage++;
    loadEpisodes(currentPage);
}

function loadPreviousPage3() {
    if (currentPage > 1) {
        currentPage--;
        loadEpisodes(currentPage);
    }
}

loadCharacters(currentPage);
