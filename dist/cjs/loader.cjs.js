'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-46566502.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["simple-slider.cjs",[[1,"simple-slider",{"showStatus":[4,"show-status"],"currentSlideNumber":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
