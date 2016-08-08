var Vue = window.Vue;

var tpl = require('../tpl/nav.html');

var Nav = Vue.extend({
  template: tpl,
  data: function () {
    return {
      list: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5']
    };
  },
  events: {
    'menu-click': function (e) {
      console.log('click', e);
    }
  },
  methods: {
    getMenuList: function () {
      console.log('get Menu List');
    }
  }
});

module.exports = Nav;
