import Router from 'bootstrap/router';

import 'pages/common/index';

angular
  .module('continuallyupdated',[
    'ui.router',
    'fellowdata.common'
  ])
  .config(Router);