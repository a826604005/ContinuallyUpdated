angular.module('fellowdata.common', [])
  .controller('mainCtrl', require('./main').default)
  .controller('menuCtrl', require('./menu/index').default);
