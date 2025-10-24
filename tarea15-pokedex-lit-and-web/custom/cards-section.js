import { LitElement,html,css } from "lit";

export class CardsSection extends LitElement{
    static properties = {
        pokemons: {
            type: Array
        }
    };

    static styles = css`
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
    `;

    constructor() {
        super();
        this.pokemons = [];
    }

    render() {
        return html`
            <section id="cardsSection">
                ${this.pokemons.map((pokemon) => {
                    return html`
                    <pokemon-card .data="${pokemon.data}" .description="${pokemon.description}"></pokemon-card>
                    `
                })}
            </section>
        `
    };
}