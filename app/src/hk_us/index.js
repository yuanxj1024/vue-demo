var Vue = window.Vue;
var App;
var VueRouter = require('vue-router');
var routerConfig = require('./js/router.js');
var router;

require('./style.scss');

Vue.use(VueRouter);

router = new VueRouter({
  // hashbang: true,
  // history: true,
  saveScrollPosition: true
});

routerConfig(router);

App = Vue.extend({
  components: {},
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
  ready: function () {}
});


router.start(App, 'body');
console.log(App);
