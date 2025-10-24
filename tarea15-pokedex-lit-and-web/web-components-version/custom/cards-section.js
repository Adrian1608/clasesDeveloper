export class CardsSection extends HTMLElement{

    constructor() {
        super();
        this._pokemons = [];
        this.attachShadow({mode: 'open'});        
    }

    connectedCallback() {
        this.render();
    }

    set pokemons(value) {
        this._pokemons = value;
        this.render();
    }

    get pokemons(){
        return this._pokemons;
    }

    disconnectedCallback() {
        console.log('se ejecuto disconnectedCallback');
    }

    static observedAttributes = ['_pokemons'];    

    attributeChangedCallback(attr, oldValueAttr, valueAttr) {
        if(attr === '_pokemons') {
            console.log(attr, valueAttr);
            this._pokemons = valueAttr;
        }
    }    

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            border: none;    
        }

        #cardsSection{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /*Esto permite responsividad*/
            margin: 0 auto;
            max-width: 100rem;
            justify-items: center;
            padding: 3rem 0;
            gap: 0.5rem;
        }        
        </style>
        <section id="cardsSection">
            ${this._pokemons.map((pokemon) => {
                return `
                <pokemon-card></pokemon-card>
                `
            }).join('')}
        </section>
        `;

        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(template.content.cloneNode(true));        

        const cardElements = this.shadowRoot.querySelectorAll('pokemon-card');
        this._pokemons.forEach((pokemon, index) => {
            const card = cardElements[index];
            card.data = pokemon.data;
            card.description = pokemon.description;
        });
    };
}