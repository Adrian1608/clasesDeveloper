import { LitElement, html,css } from "lit";

export class PokemonCard extends LitElement {
    static properties = {
        data: {
            type: Object
        },
        description: {
            type: Object
        }
    };

    static styles = css`    
    *{
        margin: 0;
        padding: 0;
        border: none;
    }
    :host {
        --background-color: #f85454;    
        --main-section-color: #e2dada;
        --footer-color: #363232;    
        --cards-color: #8999f5;
        --flip-button-pressed-color: #f78787;    
        --picture-background: #ffff;
        --load-more-hover-color: #f56f6f;
        --load-more-active-color: #f78787;        
    }

    .card-container {
        perspective: 1000px;
        width: 15rem;
        height: 20rem;

        .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: var(--cards-color);   
            border-radius: 2rem;            
            transition: transform 0.8s;
            transform-style: preserve-3d;

            & .card-front,.card-back{
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 2rem;
                padding: 1.25rem;
                -webkit-backface-visibility: hidden; /* Safari */
                backface-visibility: hidden;                    
                box-sizing: border-box;
            }

            & .card-front{
                display: flex;
                flex-direction: column;
                gap: 0.75rem;

                & div {
                    display: flex;
                    justify-content: flex-end;
                    align-content: flex-end;
                    align-items: flex-end;
                }

                & .pokemon-image {
                    display: block;
                    margin: 0 auto;
                    background-color: var(--picture-background);
                    border-radius: 1rem;
                }

            }

            & .card-back{
                display: flex;
                flex-direction: column;
                gap: 0.75rem;                        
                transform: rotateY(180deg);

                & hr {
                    border: 0.5px var(--footer-color) solid;
                }

                & ul {

                    & li {
                        margin: 0.25rem 0 0 1.25rem;
                    }

                }

                & div {
                    display: flex;
                    justify-content: flex-end;
                    align-content: flex-end;
                    align-items: flex-end;
                }                        
            }

        }

    }

    .flip-button {
        position: absolute;
        top: 85%;
        left: 80%;
        padding: 1rem;
        border-radius: 100%;
        background-color: var(--background-color);                            

        &:active {
            background-color: var(--flip-button-pressed-color);
        }
    }

    .card-back-picture {
        width: 75px;
        height: 75px;
        left: 60%;
        top: 0%;
        position: absolute;
        box-sizing: border-box;
    }    
    `;

    constructor() {
        super();
        this.data = {};
        this.description = {};
    }

    defineButton(style) {
        const container = this.renderRoot.querySelector('.card-inner');
        container.style.transform = style;
    }

    render() {
        return html`
        <div class="card-container">
            <div class="card-inner">
                <div class="card-front">
                    <img class="pokemon-image" src="${this.data.sprites.front_default}">
                    <h3>${this.data.species.name.toUpperCase()}</h3>
                    <p>${this.description.flavor_text_entries[0].flavor_text}</p>
                    <button @click="${() => this.defineButton('rotateY(180deg)')}" class="flip-button"></button>
                </div>
                <div class="card-back">
                    <img class="card-back-picture" src="${this.data.sprites.front_default}">
                    ${this.data.stats.map((item) => {
                        return html`
                        <p>
                            <strong>${item.stat.name.toUpperCase()}: </strong>
                            ${item.base_stat}
                        </p>                        
                        `
                    })}
                    <hr>
                    <ul>
                        <strong>TYPES:</strong>
                        ${this.data.types.map((item) => {
                            return html`
                            <li>${item.type.name.toUpperCase()}</li>
                            `
                        })}
                    </ul>
                    <button @click="${() => this.defineButton('rotateY(360deg)')}" class="flip-button"></button>
                </div>
            </div>
        </div>
        `
    };
}