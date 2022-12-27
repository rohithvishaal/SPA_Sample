import AbstractView  from "./AbstractView.js";

export default class extends AbstractView{
    constructor(params){
        super(params)
        this.setTitile("Viewing Post")
    }

    async getHtml(){
        console.log(this.params.id)
        return `
            <h1>you are Viewing Posts</h1>
            <p>
                Fugiat voluptate et nisi Lorem cillum anim sit do eiusmod occaecat irure do. Reprehenderit anim fugiat sint exercitation consequat. Sit anim laborum sit amet Lorem adipisicing ullamco duis. Anim in do magna ea pariatur et.
            </p>
        `;
    }
}
