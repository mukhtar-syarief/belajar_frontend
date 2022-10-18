import { getAllBreed } from "../../apis/getAllBreed.js";
import { getImageBreed } from "../../apis/getImageBreed.js";
import { elementCreate } from "../elementCreate.js";
import breedButton from "../buttons/breedButton.js"


/**
 * 
 * @param {string} breedName 
 */
async function breedCard(breedName, subBreed){
    var card = elementCreate('div', {
        'class': 'card content_card',
        'style': 'width: 18rem;'
    });

    var cardBody = elementCreate('div', {
        'class': 'card-body container d-flex flex-column justify-content-center'
    });

    var imgBreed = await getImageBreed(breedName).then((results) => {
        return results['message']
    });

    var imgCard = elementCreate('img', {
        'src': `${imgBreed}`,
        'alt': `${breedName}`
    })

    var cardTitle = elementCreate('h5', {
        'class': 'card-title text-center'
    }, `${breedName}`)

    var cardButton = breedButton(breedName, subBreed)

    cardBody.append(cardTitle, cardButton);
    card.append(imgCard, cardBody);

    return card
}

async function cards() {
    const data = getAllBreed().then((results) => {
        return results['message']
    }).then(async (datas) => {
        var breedCards =[];
        for (let key in datas) {
            var card = await breedCard(key, datas[key]);
            breedCards.push(card)
        }
        return breedCards
    })

    return await data
}



export { cards }