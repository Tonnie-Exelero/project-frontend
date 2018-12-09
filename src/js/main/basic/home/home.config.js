function BasicHomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.basic_home', {
    url: '/basic-home',
    controller: 'BasicHomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/basic/home/home.html',
    title: 'Basic'
  });

};

export default BasicHomeConfig;
