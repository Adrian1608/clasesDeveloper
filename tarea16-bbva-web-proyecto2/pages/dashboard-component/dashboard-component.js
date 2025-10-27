import { LitElement,html,css } from "lit";
import { Router } from '../../routing/router';

export class DashboardComponent extends LitElement{

    static properties = {
        data: {
            type: Array
        },
        chosenObject: {
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
        --button-color: #0077ff;
        --button-hover-color: #036ae0;
        --button-active-color: #0461ca;                
    }

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /*Esto permite responsividad*/
        margin: 0 auto;
        max-width: 100rem;
        justify-items: center;
        padding: 2rem;
        gap: 0.5rem;
    }

    button {
        margin: 1rem;
        font-family: Georgia, 'Times New Roman', Times, serif;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        background-color: var(--button-color);
        font-weight: 600;
        color: #ffff;

        &:hover {
            background-color: var(--button-hover-color);
        }
        
        &:active{
            background-color: var(--button-active-color);
        }
    }    
    `;

    constructor() {
        super();
        this.data = [
            { name: 'Cuentas de ahorro', description: 'Retira, transfiere, envía, y recibe dinero gratis', price: 10, imageUrl:'https://www.bbva.pe/content/dam/library/micros/activate-card-glass.im1746463650898im.png?imwidth=1176'},
            { name: 'Tarjeta de crédito', description: 'Pide tu tarjeta 100% online y empieza a comprar desde tu casa', price: 20, imageUrl: 'https://www.bbva.pe/content/dam/library/micros/add-credit-card-glass.im1744216866463im.png?imwidth=1176'},
            { name: 'BBVA T-Cambio', description: 'Cambia dólares 24/7 con un tipo de cambio preferencial', price: 100, imageUrl: 'https://www.bbva.pe/content/dam/library/micros/move-money-dollar-glass.im1746214637227im.png?imwidth=1176'},
            { name: 'Préstamo al toque', description: 'Pídelo desde casa y el dinero estará en tu cuenta al instante', price: 1000, imageUrl: 'https://www.bbva.pe/content/dam/library/micros/extraordinary-contribution-dollar-glass.im1742390460108im.png?imwidth=1176'},
            { name: 'Seguro Vida Renta', description: 'Indemnización de hasta US$100,000 (incluido Covid-19)', price: 100000, imageUrl: 'https://www.bbva.pe/content/dam/public-web/peru/images/microillustrations/security.im1638817134789im.png?imwidth=320'},
            { name: 'Adelanto de Sueldo', description: 'Recibe hasta S/2,500 antes que te paguen el sueldo', price: 2000, imageUrl: 'https://www.bbva.pe/content/dam/library/micros/relocation-loan-dollar-glass.im1746463654931im.png?imwidth=1176'},
            { name: 'Tarjeta adicional', description: 'Comparte los descuentos de tu tarjeta con quien quieras', price: 500, imageUrl: 'https://www.bbva.pe/content/dam/library/micros/additional-credit-card-glass.im1744216883182im.png?imwidth=1176'},
            { name: 'Depósito a plazo', description: 'Ahorra con a una tasa exclusiva digital', price: 0, imageUrl: 'https://www.bbva.pe/content/dam/library/micros/funds-glass.im1744217459804im.png?imwidth=1176'},
            { name: 'Fondos Mutuos', description: 'Elige un fondo e invierte con tranquilidad', price: 642, imageUrl: 'https://www.bbva.pe/content/dam/library/micros/money-graphic-dollar-glass.im1742390505779im.png?imwidth=1176'},
            { name: 'Seguro Protección de Tarjetas', description: 'Protege tus tarjetas de Crédito y Débito BBVA', price: 2000, imageUrl: 'https://www.bbva.pe/content/dam/public-web/peru/images/microillustrations/pregnant_insurance_dark.im1638817361425im.png?imwidth=320'}
        ];
    }

    goBackToDashboard(){
        //Como Lit escucha a esta propiedad, al renderizar no verá el objeto específico luego de esto
        this.chosenObject = null;
    }

    goToDetail(event){
        this.chosenObject = event.detail;
    }

    render() {
        return html`
        <bbva-header></bbva-header>
            ${!this.chosenObject 
                ? html`
                <div class="grid-container">
                    ${this.data.map((object) => {
                    return html`
                    <!--@product-selected, actúa cuando escucha el event "product-selected" de product-card-->
                    <product-card .product = ${object} 
                    @product-selected="${(e) => this.goToDetail(e)}"></product-card>
                    `
                })}
                </div>
                `                
                : html`
                <dashboard-detail-component @go-dashboard="${() => this.goBackToDashboard()}" .data = ${this.chosenObject}></dashboard-detail-component>
                ` 
            }
        <bbva-footer></bbva-footer>
        `;
    }

}
