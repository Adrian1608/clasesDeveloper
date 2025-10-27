import { LitElement,html,css } from "lit";

export class AppRoot extends LitElement{

    static properties = {
    };

    constructor() {
        super();
    }

    render() {
        return html`
        <app-router></app-router>
        `;
    }

}