import AbstractView  from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setTitile("Settings")
    }

    async getHtml(){
        return `
            <h1>Settings</h1>
            <p>Manage your Settings and Privacy</p>
        `;
    }
}
