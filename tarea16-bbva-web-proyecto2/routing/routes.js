import {html} from "lit";

/*Se definen las rutas a las que se podrá acceder (con formato Lit)*/
export const ROUTES = {
    'login': html`<login-component></login-component>`,
    'dashboard': html`<dashboard-component></dashboard-component>`,
    'dashboard-detail': html`<dashboard-detail-component></dashboard-detail-component>`
};