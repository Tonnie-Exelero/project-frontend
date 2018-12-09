function MasterHomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.master_home', {
    url: '/master-home',
    controller: 'MasterHomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/master/home/home.html',
    title: 'Master'
  });

}

export default MasterHomeConfig;
