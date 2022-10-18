import abstrakView from "./abstrakView.js";

export default class extends abstrakView {

    constructor (params) {
        super(params);
        this.params = params;
    }

    async getHtml() {
        var container = document.createElement('div');
        container.setAttribute('class', 'container d-flex jsutify-content-center align-items-center');

        var notFound = document.createElement('h1');
        notFound.setAttribute('class', 'text-center w-100')
        notFound.textContent = 'Not Found'
        container.append(notFound)
        
        return container
    }
}