/**
 * 
 * @param {string} elName 
 * @param {object} attrs 
 * @param {string} content 
 * @returns 
 */


export function elementCreate(elName, attrs, content) {
    var el = document.createElement(elName);

    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
    el.textContent = content;

    return el
}