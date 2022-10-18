import abstrakView from "./abstrakView.js";
import { cards } from "../components/cards/breedCard.js";


export default class extends abstrakView{

    constructor (params) {
        super(params);
        this.setTitle('Breed')
    }

    async getHtml() {
        return await cards()
    }
}