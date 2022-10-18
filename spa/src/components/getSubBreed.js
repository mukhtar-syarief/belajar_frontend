import { SubBreed } from "../api/subBreed.js";
import { displaySubBreed } from "./displayBreed.js";

function getSubBreed(key){
    var data = SubBreed(key);
    data.then(function (value) {
        if (value['message'].length !== 0) {
            var cards = displaySubBreed(value, key);
            return cards
        }
    }).then(function (cards) {
        console.log(cards)
        
    }) 
}

export { getSubBreed }