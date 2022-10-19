import breedView from "../views/breedView.js";
import notFound from "../views/notFound.js";
import { btnPagination } from "../components/pagination/pagination.js";
import subBreedView from "../views/subBreedView.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: '/404', view: notFound},
        { path: "/breed", view: breedView},
        { path: "/breed/:breedName", view: subBreedView},
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
        const view = new match.route.view(getParams(match));
        const notFound = await view.getHtml();
    
        document.querySelector("#app").innerHTML = "";
        document.querySelector("#app").append(notFound);
        return console.log('Gagal')
    }
    
    console.log(getParams(match))
    const view = new match.route.view(getParams(match));
    
    const cards = await view.getHtml();

    document.querySelector("#app").innerHTML = "";
    cards.forEach((card) => {
        document.querySelector('#app').append(card)
    });
    btnPagination(cards);
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        e.preventDefault();
        var className = Array.from(e.target.classList);
        for (let item of className) {
            if (item === 'sub_breed_link') {
                navigateTo(e.target.href);
            }
        }
    });
    router();
});