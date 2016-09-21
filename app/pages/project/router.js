import Ctrl from './index';
import $tpl from './index.html';

export default {
  url: '/project',
  templateProvider: $templateCache => $templateCache.get($tpl),
  controller: Ctrl,
  controllerAs: 'vm'
};
