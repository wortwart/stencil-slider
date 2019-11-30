import { a as patchEsm, b as bootstrapLazy } from './core-822883bd.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["simple-slider", [[1, "simple-slider", { "showStatus": [4, "show-status"], "currentSlideNumber": [32] }]]]], options);
    });
};
export { defineCustomElements };
