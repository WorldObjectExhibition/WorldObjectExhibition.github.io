'use strict';

var util = require('util');

module.exports = {
  src: './img/exhibitor-icon/*.{png,gif,jpg}',
  destImage: './img/exhibitor-icons.png',
  destCSS: './css/exhibitor-icons.css',
  imgPath: '/img/exhibitor-icons.png',
  padding: 2,
  algorithm: 'top-down',
  algorithmOpts: { sort: false },
  cssOpts: {
    cssClass: function (item) {
      return util.format('.i-%s', item.name);
    }
  }
};