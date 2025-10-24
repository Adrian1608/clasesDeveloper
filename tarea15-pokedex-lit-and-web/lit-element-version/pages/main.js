import { PokemonCard } from '../custom/pokemon-card';
import { CardsSection } from '../custom/cards-section';

//Definición de custom elements
customElements.define('pokemon-card', PokemonCard);
customElements.define('cards-section', CardsSection);

const cardsSection = document.querySelector('cards-section');
const loadMoreButton = document.querySelector('#loadMore');
const logOutButton = document.querySelector('#logOutButton');
const spinner = document.querySelector('#spinnerContainer');

//limit: Limite de pokemones a llamar por fetch
//offset: Desde donde sigue la llamada, 0 a 10, 10 a 20, 20 a 30, ...
const rules = { limit: 10, offset: 0 };

//Lazy-loading button
loadMoreButton.addEventListener('click', () => {
    rules.offset += rules.limit;
    callAPI(rules.limit, rules.offset);
});

//Log out button
logOutButton.addEventListener('click', () => {
    sessionStorage.removeItem('user');
    window.open('../index.html','_self');            
});

const callAPI = async (limit, offset) => { 
    
    showLoading(true);
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await result.json();
    const pokemons = data.results;
    
    const pokemonsList = await Promise.all(
        pokemons.map(async (pokemon) => {
            const result = await fetch(pokemon.url);
            const data = await result.json();
            const descriptionPromise = await fetch(data.species.url)
            const description = await descriptionPromise.json();
            return { data: data, description: description };
        })
    );

    cardsSection.pokemons = cardsSection.pokemons.concat(pokemonsList);
    showLoading(false);
};

const showLoading = (isLoading) => {
    if(isLoading === true){
        spinner.style.display = 'block';
    }else{
        spinner.style.display = 'none';
    }
}

const checkSession = () => {
    const user = sessionStorage.getItem('user');
    if(!user){
        window.open('../index.html','_self');
    }else{
        const userName = document.querySelector('#userName');
        userName.innerHTML = user;
    }
}

checkSession();
callAPI(rules.limit, rules.offset);