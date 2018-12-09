function MasterInstructorConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.master_instructor', {
    url: '/master-instructor/:name',
    controller: 'MasterInstructorCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/master/instructor/instructor.html',
    title: 'Master instructor',
      resolve: {
          instructor: function(MasterHome, $state, $stateParams) {
              return MasterHome.getSingleInstructor($stateParams.name).then(
                  (instructor) => instructor,
                  (err) => $state.go('app.master_home')
              )
          }
      }
  });
}

export default MasterInstructorConfig;
