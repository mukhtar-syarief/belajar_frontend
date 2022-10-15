import { createCard } from "./breedCard.js";


function displayBreed(results) {
    for (let result in results['message']) {
        let card = createCard(result);
        card.then(function(value) {
            document.querySelector('.main').appendChild(value);
        });
    };
}

function displaySubBreed (results, key) {
    var cards = []
    for (let result in results['message']) {
        let card = createCard(results['message'][result], key);
        card.then(function(value) {
            cards.push(value)
        });
    };

    return cards
}

export { displayBreed, displaySubBreed}