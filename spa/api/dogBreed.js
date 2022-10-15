import { baseUrl } from "./stateAPI.js";
import { displayBreed } from "../components/displayBreed.js";

function loadCard(){
    $.get(baseUrl+'/breeds/list/all', function(results){
        return displayBreed(results)
    })
}

export { loadCard }