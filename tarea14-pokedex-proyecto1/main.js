'use strict';

const cardsSection = document.querySelector('#cardsSection');
const loadMoreButton = document.querySelector('#loadMore');
const spinner = document.querySelector('#spinnerContainer');

//limit: Limite de pokemones a llamar por fetch
//offset: Desde donde sigue la llamada, 0 a 10, 10 a 20, 20 a 30, ...
const rules = { limit: 10, offset: 0 };

//Lazy-loading button
loadMoreButton.addEventListener('click', () => {
    rules.offset += rules.limit;
    callAPI(rules.limit, rules.offset);
});

const renderPokemon = (data, description) => {

    //Declaración del container de la card
    const newCardContainer = document.createElement('div');
    newCardContainer.classList.add('card-container');

    //Declaración de la card que contendrá el front y back
    const newPokemonCard = document.createElement('div');
    newPokemonCard.classList.add('card-inner');

    //Generación del card-front
    const pokemonFront = generatePokemonCardFront(data, description);

    //Generación del card-back - data
    const pokemonBack = generatePokemonCardBack(data);

    //Declaración del botón para voltear las cards
    const flipButtonFront = cardButtonDefiner('rotateY(180deg)', newPokemonCard);
    const flipButtonBack = cardButtonDefiner('rotateY(360deg)', newPokemonCard);

    //Se asignan los botones tanto al card-front como card-back
    pokemonFront.appendChild(flipButtonFront);
    pokemonBack.appendChild(flipButtonBack);

    //Se añaden el card-front y card-back al card-inner (contenedor de ambos)
    newPokemonCard.appendChild(pokemonFront);
    newPokemonCard.appendChild(pokemonBack);    

    //Se añade la card al card-container y este se añade finalmente a su sección
    newCardContainer.appendChild(newPokemonCard);
    cardsSection.appendChild(newCardContainer);
};

//Con los parámetros de datos y descripción del pokemon, genera el frente de la card
const generatePokemonCardFront = (data, description) => {
    const pokemonFront = document.createElement('div');
    pokemonFront.classList.add('card-front');
    const pokemonImage = document.createElement('img');
    pokemonImage.classList.add('pokemon-image');
    pokemonImage.src = data.sprites.front_default;
    pokemonFront.appendChild(pokemonImage);
    const pokemonName = document.createElement('h3');
    pokemonName.innerHTML = data.species.name.toUpperCase();
    const pokemonDescription = document.createElement('p');
    pokemonDescription.innerHTML = description.flavor_text_entries[0].flavor_text;
    pokemonFront.appendChild(pokemonName);
    pokemonFront.appendChild(pokemonDescription);
    return pokemonFront;    
};

//Con los parámetros de datos del pokemon, genera la parte trasera de la card
const generatePokemonCardBack = (data) => {
    const pokemonBack = document.createElement('div');
    pokemonBack.classList.add('card-back'); 
    const pokemonPicture = document.createElement('img');
    pokemonPicture.src = data.sprites.front_default;
    pokemonPicture.classList.add('card-back-picture');
    pokemonBack.appendChild(pokemonPicture);

    data.stats.forEach(currentStat => {
        const stats = document.createElement('p');
        const statName = document.createElement('strong');
        statName.innerHTML = `${(currentStat.stat.name).toUpperCase()}: `; 
        stats.appendChild(statName);
        stats.innerHTML += `${currentStat.base_stat}`;
        pokemonBack.appendChild(stats);
    });

    pokemonBack.appendChild(document.createElement('hr'));

    const types = document.createElement('ul');    
    types.innerHTML = `<strong>TYPES:</strong>`
    data.types.forEach(type => {
        const listElement = document.createElement('li');
        listElement.innerHTML = type.type.name.toUpperCase();
        types.appendChild(listElement);
    });

    pokemonBack.appendChild(types);
    return pokemonBack;
};

//Función para definir los botones en base a cómo volteará la card y el contexto que debe usar
const cardButtonDefiner = (style, context) => {

    const container = document.createElement('div');
    container.classList.add('flip-button-wraper');

    const button = document.createElement('button');
    button.addEventListener('click', function(){
        this.style.transform = style;
    }.bind(context))
    button.classList.add('flip-button');

    container.appendChild(button);
    //return container;
    return button;
}

//L: Lazy-load en base al offset y en llamados al botón
const callAPI = async (limit, offset) => { 
    
    showLoading(true);

    const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await result.json();
    const pokemons = data.results;
    
    await Promise.all(
        pokemons.map(async (pokemon) => {
            const result = await fetch(pokemon.url);
            const data = await result.json();
            const descriptionPromise = await fetch(data.species.url)
            const description = await descriptionPromise.json();
            renderPokemon(data, description);
        })
    );

    showLoading(false);
};

const showLoading = (isLoading) => {
    if(isLoading === true){
        spinner.style.display = 'block';
    }else{
        spinner.style.display = 'none';
    }
}

//Por defecto al iniciar la aplicación se lanza el callAPI, para rescatar los 10 primeros elementos
// R: Renderiza la ruta inicial lo antes posible
callAPI(rules.limit, rules.offset);
