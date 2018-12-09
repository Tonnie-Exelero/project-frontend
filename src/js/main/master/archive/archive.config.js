function MasterArchiveConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.master_archive', {
    url: '/master-archive',
    controller: 'MasterArchiveCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/master/archive/archive.html',
    title: 'Master archive'
  });

};

export default MasterArchiveConfig;
