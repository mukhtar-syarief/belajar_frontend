import { elementCreator } from "./elementCreate.js";
import { getImage, getSubImage } from "../api/dogBreedImage.js";
import { getSubBreed } from "./getSubBreed.js";

async function createCard(data, key) {

    var card = elementCreator('div', {
        'class': 'card content_card',
        'style': 'width: 18rem;'
    })
    
    var cardBody = elementCreator('div', {
        'class': 'card-body container d-flex flex-column justify-content-center'
    });

    var imgUrl;
    if (key) {
        imgUrl = await getSubImage(data, key);
    }
    else {
        imgUrl = await getImage(data)
    }

    var imgCard = elementCreator('img', {
        'src': `${imgUrl['message']}`,
        'alt': `${data}`
    })

    var cardTitle = elementCreator('h5', {
        'class': 'card-title text-center'
    }, `${data}`)

    var cardButton = elementCreator('button', {
        'class': 'btn btn-secondary',
        'key': `${data}`
    }, 'Lebih Banyak')

    cardButton.addEventListener('click', function () {
        var key = cardButton.getAttribute('key');
        getSubBreed(key);
    })

    cardBody.append(cardTitle, cardButton);
    card.append(imgCard, cardBody);

    return  card

}

export { createCard }