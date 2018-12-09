function InstructorHomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.instructor_home', {
    url: '/instructor-home',
    controller: 'InstructorHomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/instructor/home/home.html',
    title: 'Instructor'
  });

}

export default InstructorHomeConfig;
