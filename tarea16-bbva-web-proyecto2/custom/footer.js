import { LitElement,html,css } from "lit";

export class FooterComponent extends LitElement {

    static properties = {};

    static styles = css`
    *{
        margin: 0;
        padding: 0;
        border: none;
    }    

    :host {
        --background-color: #0c1f8b;        
        --address-font-color: #64b9f1;
    }

    footer {
        display: flex;
        flex-direction: column;
        background-color: var(--background-color);
        border-radius: 2rem;
        margin: 1rem;

        .image-container {

            margin: 2rem;            

            img {
                display: block;
                width: 100px;
                height: 29.92px;
                filter: brightness(0) invert(1) saturate(0); /* or a combination of other filters */
            }

        }

        .text-container {

            margin: 0 2rem;

            p {
                color: var(--address-font-color);
                margin: 0.5rem 0;
            }

            .reclamations-call-bank {
                display: flex;
                color: var(--address-font-color);
                flex-wrap: wrap;
                gap: 2rem;
            }            

            .copyright-claim {
                margin: 2rem 0;                
                color: #ffff;
            }

        }

    }
    `;

    constructor(){
        super();
    }

    render(){
        return html`
        <footer>
            <div class="image-container">
                <img src="./resources/BBVA_2019.svg.png">
            </div>
            <div class="text-container">
                <div class="reclamations-call-bank">
                    <p>Libro de Reclamaciones</p>
                    <p>Llámanos (01) 595-0000</p>
                    <p>Banco BBVA Perú - RUC 20100130204</p>                    
                </div>
                <p class="address">Av. República de Panamá 3055 - San Isidro</p>                
                <p class="copyright-claim">© 2025 Adrián Arango (basado en la web del BBVA)</p>
            </div>
        </footer>
        `;
    }

}