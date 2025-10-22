'use strict';

const cardsSection = document.querySelector('#cardsSection');
const loadMoreButton = document.querySelector('#loadMore');

//limit: Limite de pokemones a llamar por fetch
//offset: Desde donde sigue la llamada, 0 a 10, 10 a 20, 20 a 30, ...
const rules = { limit: 10, offset: 0 };

//Lazy-loading button
loadMoreButton.addEventListener('click', () => {
    rules.offset += 10;
    callAPI(rules.limit, rules.offset);
});

//TODO: Definir correctamente el render para las cards
const renderPokemon = (data) => {
    console.log('Renderizando...', data);
    const newPokemonCard = document.createElement('div');
    newPokemonCard.classList.add('card-container');
    newPokemonCard.innerHTML = data.species.name;
    cardsSection.appendChild(newPokemonCard);        
};

//L: Lazy-load en base al offset y en llamados al botón
const callAPI = async (limit, offset) => { 
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await result.json();
    const pokemons = data.results;
    pokemons.forEach(async (pokemon) => {
        const result = await fetch(pokemon.url);
        const data = await result.json();
        renderPokemon(data);
    });
};

//Por defecto al iniciar la aplicación se lanza el callAPI, para rescatar los 10 primeros elementos
// R: Renderiza la ruta inicial lo antes posible
callAPI(rules.limit, rules.offset);
