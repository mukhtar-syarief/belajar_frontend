import breedView from "../views/breedView.js";
import notFound from "../views/notFound.js";

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
        // { path: "/subbreed", view: () => console.log('View Sub Breed') },
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
        console.log(notFound)
    
        document.querySelector("#app").innerHTML = "";
        document.querySelector("#app").append(notFound);
        return console.log('Gagal')
    }

    const view = new match.route.view(getParams(match));

    const cards = await view.getHtml();

    document.querySelector("#app").innerHTML = "";
    cards.forEach((card) => {
        document.querySelector('#app').append(card)
    });
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    // document.body.addEventListener('click', e => {
    //     if (e.target.matches("[page]")) {
    //         e.preventDefault();
    //         navigateTo(e.target.href);
    //     }
    // });
    router();
});