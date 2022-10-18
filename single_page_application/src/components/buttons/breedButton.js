import { elementCreate } from "../elementCreate.js";

/**
 * 
 * @param {[string]} subBreed 
 */

export default function  breedButton (breedName, subBreed) {
    var btnLink = elementCreate('a')

    var linkButton = elementCreate('button', {
        'class': 'btn btn-secondary w-100',
        'key': `${breedName}`
    }, 'Lebih Banyak')

    if (subBreed.length == 0) {
        console.log('tidak punya sub ras')
        linkButton.classList.add('disabled')
    }

    btnLink.append(linkButton);

    return btnLink
}