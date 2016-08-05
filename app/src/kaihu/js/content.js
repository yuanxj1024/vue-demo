var Vue = window.Vue;
var tpl = require('../tpl/content.html');
// var t;
var Content = Vue.extend({
  template: tpl

});

Vue.component('main-content', Content);

module.exports = Content;
// t = new Vue({
//   el: '#contentId'
// });
// console.log('t', t);
