/**
 * 路由配置
 */

var Router = function (router) {
  //   // 详细配置
  router.map({
    '*': {
      name: 'home',
      component: require('./nav.js')
    },
    home: {
      name: 'home',
      component: require('./nav.js')
    },
    about: {
      name: 'about',
      component: require('./about')
    }
  });
};
//
module.exports = Router;
