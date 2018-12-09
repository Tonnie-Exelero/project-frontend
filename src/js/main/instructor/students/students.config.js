function InstructorStudentsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.instructor_students', {
    url: '/students',
    controller: 'InstructorStudentsCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'main/instructor/students/students.html',
    title: 'Students'
  });
}

export default InstructorStudentsConfig;
