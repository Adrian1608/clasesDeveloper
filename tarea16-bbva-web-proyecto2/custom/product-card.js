import { LitElement,html,css } from "lit";

export class ProductCardComponent extends LitElement {

    static properties = {
        product: {
            type: Object
        }
    };

    static styles = css`
    *{
        margin: 0;
        padding: 0;
        border: none;
    }

    :host{
        --cards-font-color: #121c55;
        --button-color: #0077ff;
        --button-hover-color: #036ae0;
        --button-active-color: #0461ca;                
    }

    .card-container {
        background: #ffff;
        width: 12rem;
        height: 12rem;
        padding: 1rem;
        border-radius: 2rem;
        position: relative;        
    }

    .card-inner {

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        color: var(--cards-font-color);
        font-size: 1.25rem;

        img {
            display: block;
            margin: 0 auto;
        }

        h4 {
            text-align: center;
        }

        button {
            margin: 1rem;
            font-family: Georgia, 'Times New Roman', Times, serif;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            background-color: var(--button-color);
            font-weight: 600;
            color: #ffff;
            position: absolute;
            bottom: 0%;

            &:hover {
                background-color: var(--button-hover-color);
            }
            
            &:active{
                background-color: var(--button-active-color);
            }
        }
    }
    `;

    constructor(){
        super();
        this.product = {};
    }

    goToDetail(){
        this.dispatchEvent(new CustomEvent('product-selected', {
            detail: this.product,
            bubbles: true,
            composed: true
        }));
    }

    render(){
        return html`
        <div class="card-container">
            <div class="card-inner">
                <img src="${this.product.imageUrl}" width="100" height="100">
                <h4>${this.product?.name ?? 'Unknown product'}</h4>
                <button @click="${() => {this.goToDetail()}}">Conoce más</button>                
            </div>
        </div>
        `;
    }

}