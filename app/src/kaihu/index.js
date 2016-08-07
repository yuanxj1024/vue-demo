var a = require('./style.scss');
var tip = require('vux-components/alert');
var group = require('vux-components/group');
var Switch = require('vux-components/switch');
var Vue = window.Vue;
var v;
var content = require('./js/content.js');
console.log(content);

v = new Vue({
  components: {
    alert: tip,
    group: group,
    Switch: Switch,
    mainContent: content
  },
  el: '#content',
  data: {
    show: false,
    title: 'test'
  },
  methods: {
    test: function () {
      console.log(this.title);
    }
  },
  ready: function () {
    // console.log('main ready');
  }
});
console.log(a, v);
