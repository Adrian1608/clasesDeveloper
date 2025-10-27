import { LitElement,html,css } from "lit";
import { Router } from "../routing/router";


export class HeaderComponent extends LitElement {

    static properties = {};

    static styles = css`
    *{
        margin: 0;
        padding: 0;
        border: none;
    }    

    :host {
        --font-color: #1d2d8b;        
        --button-color: #0077ff;
        --button-hover-color: #036ae0;
        --button-active-color: #0461ca;                        
    }

    header {

        display: flex;
        background-color: #ffff; 
        border-radius: 2rem; 
        margin: 1rem;      
        color: var(--font-color);

        .image-container {

            flex: 1;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            img {
                margin: 1rem 2rem;
                display: block;
                width: 100px;
                height: 29.92px;
            }

        }

        .log-out-container {

            flex: 1;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;            

            button {                
                display: flex;
                margin: 1rem 2rem;
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

        }

    }
    `;

    constructor(){
        super();
    }

    logOut(){
        sessionStorage.removeItem('loggedUser');        
        Router.navigate('login');
    }        

    render(){
        return html`
        <header>
            <div class="image-container">
                <img src="./resources/BBVA_2019.svg.png">
            </div>
            <div class="log-out-container">
                <button @click="${() => {this.logOut()}}">Log Out</button>        
            </div>
        </header>
        `;
    }

}