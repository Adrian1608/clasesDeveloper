import { html, LitElement } from "lit";
import { ROUTES } from "./routes";

export class AppRouter extends LitElement {

    static properties = {
        currentView: {
            type: String
        }
    }

    constructor() {
        super();
        this.currentView = 'login';
    }

    connectedCallback() {
        super.connectedCallback();
        //Esto es en caso el localStorage ya tenga registrado el inicio de sesión
        if (sessionStorage.getItem('loggedUser')) this.currentView = 'dashboard';

        window.addEventListener('navigate', (e) =>{
            /*Escucha el evento lanzado por login y procede a actualizar la property que re-renderiza*/
            console.log(e);
            this.currentView = e.detail.view;
        })
    };

    render() {
        const view = ROUTES[this.currentView] ?? ROUTES['login'];
        return html`${ view }`;
    };
}