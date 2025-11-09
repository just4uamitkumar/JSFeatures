const select = document.getElementById("pokemonSelect");
const detailsDiv = document.getElementById("details");
const cache = {}; // cache object to store fetched Pokémon details



// Fetch the list of Pokémon
async function loadPokemonList() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();

    data.results.forEach((pokemon) => {
      const option = document.createElement("option");
      option.value = pokemon.url;
      option.textContent =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      select.appendChild(option);
    });
  } catch (err) {
    console.error("Error fetching Pokémon list:", err);
  }
}

// Display Pokémon details
async function showPokemonDetails(url) {
  if (!url) return;

  // Check cache first
  if (cache[url]) {
    renderDetails(cache[url]);
    return;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data)

    // Cache the result
    cache[url] = data;

    renderDetails(data);
  } catch (err) {
    console.error("Error fetching Pokémon details:", err);
  }
}

// Render the Pokémon details on the page
function renderDetails(data) {
  const abilitiesList = data.abilities
    .map((a) => `<li>${a.ability.name}</li>`)
    .join("");

  detailsDiv.innerHTML = `
        <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}" />
        <p><strong>Height:</strong> ${data.height}</p>
        <p><strong>Weight:</strong> ${data.weight}</p>
        <h3>Abilities:</h3>
        <ul class="abilities">${abilitiesList}</ul>
      `;
}

// Event listener for Pokémon selection
select.addEventListener("change", (e) => {
  showPokemonDetails(e.target.value);
});

// Initialize app
loadPokemonList();


console.log(cache)
