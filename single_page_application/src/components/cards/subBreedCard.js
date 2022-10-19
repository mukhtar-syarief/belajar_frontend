import getSubBreed from "../../apis/getSubBreed.js";
import getSubBreedImage from "../../apis/getSubBreedImage.js";
import { elementCreate } from "../elementCreate.js";
import breedButton from "../buttons/breedButton.js"


/**
 * 
 * @param {string} breedName 
 */
async function subBreedCard(breedName, subBreedName){
    var card = elementCreate('div', {
        'class': 'card content_card',
        'style': 'width: 18rem;'
    });

    var cardBody = elementCreate('div', {
        'class': 'card-body container d-flex flex-column justify-content-center'
    });

    var imgSubBreed = await getSubBreedImage(breedName, subBreedName).then((results) => {
        return results['message']
    });

    var imgCard = elementCreate('img', {
        'src': `${imgSubBreed}`,
        'alt': `${subBreedName}`
    })

    var cardTitle = elementCreate('h5', {
        'class': 'card-title text-center'
    }, `${subBreedName}`)

    cardBody.append(cardTitle);
    card.append(imgCard, cardBody);

    return card
}


/**
 * 
 * @param {string} breedName 
 * @returns {Array.<HTMLElement>}
 */
async function subBreedCards(breedName) {
    const data = getSubBreed(breedName).then((results) => {
        return results['message']
    }).then(async (datas) => {
        var breedCards =[];
        for (let key in datas) {
            var card = subBreedCard(breedName, datas[key]);
            breedCards.push(card)
        }
        return Promise.all(breedCards)
    })

    return await data
}



export { subBreedCards }