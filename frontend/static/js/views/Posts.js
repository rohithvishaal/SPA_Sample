import AbstractView  from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super()
        this.setTitile("Posts")
    }

    async getHtml(){
        return `
            <h1>Posts</h1>
            <p> You are viewing the Posts </p>
        `;
    }
}
