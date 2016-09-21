import Content from 'pages/common/content/router';
import Home from 'pages/home/router';
import Project from 'pages/project/router';
import News from 'pages/news/router';


export default($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('content', Content)
    .state('home', Home)
    .state('project', Project)
    .state('news', News);
};
