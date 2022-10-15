import { baseUrl } from "./stateAPI.js";

function SubBreed(key) {
    var dataSubBreed = $.get(baseUrl+`/breed/${key}/list`, function (results) {
        return results
    })

    return dataSubBreed
}

export { SubBreed }