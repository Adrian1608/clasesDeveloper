import { LitElement,html,css } from "lit";

export class LoginPage extends LitElement{

    static properties = {

    };

    static styles = css`
    * {
        margin: 0;
        padding: 0;
        border: none;
    }

    :host {
        --background-color: #f56f6f;            
        --buttons-color: #e2dada;        
        --buttons-hover-color: #c2b9b9;                
        --buttons-active-color: #a79d9d;                        
        --error-color: #8999f5;        
        height: 100%;
        width: 100%;
    }

    .login-section {

        width: 15rem;
        background-color: var(--background-color);
        padding: 2rem;
        border-radius: 2rem;

        & .image-container {

            margin-bottom: 1rem;
            
            & #pokeballImage {
                display: block;
                margin: 0 auto;
                width: 50px;
                height: 50px;
            }

            & #logoImage {
                display: block;
                margin: 0 auto;
                width: 128.5px;
                height: 51.5px;                
            }

        }

        & .credentials-container {

            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            color: #ffff;

            & input {
                padding: 0.75rem 1rem;
                border-radius: 2rem;
                font-weight: 400;
                background-color: var(--buttons-color);                
            }

            & .error-message {
                display: none;
                margin: 0 auto;
                font-weight: 400;
            }
            
            & button {
                background-color: var(--buttons-color);
                margin: 1rem 0;
                padding: 1rem;
                border-radius: 2rem;
                font-weight: 600;   

                &:hover {
                    background-color: var(--buttons-hover-color);
                }

                &:active {
                    background-color: var(--buttons-active-color);
                }

            }

            & label {
                font-weight: 600;
            }

        }

    }
    `;

    constructor() {
        super();
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[a-z]+$/;
    }

    _handleKeyDown(event){
        if(event.key === 'Enter'){
            this.validateEmailAndPassword();
        }
    }

    validateEmailAndPassword(){
        const email = this.shadowRoot.querySelector('#email');
        if(!this.emailRegex.test(email.value)){
            this.showErrorMessage('Correo no válido');
            return;
        }
        const password = this.shadowRoot.querySelector('#password');

        if(email.value === 'eladrian1608@gmail.com' && password.value === 'contraDeAdmin'){
            this.hideErrorMessage();
            sessionStorage.setItem('user', email.value);
            window.open('../pages/main.html','_self');
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
        <section class="login-section">
            <div class="image-container">
                <img id="pokeballImage" src="../resources/Poké_Ball_icon.svg.png">
                <img id="logoImage" src="../resources/pokeapi_256.3fa72200.png">
            </div>
            <div class="credentials-container">
                <label for="email">Correo:</label>
                <input id="email" type="email" @keydown="${this._handleKeyDown}">
                <label for="password">Contraseña:</label>
                <input id="password" type="password" @keydown="${this._handleKeyDown}">
                <div class="error-message"></div>
                <button @click="${() => this.validateEmailAndPassword()}">Entrar</button>        
            </div>
        </section>
        `
    };

}