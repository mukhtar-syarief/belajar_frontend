import { elementCreate } from "../elementCreate.js";

/**
 * 
 * @param {[string]} subBreed 
 */

export default function  breedButton (breedName, subBreed) {
    var btnLink = elementCreate('a', {
        'href': `/breed/${breedName}`,
        'class': 'sub_breed_link btn btn-secondary w-100'
    }, 'Lebih Banyak')

    if (subBreed.length == 0) {
        btnLink.classList.add('disabled')
        btnLink.classList.add('btn_off')
    }
    
    return btnLink
}