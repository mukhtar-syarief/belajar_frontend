import { baseURL } from "./baseAPI.js";

const getAllBreed = function () {
    const url = baseURL + '/breeds/list/all';
    var data;
    var promise = $.get(url, function (results) {
        return results
    });
    return promise
};

export { getAllBreed }