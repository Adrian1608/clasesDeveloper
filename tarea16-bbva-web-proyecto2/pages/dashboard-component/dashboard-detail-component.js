import { LitElement,html,css } from "lit";

export class DashboardDetailComponent extends LitElement{

    static properties = {
        data: {
            type: Object
        }
    };

    static styles = css`
    * {
        margin: 0;
        padding: 0;
        border: none;
    }    

    :host{
        --font-color: #121c55;        
        --button-color: #0077ff;
        --button-hover-color: #036ae0;
        --button-active-color: #0461ca;                        
    }

    section {
        background-color: #ffff;
        margin: 1rem;
        border-radius: 2rem;
        color: var(--font-color);

        display: flex;
        flex-direction: column;

        img {
            display: block;
            margin: 0 auto;
        }

        .text-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;

            h4 {
                margin: 1rem;
            }

            .product-title {
                font-size: 2rem;
            }

            .product-description {
                font-size: 1.5rem;
            }

            .product-price {
                font-size: 2rem;
            }

        }

        button {
            margin: 1rem;
            font-family: Georgia, 'Times New Roman', Times, serif;
            padding: 2rem;
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

    }
    `;

    constructor() {
        super();
        this.data = {};
    }

    goBackToDashboard(){
        this.dispatchEvent(new CustomEvent('go-dashboard'));
    }

    render() {
        return html`
        <section class="product-detail">
            <img src="${this.data.imageUrl}" width="200" height="200">
            <div class="text-container">
                <h4 class="product-title">${this.data?.name ?? 'Unknown product'}</h4>
                <h4 class="product-description">${this.data?.description ?? 'No description'}</h4>                
                <h4 class="product-price">S/. ${this.data?.price ?? 'Pending'}</h4>                
                <button @click="${() => {this.goBackToDashboard()}}">Volver a dashboard</button>                            
            </div>
        </section>
        `;
    }

}
