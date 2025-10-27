import { LitElement,html,css } from "lit";
import { Router } from '../../routing/router';

export class LoginComponent extends LitElement{

    static properties = {
        email: {
            type: String
        },
        password: {
            type: String
        }
    };

    static styles = css`
    *{
        margin: 0;
        padding: 0;
        border: none;
    }    

    :host {
        width: 100%;
        height: 100%;
        --background-color: #0c1f8b;
        --placeholder-color: #616ca3;
        --container-color: #ffff;
        --button-color: #dfd4d4;
        --button-hover-color: #cfc4c4;
        --button-active-color: #c2b5b5;                
    }

    section {
        width: 100%;
        height: 100vh;
        background-color: var(--background-color);
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    #login-container {
        display: flex;
        flex-direction: column;
        margin: auto 0;        
        padding: 2rem 3.5rem;
        border-radius: 2rem;        
        background-color: var(--container-color);
        justify-content: center;
        align-items: center;
        box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.5);
    }

    label {
        color: var(--background-color);
    }

    input {
        margin: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        border: 2px solid var(--background-color);        
        color: var(--background-color);        
        font-family: Georgia, 'Times New Roman', Times, serif;     
        
        &::-webkit-input-placeholder {
            -webkit-text-security: none;
            color: var(--placeholder-color);
        }        
    }

    button {
        border: 4px solid var(--background-color);
        padding: 1rem 2rem;
        margin: 1rem;
        border-radius: 2rem;
        color: var(--background-color);
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-weight: 600;
        background-color: var(--button-color);

        &:hover{
            background-color: var(--button-hover-color);
        }

        &:active{
            background-color: var(--button-active-color);
        }
    }

    img {
        width: 160px;
        height: 47.875px;
        margin: 2rem;
    }

    .error-message {
        display: none;
        margin: 0 auto;
        font-weight: 400;
        color: var(--background-color);
        font-size: 0.8rem; 
    }    
    `;

    constructor() {
        super();
        this.email = '';
        this.password = '';
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]+$/;        
    }

    _handleKeyDown(event){
        if(event.key === 'Enter'){
            this.validateCredentials();
        }
    }

    validateCredentials(){
        const email = this.renderRoot.querySelector('#email').value;
        const password = this.renderRoot.querySelector('#password').value;
        if(!this.emailRegex.test(email)){
            this.showErrorMessage('Correo no válido');
            return;
        }

        if(email === 'admin@gmail.com' && password === 'admin'){
            this.hideErrorMessage();
            sessionStorage.setItem('loggedUser', email);
            /*Se lanza un evento tipo navigate hacia dashboard*/
            Router.navigate('dashboard');
        }else{
            this.showErrorMessage('Usuario no válido');            
        }
    }

    showErrorMessage(message){
        const errorMessage = this.shadowRoot.querySelector('.error-message');                                
        errorMessage.innerHTML = message;            
        errorMessage.style.display = 'block';        
    }

    hideErrorMessage(){
        const errorMessage = this.shadowRoot.querySelector('.error-message');                                
        errorMessage.style.display = 'none';
        
    }    

    render() {
        return html`
        <section id="login-section">
            <div id="login-container">
                <img src="../resources/BBVA_2019.svg.png">
                <label for="email">Correo</label>
                <input id="email" type="email" placeholder="Escribir correo..." @keydown="${this._handleKeyDown}">
                <label for="password">Contraseña</label>                
                <input id="password" type="password" placeholder="Escribir contraseña..." @keydown="${this._handleKeyDown}">        
                <div class="error-message"></div>                
                <button @click="${() => this.validateCredentials()}">Iniciar sesión</button>
            </div>
        </section>
        `;
    }

}
