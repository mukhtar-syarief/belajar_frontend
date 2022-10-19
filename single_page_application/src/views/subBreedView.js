import abstrakView from "./abstrakView.js";
import { subBreedCards } from "../components/cards/subBreedCard.js";

export default class extends abstrakView {
    
    constructor (params) {
        super(params);
        this.params = params;
    }

    async getHtml () {
        return subBreedCards(this.params.breedName)
    }
}
