function MasterDashboardConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.master_dashboard', {
    url: '/master-dashboard',
    controller: 'MasterDashboardCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/master/dashboard/dashboard.html',
    title: 'Master dashboard'
  });

};

export default MasterDashboardConfig;
