import { elementCreate } from "../elementCreate.js";


/**
 * 
 * @param {number} pageNumber 
 */
export default function paginationBtn (pageNumber){
    var liBtn = elementCreate('li', {
        'class': 'page-item page',
        'href': '#'
    })

    var btnLink = elementCreate('a', {
        'class': 'page-link'
    }, `${pageNumber}`)

    liBtn.append(btnLink);

    return liBtn
}