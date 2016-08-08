var Vue = window.Vue;
var tpl = require('../tpl/content.html');
// var t;
var Content = Vue.extend({
  template: tpl,
  data: function () {
    return {
      name: 'aaron'
    };
  },
  methods: {
    sayHi: function () {
      console.log('content:', this.name);

      this.getMegList();
    },
    getMegList: function () {
      console.log('getMegList');
    }
  }
});

module.exports = Content;
