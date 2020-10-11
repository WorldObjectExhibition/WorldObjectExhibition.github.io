'use strict';

var util = require('util');

module.exports = {
  src: './img/staff-icon/*.{png,gif,jpg}',
  destImage: './img/staff-icons.png',
  destCSS: './css/staff-icons.css',
  imgPath: '/img/staff-icons.png',
  padding: 2,
  algorithm: 'top-down',
  algorithmOpts: { sort: false },
  cssOpts: {
    cssClass: function (item) {
      return util.format('.ic-%s', item.name);
    }
  }
};